// types.ts
export const HomeType = [
  "lagenhet",
  "villa",
  "radhus",
  "kontor",
  "forrad",
] as const;
export const AccessType = ["stairs", "elevator", "large-elevator"] as const;

export type AddressForm = {
  homeType: (typeof HomeType)[number];
  floor: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+";
  access: (typeof AccessType)[number];
  parkingDistance: 10 | 20 | 30 | 40 | 50;
};

export type Extras = {
  packa?: "JA" | "NEJ";
  montera?: "JA" | "NEJ";
  bortforsling?: "JA" | "NEJ";
  flyttstad?: "JA" | "NEJ";
  magasinering?: "JA" | "NEJ";
};

export type QuoteRequest = {
  from: AddressForm;
  to: AddressForm;
  extras: Extras;
};

export type QuoteResponse = {
  basePrice: number;
  extras: { key: keyof Extras; label: string; price: number }[];
  total: number;
  currency: "SEK";
};
