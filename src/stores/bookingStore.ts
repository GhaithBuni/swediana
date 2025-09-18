"use client";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

/* ----------------------------- Types ----------------------------- */

type YesNo = "JA" | "NEJ";
type HomeType = "lagenhet" | "Hus" | "forrad" | "kontor";
type Floor = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+";
type Access = "stairs" | "elevator" | "large-elevator";

export type Address = {
  homeType: HomeType;
  floor: Floor;
  access: Access;
  distance: number; // meters
  postcode?: string;
};

export type MovingExtra = Partial<
  Record<"packa" | "packaKitchen" | "montera" | "flyttstad", YesNo>
>;
export type CleaningExtra = Record<string, YesNo | number>;

type PriceTable = Record<string, number>;

export type PriceDetails = {
  lines: Array<{ key: string; label: string; amount: number; meta?: string }>;
  totals: {
    movingBase: number;
    movingExtras: number;
    cleaningBaseAfterDiscount: number;
    cleaningExtras: number;
    grandTotal: number;
  };
};

/* ------------------- Price calculation (pure) -------------------- */

function computePriceDetails(args: {
  movingPrice: number;
  sizeValue: number;
  extra: MovingExtra;
  extraService: PriceTable[];
  cleaningPrice: number;
  cleaningExtra: CleaningExtra;
  cleaningService: PriceTable[];
}): PriceDetails {
  const {
    movingPrice,
    sizeValue,
    extra,
    extraService,
    cleaningPrice,
    cleaningExtra,
    cleaningService,
  } = args;

  const movingTable = extraService?.[0] ?? {};
  const cleaningTable = cleaningService?.[0] ?? {};

  const MOVING_KEY_MAP: Record<string, string> = {
    packa: "packagingAllRooms",
    packaKitchen: "packagingKitchen",
    montera: "mounting",
  };
  const MOVING_LABELS: Record<string, string> = {
    packa: "Packning (alla rum)",
    packaKitchen: "Packning (Bara Kök)",
    montera: "Montering",
    flyttstad: "Flyttstäd",
  };

  const CLEANING_KEY_MAP: Record<string, string> = {
    Persienner: "Persinner",
    badrum: "ExtraBadrum",
    toalett: "ExtraToalett",
    Inglasadduschhörna: "inglassadDusch",
  };
  const CLEANING_LABELS: Record<string, string> = {
    Persienner: "Persienner",
    badrum: "Extra Badrum",
    toalett: "Extra Toalett",
    Inglasadduschhörna: "Inglasad Duschhörna",
  };

  const lines: PriceDetails["lines"] = [];
  let movingExtras = 0;
  let cleaningBaseAfterDiscount = 0;
  let cleaningExtras = 0;

  // Base moving
  lines.push({ key: "movingBase", label: "Flytthjälp", amount: movingPrice });

  // Moving extras (per KVM), excluding cleaning toggle
  Object.entries(extra || {}).forEach(([k, v]) => {
    if (v !== "JA" || k === "flyttstad") return;
    const apiKey = MOVING_KEY_MAP[k] ?? k;
    const unit = movingTable[apiKey] ?? 0;
    const amount = unit * (Number(sizeValue) || 0);
    movingExtras += amount;
    lines.push({ key: k, label: MOVING_LABELS[k] ?? k, amount });
  });

  // Cleaning
  const cleaningSelected = extra?.flyttstad === "JA";
  if (cleaningSelected) {
    const rawCleaning = Number(cleaningPrice) || 0;
    const discounted = Math.round(rawCleaning * 0.85); // 15% rabatt
    cleaningBaseAfterDiscount = discounted;

    lines.push({
      key: "cleaningBase",
      label: `${MOVING_LABELS["flyttstad"]} (15% rabatt)`,
      amount: discounted,
      meta: `~ ${rawCleaning} kr`,
    });

    // Cleaning extras: some fixed, some quantity
    Object.entries(cleaningExtra || {}).forEach(([k, v]) => {
      const apiKey = CLEANING_KEY_MAP[k] ?? k;
      const unit = Number(cleaningTable[apiKey] ?? 0);

      if (typeof v === "number" && v > 0) {
        const amt = unit * v;
        cleaningExtras += amt;
        lines.push({
          key: `clean-${k}`,
          label: CLEANING_LABELS[k] ?? k,
          amount: amt,
          meta: `${v} × ${unit} kr`,
        });
      } else if (v === "JA") {
        cleaningExtras += unit;
        lines.push({
          key: `clean-${k}`,
          label: CLEANING_LABELS[k] ?? k,
          amount: unit,
        });
      }
    });
  }

  return {
    lines,
    totals: {
      movingBase: movingPrice,
      movingExtras,
      cleaningBaseAfterDiscount,
      cleaningExtras,
      grandTotal:
        movingPrice + movingExtras + cleaningBaseAfterDiscount + cleaningExtras,
    },
  };
}

/* ------------------------------ Store ----------------------------- */

