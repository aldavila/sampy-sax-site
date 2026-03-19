"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - info */}
          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Book <span className="text-gradient-gold">Sampy Sax</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Ready to make your event unforgettable? Whether it&apos;s a
              wedding, corporate event, festival, or private party, let&apos;s
              create something special together.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/60">
                <svg
                  className="w-6 h-6 text-gold shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                <a
                  href="mailto:daniel.samper.sax@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  daniel.samper.sax@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <svg
                  className="w-5 h-5 text-gold/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Miami, FL & Medell&iacute;n, Colombia</span>
              </div>
            </div>

            {/* Presskit */}
            <a
              href="https://drive.google.com/file/d/1XPON9r35DLeZJLFkL_xEJFmNy5uf3LHW/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-200 text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Presskit
            </a>
          </div>

          {/* Right side - form */}
          <div className="bg-bg-card rounded-2xl p-8 border border-white/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-white/50">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={() => setSubmitted(true)}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Booking Inquiry | Sampy Sax Website"
                />

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">
                        Event Type
                      </label>
                      <select
                        name="event_type"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-bg-card">
                          Select event type
                        </option>
                        <option value="Wedding" className="bg-bg-card">
                          Wedding
                        </option>
                        <option value="Corporate" className="bg-bg-card">
                          Corporate Event
                        </option>
                        <option value="Birthday" className="bg-bg-card">
                          Birthday Party
                        </option>
                        <option value="Festival" className="bg-bg-card">
                          Festival
                        </option>
                        <option value="Club" className="bg-bg-card">
                          Club / Venue
                        </option>
                        <option value="Other" className="bg-bg-card">
                          Other
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="event_date"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Tell me about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all duration-200 hover:scale-[1.02]"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
