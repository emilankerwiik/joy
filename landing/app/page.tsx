import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import { CopyInstructionsCard } from "@/components/CopyInstructions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <CopyInstructionsCard />
      <Footer />
    </main>
  );
}
