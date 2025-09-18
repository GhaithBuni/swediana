"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

type YesNo = "JA" | "NEJ";
type HomeType = "lagenhet" | "Hus" | "forrad" | "kontor";
type Floor = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+";
type Access = "stairs" | "elevator" | "large-elevator";

export type Address = {
  homeType: HomeType;
  floor: Floor;
  access: Access;
  distance: number;
  postcode?: string;
};

type PriceTable = Record<string, number>;

export type CleaningExtras = {
  Persienner?: number; // quantity
  badrum?: YesNo;
  toalett?: YesNo;
  Inglasadduschhörna?: YesNo;
};

export type PriceDetails = {
  lines: Array<{ key: string; label: string; amount: number; meta?: string }>;
  totals: { base: number; extras: number; grandTotal: number };
};

function computePriceDetails(args: {
  base: number;
  size: number; // if base is per m², multiply here
  extras: CleaningExtras;
  table: PriceTable[]; // first element with keys
}): PriceDetails {
  const { base, size, extras, table } = args;
  const t = table?.[0] ?? {};

  // If your base is per m², do: const baseAmount = Math.round(base * size);
  const baseAmount = Math.round(base); // adjust if base is per KVM

  const LABELS: Record<string, string> = {
    Persienner: "Persienner",
    badrum: "Extra Badrum",
    toalett: "Extra Toalett",
    Inglasadduschhörna: "Inglasad Duschhörna",
  };

  // API keys mapping (match your backend fields)
  const KEY_MAP: Record<string, string> = {
    Persienner: "Persinner",
    badrum: "ExtraBadrum",
    toalett: "ExtraToalett",
    Inglasadduschhörna: "inglassadDusch",
  };

  const lines: PriceDetails["lines"] = [
    { key: "base", label: "Flyttstäd", amount: baseAmount },
  ];
  let extrasSum = 0;

  Object.entries(extras || {}).forEach(([k, v]) => {
    const apiKey = KEY_MAP[k] ?? k;
    const unit = Number(t[apiKey] ?? 0);
    if (k === "Persienner") {
      const qty = Number(v || 0);
      if (qty > 0) {
        const amt = unit * qty;
        extrasSum += amt;
        lines.push({
          key: k,
          label: LABELS[k] ?? k,
          amount: amt,
          meta: `${qty} × ${unit} kr`,
        });
      }
    } else {
      if (v === "JA") {
        extrasSum += unit;
        lines.push({ key: k, label: LABELS[k] ?? k, amount: unit });
      }
    }
  });

  return {
    lines,
    totals: {
      base: baseAmount,
      extras: extrasSum,
      grandTotal: baseAmount + extrasSum,
    },
  };
}

type CleaningState = {
  // inputs
  address: Address;
  size: number;

  // selections
  extras: CleaningExtras;

  // prices
  basePrice: number; // from /prices/cleaning
  extrasTable: PriceTable[]; // from /prices/cleaning

  // derived
  priceDetails: PriceDetails;

  // actions
  setAddress: (patch: Partial<Address>) => void;
  setSize: (n: number) => void;
  setExtras: (patch: CleaningExtras) => void;

  fetchCleaningPrices: (apiBase: string) => Promise<void>;
  postCleaningBooking: (
    apiBase: string,
    customer: {
      name: string;
      email: string;
      phone?: string;
      personalNumber?: string;
      message?: string;
      date: string;
    }
  ) => Promise<any>;

  resetCleaning: () => void;
  resetToken: number;
};

function makeInitialState(): Omit<
  CleaningState,
  | "setAddress"
  | "setSize"
  | "setExtras"
  | "fetchCleaningPrices"
  | "postCleaningBooking"
  | "resetCleaning"
> {
  return {
    address: {
      homeType: "lagenhet",
      floor: "1",
      access: "stairs",
      distance: 10,
      postcode: "",
    },
    size: 1,
    extras: {},
    basePrice: 0,
    extrasTable: [],
    priceDetails: { lines: [], totals: { base: 0, extras: 0, grandTotal: 0 } },
    resetToken: 0,
  };
}

export const useCleaningStore = create<CleaningState>()(
  devtools(
    (set, get) => ({
      ...makeInitialState(),

      setAddress: (patch) =>
        set((s) => {
          const next = { ...s, address: { ...s.address, ...patch } };
          next.priceDetails = computePriceDetails({
            base: next.basePrice,
            size: next.size,
            extras: next.extras,
            table: next.extrasTable,
          });
          return next;
        }),

      setSize: (n) =>
        set((s) => {
          const next = { ...s, size: Number(n) || 1 };
          next.priceDetails = computePriceDetails({
            base: next.basePrice,
            size: next.size,
            extras: next.extras,
            table: next.extrasTable,
          });
          return next;
        }),

      setExtras: (patch) =>
        set((s) => {
          const next = { ...s, extras: { ...s.extras, ...patch } };
          next.priceDetails = computePriceDetails({
            base: next.basePrice,
            size: next.size,
            extras: next.extras,
            table: next.extrasTable,
          });
          return next;
        }),

      fetchCleaningPrices: async (apiBase) => {
        const s = get();
        const res = await fetch(`${apiBase}/prices/cleaning`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ size: s.size }),
        });
        const result = await res.json();

        set((curr) => {
          const next = {
            ...curr,
            basePrice: result?.data?.cleaningPrice ?? 0,
            extrasTable: result?.data?.extraServices ?? [],
          };
          next.priceDetails = computePriceDetails({
            base: next.basePrice,
            size: next.size,
            extras: next.extras,
            table: next.extrasTable,
          });
          return next;
        });
      },

      postCleaningBooking: async (apiBase, customer) => {
        const s = get();
        const body = {
          size: s.size,
          // single address for cleaning
          addressPostnummer: s.address.postcode,
          addressHomeType: s.address.homeType,
          addressFloor: s.address.floor,
          addressAccess: s.address.access,
          addressParkingDistance: s.address.distance,

          // extras
          Persienner: s.extras.Persienner ?? 0,
          badrum: s.extras.badrum ?? "NEJ",
          toalett: s.extras.toalett ?? "NEJ",
          Inglasadduschhörna: s.extras.Inglasadduschhörna ?? "NEJ",

          // customer
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          personalNumber: customer.personalNumber,
          message: customer.message,
          date: customer.date,

          // snapshot
          priceDetails: s.priceDetails,
        };

        const res = await fetch(`${apiBase}/bygg`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          const msg =
            json?.message || json?.error || res.statusText || "Request failed";
          throw new Error(msg);
        }
        return json;
      },

      resetCleaning: () => {
        const fresh = makeInitialState();
        fresh.resetToken = Math.floor(Math.random() * 1e9);
        set(fresh as any, true); // REPLACE state
        // Optional: also clear persisted storage
        // @ts-ignore
        // useCleaningStore.persist?.clearStorage?.();
      },
    }),
    { name: "bygg-store" }
  )
);
