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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
          Sax House Music
        </p>

        {/* Logo image replacing SAMPY SAX text */}
        <div className="mb-6">
          <Image
            src="/images/logo-new.png"
            alt="Sampy Sax"
            width={500}
            height={120}
            className="mx-auto w-auto max-w-[400px] md:max-w-[500px] h-auto"
            priority
          />
        </div>

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
