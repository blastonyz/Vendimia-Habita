import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Ecosystem from "@/components/Ecosystem";
import Security from "@/components/Security";
import Features from "@/components/Features";
import Trust from "@/components/Trust";
import AppPreview from "@/components/AppPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      <div className="pt-20">
        <Hero />
        <ProblemSolution />
        <Ecosystem />
        <Security />
        <Features />
        <Trust />
        <AppPreview />
        <CTA />
      </div>
      <Footer />
      <ChatWidget />
    </main>
  );
}
