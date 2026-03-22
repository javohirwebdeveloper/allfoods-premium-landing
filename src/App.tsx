import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navigation, Footer } from './components/Layout';
import { Hero, Concept, ValueProposition, HowItWorks, TrustSection, EarlyAccess } from './components/Sections';

function LandingPage() {
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

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/uz" element={<LandingPage />} />
          <Route path="/ru" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}
