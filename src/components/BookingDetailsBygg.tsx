// components/BookingDetailsBygg.tsx
"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCleaningStore } from "@/stores/byggStore"; // if you have a separate store for bygg, swap this
import { bookingDetailsSchema } from "@/app/schema/schema"; // <-- same schema as your other form
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useEffect } from "react";

export default function BookingDetailsBygg() {
  const router = useRouter();
  const postByggCleaningBooking = useCleaningStore(
    (s) => s.postByggCleaningBooking
  );
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

  const [selected, setSelected] = React.useState<Date | undefined>(undefined);
  const [lockedSet, setLockedSet] = React.useState<Set<string>>(new Set());
  const [loadingLocked, setLoadingLocked] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoadingLocked(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_KEY}/cleaning/locked-dates/all`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();
        console.log(data);

        const arr: string[] = Array.isArray(data)
          ? data.map((x: any) =>
              typeof x === "string" ? x : x?.ymd ?? x?.date ?? ""
            )
          : Array.isArray(data?.date)
          ? data.dates
          : [];

        setLockedSet(new Set(arr.map(normalizeYmd)));
        console.log(lockedSet);
      } catch {
        // silently ignore; calendar still usable
      } finally {
        if (mounted) setLoadingLocked(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [API_URL]);

  const formatSV = (d?: Date) =>
    d
      ? new Intl.DateTimeFormat("sv-SE", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(d)
      : "";

  function ymdFromDate(d: Date) {
    const dt = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const y = dt.getFullYear();
    const m = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  function normalizeYmd(s: string) {
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;
    const d = new Date(s);
    return isNaN(+d) ? s : ymdFromDate(d);
  }

  const disabledMatcher = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return day < today || lockedSet.has(ymdFromDate(day));
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
              const res = await postByggCleaningBooking(
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

              const bookingId = res?.data?.bookingNumber;

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
              <div className="flex items-center justify-between">
                <Label htmlFor="date">
                  Datum <span className="text-red-500">*</span>
                </Label>
                {/* your “Låsta dagar: N” etc can stay here if you like */}
              </div>

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between rounded-xl border bg-background px-3 py-2 text-left shadow-sm hover:bg-accent/40
          ${errors.date ? "border-red-500" : ""}`}
                    onClick={() => {
                      clearError("date"), setOpen(true);
                    }}
                    aria-label="Välj datum"
                  >
                    <span
                      className={
                        selected ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {selected ? formatSV(selected) : "Välj datum"}
                    </span>
                    <CalendarIcon className="h-4 w-4 opacity-70" />
                  </button>
                </PopoverTrigger>

                <PopoverContent className="p-2 w-auto" align="start">
                  <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={(d) => {
                      setSelected(d);
                      clearError("date");
                      setOpen(false);
                      // close popover automatically
                      // shadcn popover closes when clicking outside; to close on select, wrap in controlled state:
                      // <Popover open={open} onOpenChange={setOpen}> and setOpen(false) here.
                    }}
                    disabled={disabledMatcher}
                    weekStartsOn={1}
                    showOutsideDays
                    initialFocus
                    modifiers={{
                      locked: (day) => lockedSet.has(ymdFromDate(day)),
                    }}
                    modifiersClassNames={{
                      locked:
                        "opacity-40 line-through text-red-500 pointer-events-none",
                    }}
                    classNames={{
                      caption: "flex items-center justify-between py-2 px-2",
                      caption_label: "text-sm font-medium",
                      nav: "flex items-center gap-1",
                      nav_button:
                        "h-8 w-8 rounded-md border bg-transparent hover:bg-accent",
                      table: "w-full border-collapse",
                      head_row:
                        "grid grid-cols-7 text-xs text-muted-foreground",
                      head_cell: "py-1 text-center",
                      row: "grid grid-cols-7 mt-1",
                      cell: "relative p-0",
                      day: "h-10 w-10 p-0 mx-auto rounded-md hover:bg-accent aria-selected:opacity-100",
                      day_selected:
                        "bg-primary text-primary-foreground hover:bg-primary",
                      day_today: "font-semibold underline",
                      day_outside: "text-muted-foreground/50 opacity-60",
                      day_disabled:
                        "opacity-40 line-through pointer-events-none",
                    }}
                  />
                </PopoverContent>
              </Popover>

              {/* Hidden input so FormData still has "date" for Zod & submit */}
              <input
                type="hidden"
                name="date"
                value={selected ? ymdFromDate(selected) : ""}
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
