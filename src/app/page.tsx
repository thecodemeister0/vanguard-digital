import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Team";
import Expertise from "@/components/sections/Values";
import Reasons from "@/components/sections/Reasons";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Process />
      <Reasons />
      <Contact />
      <Footer />
    </>
  );
}
