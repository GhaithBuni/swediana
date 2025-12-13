// app/not-found.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Sidan hittades inte",
  description: "Sidan du letar efter finns inte. Gå tillbaka till startsidan.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f7f5] via-white to-[#e6f7f5] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-bold text-gray-200 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 text-gray-800 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Hoppsan! Sidan finns inte
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto">
            Vi kunde inte hitta sidan du letar efter. Den kan ha flyttats eller
            så finns den inte längre.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Till startsidan
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Kontakta oss
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-4">
            Kanske letar du efter:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/flytthjalp"
              className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
            >
              Flytthjälp
            </Link>
            <Link
              href="/flyttstad"
              className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
            >
              Flyttstäd
            </Link>
            <Link
              href="/byggstad"
              className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
            >
              Byggstäd
            </Link>
            <Link
              href="/foretagstad"
              className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors"
            >
              Företagsstädning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
