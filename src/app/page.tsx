"use client";

import { Navigation, Footer } from '../components/Layout';
import { Hero, Concept, ValueProposition, HowItWorks, TrustSection, EarlyAccess } from '../components/Sections';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f9f9fb]">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Concept />
        <ValueProposition />
        <HowItWorks />
        <TrustSection />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
