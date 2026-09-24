import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NextShowBanner from './components/NextShowBanner';
import FeatureGrid from './components/FeatureGrid';
import AboutSection from './components/AboutSection';
import MembersSection from './components/MembersSection';
import RepertoireSection from './components/RepertoireSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import ContactBookingSection from './components/ContactBookingSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { Phone } from 'lucide-react';
import { bandInfo } from './data/bandData';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState(0);

  const handleOpenGalleryModal = (index) => {
    setInitialGalleryIndex(index);
    setIsGalleryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-rock-950 text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Próximo Show Banner (Reference Mockup Element) */}
        <NextShowBanner />

        {/* 3. 6-Card Dashboard Feature Grid (Direct Reference Model) */}
        <FeatureGrid 
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          onOpenGalleryModal={handleOpenGalleryModal}
        />

        {/* 4. História & Origem da Banda Livert */}
        <AboutSection />

        {/* 5. Integrantes (Individual Members Photos & Bio from Press Kit) */}
        <MembersSection />

        {/* 6. Músicas & Repertório */}
        <RepertoireSection />

        {/* 7. Agenda de Shows */}
        <ScheduleSection />

        {/* 8. Galeria de Fotos */}
        <GallerySection 
          initialIndex={initialGalleryIndex}
          modalOpen={isGalleryModalOpen}
          setModalOpen={setIsGalleryModalOpen}
        />

        {/* 9. Contratação & Contato via WhatsApp */}
        <ContactBookingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={bandInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp da Banda Livert"
      >
        <Phone className="w-7 h-7 fill-white animate-pulse" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Contratar Show no WhatsApp
        </span>
      </a>
    </div>
  );
}
