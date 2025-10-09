"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      href: pathname === "/about" ? "/" : "/about",
      label: pathname === "/about" ? "Home" : "About",
    },
    { href: "/projectCollection", label: "Projects" },
    {
      href: pathname === "/" ? "#contact" : "/#contact",
      label: "Contact",
    },
  ];

  return (
    
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0f19]/70 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[#9d8df1]" // soft violet accent
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <p className="text-md font-semibold text-[#cfcff9]">AstroCodeMir</p>
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
                  isActive
                    ? "text-[#a89efc] font-semibold"
                    : "text-[#E5E5E5] hover:text-[#bfaaff]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Resume button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#"
            className="rounded-md bg-[#a89efc] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-[#cfcff9] hover:text-[#0b0f19] transition-colors"
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
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />

          <aside
            className="fixed top-0 right-0 h-screen w-3/4 min-w-[250px] max-w-md bg-[#0b0f19] text-[#E5E5E5] shadow-2xl flex flex-col border-l border-[#a89efc]/20"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile menu"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#E5E5E5] hover:text-[#bfaaff] hover:bg-white/10 rounded-full transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <hr className="border-[#a89efc]/20" />

            {/* Links area */}
            <nav className="flex-1 overflow-auto px-4 py-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-[#a89efc]/20 text-[#cfcff9]"
                        : "text-[#E5E5E5] hover:bg-white/10 hover:text-[#a89efc]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Footer area */}
            <div className="px-4 pb-6">
              <a
                href="#"
                className="w-full block text-center rounded-md bg-[#a89efc] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-[#cfcff9] hover:text-[#0b0f19] transition-colors"
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
