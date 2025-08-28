// schema.ts
import { z } from "zod";

export const addressSchema = z.object({
  homeType: z.enum(["lagenhet", "villa", "radhus", "kontor", "forrad"]),
  floor: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]),
  access: z.enum(["stairs", "elevator", "large-elevator"]),
  parkingDistance: z
    .enum(["10", "20", "30", "40", "50"])
    .transform((v) => Number(v)),
});

export const extrasSchema = z.object({
  packa: z.enum(["JA", "NEJ"]).optional(),
  montera: z.enum(["JA", "NEJ"]).optional(),
  bortforsling: z.enum(["JA", "NEJ"]).optional(),
  flyttstad: z.enum(["JA", "NEJ"]).optional(),
  magasinering: z.enum(["JA", "NEJ"]).optional(),
});

export const formSchema = z.object({
  from: addressSchema,
  to: addressSchema,
  extras: extrasSchema,
  customer: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(6).optional(),
    message: z.string().optional(),
  }),
});
export type FormValues = z.infer<typeof formSchema>;
