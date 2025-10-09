import Link from "next/link";
import { Pacifico } from "next/font/google";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

// Font import
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Footer = () => (
  <footer className="relative bg-[#e6f7f5] text-[#3f3f3f] overflow-hidden">
    {/* SVG Illustration: positioned absolutely, shown only top left 60% */}
    <div
      className="absolute  md:top-[-20vh] md:left-[-8vw] md:w-[30vw] md:h-[30vw]    sm:w-[40vw] h-[40vw] top-[-6vh] left-[-25vw] "
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <img
        src="/footer_iluation.svg"
        alt=""
        className="w-full h-full object-cover"
       
      />
    </div>

    {/* Footer content */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
      {/* Brand + tagline */}
      <div className="space-y-4 text-center mb-10">
        <h3 className={`text-5xl ${pacifico.className}`}>Swediana AB</h3>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Vi erbjuder högkvalitativa och miljövänliga städtjänster för både hem och företag, så att du kan njuta av en ren och fräsch miljö.
        </p>
      </div>

      {/* Footer columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 justify-items-center text-center mb-10">
        {/* Om oss */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Om oss</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/priser" className="hover:text-[#00ada1]">Priser</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[#00ada1]">FAQ</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-[#00ada1]">Kontakt oss</Link>
            </li>
          </ul>
        </div>
        {/* Våra tjänster */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Våra tjänster</h4>
          <ul className="space-y-2">
            <li><Link href="/flyttstad" className="hover:text-[#00ada1]">Flyttstäd</Link></li>
            <li><Link href="/flytthjalp" className="hover:text-[#00ada1]">Flytthjälp</Link></li>
            <li><Link href="/foretagstad" className="hover:text-[#00ada1]">Företagsstäd</Link></li>
            <li><Link href="/fonsterputs" className="hover:text-[#00ada1]">Fönsterputs</Link></li>
          </ul>
        </div>
        {/* Social media - UPPDATERAD MED KOLUMN LAYOUT */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Social media</h4>
          <div className="flex flex-col items-center gap-3 mt-3">
            <Link 
              href="https://instagram.com" 
              className="flex items-center gap-2 p-2 hover:text-[#00ada1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} color="#3f3f3f" />
              <span>Instagram</span>
            </Link>
            <Link 
              href="https://facebook.com" 
              className="flex items-center gap-2 p-2 hover:text-[#00ada1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} color="#3f3f3f" />
              <span>Facebook</span>
            </Link>
            <Link 
              href="https://tiktok.com" 
              className="flex items-center gap-2 p-2 hover:text-[#00ada1] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={24} color="#3f3f3f" />
              <span>TikTok</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/10 pt-6 mb-2 w-full"></div>

      {/* Footer bottom */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-xs px-2 gap-2">
        <span className="text-center md:text-left">
          Swediana AB © 2025. All rights reserved
        </span>
        <span className="flex items-center gap-4">
          <Link href="/integritetspolicy" className="hover:text-[#00ada1] transition-colors">Integritetspolicy</Link>
          <span className="text-black/50">Powered by Drifa</span>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;