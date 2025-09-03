import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CardEc from "@/components/CardEc";
import Voice from "@/components/Voice";
import CalcSection from "@/components/CalcSection";
import Logos from "@/components/Logos";
import DashBoard from "@/components/DashBoard";
import Features from "@/components/Features";
import FaQs from "@/components/FaQs";
import Contact from "@/components/Contact";
import ExploreSol from "@/components/ExploreSol";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Features />
      <CardEc />
      <DashBoard />
      <CalcSection />
      <FaQs />
      <Contact />
    </div>
  );
}
