import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <WhyWorkWithMe />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
