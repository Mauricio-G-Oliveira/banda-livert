import React from 'react';
import { Calendar, MapPin, ArrowRight, Flame } from 'lucide-react';
import { nextShow, bandInfo } from '../data/bandData';

export default function NextShowBanner() {
  return (
    <div id="proximo-show" className="w-full bg-gradient-to-r from-stone-900 via-neutral-900 to-stone-900 border-y border-amber-500/30 py-4 px-4 sm:px-6 relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Show Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 text-amber-400 font-black text-xs uppercase tracking-widest border border-amber-500/40">
            <Flame className="w-3.5 h-3.5" />
            PRÓXIMO SHOW
          </span>

          <div className="flex items-center gap-2 text-white font-extrabold text-base sm:text-lg tracking-wide uppercase">
            <span className="text-amber-400">{nextShow.date}</span>
            <span className="text-white/40">|</span>
            <span>{nextShow.title}</span>
            <span className="text-white/40">|</span>
            <span className="text-slate-300 font-semibold text-sm sm:text-base flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-400 inline" />
              {nextShow.city}
            </span>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={bandInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-md shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>CONTRATAR SHOW / INGRESSOS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
