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

export type InitialBookingData = z.infer<typeof initialBookingSchema>;

// Helper to get user-friendly error messages
export function getValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  error.issues.forEach((err) => {
    const path = err.path.join(".");
    errors[path] = err.message;
  });
  return errors;
}
