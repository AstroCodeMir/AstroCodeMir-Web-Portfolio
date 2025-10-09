// src/components/Contact.tsx
"use client";

import React from "react";

const Contact: React.FC = () => {
  return (
<section
      id="contact"
      className="relative bg-gradient-to-b from-[#0f0a1a] via-[#0b0f19] to-[#05060d] py-20"
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="relative text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#cfcff9] drop-shadow-[0_0_10px_rgba(168,158,252,0.4)]">
          Get In Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 md:text-lg leading-relaxed">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Here are the best ways to
          reach me.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 px-6">
        {[
          {
            title: "Email",
            text: "franzaynfamorcan@gmail.com",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#a89efc]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            ),
            link: "https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new",
            btn: "Send Email",
          },
          {
            title: "LinkedIn",
            text: "Francine Famorcan",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#a89efc]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link: "https://www.linkedin.com/in/francine-loi-famorcan-5173b6145/",
            btn: "Connect on LinkedIn",
          },
          {
            title: "GitHub",
            text: "AstroCodeMir",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#a89efc]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a6.5 6.5 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link: "https://github.com/AstroCodeMir",
            btn: "View on GitHub",
          },
          {
            title: "WhatsApp",
            text: "+63 918 499 4135",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-[#a89efc]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="currentColor"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.15.93.39 1.85.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.96.31 1.88.55 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            ),
            link: "https://wa.me/639184994135",
            btn: "Message on WhatsApp",
          },
        ].map(({ title, text, icon, link, btn }) => (
          <div
            key={title}
            className="rounded-xl border border-[#a89efc]/30 bg-[#0f0f1a]/80 text-white shadow-md
              hover:shadow-[0_0_20px_rgba(168,158,252,0.3)] hover:border-[#a89efc]/50 transition-all duration-500 flex flex-col justify-between text-center"
          >
            <div className="flex flex-col items-center space-y-3 p-6">
              {icon}
              <h3 className="text-xl font-semibold text-[#cfcff9]">{title}</h3>
              <p className="text-sm text-gray-300">{text}</p>
            </div>
            <div className="p-6 pt-0">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full rounded-md bg-[#a89efc] text-[#0b0f19] font-semibold text-sm py-2.5 hover:bg-[#cfcff9] transition-colors"
              >
                {btn}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
