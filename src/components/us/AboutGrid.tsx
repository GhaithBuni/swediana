// src/components/about/AboutGrid.tsx
import Image from "next/image";

const StatPill = ({ text }: { text: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm text-white/90 ring-1 ring-white/20">
    <span className="size-2 rounded-full bg-white/70" />
    {text}
  </span>
);

const StatCard = ({
  value,
  label,
  ctaLabel,
  href,
}: {
  value: string;
  label: string;
  ctaLabel?: string;
  href?: string;
}) => (
  <div className="flex h-full flex-col justify-between rounded-3xl bg-teal-50 p-6 md:p-8">
    <div>
      <div className="text-4xl md:text-5xl font-semibold text-teal-700 tracking-tight">
        {value}
      </div>
      <p className="mt-1 text-teal-700/70">{label}</p>
    </div>

    {ctaLabel && href && (
      <a
        href={href}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm ring-1 ring-teal-200 hover:ring-teal-300"
      >
        {ctaLabel} <span aria-hidden className="ml-2">↗</span>
      </a>
    )}
  </div>
);

export default function AboutGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        {/* Story card */}
        <article className="rounded-3xl bg-teal-700 p-6 md:p-8 lg:p-10 text-white lg:col-span-2">
          <StatPill text="Om Oss" />
          <h2 className="mt-4 text-4xl leading-tight font-semibold md:text-5xl">
            Vår resa började
            <br /> 2020
          </h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Vi ville satsa på att ha trygga, lojala och kompetenta medarbetare. För oss handlar det om mer än bara städning – det handlar om att skapa en hållbar arbetsmiljö. Vi erbjuder våra anställda fast anställning, konkurrenskraftiga löner, tjänstepensioner och försäkringar, vilket skapar en känsla av trygghet och tillhörighet. Det skapar även långsiktiga och nöjda kunder!
          </p>
        </article>

        {/* Right column (two stacked cards) */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <StatCard value="500+" label="Bokningar"  />
          <StatCard value="5+" label="Regioner"  />
        </div>

        {/* Big image */}
        <figure className="relative overflow-hidden rounded-3xl lg:col-span-2">
          <Image
            src="/omOss/om-oss-hero.png"
            alt="Vår arbetsmiljö"
            width={1600}
            height={900}
            className="h-45 w-full object-cover md:h-[20rem]"
            priority
          />
        </figure>

        {/* Customers card with avatars */}
        <div className="rounded-3xl bg-teal-50 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="text-4xl md:text-5xl font-semibold text-teal-700 tracking-tight">
              98%
            </div>
            <p className="mt-1 text-teal-700/70">Nöjda kunder</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}
