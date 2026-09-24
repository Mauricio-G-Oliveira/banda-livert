import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  ExternalLink, 
  Calendar, 
  Music2, 
  Film, 
  FileText, 
  Images, 
  PhoneCall, 
  Disc3, 
  CheckCircle2, 
  Download,
  Flame,
  Volume2
} from 'lucide-react';
import { bandInfo, showsList, galleryImages } from '../data/bandData';

export default function FeatureGrid({ onOpenVideoModal, onOpenGalleryModal }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  // Preview shows for the mini agenda card (first 4 shows)
  const miniAgenda = showsList.slice(3, 7);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 6-Card Grid matching the reference layout exactly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1. ÚLTIMO LANÇAMENTO / DESTAQUE MUSICAL */}
        <div className="rock-card rounded-xl p-5 flex flex-col justify-between border-t-2 border-t-orange-500">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black tracking-widest text-slate-100 uppercase flex items-center gap-2">
                <span className="text-orange-500">1.</span> REPERTÓRIO & LANÇAMENTO
              </h3>
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                <Disc3 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-spin text-emerald-400' : ''}`} />
                AO VIVO
              </span>
            </div>

            {/* Album Cover & Track Preview */}
            <div className="relative group rounded-lg overflow-hidden border border-white/10 bg-slate-950 mb-4 aspect-video flex items-center justify-center">
              <img 
                src="images/gallery/show-1.jpeg" 
                alt="Show Livert" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                <span className="text-[11px] font-bold tracking-wider text-orange-400 uppercase">Gravação ao Vivo</span>
                <p className="text-base font-extrabold text-white">Medley Clássicos do Rock & Pop</p>
                <p className="text-xs text-slate-300">Pink Floyd • Queen • Led Zeppelin • Barão</p>
              </div>

              {/* Play Button Overlay */}
              <button
                onClick={toggleAudio}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors group-hover:scale-110"
                aria-label={isPlayingAudio ? "Pausar Prévia" : "Tocar Prévia"}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/40">
                  {isPlayingAudio ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white ml-0.5" />}
                </div>
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-3">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Volume2 className="w-4 h-4 text-emerald-400" />
                {isPlayingAudio ? "Demonstração Sonora Ativa" : "Ouça trechos do som ao vivo"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={bandInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold text-center text-slate-200 border border-white/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                Vídeos no Instagram
              </a>

              <a
                href="#musicas"
                className="py-2 px-3 rounded-lg bg-orange-600/20 hover:bg-orange-600/30 text-xs font-bold text-orange-400 border border-orange-500/30 transition-colors"
              >
                Ver Repertório
              </a>
            </div>
          </div>
        </div>

        {/* 2. AGENDA DE SHOWS */}
        <div className="rock-card rounded-xl p-5 flex flex-col justify-between border-t-2 border-t-amber-500">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black tracking-widest text-slate-100 uppercase flex items-center gap-2">
                <span className="text-amber-500">2.</span> AGENDA DE SHOWS
              </h3>
              <a href="#agenda" className="text-[11px] font-bold text-amber-400 hover:underline uppercase">
                Ver Todos
              </a>
            </div>

            {/* Mini Table of shows */}
            <div className="space-y-2 mb-4">
              {miniAgenda.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 hover:border-amber-500/30 transition-colors text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-black text-amber-400 w-12 text-center bg-amber-500/10 py-1 rounded border border-amber-500/20">
                      {item.day} {item.month}
                    </span>
                    <div className="leading-tight">
                      <p className="font-bold text-slate-200 truncate max-w-[130px]">{item.event}</p>
                      <p className="text-[10px] text-slate-400">{item.city.split(' - ')[0]}</p>
                    </div>
                  </div>

                  <a
                    href={bandInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black font-extrabold text-[10px] uppercase tracking-wider transition-all"
                  >
                    Contratar
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">Datas para todo o estado de SC</span>
            <a
              href="#agenda"
              className="text-amber-400 hover:text-amber-300 font-bold text-xs uppercase flex items-center gap-1"
            >
              Agenda Completa &rarr;
            </a>
          </div>
        </div>

        {/* 3. VÍDEO EM DESTAQUE */}
        <div className="rock-card rounded-xl p-5 flex flex-col justify-between border-t-2 border-t-sky-500">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black tracking-widest text-slate-100 uppercase flex items-center gap-2">
                <span className="text-sky-400">3.</span> VÍDEO EM DESTAQUE
              </h3>
              <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30 flex items-center gap-1">
                <Film className="w-3 h-3" />
                AO VIVO
              </span>
            </div>

            {/* Video Thumbnail */}
            <div 
              onClick={onOpenVideoModal}
              className="relative group rounded-lg overflow-hidden border border-white/10 bg-slate-950 mb-4 aspect-video flex items-center justify-center cursor-pointer"
            >
              <img 
                src="images/gallery/show-5.jpeg" 
                alt="Vídeo Show Livert" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Apresentação Ao Vivo</span>
                <p className="text-sm sm:text-base font-extrabold text-white">Energia & Presença de Palco</p>
              </div>

              {/* Big Red/Orange YouTube style Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-slate-300 font-semibold">Assista à performance da banda</span>
            <button
              onClick={onOpenVideoModal}
              className="text-xs font-bold text-sky-400 hover:text-sky-300 uppercase tracking-wider"
            >
              Assistir ao Clipe
            </button>
          </div>
        </div>

        {/* 4. BIO */}
        <div className="rock-card rounded-xl p-5 flex flex-col justify-between border-t-2 border-t-slate-400">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black tracking-widest text-slate-100 uppercase flex items-center gap-2">
                <span className="text-slate-400">4.</span> BIO & HISTÓRIA
              </h3>
              <span className="text-[11px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                Desde 2025
              </span>
            </div>

            <div className="rounded-lg overflow-hidden border border-white/10 mb-4 h-36 bg-black/60 relative group">
              <img 
                src="images/gallery/show-2.jpeg" 
                alt="Banda Livert História" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex flex-col justify-end">
                <p className="text-xs font-extrabold text-white">Idealizada por André & Maurício</p>
                <p className="text-[11px] text-slate-300">Tubarão - Santa Catarina</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
              {bandInfo.shortBio}
            </p>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <a 
              href={bandInfo.presskitPdf}
              download="PressKit-Banda-Livert.pdf"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-orange-400" />
              Press Kit PDF
            </a>
            <a
              href="#sobre"
              className="py-1 px-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        {/* 5. GALERIA */}
        <div className="rock-card rounded-xl p-5 flex flex-col justify-between border-t-2 border-t-pink-500">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black tracking-widest text-slate-100 uppercase flex items-center gap-2">
                <span className="text-pink-500">5.</span> GALERIA DE FOTOS
              </h3>
              <a href="#galeria" className="text-[11px] font-bold text-pink-400 hover:underline uppercase">
                Ver Todas
              </a>
            </div>

            {/* Photo Mosaic */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {galleryImages.slice(0, 3).map((img, i) => (
                <div 
                  key={img.id}
                  onClick={() => onOpenGalleryModal(i)}
                  className="rounded-lg overflow-hidden border border-white/10 aspect-square cursor-pointer group relative bg-black"
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Images className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Confira os melhores registros dos nossos shows, bastidores e a energia pura do público.
            </p>
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Fotos em alta resolução</span>
            <a
              href="#galeria"
              className="text-pink-400 hover:text-pink-300 font-bold text-xs uppercase"
            >
              Explorar Galeria &rarr;
            </a>
          </div>
        </div>

        {/* 6. CONTRATAÇÃO & SHOWS (Substituindo a Loja Comercial por Booking Premium!) */}
        <div className="rock-card rounded-xl p-5 flex flex-col justify-between border-t-2 border-t-emerald-500 bg-gradient-to-b from-stone-900 to-slate-950">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-black tracking-widest text-slate-100 uppercase flex items-center gap-2">
                <span className="text-emerald-400">6.</span> CONTRATAR SHOWS
              </h3>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                AGENDA ABERTA
              </span>
            </div>

            {/* Booking Badges */}
            <div className="p-3.5 rounded-lg bg-black/60 border border-white/10 mb-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pubs, Bares & Casas Noturnas</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Casamentos & Formaturas Exclusivas</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Encontros de Motos & Festivais</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Estrutura Profissional de Palco & Som</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 space-y-2">
            <a
              href={bandInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-lg shadow-lg shadow-emerald-600/20 transition-all hover:scale-102"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Solicitar Orçamento no WhatsApp
            </a>

            <p className="text-[10px] text-center text-slate-400">
              Atendimento direto: <strong className="text-slate-200">{bandInfo.phoneDisplay}</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
