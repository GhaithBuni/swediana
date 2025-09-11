import FAQTilesCollapsing from "@/components/FAQTiles";

const faqItems = [
  {
    question: "Vad kostar flytthjälp?",
    answer:
      "Antingen kan du lämna in nyckeln på vårt kontor tre vardagar innan städningen eller så löser vi det på annat sätt.",
  },
  {
    question: "Är flytthjälp avdragsgillt?",
    answer: "Ja, RUT kan gälla i många fall.",
  },
  {
    question: "Behöver jag vara med under flytten?",
    answer: "Nej, men vi behöver tillgång.",
  },
  {
    question: "Ingår garanti på flytthjälp?",
    answer: "Ja, vi har nöjd-kund-garanti.",
  },
  {
    question: "Vad händer om jag avbokar?",
    answer: "Se våra avbokningsvillkor.",
  },
];

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
        Frågor & svar <span className="text-teal-700">flyttstädning</span>
      </h2>
      <p className="mt-2 text-slate-600">
        Har du frågor om flytthjälp? Här har vi samlat de vanligaste frågorna
        och svaren som rör flytthjälp.
      </p>

      <div className="mt-8">
        <FAQTilesCollapsing
          items={faqItems}
          collapsed={200} // tweak to your exact Canva card width
          expanded={300} // how wide the active card should get
          height={360} // card height
          gap={10} // spacing between cards
        />
      </div>
    </section>
  );
}
