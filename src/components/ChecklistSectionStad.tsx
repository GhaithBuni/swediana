import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function ChecklistSection() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
      {/* IMAGE WITH L-CORNER DECOR */}
      <div
        className="
          relative w-full max-w-md md:max-w-lg lg:max-w-xl
          before:content-[''] before:absolute before:-left-3 before:-top-3
          before:h-12 before:w-[120px] before:bg-[#c69d74]
          after:content-[''] after:absolute after:-left-3 after:-top-3
          after:h-[120px] after:w-12 after:bg-[#c69d74]
        "
        aria-hidden={false}
      >
        <Image
          src="/Room_Corner.png" // <- your image path
          alt="Färgglada grönsaker organiserade i lådor"
          width={720}
          height={1080}
          className="
            relative z-10 h-auto w-full rounded-sm
            border-r-4 border-black
            shadow-xl object-cover
          "
          sizes="(min-width: 768px) 36rem, 100vw"
          priority
        />
      </div>

      {/* TEXT SIDE */}
      <div className="text-left md:pl-4">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Tips flyttstädning
        </h2>

        <Accordion type="single" collapsible className="mt-6 w-full">
          <AccordionItem value="prep">
            <AccordionTrigger className="text-base sm:text-lg">Kök</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Boka flytthjälp och bekräfta datum.</li>
                <li>Adressändra och ordna el, bredband, hemförsäkring.</li>
                <li>Rensa, skänk och återvinn sådant du inte tar med.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="packing">
            <AccordionTrigger className="text-base sm:text-lg">Badrum</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Märk kartonger med rum + innehåll.</li>
                <li>Tunga saker i små lådor, lätta i stora.</li>
                <li>Skydda ömtåligt med papper/bubbelplast.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="moving-day">
            <AccordionTrigger className="text-base sm:text-lg">Bostadrum</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ha “första-dygnet-låda” med nödvändigheter.</li>
                <li>Säkra hiss/parkering och guida flyttpersonal.</li>
                <li>Stäng av vitvaror och fota mätarställning.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="after">
            <AccordionTrigger className="text-base sm:text-lg">Ingår inte i flyttstädning </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Packa upp rum för rum (börja med kök/badrum).</li>
                <li>Boka flyttstädning eller städa själv.</li>
                <li>Uppdatera adress hos arbetsgivare, bank m.m.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      
      </div>
    </section>
  );
}