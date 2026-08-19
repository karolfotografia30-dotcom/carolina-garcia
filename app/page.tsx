import { getPhotos, getFeaturedPhoto } from "@/lib/photos";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatButton from "@/components/layout/WhatsAppFloatButton";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Editorial from "@/components/sections/Editorial";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const photos = getPhotos();
  const featuredPhoto = getFeaturedPhoto() ?? {
    id: "quince-portada",
    src: "/paquetefotos/PAQUETE QUINCE AÑOS COMPLETO 2026_260814_122323_1.jpg",
    alt: "Quinceañera con vestido lila y flores — Carolina García Fotografía",
    category: "eventos" as const,
    tags: ["quince", "eventos"],
    featured: true,
    orientation: "portrait" as const,
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero featuredPhoto={featuredPhoto} />
        <Gallery photos={photos} />
        <Editorial photos={photos} />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
