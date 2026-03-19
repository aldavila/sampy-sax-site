import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/calante-1.jpg"
              alt="Sampy Sax performing in an intimate bar setting"
              fill
              className="object-cover"
            />
            {/* Gold border accent */}
            <div className="absolute inset-0 rounded-2xl border border-gold/10" />
          </div>

          {/* Text content */}
          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Daniel{" "}
              <span className="text-gradient-gold">&ldquo;Sampy&rdquo;</span>{" "}
              Samper
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Sampy Sax (Daniel Samper) is a Colombian-American saxophonist
                and producer with over 15 years of experience on tenor, alto,
                and soprano saxophone, as well as clarinet. Trained at
                Miami&apos;s New World School of the Arts and Berklee College of
                Music, he blends afro-house, deep house, EDM, jazz, pop, R&B,
                and Latin rhythms.
              </p>
              <p>
                His sound was shaped by years of traveling and performing in
                streets, beaches, and stages across more than 56 countries,
                leading to performances at events such as Ultra Music Week, the
                Montreal Jazz Festival, and Lincoln Center. Now based between
                Miami and Medell&iacute;n, he creates electronic sax music that
                connects cultures and turns every show into a global experience.
              </p>
              <p>
                Blending saxophone melodies with Afro & Deep House rhythms,
                Daniel crafts a sound that&apos;s both soulful and innovative. A
                natural improviser, he can follow any melody and elevate every
                performance with spontaneous energy.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Afro House",
                "Deep House",
                "Jazz",
                "EDM",
                "Latin",
                "R&B",
              ].map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-1.5 text-xs tracking-wider uppercase border border-gold/20 text-gold/70 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
