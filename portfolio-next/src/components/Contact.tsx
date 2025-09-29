// src/components/Contact.tsx
"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="opacity-0 translate-y-5 opacity-100 translate-y-0 duration-700 ease-out py-20 px-4"
      data-animate
    >
      <div className="text-center">
        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl font-headline">
          Get In Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 md:text-xl/relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Here are the best ways to
          reach me.
        </p>
      </div>

      {/* Grid of contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
        {/* Email */}
        <div
          data-animate
          className="relative inline-block opacity-0 translate-y-5 transition-all duration-700 ease-out delay-100"
        >
          <div className="rounded-lg border border-[#A855F7]/70 text-card-foreground shadow-sm h-full flex flex-col justify-between text-center bg-card outline-none outline outline-1 outline-purple-400 hover:outline-purple-500 hover:shadow-purple-500/40 hover:shadow-lg focus:outline-purple-400 focus:outline-2 focus:outline-offset-2 transition-all duration-200 ease-in-out">
            <div className="flex flex-col space-y-1.5 p-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide w-8 h-8 stroke-current text-purple-400"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <h3 className="text-2xl text-white font-semibold leading-none tracking-tight mt-4">
                Email
              </h3>
              <p className="text-sm text-gray-100">
                franzaynfamorcan@gmail.com
              </p>
            </div>
            <div className="p-6 pt-0 flex-grow flex items-end justify-center">
              <a
                href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 h-10 px-4 py-2 w-full"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div
          data-animate
          className="relative inline-block opacity-0 translate-y-5 transition-all duration-700 ease-out delay-200"
        >
          <div className="rounded-lg border border-[#A855F7]/70 text-card-foreground shadow-sm h-full flex flex-col justify-between text-center bg-card outline-none outline outline-1 outline-purple-400 hover:outline-purple-500 hover:shadow-purple-500/40 hover:shadow-lg focus:outline-purple-400 focus:outline-2 focus:outline-offset-2 transition-all duration-200 ease-in-out">
            <div className="flex flex-col space-y-1.5 p-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-linkedin w-8 h-8 text-purple-400"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <h3 className="text-2xl text-white font-semibold leading-none tracking-tight mt-4">
                LinkedIn
              </h3>
              <p className="text-sm text-white">Francine Famorcan</p>
            </div>
            <div className="p-6 pt-0 flex-grow flex items-end justify-center">
              <a
                href="https://www.linkedin.com/in/francine-loi-famorcan-5173b6145/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 h-10 px-4 py-2 w-full"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* GitHub */}
        <div
          data-animate
          className="relative inline-block opacity-0 translate-y-5 transition-all duration-700 ease-out delay-300"
        >
          <div className="rounded-lg border border-[#A855F7]/70 text-card-foreground shadow-sm h-full flex flex-col justify-between text-center bg-card outline-none outline outline-1 outline-purple-400 hover:outline-purple-500 hover:shadow-purple-500/40 hover:shadow-lg focus:outline-purple-400 focus:outline-2 focus:outline-offset-2 transition-all duration-200 ease-in-out">
            <div className="flex flex-col space-y-1.5 p-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-github w-8 h-8 text-purple-400"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <h3 className="text-2xl text-white font-semibold leading-none tracking-tight mt-4">
                GitHub
              </h3>
              <p className="text-sm text-white">AstroCodeMir</p>
            </div>
            <div className="p-6 pt-0 flex-grow flex items-end justify-center">
              <a
                href="https://github.com/AstroCodeMir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 h-10 px-4 py-2 w-full"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div
          data-animate
          className="relative inline-block opacity-0 translate-y-5 transition-all duration-700 ease-out delay-400"
        >
          <div className="rounded-lg border border-[#A855F7]/70 text-card-foreground shadow-sm h-full flex flex-col justify-between text-center bg-card outline-none outline outline-1 outline-purple-400 hover:outline-purple-500 hover:shadow-purple-500/40 hover:shadow-lg focus:outline-purple-400 focus:outline-2 focus:outline-offset-2 transition-all duration-200 ease-in-out">
            <div className="flex flex-col space-y-1.5 p-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-phone w-8 h-8 text-purple-400"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <h3 className="text-2xl text-white font-semibold leading-none tracking-tight mt-4">
                WhatsApp
              </h3>
              <p className="text-sm text-white">+63 918 499 4135</p>
            </div>
            <div className="p-6 pt-0 flex-grow flex items-end justify-center">
              <a
                href="mailto:/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 h-10 py-2 w-full"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
