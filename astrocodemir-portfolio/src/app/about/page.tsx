"use client";

import Image from "next/image";
import Link from "next/link";
import "../about.css";

export default function AboutPage() {
  return (
    <div className="text-white font-sans relative min-h-screen bg-gradient-to-b from-black via-[#0f0a1a] to-black">

      {/* 🌸 Main Layout */}
      <main className="container mx-auto px-6 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
        {/* 🪞 Profile Card */}
        <div className="bg-gray-900/60 p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full border-4 border-purple-400/30 overflow-hidden mb-4">
            <Image
              src="/profile/francine.jpg"
              alt="Francine Loi Famorcan"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-purple-300">franzynedev🌸</h1>
          <p className="text-gray-400">AstroCodeMir · she/her</p>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Information Technology grad <br />
            Frontend Developer in progress <br />
            Exploring React, JavaScript, HTML, CSS
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-purple-600/40 text-sm rounded-lg">
              #GirlCoder
            </span>
            <span className="px-3 py-1 bg-blue-600/40 text-sm rounded-lg">
              #WomenInTech
            </span>
          </div>

          {/* <div className="mt-4 flex gap-2 flex-wrap items-center">
            <a
              href="https://github.com/AstroCodeMir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
            >
              <GitHubIcon />
              <span>@AstroCodeMir</span>
            </a>
          </div> */}

          <hr className="my-6 border-gray-700 w-2/3 mx-auto" />

          <div className="mt-4 flex gap-6 justify-center text-gray-400 text-sm">
  <div className="flex flex-col items-center">
    <span className="font-bold text-white">5</span>
    <span>Projects</span>
  </div>
  <div className="flex flex-col items-center">
    <span className="font-bold text-white">2</span>
    <span>Years Experience</span>
  </div>
  <div className="flex flex-col items-center">
    <span className="font-bold text-white">100+</span>
    <span>Followers</span>
  </div>
</div>
  <hr className="my-6 border-gray-700 w-2/3 mx-auto" />

          <div className="mt-6">
  <Link
    href="/contact" // or wherever you want to message
    className="px-6 py-2 border border-white rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
  >
    Message Me
  </Link>
</div>


        </div>

        {/* ✨ About & Projects Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* About Me */}
          <section className="bg-gray-900/60 p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-purple-300 mb-2">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Hi, I’m{" "}
              <span className="font-bold text-white">Francine (AstroCodeMir)</span>. 
              I’m passionate about crafting interactive and accessible web experiences 
              that blend creativity with functionality. I’m currently sharpening my skills in{" "}
              <span className="text-blue-400">JavaScript</span>,{" "}
              <span className="text-sky-400">TypeScript</span>, and{" "}
              <span className="text-pink-400">Next.js</span>, focusing on building 
              clean, scalable, and user-friendly applications. Beyond the frontend, 
              I’m also exploring the backend side of development using{" "}
              <span className="text-emerald-400">MySQL</span>,{" "}
              <span className="text-yellow-400">Sequelize</span>, and{" "}
              <span className="text-orange-400">Express.js</span>.
            </p>
          </section>

          {/* Projects */}
          <section className="bg-gray-900/60 p-6 rounded-2xl shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-purple-300">Projects</h2>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="dot ongoing"></span> Ongoing
                </span>
                <span className="flex items-center gap-1">
                  <span className="dot completed"></span> Completed
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Professional Portfolio Website",
                  status: "Ongoing",
                  desc: "A personal portfolio website originally built with HTML, CSS, and JavaScript, now migrated to Next.js and TypeScript with improved performance and modular components.",
                },
                {
                  title: "Daily Dash",
                  status: "Ongoing",
                  desc: "Dashboard project with e-commerce, users, and admin features.",
                },
                {
                  title: "Aly’s Craft",
                  status: "Ongoing",
                  desc: "Mobile-responsive project being migrated to another deployment app.",
                },
                {
                  title: "Lucent Chandelier",
                  status: "Completed",
                  desc: "Showcase website for various chandelier lights. Fully mobile-responsive.",
                },
                {
                  title: "Baked Cookies",
                  status: "Completed",
                  desc: "Project with a mini responsive cart system. Fully mobile-responsive.",
                  colSpan: true,
                },
              ].map((proj, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800 transition ${
                    proj.colSpan ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="project-title flex items-center gap-2">
                    <span
                      className={`dot ${
                        proj.status === "Completed" ? "completed" : "ongoing"
                      }`}
                    ></span>
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{proj.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* 🔙 Back Button */}
      <div className="container mx-auto px-6 pb-12 flex justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5m0 0l7-7m-7 7l7 7"
            />
          </svg>
          <span className="text-sm font-medium">Home</span>
        </Link>
      </div>
    </div>
  );
}
