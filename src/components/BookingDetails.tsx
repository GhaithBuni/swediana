"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function BookingDetails() {
  const [moveType, setMoveType] = React.useState<"typical" | "inspection">(
    "typical"
  );

  return (
    <section className="max-w-5xl mx-auto space-y-8">
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
          {/* Option 1 */}
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

          {/* Option 2 */}
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
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(
              new FormData(e.currentTarget).entries()
            );
            console.log({ moveType, ...data }); // send to API here
          }}
          className="space-y-6"
        >
          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Namn</Label>
              <Input
                id="name"
                name="name"
                placeholder="Namn"
                className="rounded-xl placeholder:text-foreground/60"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl placeholder:text-foreground/60"
                required
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
              <Input id="date" name="date" type="date" className="rounded-xl" />
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
              className="min-h-[140px] rounded-xl placeholder:text-foreground/60"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="bg-primary text-primary-foreground px-8 rounded-full"
          >
            Boka
          </Button>
        </form>
      </div>
    </section>
  );
}
