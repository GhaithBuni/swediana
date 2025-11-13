"use client";

import { Instagram, Facebook, Music2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    <div>
      {/* Header Section */}
      <div className="relative flex items-center h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Building.png')",
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
          Företagsstädning
        </h1>
      </div>

      {/* Vad ingår i kontorsstädning */}
      <section className="mx-auto w-[90%] md:w-[85%] lg:w-[80%] py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Vänster: bild */}
          <div
            className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px]"
            style={{
              backgroundImage: "url('/Elegance.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Höger: turkos panel med accordion */}
          <div className="bg-[#00ada1] text-white ">
            <div className="px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Vad ingår i en kontorsstädning?
              </h2>

              <div className="mt-6 sm:mt-8 divide-y divide-white/30 border-y border-white/30 max-w-xl">
                {/* Item */}
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
                    <span>Kontor & mötesrum</span>
                    <span className="transition-transform group-open:rotate-180">
                      ∨
                    </span>
                  </summary>
                  <div className="pb-4 text-white/90">
                    Dammtorkning av fria ytor, tömning av papperskorgar,
                    avtorkning av bord/stolar, dammsugning och våttorkning av
                    golv, puts av glasytor vid behov.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
                    <span>Kök / pentry</span>
                    <span className="transition-transform group-open:rotate-180">
                      ∨
                    </span>
                  </summary>
                  <div className="pb-4 text-white/90">
                    Rengöring av bänkar, diskho, mikrovågsugn utvändigt,
                    kyl/frys handtag, avtorkning av skåpsluckor och vitvaror,
                    golvstädning.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
                    <span>Badrum / toaletter</span>
                    <span className="transition-transform group-open:rotate-180">
                      ∨
                    </span>
                  </summary>
                  <div className="pb-4 text-white/90">
                    Rengöring av porslin och blandare, avtorkning av kakel där
                    det kommer åt, påfyllning av förbrukningsmaterial, speglar
                    och golv.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
                    <span>Tilläggstjänster</span>
                    <span className="transition-transform group-open:rotate-180">
                      ∨
                    </span>
                  </summary>
                  <div className="pb-4 text-white/90">
                    Fönsterputs, storstäd, mattvätt, höghöjdsstädning,
                    maskinstädning m.m.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-medium">
                    <span>Städmaterial</span>
                    <span className="transition-transform group-open:rotate-180">
                      ∨
                    </span>
                  </summary>
                  <div className="pb-4 text-white/90">
                    Allt basmaterial kan ingå efter överenskommelse – vi
                    använder miljömärkta kemikalier och mikrofiber.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto w-[90%] md:w-[85%] lg:w-[80%] py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Vänster: turkos panel med text */}
            <div className="bg-[#00ada1] text-white p-6 sm:p-8 md:p-10 lg:p-12 flex items-center">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                  Behöver ditt företag hjälp
                  <br /> med städningen?
                </h2>

                <div className="mt-5 space-y-4 text-white/95 text-base md:text-lg leading-relaxed">
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
            <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
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
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Kontakta Oss
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
              Varje företag är unikt, och det är er städning också. Kontakta oss
              för en kostnadsfri konsultation eller offert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
            {/* Form Area */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-white">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Two column grid for all input fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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
                              className="h-11 bg-white border-slate-300 focus:border-[#0c8a84] focus:ring-[#0c8a84]"
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

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-12 h-12 bg-[#0c8a84] hover:bg-[#0a6f6a] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Sidebar */}
            <aside className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-white">
                    Kontaktinformation
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                      Besök oss
                    </p>
                    <p className="text-white font-medium leading-relaxed">
                      Emil Sjögrens väg 16A
                      <br />
                      74143 Knivsta
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                      Prata med oss
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium">
                        <a
                          href="tel:+46108085625"
                          className="text-white hover:text-[#0c8a84] transition-colors duration-200"
                        >
                          +46 10 808 56 25
                        </a>
                      </p>
                      <p className="font-medium">
                        <a
                          href="mailto:info@swediana.se"
                          className="text-white hover:text-[#0c8a84] transition-colors duration-200"
                        >
                          info@swediana.se
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                      Öppettider
                    </p>
                    <p className="text-white font-medium leading-relaxed">
                      Mån-Fre: 09:00 - 17:00
                      <br />
                      Lör-Sön: Stängt
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">
                  Följ oss
                </p>
                <div className="flex items-center gap-4">
                  <a
                    aria-label="Instagram"
                    href="https://instagram.com"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0c8a84] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    aria-label="Facebook"
                    href="https://facebook.com"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0c8a84] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    aria-label="TikTok"
                    href="https://tiktok.com"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0c8a84] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Music2 size={20} />
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
