// useQuote.ts
import * as React from "react";
import { QuoteResponse } from "../types/types";

export function useQuote(payload: any) {
  const [data, setData] = React.useState<QuoteResponse | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Only quote when required fields are present
    const ready =
      payload?.from?.homeType &&
      payload?.to?.homeType &&
      payload?.from?.floor &&
      payload?.to?.floor &&
      payload?.from?.access &&
      payload?.to?.access &&
      payload?.from?.parkingDistance &&
      payload?.to?.parkingDistance;

    if (!ready) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const id = setTimeout(async () => {
      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        if (e.name !== "AbortError") setError(e.message ?? "Något gick fel");
      } finally {
        setLoading(false);
      }
    }, 400); // debounce

    return () => {
      controller.abort();
      clearTimeout(id);
    };
  }, [JSON.stringify(payload)]); // shallow-ish compare

  return { data, loading, error };
}
