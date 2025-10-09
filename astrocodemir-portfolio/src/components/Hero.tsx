import Link from "next/link";
import { GitHubIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* 🌌 Soft Gradient Background with Subtle Stars */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0b0f19] via-[#1b1733] " />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* ✨ Gentle star field */}
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white/70 rounded-full animate-twinkle delay-300" />
        <div className="absolute top-[25%] left-[65%] w-1 h-1 bg-purple-200 rounded-full animate-twinkle delay-600" />
        <div className="absolute top-[40%] left-[35%] w-0.5 h-0.5 bg-indigo-100 rounded-full animate-twinkle delay-900" />
        <div className="absolute top-[70%] left-[75%] w-1 h-1 bg-pink-100 rounded-full animate-twinkle delay-1200" />
      </div>

      {/* 🌸 Hero Content */}
      <div className="mx-auto max-w-xl py-32 sm:py-32 lg:py-36 text-center">
        <h1
          className="font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight 
          bg-gradient-to-r from-[#c7b8ff] via-[#a89efc] to-[#d5baff]
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]"
        >
          Francine Famorcan
        </h1>

        <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
          Creative Web Designer and Innovator. <br />
          Creating beautiful and functional digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/projectCollection"
            className="rounded-md bg-gradient-to-r from-[#a89efc] to-[#c7b8ff] 
            px-3.5 py-2.5 text-sm font-semibold text-black shadow-md hover:opacity-85 transition"
          >
            View My Work
          </Link>

          <a
            href="#contact"
            className="rounded-md border border-[#c7b8ff]/40 px-3.5 py-2.5 text-sm font-semibold 
            text-[#c7b8ff] hover:bg-[#c7b8ff]/10 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* 🌠 Social Icons */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/AstroCodeMir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#c7b8ff] transition"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/francine-loi-famorcan-5173b6145/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#a89efc] transition"
          >
            <LinkedInIcon />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#c7b8ff] transition"
          >
            <InstagramIcon />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#a89efc] transition"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
