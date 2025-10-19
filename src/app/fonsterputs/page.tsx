import Link from "next/link";
import OmdomePage from "@/components/OmdomePage";

export default function Page() {
    return <div>
        {/* Header Section */}
      <div className="relative  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Nouveau.png')",
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
Fönsterputs      </h1>
      </div>
      
      {/* CURVED BACKGROUND SECTION */}
      <section className="relative overflow-hidden mt-10 sm:mt-14 md:mt-20 py-10 sm:py-14 md:py-20 ">
        <div
          aria-hidden
          className="absolute -left-[45vw] -top-[45vw] h-[140vw] w-[140vw] rounded-full bg-[#95fff8] -z-10
                     sm:-left-[38vw] sm:-top-[38vw] sm:h-[120vw] sm:w-[120vw]
                     md:-left-[28vw] md:-top-[28vw] md:h-[95vw] md:w-[95vw]"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance text-primary-foreground">
Låt solen stråla in med skinande rena fönster!          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto text-primary-foreground">
         Upptäck skillnaden med professionell fönsterputs. Vi ser till att dina fönster är kristallklara, perfekt för både vår- och höstrengöringen.
          </p>
      
        </div>
      </section>
      <OmdomePage />
    </div>
}


