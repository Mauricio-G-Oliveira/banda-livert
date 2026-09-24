import React from 'react';
import { Download, Award, Music, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { bandInfo } from '../data/bandData';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-rock-900/60 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <img 
                src="images/gallery/show-2.jpeg" 
                alt="Banda Livert no camarim" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <span className="text-orange-400 font-bold text-xs uppercase tracking-widest">Desde 2025</span>
                <h3 className="text-2xl font-black text-white">Banda Livert</h3>
                <p className="text-sm text-slate-300">Tubarão, Santa Catarina - Brasil</p>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="block text-3xl font-black text-orange-400">130+</span>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Anos de Estrada Somados</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="block text-3xl font-black text-amber-400">100%</span>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Ao Vivo & Sem Playback</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story from Official Press Kit */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Nossa História & Propósito
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Uma trajetória feita de paixão, química e pura pressão no palco.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-white font-bold">Banda Livert</strong> surgiu em 2025, idealizada pelos grandes amigos <strong className="text-orange-400">André (tecladista)</strong> e <strong className="text-orange-400">Maurício (baixista)</strong>, ambos com longa e consagrada trajetória nos palcos de Santa Catarina.
              </p>
              <p>
                O projeto nasceu com o propósito inegociável de oferecer shows dinâmicos e de altíssimo nível técnico, reunindo músicos virtuosos que já haviam dividido o palco em diversas outras bandas históricas da região sul catarinense.
              </p>
              <p>
                Com uma formação sólida e uma química ímpar, a Livert entrega um espetáculo eletrizante, com repertório cuidadosamente selecionado que passeia pelos maiores hinos do <strong className="text-white">Rock Clássico, Pop Rock e Flashback</strong> dos anos 70, 80, 90 e 2000. O resultado são apresentações envolventes que emocionam e agitam a plateia do primeiro acorde até o bis final.
              </p>
            </div>

            {/* Official Closing Press Kit Quote */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-orange-950/40 via-stone-900 to-black border-l-4 border-orange-500 text-sm text-slate-300 italic">
              "Nossa trajetória é feita de paixão pela música, dedicação e o desejo de proporcionar momentos únicos. Estamos prontos para somar ao seu evento com o melhor da música ao vivo, criando juntos experiências que ficam para sempre na memória."
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={bandInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/20 transition-all hover:scale-105"
              >
                <span>Falar com a Banda</span>
              </a>

              <a
                href={bandInfo.presskitPdf}
                download="PressKit-Banda-Livert-Oficial.pdf"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all"
              >
                <Download className="w-4 h-4 text-orange-400" />
                <span>Baixar Press Kit Oficial (PDF)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
