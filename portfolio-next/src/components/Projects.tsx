"use client";

export default function Projects() {
  return (
    <section
      id="features"
      className="text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Here's a selection of my work. Check out all my projects for a deeper dive.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Feature 1 */}
    <div>
      <div
        className="relative p-10 rounded-xl border border-purple-500/30 
          outline outline-1 outline-purple-500/40
          bg-gray-900/80
          hover:outline-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
          flex flex-col items-center text-center gap-4"
      >
        {/* Title */}
        <h3 className="text-2xl font-semibold text-purple-400 feature-title">
          Aly&apos;s Craft Web App
        </h3>

        {/* Description */}
        <p className="text-base text-gray-300 feature-desc max-w-xs">
          A web landing page that showcases the Aly&apos;s Handmade Crafts
        </p>

        {/* Image with Hover Overlay */}
        <div
          className="relative w-80 h-40 rounded-xl overflow-hidden border border-purple-500/40 
           group"
        >
          <img
            src="/images/AlysWebApp.png"
            alt="Aly's Craft Web App"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0 bg-black/50 flex items-center justify-center 
            opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <a
              href="https://astrocodemir.github.io/AlysCraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-pink-600"
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
          </div>
        </div>

        {/* Tags */}
        <div className="items-center flex flex-wrap justify-center gap-2 pt-4">
          <div className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400">
            Web Development
          </div>
          <div className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400">
            AI Integration
          </div>
          <div className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400">
            HTML5
          </div>
          <div className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400">
            Tailwind
          </div>
          <div className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400">
            JavaScript
          </div>
        </div>
      </div>
    </div>
        {/* Feature 2 */}
        <div>
      <div
        className="relative p-10 rounded-xl border border-purple-500/30 
          outline outline-1 outline-purple-500/40
          bg-gray-900/80
          hover:outline-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
          flex flex-col items-center text-center gap-4"
      >
          {/* Title */}
            <h3 className="text-2xl font-semibold text-purple-400 feature-title">
              Lucent Chandelier
            </h3>
            {/* Description */}
            <p className="text-base text-gray-300 feature-desc max-w-xs">
              A web landing page that showcases the Chandeliers.
            </p>
            {/* Image with Hover Overlay */}
            <div className="relative w-80 h-40 rounded-xl overflow-hidden border border-purple-500/40 
           group">
              <img
                src="/images/Lucent.png"
                alt="Lucent Web App"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
            opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <a
              href="https://astrocodemir.github.io/LucentChandelier/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-pink-600"
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
              </div>
            </div>

            {/* Tags */}
            <div className="items-center flex flex-wrap justify-center gap-2 pt-4">
              {["Web Development", "AI Integration", "HTML5", "Tailwind", "JavaScript"].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
                {/* Feature 3 */}
        <div>
      <div
        className="relative p-10 rounded-xl border border-purple-500/30 
          outline outline-1 outline-purple-500/40
          bg-gray-900/80
          hover:outline-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
          flex flex-col items-center text-center gap-4"
      >
            <h3 className="text-2xl font-semibold text-purple-400 feature-title">
              Bakes Cookies
            </h3>
            <p className="text-base text-gray-300 feature-desc max-w-xs">
              Showcase of the Cookies Bakes from home to yours.
            </p>

            <div className="relative w-80 h-40 rounded-xl overflow-hidden border border-purple-500/40 group">
              <img
                src="/images/BakesCookies.png"
                alt="Baked Web App"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center 
            opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
                <a
                  href="https://astrocodemir.github.io/BakesGoods-Cookies/"
                  target="_blank"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-pink-600 transition"
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
                      strokeWidth="2"
                      d="M14 3h7m0 0v7m0-7L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="items-center flex flex-wrap justify-center gap-2 pt-4">
              {["Web Development", "AI Integration", "HTML5", "Tailwind", "JavaScript"].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-purple-500/70 px-3 py-1 text-xs font-semibold text-purple-400 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
