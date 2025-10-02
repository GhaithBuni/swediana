import { z } from "zod";

// Validation schema for the initial booking form
export const initialBookingSchema = z.object({
  size: z
    .number()
    .min(1, "Storlek måste vara minst 1 m³")
    .max(500, "Storlek kan inte överstiga 500 m³"),
  fromPostcode: z
    .string()
    .min(1, "Postnummer (från) är obligatoriskt")
    .regex(/^\d{5}$/, "Postnummer måste vara 5 siffror"),
  toPostcode: z
    .string()
    .min(1, "Postnummer (till) är obligatoriskt")
    .regex(/^\d{5}$/, "Postnummer måste vara 5 siffror"),
});

// Validation schema for the booking details form
export const bookingDetailsSchema = z.object({
  name: z
    .string()
    .min(2, "Namn måste vara minst 2 tecken")
    .max(100, "Namn kan inte vara längre än 100 tecken"),
  email: z
    .string()
    .min(1, "Email är obligatoriskt")
    .email("Ogiltig emailadress"),
  phone: z
    .string()
    .regex(/^(\+46|0)?[1-9]\d{8,9}$/, "Ogiltigt telefonnummer")
    .optional()
    .or(z.literal("")),
  date: z
    .string()
    .min(1, "Datum är obligatoriskt")
    .refine((date) => {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Datum kan inte vara i det förflutna"),
  pnr: z
    .string()
    .regex(/^\d{6}-?\d{4}$/, "Personnummer måste vara i formatet ÅÅMMDD-XXXX")
    .optional()
    .or(z.literal("")),
  keys: z.string().optional(),
  message: z
    .string()
    .max(1000, "Meddelandet kan inte vara längre än 1000 tecken")
    .optional(),
});

export const initialCleaningSchema = z.object({
  size: z
    .number()
    .min(1, "Storlek måste vara minst 1 m³")
    .max(500, "Storlek kan inte överstiga 500 m³"),
  fromPostcode: z
    .string()
    .min(1, "Postnummer (från) är obligatoriskt")
    .regex(/^\d{5}$/, "Postnummer måste vara 5 siffror"),
});

export type InitialBookingData = z.infer<typeof initialBookingSchema>;
export type BookingDetailsData = z.infer<typeof bookingDetailsSchema>;
export type initialCleaningSchema = z.infer<typeof initialCleaningSchema>;

// Helper to get user-friendly error messages
export function getValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  error.issues.forEach((err) => {
    const path = err.path.join(".");
    errors[path] = err.message;
  });
  return errors;
}
