// app/slappna-av/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Vi gör – du slappnar av" };

export default function SlappnaAvPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid overflow-hidden rounded-md md:grid-cols-2">
          {/* Vänster panel */}
          <div className="bg-teal-600 text-white flex items-center justify-center p-10 md:p-14">
            <div className="text-center">
              <h1 className="font-bold leading-tight text-3xl md:text-5xl">
                Vi gör
                <br />
                Du slappnar av
              </h1>
              <Link
                href="/priser"
                className="mt-4 inline-block underline underline-offset-4 text-white/90 hover:text-white transition"
              >
                Läs mer om våra fantastiska priser →
              </Link>
            </div>
          </div>

          {/* Höger bild */}
          <div className="relative h-72 md:h-[600px]">
            <Image
              src="/services.jpeg" // lägg filen i public/images/
              alt="Dammsugning på matta"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
