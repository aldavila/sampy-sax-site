import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Music />
      <Gallery />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
