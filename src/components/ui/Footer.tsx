import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="bg-[#e6f7f5] text-[#3f3f3f]">
      {/* container matches the nav width */}
      <div className="w-full md:w-4/5 mx-auto px-6 md:px-8 py-12">
        {/* Brand + tagline */}
        <div className="space-y-4 text-center mb-10">
          <h3 className={`text-5xl ${pacifico.className}`}>Swediana AB</h3>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Vi erbjuder högkvalitativa och miljövänliga städtjänster för både
            hem och företag, så att du kan njuta av en ren och fräsch miljö.
          </p>
        </div>

        {/* Columns (centered as a group) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center text-center mb-10">
          {/* Links sections (2 small cols inside) */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">Om oss</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/priser"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    Priser
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    Kontakt oss
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">Våra tjänster</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/flyttstad"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    Flyttstäd
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flytthjalp"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    Flytthjälp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foretagstad"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    Företagsstäd
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonsterputs"
                    className="hover:text-[#00ada1] transition-colors"
                  >
                    Fönsterputs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Sociala medier</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Chat"
                className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                💬
              </a>
              <a
                href="#"
                aria-label="Payment"
                className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                💷
              </a>
              <a
                href="#"
                aria-label="Money"
                className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:shadow-md hover:-translate-y-0.5 transition"
              >
                💸
              </a>
            </div>
          </div>

          {/* Contact / CTA block (optional third column) */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Kontakta oss</h4>
            <p>support@swediana.se</p>
            <p>+46 (0) 70 123 45 67</p>
            <Link
              href="/boka"
              className="inline-block rounded-full bg-[#00ada1] text-white px-6 py-2 hover:bg-[#00988f] transition"
            >
              Boka nu
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-center md:text-left">
            Swediana AB © 2025. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/integritetspolicy"
              className="hover:text-[#00ada1] transition-colors"
            >
              Integritetspolicy
            </Link>
            <span className="text-black/50">Powered by Drifa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
