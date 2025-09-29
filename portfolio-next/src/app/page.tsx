import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    
    <main className="space-y-24">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </main>
    
  );
}
