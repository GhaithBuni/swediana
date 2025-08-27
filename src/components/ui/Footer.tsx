import Link from "next/link";
// app/layout.tsx or wherever your root layout is
// app/layout.tsx or any root layout
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <footer className="bg-[#e6f7f5] text-[#3f3f3f] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-center mb-8">
          <h3 className={`text-5xl ${pacifico.className}`}>Swediana AB</h3>

          <p className="max-w-xl  mx-auto text-xl">
            Vi erbjuder högkvalitativa och miljövänliga städtjänster för både
            hem och företag, så att du kan njuta av en ren och fräsch miljö.
          </p>
        </div>
        {/* Main footer content */}
        <div className="flex justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-xl "> 
        

          {/* Links sections */}
          <div className="grid grid-cols-2 gap-8 ">
            <div className="space-y-4">
              <h4 className="text-2xl">Om oss</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/priser"
                    className="text- hover:text-[#00ada1] transition-colors"
                  >
                    Priser
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className=" hover:text-[#00ada1] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className=" hover:text-[#00ada1] transition-colors"
                  >
                    Kontakt oss
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl">Våra tjänster</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/flyttstad"
                    className=" hover:text-[#00ada1] transition-colors"
                  >
                    Flyttstäd
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flytthjalp"
                    className=" hover:text-[#00ada1] transition-colors"
                  >
                    Flytthjälp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foretagstad"
                    className=" hover:text-[#00ada1] transition-colors"
                  >
                    Företagstäd
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fonsterputs"
                    className=" hover:text-[#00ada1] transition-colors"
                  >
                    Fönsterputs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social media */}
          <div className="space-y-4">
            <h4 className="text-2xl">Social media</h4>
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="text-2xl  hover:text-[#00ada1] transition-colors"
                aria-label="Chat"
              >
                💬
              </a>
              <a
                href="#"
                className="text-2xl  hover:text-[#00ada1] transition-colors"
                aria-label="Payment"
              >
                💷
              </a>
              <a
                href="#"
                className="text-2xl  hover:text-[#00ada1] transition-colors"
                aria-label="Money"
              >
                💸
              </a>
            </div>
          </div>
        </div>
        </div>
        

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className=" text-sm mb-4 md:mb-0">
            <p>Swediana AB © 2025. All rights reserved</p>
            <p>Powerd by Drifa</p>
          </div>
          <div>
            <Link
              href="/integritetspolicy"
              className=" hover:text-[#00ada1] text-sm transition-colors"
            >
              Integritetspolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