type BookingState = {
  // inputs
  from: Address;
  to: Address;
  sizeValue: number;

  // selections
  extra: MovingExtra;
  cleaningExtra: CleaningExtra;

  // prices & tables
  movingPrice: number;
  extraService: PriceTable[];
  cleaningPrice: number;
  cleaningService: PriceTable[];

  // derived
  priceDetails: PriceDetails;

  // actions
  setFrom: (patch: Partial<Address>) => void;
  setTo: (patch: Partial<Address>) => void;
  setSize: (n: number) => void;
  setExtra: (patch: MovingExtra) => void;
  setCleaningExtra: (patch: CleaningExtra) => void;

  fetchPrices: (apiBase: string) => Promise<void>;
  postBooking: (
    apiBase: string,
    customer: {
      name: string;
      email: string;
      phone?: string;
      pnr?: string;
      keys?: string;
      message?: string;
      date?: string;
    }
  ) => Promise<any>;

  resetBooking: () => void;
};

// default/initial state in one place so reset() is easy
const initialState = {
  from: {
    homeType: "lagenhet" as HomeType,
    floor: "1" as Floor,
    access: "stairs" as Access,
    distance: 10,
    postcode: "",
  },
  to: {
    homeType: "lagenhet" as HomeType,
    floor: "1" as Floor,
    access: "stairs" as Access,
    distance: 10,
    postcode: "",
  },
  sizeValue: 0,
  extra: {} as MovingExtra,
  cleaningExtra: {} as CleaningExtra,
  movingPrice: 0,
  extraService: [] as PriceTable[],
  cleaningPrice: 0,
  cleaningService: [] as PriceTable[],
  priceDetails: {
    lines: [],
    totals: {
      movingBase: 0,
      movingExtras: 0,
      cleaningBaseAfterDiscount: 0,
      cleaningExtras: 0,
      grandTotal: 0,
    },
  } as PriceDetails,
};

export const useBookingStore = create<BookingState>()(
  devtools(
    (set, get) => ({
      ...initialState,

      /* ---------- mutations recompute totals ---------- */
      setFrom: (patch) =>
        set((s) => {
          const next = { ...s, from: { ...s.from, ...patch } };
          next.priceDetails = computePriceDetails({
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
          });
          return next;
        }),

      setTo: (patch) =>
        set((s) => {
          const next = { ...s, to: { ...s.to, ...patch } };
          next.priceDetails = computePriceDetails({
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
          });
          return next;
        }),

      setSize: (n) =>
        set((s) => {
          const next = { ...s, sizeValue: Number(n) || 1 };
          next.priceDetails = computePriceDetails({
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
          });
          return next;
        }),

      setExtra: (patch) =>
        set((s) => {
          const next = { ...s, extra: { ...s.extra, ...patch } };
          next.priceDetails = computePriceDetails({
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
          });
          return next;
        }),

      setCleaningExtra: (patch) =>
        set((s) => {
          const next = {
            ...s,
            cleaningExtra: { ...s.cleaningExtra, ...patch },
          };
          next.priceDetails = computePriceDetails({
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
          });
          return next;
        }),

      /* -------------- API: prices & booking -------------- */
      fetchPrices: async (apiBase: string) => {
        const s = get();
        const res = await fetch(`${apiBase}/prices`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            size: s.sizeValue,
            postNummer: s.from.postcode,
            postNummerTo: s.to.postcode,
          }),
        });

        const result = await res.json().catch(() => ({} as any));
        set((curr) => {
          const next = {
            ...curr,
            movingPrice: result?.data?.movingPrice ?? 0,
            extraService: result?.data?.extraServices ?? [],
            cleaningPrice: result?.data?.cleaningPrice ?? 0,
            cleaningService: result?.data?.extraServicesCleaning ?? [],
          };
          next.priceDetails = computePriceDetails({
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
          });
          return next;
        });
      },

      postBooking: async (apiBase, customer) => {
        const s = get();

        const body = {
          size: s.sizeValue,

          // From
          fromPostnummer: s.from.postcode,
          fromHomeType: s.from.homeType,
          fromFloor: s.from.floor,
          fromAccess: s.from.access,
          fromParkingDistance: s.from.distance,

          // To
          toPostnummer: s.to.postcode,
          toHomeType: s.to.homeType,
          toFloor: s.to.floor,
          toAccess: s.to.access,
          toParkingDistance: s.to.distance,

          // Moving extras
          packa: s.extra.packa,
          packaKitchen: s.extra.packaKitchen,
          montera: s.extra.montera,
          flyttstad: s.extra.flyttstad,

          // Customer
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          personalNumber: customer.pnr,
          apartmentKeys: customer.keys,
          whatToMove: undefined, // hook your "moveType" if needed
          message: customer.message,
          date: customer.date,

          // Price snapshot
          priceDetails: s.priceDetails,
        };

        const res = await fetch(`${apiBase}/moving`, {
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
        return json; // { success: true, data: ... }
      },

      /* ----------------------- Reset ----------------------- */
      resetBooking: () => set(() => ({ ...initialState })),
    }),
    {
      name: "booking-store",
      // If you don't want everything to persist across refresh,
      // you can limit what is saved:
      // partialize: (s) => ({ from: s.from, to: s.to }) // example
    }
  )
);
