// app/slappna-av/page.tsx
import Link from "next/link";

export const metadata = { title: "Vi gör – du slappnar av" };

export default function SlappnaAvPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        
         

          {/* Höger panel = Reco-widget */}
          <div className="relative h-[450px] md:h-[600px] bg-white">
            <iframe
              src="https://widget.reco.se/v2/venues/5974772/horizontal/xlarge?inverted=false&border=true&lang=sv"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        
      </section>
    </main>
  );
}
