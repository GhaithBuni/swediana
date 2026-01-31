"use client";

import { Instagram, Facebook, Music2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForetagstadStore } from "@/stores/foretagstadStore";
import { foretagstadSchema } from "@/app/schema/schema";

export default function Page() {
  type ForetagstadFormValues = z.infer<typeof foretagstadSchema>;
  const { isSubmitting, submitForetagstad } = useForetagstadStore();

  const form = useForm<ForetagstadFormValues>({
    resolver: zodResolver(foretagstadSchema),
    defaultValues: {
      name: "",
      kvm: "",
      adress: "",
      postalcode: "",
      city: "",
      email: "",
      phone: "",
      subject: "Företagsstädning",
      message: "",
    },
  });

  const onSubmit = async (data: ForetagstadFormValues) => {
    try {
      await submitForetagstad(data);
      console.log("Form submitted successfully");
      form.reset({
        name: "",
        kvm: "",
        adress: "",
        postalcode: "",
        city: "",
        email: "",
        phone: "",
        subject: "Företagsstädning",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="relative flex items-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Building.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-white font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-7xl mx-auto">
            Företagsstädning
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto px-2">
          Swediana AB: Din Partner för Professionell Företags- & Flyttstädning
        </h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
          Söker du en pålitlig städfirma som levererar skinande rena resultat,
          varje gång? Swediana AB är experter på att skapa rena, fräscha och
          representativa miljöer. Oavsett om ni behöver skräddarsydd
          företagsstädning för kontoret eller en garanti-godkänd flyttstäd vid
          byte av lokal, har vi lösningen för er.
        </p>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
          <strong>
            Professionell Företagsstädning: En Investering i Produktivitet
          </strong>
          <br />
          Företagsstädning är mer än bara renlighet – det är en grundläggande
          del av en hälsosam och produktiv arbetsmiljö. Vi anpassar våra
          städtjänster exakt efter er verksamhets unika behov och omfattning,
          oavsett om det gäller daglig, veckovis eller månadsvis service.
        </p>
      </section>

      {/* Vad ingår i kontorsstädning */}
      <section className="mx-auto w-full px-4 sm:px-6 lg:w-[90%] xl:w-[85%] py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-none lg:rounded-lg shadow-lg">
          {/* Vänster: bild */}
          <div
            className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[600px] xl:h-[800px]"
            style={{
              backgroundImage: "url('/Elegance.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Höger: turkos panel med accordion */}
          <div className="bg-[#00ada1] text-white">
            <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Vad Ingår i Vår Omfattande Företagsstädning?
              </h2>
              <h4 className="mt-4 sm:mt-5 font-semibold max-w-xl text-sm sm:text-base">
                Omfattningen av städningen bestäms i samråd, men våra vanliga
                moment för att säkerställa en fräsch lokal inkluderar:
              </h4>

              <div className="mt-4 sm:mt-6 md:mt-8 max-w-xl">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-white/30">
                    <AccordionTrigger className="text-white hover:text-white/90 py-3 sm:py-4 font-medium text-left text-sm sm:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white">
                      Golvvård
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 pb-3 sm:pb-4 text-sm sm:text-base">
                      Dammsugning och våttorkning av alla golvytor.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-white/30">
                    <AccordionTrigger className="text-white hover:text-white/90 py-3 sm:py-4 font-medium text-left text-sm sm:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white">
                      Ytrengöring
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 pb-3 sm:pb-4 text-sm sm:text-base">
                      Dammtorkning av möbler, avsatser, fönsterbrädor och andra
                      ytor
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-white/30">
                    <AccordionTrigger className="text-white hover:text-white/90 py-3 sm:py-4 font-medium text-left text-sm sm:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white">
                      Sanitära Utrymmen
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 pb-3 sm:pb-4 text-sm sm:text-base">
                      Grundlig rengöring och desinficering av toaletter, duschar
                      och omklädningsrum.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-white/30">
                    <AccordionTrigger className="text-white hover:text-white/90 py-3 sm:py-4 font-medium text-left text-sm sm:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white">
                      Köks-/Pentrystäd
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 pb-3 sm:pb-4 text-sm sm:text-base">
                      Rengöring av köksytor, diskbänkar och maskiner.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className="border-white/30 border-b"
                  >
                    <AccordionTrigger className="text-white hover:text-white/90 py-3 sm:py-4 font-medium text-left text-sm sm:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white">
                      Avfallshantering
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 pb-3 sm:pb-4 text-sm sm:text-base">
                      Tömning av papperskorgar och hantering av källsortering.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-6"
                    className="border-white/30 border-b"
                  >
                    <AccordionTrigger className="text-white hover:text-white/90 py-3 sm:py-4 font-medium text-left text-sm sm:text-base hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white">
                      Hygienfokus
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 pb-3 sm:pb-4 text-sm sm:text-base">
                      Rengöring och desinficering av kontaktytor som dörrhandtag,
                      ljusknappar och telefoner för att minska smittspridning.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <h4 className="mt-6 sm:mt-8 md:mt-10 font-semibold max-w-xl text-sm sm:text-base">
                Tilläggstjänster som fönsterputsning och mattvätt erbjuds
                givetvis vid behov.
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Varför välja oss section */}
      <section className="mx-auto w-full px-4 sm:px-6 lg:w-[90%] xl:w-[85%] py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-none lg:rounded-lg shadow-lg">
          {/* Vänster: turkos panel med text */}
          <div className="bg-[#00ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 flex items-center order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Varför Välja Swediana AB?
              </h2>

              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Vi utför regelbunden städning för företag, oavsett om ni har
                  kontor, butik eller lager.
                </p>
                <p>
                  Vi erbjuder skräddarsydda städscheman. Kontakta oss för att
                  boka ett möte, så tar vi fram en optimal plan för just ert
                  företag.
                </p>
              </div>
            </div>
          </div>

          {/* Höger: bild */}
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[520px] order-1 lg:order-2">
            <Image
              src="/office.png"
              alt="Konferensrum"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 px-2">
              Kontakta Oss
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-slate-600 text-base sm:text-lg px-2">
              Varje företag är unikt, och det är er städning också. Kontakta oss
              för en kostnadsfri konsultation eller offert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
            {/* Form Area */}
            <div className="lg:col-span-2 p-6 sm:p-8 md:p-10 lg:p-12 bg-white">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5 sm:space-y-6"
                >
                  {/* Two column grid for all input fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Kontaktperson *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ditt namn"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="kvm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Kvm *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Kvadratmeter"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            E-post *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="din@email.se"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Telefon *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+46 70 123 45 67"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="adress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Adress *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Gatuadress"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="postalcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Postnummer *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123 45"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Ort *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Stockholm"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium text-sm">
                            Ämne *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Vad gäller det?"
                              className="h-10 sm:h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message field - full width */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium text-sm">
                          Meddelande *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Berätta mer om era behov av städning..."
                            className="resize-y bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2 sm:pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 sm:px-12 h-11 sm:h-12 bg-[#0c8a84] hover:bg-[#0a6f6a] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 touch-manipulation"
                    >
                      {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Sidebar */}
            <aside className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white">
                    Kontaktinformation
                  </h3>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                      Besök oss
                    </p>
                    <p className="text-white font-medium leading-relaxed text-sm sm:text-base">
                      Emil Sjögrens väg 16A
                      <br />
                      74143 Knivsta
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                      Prata med oss
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium text-sm sm:text-base">
                        <a
                          href="tel:+46108085625"
                          className="text-white hover:text-[#0c8a84] transition-colors duration-200"
                        >
                          +46 10 808 56 25
                        </a>
                      </p>
                      <p className="font-medium text-sm sm:text-base">
                        <a
                          href="mailto:info@swediana.se"
                          className="text-white hover:text-[#0c8a84] transition-colors duration-200 break-all"
                        >
                          info@swediana.se
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                      Öppettider
                    </p>
                    <p className="text-white font-medium leading-relaxed text-sm sm:text-base">
                      Mån-Fre: 09:00 - 17:00
                      <br />
                      Lör-Sön: Stängt
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700">
                <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  Följ oss
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <a
                    aria-label="Instagram"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-[#0c8a84] flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation"
                  >
                    <Instagram size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    aria-label="Facebook"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-[#0c8a84] flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation"
                  >
                    <Facebook size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    aria-label="TikTok"
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-800 hover:bg-[#0c8a84] flex items-center justify-center transition-all duration-200 hover:scale-110 touch-manipulation"
                  >
                    <Music2 size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}