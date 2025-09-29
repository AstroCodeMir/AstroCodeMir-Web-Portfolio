// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="flex items-center justify-between p-6 lg:px-8 sm:px-4">
        {/* Logo */}
        <div className="flex lg:flex-1 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-code h-6 w-6 text-purple-400"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <p className="text-md text-purple-400 font-semibold">AstrocodeMir</p>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/about" className="text-white font-semibold">
            About
          </Link>
          <a href="#features" className="text-white font-semibold">
            Project
          </a>
          <a href="#skills" className="text-white font-semibold">
            Skills
          </a>
          <a href="#contact" className="text-white font-semibold">
            Contact
          </a>
        </div>

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500"
          >
            Download Resume
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-white z-[10000]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/40">
          <div className="absolute top-0 right-0 h-full w-1/2 min-w-[200px] max-w-md bg-white shadow-xl flex flex-col p-4">
            {/* Close */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </Link>
                  <a
                    href="#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Project
                  </a>
                  <a
                    href="#skills"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="w-full block text-center rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
