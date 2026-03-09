import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { MenuSection } from "@/components/MenuSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuSection />
      <InfoSection />
      <Footer />
    </main>
  );
}
