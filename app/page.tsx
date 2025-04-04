import Skills from "@/components/Skills";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="h-full w-full  ">
      <div className="flex flex-col gap-20">
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
