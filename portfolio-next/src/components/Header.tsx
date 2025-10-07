"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Smart navigation handling for internal sections
  const navLinks = [
    {
      href: pathname === "/about" ? "/" : "/about",
      label: pathname === "/about" ? "Home" : "About",
    },
    {
      href: "/projectCollection",
      label: "Projects"
    },
    {
      href: pathname === "/" ? "#contact" : "/#contact",
      label: "Contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-transparent backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <p className="text-md font-semibold text-purple-400">AstroCodeMir</p>
        </div>

        {/* Centered nav for lg+ */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Resume button (right) */}
        <div className="hidden lg:flex items-center">
          <a
            href="#"
            className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* -----------------------
           MOBILE MENU (REPLACEMENT)
         ----------------------- */}
      {isOpen && (
        /* overlay */
        <div className="fixed inset-0 z-[9999]">
          {/* dark backdrop (clicking it closes the menu) */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />

          {/* white side panel (full height) */}
          <aside
            className="fixed top-0 right-0 h-screen w-3/4 min-w-[250px] max-w-md bg-white text-gray-900 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing when clicking inside
            aria-label="Mobile menu"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <hr className="border-gray-200" />

            {/* Links area: fills remaining height and scrolls if necessary */}
            <nav className="flex-1 overflow-auto px-4 py-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                      pathname === link.href ? "text-purple-600 bg-gray-100" : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Footer area (resume button) */}
            <div className="px-4 pb-6">
              <a
                href="#"
                className="w-full block text-center rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
