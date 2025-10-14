import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
// import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer />
      <ScrollIndicator />
    </main>
  );
}
