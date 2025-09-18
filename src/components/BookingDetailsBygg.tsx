// components/BookingDetailsCleaning.tsx
"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCleaningStore } from "@/stores/cleaningStore";

export default function BookingDetailsBygg() {
  const postCleaning = useCleaningStore((s) => s.postCleaningBooking);
  const resetCleaning = useCleaningStore((s) => s.resetCleaning);

  // purely visual (to mirror original component’s first block)
  const [cleanType, setCleanType] = React.useState<"typical" | "inspection">(
    "typical"
  );

  const [status, setStatus] = React.useState<{
    type: "idle" | "loading" | "success" | "error";
    text?: string;
  }>({ type: "idle" });

  return (
    <section className="max-w-5xl  space-y-8">
      {/* Same header block as original */}
      <div>
        <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
          Vad som ska städas?
        </h3>

        <RadioGroup
          value={cleanType}
          onValueChange={(v) => setCleanType(v as typeof cleanType)}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Option 1 */}
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

          {/* Option 2 */}
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

      {/* Bokning uppgifter (same design & layout) */}
      <div>
        <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
          Bokning uppgifter
        </h3>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus({ type: "loading" });

            const form = e.currentTarget as HTMLFormElement;
            const f = Object.fromEntries(new FormData(form).entries());

            // required (mirror original)
            if (!f.name || !f.email || !f.date) {
              setStatus({
                type: "error",
                text: "Fyll i namn, e-post och datum.",
              });
              return;
            }

            try {
              await postCleaning(process.env.NEXT_PUBLIC_API_KEY!, {
                name: String(f.name),
                email: String(f.email),
                phone: String(f.phone || ""),
                personalNumber: String(f.pnr || ""),
                message: String(f.message || ""),
                date: String(f.date || ""),
              });

              // reset form + store (same behavior pattern)
              form.reset();
              resetCleaning();

              setStatus({
                type: "success",
                text: "Bokning lyckades! Vi återkommer med bekräftelse.",
              });
            } catch (err: any) {
              setStatus({
                type: "error",
                text: err?.message || "Kunde inte skicka bokningen.",
              });
            }
          }}
          className="space-y-6"
        >
          {/* 2-column grid (identical structure & classes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Namn</Label>
              <Input
                id="name"
                name="name"
                placeholder="Namn"
                required
                className="rounded-xl placeholder:text-foreground/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="rounded-xl placeholder:text-foreground/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                name="phone"
                inputMode="tel"
                placeholder="Telefon"
                className="rounded-xl placeholder:text-foreground/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Datum</Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pnr">Personnummer</Label>
              <Input
                id="pnr"
                name="pnr"
                placeholder="Personnummer"
                className="rounded-xl placeholder:text-foreground/60"
              />
            </div>

            {/* If you also want "Lägenhetsnycklar" here like the moving form, uncomment: */}
            {/* 
            <div className="space-y-2">
              <Label htmlFor="keys">Lägenhetsnycklar</Label>
              <Input
                id="keys"
                name="keys"
                placeholder="Lägenhetsnycklar"
                className="rounded-xl placeholder:text-foreground/60"
              />
            </div>
            */}
          </div>

          {/* Message (same style) */}
          <div className="space-y-2">
            <Label htmlFor="message">Meddelande</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Meddelande"
              className="min-h-[140px] rounded-xl placeholder:text-foreground/60"
            />
          </div>

          {/* Feedback (same pattern) */}
          {status.type === "error" && (
            <p className="text-red-500 text-sm">{status.text}</p>
          )}
          {status.type === "success" && (
            <p className="text-green-500 text-sm">{status.text}</p>
          )}

          {/* Submit (same button styling) */}
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
