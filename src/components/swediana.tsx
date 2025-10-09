// app/swediana/page.tsx
import Image from "next/image";

export const metadata = { title: "Swediana!" };

export default function SwedianaPage() {
  return (
    <main className="min-h-screen mt-20">
      {/* Bakgrund: turkos + vita abstrakta former */}
      <div className="relative overflow-hidden bg-[#95fff8]">
        {/* Circle Background - Left Middle */}
        <div
          className="
            absolute
            top-15 left-[-100]             /* mobil (default) */
            md:top-8 md:left-[-200]     /* iPad (≥768px) */
            lg:top-[1/2] lg:left-[-200px]  /* desktop (≥1024px) */
            w-70 h-70 md:w-200 md:h-200 lg:w-[1200px] lg:h-[1200px]
          "
        >
          <Image
            src="/illusion/circle.svg"
            alt="Background circle"
            fill
            className="object-contain"
          />
        </div>

        {/* Ellipse Background - Top Right */}
        <div
          className="
            absolute
            top-[-50px] right-[-50px]           /* mobil (default) */
            md:top-[-100px] md:right-[-100px]   /* iPad (≥768px) */
            lg:top-[-150px] lg:right-[-150px]   /* desktop (≥1024px) */
            w-40 h-40 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
          "
        >
          <Image
            src="/illusion/ellipse.svg"
            alt="Background ellipse"
            fill
            className="object-contain"
          />
        </div>

        {/* Third Shape Background - Down Left */}
        <div
          className="
            absolute
            bottom-[-50px] left-[-50px]           /* mobil (default) */
            md:bottom-[-100px] md:left-[-100px]   /* iPad (≥768px) */
            lg:bottom-[-150px] lg:left-[-150px]   /* desktop (≥1024px) */
            w-40 h-40 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
          "
        >
          <Image
            src="/illusion/ellipse.svg" // or use another shape like "/illusion/triangle.svg"
            alt="Background shape"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Swediana!</h1>

          {/* Collage-grid */}
          <div className="mt-6 grid grid-cols-2 gap-6 md:gap-8 lg:mt-20">
            {/* Rad 1 – två större bilder */}
            <div className="relative aspect-[4/3] w-full lg:mt-10">
              <img
                src="/images/window.jpg"
                alt="Fönsterputs"
                className="rounded-md shadow w-full h-auto"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <img
                src="/images/moving.jpg"
                alt="Fönsterputs"
                className="rounded-md shadow w-full h-auto"
              />
            </div>

            {/* Rad 2 – två medelstora */}
            <div className="col-span-2 md:col-span-1 relative aspect-[4/3] lg:mt-10">
              <img
                src="/images/floor.jpg"
                alt="floor"
                className="rounded-md shadow w-full h-auto"
              />
            </div>
            <div className="col-span-2 md:col-span-1 relative aspect-[4/3] lg:mt-10">
              <img
                src="/images/mirror.jpeg"
                alt="mirror"
                className="rounded-md shadow w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}