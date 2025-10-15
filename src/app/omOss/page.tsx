// app/om-oss/page.tsx
import AboutGrid from "@/components/us/AboutGrid";
import Value from "@/components/us/Value";
import OmdomePage  from "@/components/us/OmdomePage";
import FindUs from "@/components/us/FindUs";
export default function Page() {
  return (
    <div>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controlsList="nodownload noremoteplayback"
          poster="/hero-poster.jpg"
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/omOss/clean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <AboutGrid />
      <Value />
      <OmdomePage />
      <FindUs />
    </div>
  );
}
