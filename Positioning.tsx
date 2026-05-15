import Hero from "@/components/sections/Hero";
import Positioning from "@/components/sections/Positioning";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Positioning />
      <Services />
      <Philosophy />
      <Footer />
    </main>
  );
}
