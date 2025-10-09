// app/bokning/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Så enkelt är det att boka städning",
};

type Step = {
  title: string;
  text: string;
  icon: string; // path under /public
};

const steps: Step[] = [
  {
    title: "Boka tjänst",
    text: "Välj ett datum som passar dig och boka din städning eller flytthjälp enkelt online.",
    icon: "/steps/clander.png",
  },
  {
    title: "Vi kommer till dig",
    text: "Vi hämtar nyckeln eller möter dig på plats. Enkelt och smidigt.",
    icon: "/steps/door.png",
  },
  {
    title: "Vi städar och flyttar",
    text: "Noggrann flytt och städning med trygg transport av dina ägodelar.",
    icon: "/steps/house.png",
  },
  {
    title: "Klart & godkänt",
    text: "Vi erbjuder städgaranti så att du är redo för nästa hyresgäst, försäljning eller inflyttning.",
    icon: "/steps/check.png",
  },
];

export default function BookingFlowPage() {
  return (
    <main className="mt-10">
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Titel */}
        <h1 className="text-center text-2xl md:text-5xl ">
          Få tillbaka din tid – så enkelt är det att boka städning
        </h1>

        {/* Dotted wave background (visa på md+) */}
        <svg
          className="pointer-events-none absolute left-0 right-0 mx-auto hidden md:block w-full max-w-6xl h-40 -z-10"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          {/* prickad våg */}
          <path
            d="M0,140 C160,40 320,180 480,110 C640,40 800,180 960,110 C1040,80 1120,120 1200,100"
            fill="none"
            stroke="#d1d5db"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="2 10"
          />
        </svg>

        {/* Steg */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 m">
          {steps.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto w-14 h-14 relative">
                <div className="w-full h-full filter" style={{ filter: 'invert(63%) sepia(76%) saturate(459%) hue-rotate(131deg) brightness(95%) contrast(96%)' }}>
                  <Image
                    src={s.icon}
                    alt={s.title}
                    fill
                    className="object-contain"
                    sizes="56px"
                    priority
                  />
                </div>
              </div>
              <h3 className="mt-5 font-bold text-lg">
                {s.title}
              </h3>
              <p className="mt-2 ">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}