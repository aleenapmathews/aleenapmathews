import Image from "next/image";
import Header from "./comonents/header";
import Section from "./comonents/section";
import Socials from "./comonents/socials";
import About from "./comonents/about";
import Education from "./comonents/education";
import Skills from "./comonents/skills";
import Contact from "./comonents/contact";

export default function Home() {
  return (
    <div >
      <Header />
      <Section />
      <Socials />
      <About/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  );
}
