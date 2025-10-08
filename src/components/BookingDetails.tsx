"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/stores/bookingStore";
import { bookingDetailsSchema } from "../app/schema/schema";
import { useRouter } from "next/navigation"; // ← add this

export default function BookingDetails() {
  const router = useRouter();

  const postBooking = useBookingStore((s) => s.postBooking);
  const resetBooking = useBookingStore((s) => s.resetBooking);

  const [moveType, setMoveType] = React.useState<"typical" | "inspection">(
    "typical"
  );

  const [status, setStatus] = React.useState<{
    type: "idle" | "loading" | "success" | "error";
    text?: string;
  }>({ type: "idle" });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Clear error when user starts typing
  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section className="max-w-5xl space-y-8">
      {/* Vad som ska flyttas? */}
      <div>
        <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
          Vad som ska flyttas?
        </h3>

        <RadioGroup
          value={moveType}
          onValueChange={(v) => setMoveType(v as typeof moveType)}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem
              id="typical"
              value="typical"
              className="h-6 w-6 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor="typical"
              className="text-foreground font-medium cursor-pointer"
            >
              Typiskt för storleken
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem
              id="inspection"
              value="inspection"
              className="h-6 w-6 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor="inspection"
              className="text-foreground font-medium cursor-pointer"
            >
              Boka en kostnadsfri besiktning
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Bokning uppgifter */}
      <div>
        <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
          Bokning uppgifter
        </h3>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            // Clear previous errors and status
            setErrors({});
            setStatus({ type: "loading" });

            const form = e.currentTarget as HTMLFormElement;
            const f = Object.fromEntries(new FormData(form).entries());

            // Validate with Zod
            const result = bookingDetailsSchema.safeParse({
              name: f.name || "",
              email: f.email || "",
              phone: f.phone || "",
              date: f.date || "",
              pnr: f.pnr || "",
              keys: f.keys || "",
              message: f.message || "",
              addressStreet: f.addressStreet || "",
            });

            if (!result.success) {
              // Extract errors
              const validationErrors: Record<string, string> = {};
              result.error.issues.forEach((err) => {
                const field = err.path[0] as string;
                validationErrors[field] = err.message;
              });
              setErrors(validationErrors);
              setStatus({ type: "idle" });

              // Scroll to first error
              const firstError = Object.keys(validationErrors)[0];
              document.getElementById(firstError)?.focus();
              return;
            }

            try {
              const res = await postBooking(process.env.NEXT_PUBLIC_API_KEY!, {
                name: String(f.name),
                email: String(f.email),
                phone: String(f.phone || ""),
                pnr: String(f.pnr || ""),
                keys: String(f.keys || ""),
                message: String(f.message || ""),
                date: String(f.date || ""),
                addressStreet: String(f.addressStreet || ""),
              });

              const bookingId = res?.data?.bookingNumber;
              console.log(res);

              // Build query string for the Thanks page
              const qs = new URLSearchParams({
                order: String(bookingId),
                service: "Flytthjälp", // or inject dynamically if you have it
                date: String(f.date || ""),
                name: String(f.name || ""),
                email: String(f.email || ""),
                phone: String(f.phone || ""),
                addressStreet: String(f.addressStreet || ""),
              }).toString();

              form.reset();
              resetBooking();
              router.replace(`/thanks?${qs}`);
            } catch (err: any) {
              setStatus({
                type: "error",
                text: err?.message || "Kunde inte skicka bokningen.",
              });
            }
          }}
          className="space-y-6"
        >
          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Namn <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Namn"
                className={`rounded-xl placeholder:text-foreground/60 ${
                  errors.name ? "border-red-500" : ""
                }`}
                onChange={() => clearError("name")}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className={`rounded-xl placeholder:text-foreground/60 ${
                  errors.email ? "border-red-500" : ""
                }`}
                onChange={() => clearError("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Adress</Label>
              <Input
                id="addressStreet"
                name="addressStreet"
                placeholder="Adress"
                className={`rounded-xl placeholder:text-foreground/60 ${
                  errors.addressStreet ? "border-red-500" : ""
                }`}
                onChange={() => clearError("addressStreet")}
              />
              {errors.addressStreet && (
                <p className="text-sm text-red-500">{errors.addressStreet}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                inputMode="tel"
                placeholder="0701234567"
                className={`rounded-xl placeholder:text-foreground/60 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                onChange={() => clearError("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">
                Datum <span className="text-red-500">*</span>
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                className={`rounded-xl ${errors.date ? "border-red-500" : ""}`}
                onChange={() => clearError("date")}
              />
              {errors.date && (
                <p className="text-sm text-red-500">{errors.date}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="pnr">Personnummer</Label>
              <Input
                id="pnr"
                name="pnr"
                placeholder="ÅÅMMDD-XXXX"
                className={`rounded-xl placeholder:text-foreground/60 ${
                  errors.pnr ? "border-red-500" : ""
                }`}
                onChange={() => clearError("pnr")}
              />
              {errors.pnr && (
                <p className="text-sm text-red-500">{errors.pnr}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="keys">Lägenhetsnycklar</Label>
              <Input
                id="keys"
                name="keys"
                placeholder="Lägenhetsnycklar"
                className="rounded-xl placeholder:text-foreground/60"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Meddelande</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Meddelande"
              className={`min-h-[140px] rounded-xl placeholder:text-foreground/60 ${
                errors.message ? "border-red-500" : ""
              }`}
              onChange={() => clearError("message")}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Feedback (only one shows at a time) */}
          {status.type === "error" && (
            <p className="text-red-500 text-sm">{status.text}</p>
          )}
          {status.type === "success" && (
            <p className="text-green-500 text-sm">{status.text}</p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            disabled={status.type === "loading"}
            className="bg-primary text-primary-foreground px-8 rounded-full"
          >
            {status.type === "loading" ? "Skickar..." : "Boka"}
          </Button>
        </form>
      </div>
    </section>
  );
}
