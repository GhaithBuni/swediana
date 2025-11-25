// app/faq/page.tsx (or your current file)
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "Vad ingår i er flytthjälp?",
    a: "Vi hjälper med packning, bärhjälp, transport, montering/demontering samt återvinning enligt överenskommelse.",
  },
  {
    q: "Tar ni extra betalt för förrådsflytt?",
    a: "Nej, det är inkluderat i priset – Ingen extra avgift.",
  },
  {
    q: "Ingår RUT-avdrag i ert pris?",
    a: "Ja, vi hanterar RUT-avdraget direkt på fakturan enligt Skatteverkets regler.",
  },
];

export default function Page() {
  // Generate JSON-LD structured data for FAQs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="">
        {/* HERO — full-bleed, responsive + safe viewport heights */}
        {/* Header Section */}
        <div className="relative flex items-center h-[65vh] md:h-[70vh] lg:h-[100vh]">
          <div
            className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/faq.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1
            className="
              text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              leading-tight
            "
          >
            Frågor &amp; svar
          </h1>
        </div>

        {/* FAQ SECTION */}
        <section className="my-10 bg-[#e6f7f5] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left titles - Sticky on large screens */}
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Frågor?
                </h2>
                <p className="mt-6 lg:mt-10 text-xl sm:text-2xl font-medium text-gray-800">
                  Vanliga frågor
                </p>
                <p className="mt-4 text-base text-gray-600 hidden lg:block">
                  Har du fler frågor? Tveka inte att höra av dig!
                </p>
              </div>

              {/* Right: intro + accordion */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Om du har frågor, har vi svar till dig här. Om vi inte har
                    det, är du varmt välkommen att{" "}
                    <a
                      href="/kontakt"
                      className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors font-medium"
                    >
                      kontakta oss
                    </a>
                    .
                  </p>

                  <div className="mt-8 sm:mt-10">
                    <Accordion
                      type="single"
                      collapsible
                      defaultValue="item-1"
                      className="w-full space-y-2"
                    >
                      {faqs.map((item, i) => (
                        <AccordionItem
                          key={i}
                          value={`item-${i}`}
                          className="border border-gray-200 rounded-lg px-4 sm:px-6 overflow-hidden hover:border-gray-300 transition-colors bg-gray-50/50"
                        >
                          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4 sm:py-5 text-base sm:text-lg [&[data-state=open]]:text-gray-900">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 pb-4 sm:pb-5 pt-0 text-sm sm:text-base leading-relaxed">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="mt-8 bg-gray-900 rounded-2xl p-6 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Hittade du inte svaret?
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Kontakta oss så hjälper vi dig gärna!
                  </p>
                  <a
                    href="/kontakt"
                    className="mt-4 inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Kontakta oss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
