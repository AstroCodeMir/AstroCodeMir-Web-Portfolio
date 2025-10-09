// components/Background.tsx
export default function Background() {
  return (
    <>
      {/* 🌌 Space Dust Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#0b0f19]">
        {/* Stars (slightly tinted based on palette) */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-[#E5E5E5] rounded-full animate-twinkle delay-300"></div>
        <div className="absolute top-[20%] left-[70%] w-1.5 h-1.5 bg-[#8A8FAD] rounded-full animate-twinkle delay-800"></div>
        <div className="absolute top-[35%] left-[40%] w-0.5 h-0.5 bg-[#FFFFFF] rounded-full animate-twinkle delay-1200"></div>
        <div className="absolute top-[45%] left-[80%] w-1 h-1 bg-[#6C63FF] rounded-full animate-twinkle delay-2000"></div>
        <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-[#00F5D4] rounded-full animate-twinkle delay-900"></div>
        <div className="absolute top-[75%] left-[60%] w-1.5 h-1.5 bg-[#E5E5E5] rounded-full animate-twinkle delay-400"></div>
        <div className="absolute top-[85%] left-[10%] w-1 h-1 bg-[#8A8FAD] rounded-full animate-twinkle delay-1600"></div>
        <div className="absolute top-[90%] left-[50%] w-0.5 h-0.5 bg-[#FFFFFF] rounded-full animate-twinkle delay-600"></div>
        <div className="absolute top-[95%] left-[80%] w-1 h-1 bg-[#6C63FF] rounded-full animate-twinkle delay-1300"></div>
        <div className="absolute top-[5%] left-[90%] w-1 h-1 bg-[#00F5D4] rounded-full animate-twinkle delay-1000"></div>
      </div>

      {/* 💫 Gradient Blob — now neon glow theme */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu 
        overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] 
          -translate-x-1/2 bg-gradient-to-tr from-[#6C63FF] to-[#00F5D4] 
          opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </>
  );
}
