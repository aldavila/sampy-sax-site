import Image from "next/image";

const packages = [
  {
    title: "Private Events",
    description:
      "Weddings, birthdays & corporate celebrations. Elegant saxophone performances tailored to your special occasion.",
    image: "/images/dj-1.jpeg",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    features: [
      "Customized setlist",
      "Background & spotlight sets",
      "Ceremony & reception",
    ],
  },
  {
    title: "DJ Set + Sax",
    description:
      "Saxophone meets DJ set for unforgettable vibes. The perfect combination of live instrumentation and electronic beats.",
    image: "/images/event-1.jpeg",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    features: [
      "Full DJ + Sax show",
      "Afro & Deep House sets",
      "Club & festival ready",
    ],
  },
  {
    title: "Live Shows",
    description:
      "Energetic performances on any stage. From intimate venues to large festivals, bringing the crowd to their feet.",
    image: "/images/stage-1.jpeg",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    features: [
      "Solo & band formats",
      "Festival performances",
      "International bookings",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Performance <span className="text-gradient-gold">Packages</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Every event deserves a unique experience. Choose the perfect package
            for your occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.title}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                i === 1
                  ? "border border-gold/20"
                  : "border border-white/5 hover:border-gold/20"
              }`}
            >
              {/* Background image */}
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              />
              {/* Dark overlay */}
              <div className={`absolute inset-0 ${
                i === 1
                  ? "bg-gradient-to-b from-gold/10 to-bg-card/95"
                  : "bg-bg-card/90"
              }`} />

              <div className="relative z-10">
                {i === 1 && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-black text-xs font-bold rounded-full uppercase tracking-wider">
                    Popular
                  </div>
                )}

                <div className="text-gold mb-6">{pkg.icon}</div>

                <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <svg
                        className="w-4 h-4 text-gold/60 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                    i === 1
                      ? "bg-gold text-black hover:bg-gold-light"
                      : "border border-gold/30 text-gold hover:bg-gold/10"
                  }`}
                >
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
