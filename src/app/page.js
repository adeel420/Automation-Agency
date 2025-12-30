import Image from "next/image";
import Hero from "./components/home_subsections/Hero";
import { Services } from "./components/home_subsections/Services";
import { LiveDemos } from "./components/home_subsections/LiveDemo";
import { Process } from "./components/home_subsections/Process";
import { WhyChooseUs } from "./components/home_subsections/WhyChooseUs";
import { CallToAction } from "./components/home_subsections/CallToAction";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <LiveDemos />
      <Process />
      <WhyChooseUs />
      <CallToAction />
      <FloatingWhatsapp />
    </div>
  );
}
