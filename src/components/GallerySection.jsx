import React, { useState } from 'react';
import { galleryImages, bandInfo } from '../data/bandData';
import { Images, Maximize2, X, ChevronLeft, ChevronRight, Download, Camera } from 'lucide-react';

export default function GallerySection({ initialIndex, modalOpen, setModalOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="galeria" className="py-24 bg-rock-900/60 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              Ao Vivo & Bastidores
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              Galeria de Fotos
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Confira a energia da Livert no palco em cliques de alta resolução.
            </p>
          </div>

          <a
            href={bandInfo.presskitPdf}
            download="PressKit-Banda-Livert.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <Download className="w-4 h-4 text-orange-400" />
            <span>Baixar Material de Mídia</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="rock-card rounded-2xl overflow-hidden group cursor-pointer border border-white/10 relative aspect-[4/3] bg-black"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest">
                  Registro Ao Vivo
                </span>
                <h3 className="text-lg font-black text-white">{image.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">{image.subtitle}</p>
              </div>

              {/* Zoom Icon Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-orange-600 transition-colors"
            aria-label="Fechar Foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors border border-white/10"
            aria-label="Foto Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors border border-white/10"
            aria-label="Próxima Foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div 
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/15"
            />
            <div className="mt-4 text-center">
              <h4 className="text-xl font-black text-white">{galleryImages[currentIndex].title}</h4>
              <p className="text-sm text-slate-400 mt-1">{galleryImages[currentIndex].subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
