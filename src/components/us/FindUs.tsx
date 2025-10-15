// app/karta/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karta – Emil Sjögrens Väg 16A, Knivsta",
};

const ADDRESS = "Emil Sjögrens Väg 16 A, 741 43 Knivsta";
const q = encodeURIComponent(ADDRESS);

export default function Page() {
  return (
    // remove outer padding so map truly fills the screen
    <main className="h-screen ">
      <iframe
        title={`Karta – ${ADDRESS}`}
        // hl=sv for Swedish UI, z=13 ~ the zoom in your mock
        src={`https://www.google.com/maps?q=${q}&hl=sv&z=13&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </main>
  );
}
