import React, { useState } from 'react';
import { musicRepertoire, eventServices, bandInfo } from '../data/bandData';
import { Music, Radio, Disc, Sparkles, CheckCircle2, Phone, Volume2 } from 'lucide-react';

export default function RepertoireSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="musicas" className="py-24 bg-rock-900/40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5" />
            Setlist & Vertentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Repertório Inesquecível
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Uma seleção precisa com os maiores hinos do Rock mundial, Pop Rock dançante e Flashback dos anos 70, 80 e 90 que todo público sabe cantar.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {musicRepertoire.map((item, index) => (
            <div 
              key={index}
              className="rock-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-amber-500/40 relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Music className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {item.category}
                </h3>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Artistas & Bandas no Repertório:
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  {item.artists}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Suitable Events Grid */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-stone-900/90 via-slate-900/90 to-stone-900/90 border border-white/10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-orange-400 uppercase tracking-widest block mb-2">
              Estrutura Flexível
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              O Show Certo Para o Seu Evento
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventServices.map((service, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{service.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={bandInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-orange-600/30 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Solicitar Repertório Completo & Orçamento</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
