const Footer = () => {
  return (
    <footer className="relative py-10 bg-gradient-to-b from-[#0f0a1a] to-[#05060d] text-gray-300 text-center">
      {/* Soft glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-sm"></div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white tracking-wide">
          Designed & Developed by <span className="text-purple-400">Francine Famorcan</span>
        </h3>
        <p className="text-sm text-gray-400">
          © 2025 All Rights Reserved • Crafted with passion under the stars ✨
        </p>
      </div>

      {/* Subtle nebula glow at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-purple-700/10 to-transparent blur-2xl"></div>
    </footer>
  );
};

export default Footer;
