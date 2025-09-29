export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Top Gradient Background */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] 
          -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff4d6d] 
          to-[#6a5cff] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72rem] animate-blob"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1)",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="mx-auto max-w-xl py-32 sm:py-32 lg:py-36">
        <div className="flex flex-col items-center text-center px-6 lg:px-8">
          {/* Hero Heading */}
          <div className="relative inline-block">
            <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             bg-clip-text text-transparent 
             text-center">
              Francine Famorcan
            </h1>
          </div>

          {/* Hero Subtitle */}
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Creative Web Designer and Innovator. <br />
            Creating beautiful and functional digital experiences
          </p>

          {/* CTA Buttons */}
          <div className="mt-8">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/portfolio"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/10 outline outline-1 outline-purple-500/40 transition-[outline-color,background-color] duration-200 ease-in-out hover:outline-purple-500/80 hover:bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg focus-visible:outline-indigo-500 focus-visible:outline-1 focus-visible:outline-offset-2"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/AstroCodeMir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              {/* Add your GitHub SVG icon here */}
            </a>
            {/* LinkedIn, Instagram, Facebook... */}
          </div>
        </div>
      </div>

      {/* Space Dust Stars */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-black">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle delay-300" />
        <div className="absolute top-[20%] left-[70%] w-1.5 h-1.5 bg-gray-200 rounded-full animate-twinkle delay-800" />
        <div className="absolute top-[35%] left-[40%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-1200" />
        {/* Add more stars as needed */}
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1)",
          }}
        />
      </div>
    </div>
  );
}
