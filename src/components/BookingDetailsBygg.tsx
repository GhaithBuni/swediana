// components/BookingDetailsBygg.tsx
"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCleaningStore } from "@/stores/cleaningStore"; // if you have a separate store for bygg, swap this
import { bookingDetailsSchema } from "@/app/schema/schema"; // <-- same schema as your other form
import { useRouter } from "next/navigation";

export default function BookingDetailsBygg() {
  const router = useRouter();
  const postCleaning = useCleaningStore((s) => s.postCleaningBooking);
  const resetCleaning = useCleaningStore((s) => s.resetCleaning);

  const [cleanType, setCleanType] = React.useState<"typical" | "inspection">(
    "typical"
  );

  const [status, setStatus] = React.useState<{
    type: "idle" | "loading" | "success" | "error";
    text?: string;
  }>({ type: "idle" });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

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
      <div>
        <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
          Vad som ska städas?
        </h3>

        <RadioGroup
          value={cleanType}
          onValueChange={(v) => setCleanType(v as typeof cleanType)}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem
              id="typical-clean"
              value="typical"
              className="h-6 w-6 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor="typical-clean"
              className="text-foreground font-medium cursor-pointer"
            >
              Typiskt för storleken
            </Label>
          </div>

          <div className="flex items-center gap-3">
            <RadioGroupItem
              id="inspection-clean"
              value="inspection"
              className="h-6 w-6 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor="inspection-clean"
              className="text-foreground font-medium cursor-pointer"
            >
              Boka en kostnadsfri besiktning
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
          Bokning uppgifter
        </h3>

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            setErrors({});
            setStatus({ type: "loading" });

            const form = e.currentTarget as HTMLFormElement;
            const f = Object.fromEntries(new FormData(form).entries());

            // Validate with Zod (same schema)
            const result = bookingDetailsSchema.safeParse({
              name: f.name || "",
              email: f.email || "",
              phone: f.phone || "",
              date: f.date || "",
              pnr: f.pnr || "",
              keys: "", // not present in this form; schema allows optional/empty
              message: f.message || "",
            });

            if (!result.success) {
              const validationErrors: Record<string, string> = {};
              for (const issue of result.error.issues) {
                const field = String(issue.path[0] ?? "general");
                validationErrors[field] = issue.message;
              }
              setErrors(validationErrors);
              setStatus({ type: "idle" });

              const first = Object.keys(validationErrors)[0];
              document.getElementById(first)?.focus();
              return;
            }

            try {
              const res = await postCleaning(
                process.env.NEXT_PUBLIC_API_KEY ?? "",
                {
                  name: String(f.name),
                  email: String(f.email),
                  phone: String(f.phone || ""),
                  personalNumber: String(f.pnr || ""),
                  message: String(f.message || ""),
                  date: String(f.date || ""),
                }
              );

              const bookingId =
                (res && (res._id || res.orderId || res.id)) ||
                (typeof res === "string" ? res : undefined) ||
                `tmp-${Date.now()}`; // fallback if your API doesn't return an id
              console.log(res);

              // Build query string for the Thanks page
              const qs = new URLSearchParams({
                order: String(bookingId),
                service: "Byggstäd", // or inject dynamically if you have it
                date: String(f.date || ""),
                name: String(f.name || ""),
                email: String(f.email || ""),
                phone: String(f.phone || ""),
              }).toString();

              form.reset();
              resetCleaning();

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
          </div>

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

          {status.type === "error" && (
            <p className="text-red-500 text-sm">{status.text}</p>
          )}
          {status.type === "success" && (
            <p className="text-green-500 text-sm">{status.text}</p>
          )}

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
