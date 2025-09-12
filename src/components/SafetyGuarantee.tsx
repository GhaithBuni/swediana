import Image from "next/image";

export default function SafetyGuarantee({
  imageUrl,
  title,
  subtitle,
}: {
  imageUrl: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden w-full pt-1">
      {/* thin teal line across the top */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-teal-500" />

      {/* grid with 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch w-full">
        {/* LEFT: photo (1/3) */}
        <div className="relative aspect-[16/9] md:aspect-auto md:h-[500px] w-full md:col-span-1">
          <Image
            src={imageUrl}
            alt="Söt hund i flyttlådor"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        {/* RIGHT: content block (2/3) */}
        <div className="relative flex items-center bg-[#EDE4D8] p-6 md:p-12 md:col-span-2">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">
              {title}
            </h3>
            <p className="mt-5 text-slate-700 text-base md:text-lg leading-7">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
