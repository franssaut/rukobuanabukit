import React, { useState } from 'react';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import LocationSection from './components/LocationSection';
import FloorplanSection from './components/FloorplanSection';
import SpecsSection from './components/SpecsSection';
import FinancingCalculator from './components/FinancingCalculator';
import DeveloperSection from './components/DeveloperSection';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import BrochureModal from './components/BrochureModal';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    src: '',
    alt: ''
  });

  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const handleOpenLightbox = (src, alt) => {
    setLightbox({
      isOpen: true,
      src,
      alt
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleCloseBrochure = () => {
    setIsBrochureOpen(false);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Top Fixed Header & Nav */}
      <Header onOpenBrochure={handleOpenBrochure} />

      {/* Main Content Area */}
      <main className="w-full pt-16 lg:pt-20 bg-surface flex-grow">
        {/* Shimmer Announcement Ribbon */}
        <PromoBanner onOpenBrochure={handleOpenBrochure} />

        {/* 1. Hero Showcase Bento */}
        <HeroSection onOpenLightbox={handleOpenLightbox} />

        {/* 2. 4-Pillar Metrics with Counter Animation */}
        <MetricsSection />

        {/* 3. Location, Corridors & Captive Market */}
        <LocationSection onOpenLightbox={handleOpenLightbox} />

        {/* 4. Floorplan, Ergonomics & Room Switcher */}
        <FloorplanSection
          onOpenLightbox={handleOpenLightbox}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 5. Building Specifications Table */}
        <SpecsSection />

        {/* 6. Payment Schemes & Interactive Mortgage / Installment Calculator */}
        <FinancingCalculator />

        {/* 7. Developer Bio & Executive Consultant Frans Rumah Batam */}
        <DeveloperSection />
      </main>

      {/* Floating WhatsApp Action & Mobile Ribbon */}
      <FloatingCTA />

      {/* Footer */}
      <Footer onOpenBrochure={handleOpenBrochure} />

      {/* Interactive Lightbox for High-Res Architectural Drawings & Map */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
      />

      {/* Brochure Request / Download Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={handleCloseBrochure}
      />
    </div>
  );
}
