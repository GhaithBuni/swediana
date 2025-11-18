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
  totals: {
    base: number;
    extras: number;
    subtotal: number;
    discount: number;
    grandTotal: number;
  };
};

// Add discount type
export type DiscountInfo = {
  code: string;
  amount: number;
  type: "percentage" | "fixed";
  value: number;
};

function computePriceDetails(args: {
  base: number;
  size: number;
  extras: CleaningExtras;
  table: PriceTable[];
  discount?: DiscountInfo;
}): PriceDetails {
  const { base, size, extras, table, discount } = args;
  const t = table?.[0] ?? {};

  const baseAmount = Math.round(base);

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
    { key: "base", label: "Byggstäd", amount: baseAmount },
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

  const subtotal = baseAmount + extrasSum;
  const discountAmount = discount?.amount || 0;

  // Add discount line if applicable
  if (discount && discountAmount > 0) {
    lines.push({
      key: "discount",
      label: `Rabattkod (${discount.code})`,
      amount: -discountAmount,
      meta: discount.type === "percentage" ? `${discount.value}%` : undefined,
    });
  }

  const grandTotal = Math.max(0, subtotal - discountAmount);

  return {
    lines,
    totals: {
      base: baseAmount,
      extras: extrasSum,
      subtotal,
      discount: discountAmount,
      grandTotal,
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
  basePrice: number;
  extrasTable: PriceTable[];

  // derived
  priceDetails: PriceDetails;

  // Discount state
  discountCode: string;
  appliedDiscount: DiscountInfo | null;
  discountError: string | null;
  isValidatingDiscount: boolean;

  // actions
  setAddress: (patch: Partial<Address>) => void;
  setSize: (n: number) => void;
  setExtras: (patch: CleaningExtras) => void;

  // Discount actions
  setDiscountCode: (code: string) => void;
  validateAndApplyDiscount: (apiBase: string) => Promise<void>;
  removeDiscount: () => void;
  postPhoneNumber: (phone: string, apiBase: string) => Promise<void>;

  fetchCleaningPrices: (apiBase: string) => Promise<void>;
  postByggCleaningBooking: (
    apiBase: string,
    customer: {
      name: string;
      email: string;
      phone?: string;
      personalNumber?: string;
      message?: string;
      date: string;
      addressStreet: string;
      cleanType?: "typical" | "inspection";
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
  | "setDiscountCode"
  | "validateAndApplyDiscount"
  | "removeDiscount"
  | "fetchCleaningPrices"
  | "postByggCleaningBooking"
  | "postPhoneNumber"
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
    size: 0,
    extras: {},
    basePrice: 0,
    extrasTable: [],
    priceDetails: {
      lines: [],
      totals: { base: 0, extras: 0, subtotal: 0, discount: 0, grandTotal: 0 },
    },
    discountCode: "",
    appliedDiscount: null,
    discountError: null,
    isValidatingDiscount: false,
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
            discount: next.appliedDiscount || undefined,
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
            discount: next.appliedDiscount || undefined,
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
            discount: next.appliedDiscount || undefined,
          });
          return next;
        }),

      setDiscountCode: (code) =>
        set({ discountCode: code, discountError: null }),

      validateAndApplyDiscount: async (apiBase) => {
        const s = get();
        const code = s.discountCode.trim();

        if (!code) {
          set({ discountError: "Ange en rabattkod" });
          return;
        }

        set({ isValidatingDiscount: true, discountError: null });

        try {
          const subtotal = s.basePrice;

          const res = await fetch(`${apiBase}/discount/validate-discount`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              code,
              amount: subtotal,
              service: "cleaning",
            }),
          });

          const result = await res.json();

          if (!res.ok || !result.valid) {
            set({
              discountError: result.error || "Ogiltig rabattkod",
              isValidatingDiscount: false,
            });
            return;
          }

          const discountInfo: DiscountInfo = {
            code: code.toUpperCase(),
            amount: result.discountAmount,
            type: result.discountType,
            value: result.discountValue,
          };

          set((curr) => {
            const next = {
              ...curr,
              appliedDiscount: discountInfo,
              discountError: null,
              isValidatingDiscount: false,
            };
            next.priceDetails = computePriceDetails({
              base: next.basePrice,
              size: next.size,
              extras: next.extras,
              table: next.extrasTable,
              discount: discountInfo,
            });
            return next;
          });
        } catch (error: any) {
          set({
            discountError: error.message || "Något gick fel",
            isValidatingDiscount: false,
          });
        }
      },

      removeDiscount: () =>
        set((s) => {
          const next = {
            ...s,
            discountCode: "",
            appliedDiscount: null,
            discountError: null,
          };
          next.priceDetails = computePriceDetails({
            base: next.basePrice,
            size: next.size,
            extras: next.extras,
            table: next.extrasTable,
            discount: undefined,
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
            discount: next.appliedDiscount || undefined,
          });
          return next;
        });
      },

      postPhoneNumber: async (phone, apiBase) => {
        const res = await fetch(`${apiBase}/phone`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, service: "Byggstädning" }),
        });
        if (!res.ok) {
          console.log(phone);
          const json = await res.json().catch(() => ({}));
          const msg =
            json?.message || json?.error || res.statusText || "Request failed";
          throw new Error(msg);
        }
      },

      postByggCleaningBooking: async (apiBase, customer) => {
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
          cleanType: customer.cleanType,
          addressStreet: customer.addressStreet,

          // Include discount code if applied
          discountCode: s.appliedDiscount?.code || undefined,

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
        set(fresh as any, true);
      },
    }),
    { name: "bygg-store" }
  )
);
