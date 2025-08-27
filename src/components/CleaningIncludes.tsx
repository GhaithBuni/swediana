import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react"; // or any svg you prefer

export default function CleaningIncludes() {
  return (
    <div className="mt-8">
      {/* Centered title + thin divider */}
      <h3 className="text-center font-semibold text-lg text-primary-foreground">
        Vad ingår i en hemstädning?
      </h3>
      <div className="mx-auto mt-2 mb-4 h-px w-24 bg-primary/40" />

      {/* No outer box; each row has a teal underline */}
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            id: "kitchen",
            label: "Kök",
            content: "Skåp, spis, fläkt, bänkar, diskho, golv.",
          },
          {
            id: "bathroom",
            label: "Badrum",
            content: "Toalett, dusch, badkar, kakel, handfat, speglar.",
          },
          {
            id: "living",
            label: "Bostadsrum",
            content: "Dammsugning, dammtorkning, golvtvätt, fönsterbrädor.",
          },
          {
            id: "excluded",
            label: "Ingår inte i flyttstädning",
            content: "Väggtvätt, taktvätt, utvändiga fönster i höga byggnader.",
          },
        ].map(({ id, label, content }) => (
          <AccordionItem
            key={id}
            value={id}
            className="border-b border-primary/40"
          >
            <AccordionTrigger className="justify-between py-3 px-1 text-primary-foreground hover:no-underline">
              <span>{label}</span>
            </AccordionTrigger>
            <AccordionContent className="px-1 pb-4 text-sm text-foreground/80">
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
