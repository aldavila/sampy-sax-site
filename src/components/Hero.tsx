import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/egypt.jpg"
        alt="Sampy Sax performing in front of the Pyramids of Giza"
        fill
        className="object-cover"
        priority
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#19142A]/70 via-[#19142A]/40 to-[#19142A]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#19142A]/30 via-transparent to-[#19142A]/30" />

      {/* Isotipo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/isotipo.png"
          alt=""
          width={500}
          height={500}
          className="opacity-[0.04] w-[500px] h-auto"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Isotipo icon */}
        <div className="mb-8">
          <Image
            src="/images/isotipo.png"
            alt="Sampy Sax isotipo"
            width={56}
            height={56}
            className="mx-auto mb-4 w-14 h-14 opacity-80"
          />
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
