import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sampy Sax — Sax House Music",
  description:
    "Sampy Sax (Daniel Samper) — Colombian-American saxophonist and producer. Blending saxophone with Afro & Deep House rhythms. Book for events, weddings, and live shows.",
  keywords: [
    "saxophone",
    "sax house",
    "live music",
    "DJ sax",
    "wedding saxophone",
    "Sampy Sax",
    "Daniel Samper",
  ],
  openGraph: {
    title: "Sampy Sax — Sax House Music",
    description:
      "Colombian-American saxophonist blending saxophone with Afro & Deep House rhythms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
