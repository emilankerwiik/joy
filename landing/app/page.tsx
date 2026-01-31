import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyThis from "@/components/WhyThis";
import { CopyInstructionsCard } from "@/components/CopyInstructions";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CopyInstructionsCard />
      <WhyThis />
      <HowItWorks />
    </main>
  );
}
