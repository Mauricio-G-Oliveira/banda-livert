import React from 'react';
import { Calendar, Phone, Sparkles, Volume2, ArrowDown } from 'lucide-react';
import { bandInfo } from '../data/bandData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Concert Lighting & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-orange-600/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-amber-600/10 rounded-full blur-[130px]"></div>
        {/* Subtle grid lines & stage vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Origin Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
          <span>Rock • Pop • Flashback | Tubarão - SC</span>
        </div>

        {/* Big Rock Band Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight metallic-text mb-4 drop-shadow-2xl">
          LIVERT
        </h1>

        {/* Slogan from the Reference Mockup */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-slate-200 mb-6 rock-glow">
          SOM DE TUBARÃO PARA O MUNDO.
        </h2>

        {/* Short Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          Uma química única no palco e mais de 130 anos de bagagem musical somada. O melhor espetáculo ao vivo com os grandes sucessos que marcaram gerações.
        </p>

        {/* Band Group Presentation Image (Cutout) */}
        <div className="relative max-w-4xl mx-auto mb-10 group">
          <div className="relative mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-slate-900/60 via-black/80 to-rock-950">
            <img 
              src={bandInfo.bandCutoutImg} 
              alt="Banda Livert Integrantes" 
              className="w-full max-h-[380px] sm:max-h-[460px] object-contain mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Subtle Stage Gradient Fade at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-rock-950 via-rock-950/70 to-transparent"></div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={bandInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-orange-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>Contratar Show</span>
          </a>

          <a
            href="#agenda"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-orange-500/50 text-slate-200 hover:text-white font-bold text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl backdrop-blur-md transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5 text-orange-400" />
            <span>Ver Agenda</span>
          </a>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce hidden sm:block">
        <a href="#proximo-show" aria-label="Rolar para baixo">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
