import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CleaningIncludes() {
  return (
    <div className="mt-8">
      {/* Centered title + thin divider */}
      <h3 className="text-center font-semibold text-lg text-primary-foreground">
        Vad ingår i en flyttstädning?
      </h3>
      <div className="mx-auto mt-2 mb-4 h-px w-24 bg-primary/40" />

      {/* No outer box; each row has a teal underline */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="kitchen" className="border-b border-primary/40">
          <AccordionTrigger className="justify-between py-3 px-1 text-primary-foreground hover:no-underline">
            <span>Kök</span>
          </AccordionTrigger>
          <AccordionContent className="px-1 pb-4 text-sm text-foreground/80">
            <p className="font-medium mb-2">Rengöring av:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kyl och frys, in- och utvändigt. Frys ska vara avfrostad.</li>
              <li>
                Ugn, in- och utvändigt (även plåtar). Om möjligt även under
                ugnen förutsatt att kunden då har dragit ut spis/ugn
              </li>
              <li>Diskmaskin utvändigt och invändigt</li>
              <li>Köksfläkt samt ventiler in- och utvändigt</li>
              <li>Armaturer/belysning nedmonteras och diskas</li>
              <li>Av- och uttorkning av skåp, lådor och bänkar</li>
              <li>
                Golv, golvlister, kontakter, dörrar, karmar, fönsterbrädor och
                radiatorer
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bathroom" className="border-b border-primary/40">
          <AccordionTrigger className="justify-between py-3 px-1 text-primary-foreground hover:no-underline">
            <span>Badrum</span>
          </AccordionTrigger>
          <AccordionContent className="px-1 pb-4 text-sm text-foreground/80">
            <p className="font-medium mb-2">Rengöring av:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Sanitet, även under badkaret (fronten nedmonteras och återställs
                av kund)
              </li>
              <li>Rengöring av kakelväggar</li>
              <li>Tvättmaskin, torktumlare och torkskåp</li>
              <li>Golvbrunnar och ventiler</li>
              <li>Förvaringsutrymmen</li>
              <li>Armaturer och belysning</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="living" className="border-b border-primary/40">
          <AccordionTrigger className="justify-between py-3 px-1 text-primary-foreground hover:no-underline">
            <span>Bostadsrum</span>
          </AccordionTrigger>
          <AccordionContent className="px-1 pb-4 text-sm text-foreground/80">
            <p className="font-medium mb-2">Rengöring av:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Golv, golvlister, kontakter, dörrar, karmar, fönsterbrädor,
                persienner och radiatorer
              </li>
              <li>Garderober, in- och utvändigt</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="excluded" className="border-b border-primary/40">
          <AccordionTrigger className="justify-between py-3 px-1 text-primary-foreground hover:no-underline">
            <span>Ingår inte i flyttstädning</span>
          </AccordionTrigger>
          <AccordionContent className="px-1 pb-4 text-sm text-foreground/80">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Städning bakom vitvaror så som kyl, frys, spis, tvättmaskin och
                torktumlare utförs endast om de dras fram och återställes av
                kund
              </li>
              <li>
                Vi torkar inte av väggar och tak med risk för att
                nyansskillnader kan uppstå eller att färgen släpper. Vi
                dammtorkar endast väggarna
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
