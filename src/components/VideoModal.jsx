import React from 'react';
import { X, ExternalLink, Play, Film } from 'lucide-react';
import { bandInfo } from '../data/bandData';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-rock-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-orange-600 transition-colors"
          aria-label="Fechar Vídeo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player or Responsive Stage Showcase */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img 
            src="images/gallery/show-1.jpeg" 
            alt="Palco Livert ao Vivo" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-2xl mb-4 animate-pulse">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Banda Livert Ao Vivo</h3>
            <p className="text-sm text-slate-300 max-w-md mb-6">
              Assista às gravações ao vivo dos nossos shows, bastidores e solos eletrizantes no Instagram oficial!
            </p>
            <a
              href={bandInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-500 hover:to-orange-500 text-white font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-xl transition-all hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Vídeos no Instagram @bandalivert</span>
            </a>
          </div>
        </div>

        <div className="p-4 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>Gravação ao vivo - Tubarão/SC</span>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white font-bold uppercase"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
}
