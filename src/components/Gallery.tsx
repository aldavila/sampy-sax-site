"use client";

import Image from "next/image";

const images = [
  { src: "/images/hero-1.jpeg", alt: "Club performance close-up" },
  { src: "/images/about-1.jpg", alt: "Festival stage performance" },
  { src: "/images/about-2.jpg", alt: "Live performance" },
  { src: "/images/performance-1.jpg", alt: "DJ booth with red lighting" },
  { src: "/images/performance-2.jpg", alt: "Live saxophone performance" },
  { src: "/images/performance-3.jpg", alt: "Stage performance" },
  { src: "/images/calante-2.jpg", alt: "Bar performance" },
  { src: "/images/party-1.jpeg", alt: "Party atmosphere" },
  { src: "/images/crowd-1.jpeg", alt: "Crowd energy" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Moments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            From intimate venues to massive festivals — glimpses of the energy
            Sampy brings to every stage.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
