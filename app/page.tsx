import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 px-10 w-full max-w-7xl mx-auto h-full bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
