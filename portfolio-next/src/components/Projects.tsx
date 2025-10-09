"use client";

export default function Projects() {
  return (
    <section
      id="features"
      className="relative bg-gradient-to-b via-[#0f0a1a] py-20"
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#b3a6ff] drop-shadow-[0_0_10px_rgba(179,166,255,0.4)]">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Here's a selection of my work. Check out all my projects for a deeper dive.
        </p>
      </div>

      {/* Project Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Aly's Craft Web App",
            desc: "A web landing page that showcases Aly’s Handmade Crafts.",
            img: "/images/AlysWebApp.png",
            link: "https://astrocodemir.github.io/AlysCraft/",
          },
          {
            title: "Lucent Chandelier",
            desc: "A web landing page that showcases elegant chandeliers.",
            img: "/images/Lucent.png",
            link: "https://astrocodemir.github.io/LucentChandelier/",
          },
          {
            title: "Bakes Cookies",
            desc: "A cozy web page that highlights homemade baked goods.",
            img: "/images/BakesCookies.png",
            link: "https://astrocodemir.github.io/BakesGoods-Cookies/",
          },
        ].map((project) => (
          <div
            key={project.title}
            className="relative p-10 rounded-xl border border-[#7366c9]/30 
              outline outline-1 outline-[#b3a6ff]/30
              bg-[#12121c]/80
              hover:outline-[#b3a6ff]/70 hover:shadow-[0_0_25px_rgba(179,166,255,0.3)]
              transition-all duration-500 flex flex-col items-center text-center gap-4"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-[#b3a6ff]">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-base text-gray-300 max-w-xs">{project.desc}</p>

            {/* Image with Hover Overlay */}
            <div className="relative w-80 h-40 rounded-xl overflow-hidden border border-[#7366c9]/30 group">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#7366c9] to-[#b3a6ff] text-[#0b0c14] px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg font-semibold hover:scale-105 transition-transform"
                  >
                    Live View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="items-center flex flex-wrap justify-center gap-2 pt-4">
              {["Web Development", "HTML5", "Tailwind", "JavaScript"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-[#b3a6ff]/40 px-3 py-1 text-xs font-semibold text-[#b3a6ff] hover:bg-[#b3a6ff]/10 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
