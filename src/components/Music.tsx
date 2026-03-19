export default function Music() {
  return (
    <section id="music" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Listen
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The <span className="text-gradient-gold">Music</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            From the SNAX EP to live performances, hear the sound that&apos;s
            traveled 56+ countries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Spotify Embed */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </h3>
            <div className="rounded-xl overflow-hidden bg-bg-card border border-white/5">
              <iframe
                src="https://open.spotify.com/embed/artist/7q8DdoshopniCkTdPnDwjm?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>

          {/* YouTube Embed */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </h3>
            <div className="rounded-xl overflow-hidden bg-bg-card border border-white/5">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/1b9X76U01qo"
                  title="Sampy Sax - Watermelon"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Track list */}
            <div className="bg-bg-card rounded-xl border border-white/5 p-5">
              <h4 className="text-sm font-semibold text-gold/80 uppercase tracking-wider mb-3">
                SNAX EP
              </h4>
              <div className="space-y-2">
                {[
                  { name: "Watermelon (Radio Edit)", duration: "4:59" },
                  { name: "Nutella", duration: "5:08" },
                  { name: "Spicy Empanada", duration: "3:40" },
                  { name: "El Hummus", duration: "3:55" },
                  { name: "Banana Bread", duration: "4:44" },
                ].map((track, i) => (
                  <div
                    key={track.name}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/30 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                        {track.name}
                      </span>
                    </div>
                    <span className="text-xs text-white/30">
                      {track.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
