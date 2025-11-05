"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

/* ----------------------------- Types ----------------------------- */

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

/* ------------------- Price calculation (pure) -------------------- */

function computePriceDetails(args: {
  movingPrice: number;
  sizeValue: number;
  extra: MovingExtra;
  extraService: PriceTable[];
  cleaningPrice: number;
  cleaningExtra: CleaningExtra;
  cleaningService: PriceTable[];
  discount?: DiscountInfo;
}): PriceDetails {
  const {
    movingPrice,
    sizeValue,
    extra,
    extraService,
    cleaningPrice,
    cleaningExtra,
    cleaningService,
    discount,
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

  // Calculate subtotal before discount
  const subtotal =
    movingPrice + movingExtras + cleaningBaseAfterDiscount + cleaningExtras;
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
      movingBase: movingPrice,
      movingExtras,
      cleaningBaseAfterDiscount,
      cleaningExtras,
      subtotal,
      discount: discountAmount,
      grandTotal,
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

  // discount state
  discountCode: string;
  appliedDiscount: DiscountInfo | null;
  discountError: string | null;
  isValidatingDiscount: boolean;

  // derived
  priceDetails: PriceDetails;

  // actions
  setFrom: (patch: Partial<Address>) => void;
  setTo: (patch: Partial<Address>) => void;
  setSize: (n: number) => void;
  setExtra: (patch: MovingExtra) => void;
  setCleaningExtra: (patch: CleaningExtra) => void;

  // discount actions
  setDiscountCode: (code: string) => void;
  validateAndApplyDiscount: (apiBase: string) => Promise<void>;
  removeDiscount: () => void;

  fetchPrices: (apiBase: string) => Promise<void>;
  postBooking: (
    apiBase: string,
    customer: {
      name: string;
      email: string;
      phone?: string;
      pnr?: string;
      keys?: "Jag ska lämna nycklarna til er" | "Jag ska vara hemma";
      message?: string;
      addressStreet: string;
      date?: string;
      moveType?: "typical" | "inspection";
    }
  ) => Promise<any>;

  resetBooking: () => void;
  resetToken: number;
};

// default/initial state
function makeInitialState(): Omit<
  BookingState,
  | "setFrom"
  | "setTo"
  | "setSize"
  | "setExtra"
  | "setCleaningExtra"
  | "setDiscountCode"
  | "validateAndApplyDiscount"
  | "removeDiscount"
  | "fetchPrices"
  | "postBooking"
  | "resetBooking"
> {
  return {
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
    discountCode: "",
    appliedDiscount: null,
    discountError: null,
    isValidatingDiscount: false,
    priceDetails: {
      lines: [],
      totals: {
        movingBase: 0,
        movingExtras: 0,
        cleaningBaseAfterDiscount: 0,
        cleaningExtras: 0,
        subtotal: 0,
        discount: 0,
        grandTotal: 0,
      },
    } as PriceDetails,
    resetToken: 0,
  };
}

export const useBookingStore = create<BookingState>()(
  devtools(
    (set, get) => ({
      ...makeInitialState(),

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
            discount: next.appliedDiscount || undefined,
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
            discount: next.appliedDiscount || undefined,
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
            discount: next.appliedDiscount || undefined,
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
            discount: next.appliedDiscount || undefined,
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
            discount: next.appliedDiscount || undefined,
          });
          return next;
        }),

      /* -------------- Discount Actions -------------- */
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
          const subtotal = s.movingPrice;

          const res = await fetch(`${apiBase}/discount/validate-discount`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, amount: subtotal, service: "moving" }),
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
              movingPrice: next.movingPrice,
              sizeValue: next.sizeValue,
              extra: next.extra,
              extraService: next.extraService,
              cleaningPrice: next.cleaningPrice,
              cleaningExtra: next.cleaningExtra,
              cleaningService: next.cleaningService,
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
            movingPrice: next.movingPrice,
            sizeValue: next.sizeValue,
            extra: next.extra,
            extraService: next.extraService,
            cleaningPrice: next.cleaningPrice,
            cleaningExtra: next.cleaningExtra,
            cleaningService: next.cleaningService,
            discount: undefined,
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
            discount: next.appliedDiscount || undefined,
          });
          return next;
        });
      },

      postBooking: async (apiBase, customer) => {
        const s = get();

        const body = {
          size: s.sizeValue,

          // From
          postnummer: s.from.postcode,
          buildingType: s.from.homeType,
          floor: s.from.floor,
          Access: s.from.access,
          parkingDistance: s.from.distance,

          // To
          postNummerTo: s.to.postcode,
          buildingTypeNew: s.to.homeType,
          floorNew: s.to.floor,
          AccessNew: s.to.access,
          parkingDistanceNew: s.to.distance,

          // Moving extras
          packaging: s.extra.packa,
          packaKitchen: s.extra.packaKitchen,
          mounting: s.extra.montera,
          cleaningOption: s.extra.flyttstad,

          // Customer
          name: customer.name,
          email: customer.email,
          addressStreet: customer.addressStreet,
          telefon: customer.phone,
          pnr: customer.pnr,
          apartmentKeys: customer.keys,
          whatToMove: undefined,
          message: customer.message,
          date: customer.date,
          moveType: customer.moveType,

          // Include discount code if applied
          discountCode: s.appliedDiscount?.code || undefined,

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
          console.log(customer.moveType);
          throw new Error(msg);
        }
        return json;
      },

      /* ----------------------- Reset ----------------------- */
      resetBooking: () => {
        const fresh = makeInitialState();
        fresh.resetToken = Math.floor(Math.random() * 1e9);
        set(fresh as any, true);
      },
    }),
    {
      name: "booking-store",
    }
  )
);
