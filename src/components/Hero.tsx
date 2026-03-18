export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1206] to-[#0a0a0a]" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(212,168,83,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Sax icon */}
        <div className="mb-8 text-gold text-6xl">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gold"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 4C32 4 28 8 28 14C28 20 32 22 32 28C32 34 28 38 28 44C28 50 32 56 32 60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="32" cy="14" r="3" fill="currentColor" opacity="0.6" />
            <circle cx="32" cy="28" r="3" fill="currentColor" opacity="0.6" />
            <circle cx="32" cy="42" r="3" fill="currentColor" opacity="0.6" />
            <path
              d="M28 56C28 56 24 58 20 58C16 58 14 56 14 52C14 48 18 46 22 46"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
          Sax House Music
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient-gold">SAMPY SAX</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Unforgettable Performances for Unforgettable Events
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all duration-200 hover:scale-105"
          >
            Book an Event
          </a>
          <a
            href="#music"
            className="px-8 py-3.5 border border-white/20 text-white font-medium rounded-full hover:border-gold/50 hover:text-gold transition-all duration-200"
          >
            Listen Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
