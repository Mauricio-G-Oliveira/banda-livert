import React, { useState } from 'react';
import { showsList, bandInfo } from '../data/bandData';
import { Calendar, MapPin, CheckCircle, Clock, Phone, Sparkles, Filter, ExternalLink } from 'lucide-react';

export default function ScheduleSection() {
  const [filter, setFilter] = useState('ALL');

  const filteredShows = showsList.filter((show) => {
    if (filter === 'PUBLIC') return show.type !== 'Privado';
    if (filter === 'PRIVATE') return show.type === 'Privado';
    return true;
  });

  return (
    <section id="agenda" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Calendar className="w-3.5 h-3.5" />
          Datas & Turnê
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Agenda de Shows
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Acompanhe onde a Livert vai tocar ou reserve uma data exclusiva para o seu evento.
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => setFilter('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              filter === 'ALL'
                ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Todos os Shows
          </button>
          <button
            onClick={() => setFilter('PUBLIC')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              filter === 'PUBLIC'
                ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Shows Abertos
          </button>
          <button
            onClick={() => setFilter('PRIVATE')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              filter === 'PRIVATE'
                ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Eventos Privados
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Shows Table / Cards List */}
        <div className="lg:col-span-8 space-y-3">
          {filteredShows.map((show) => {
            const isHighlight = show.status === 'Destaque';
            return (
              <div
                key={show.id}
                className={`rock-card p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 border ${
                  isHighlight 
                    ? 'border-amber-500/60 bg-gradient-to-r from-amber-950/30 via-slate-900 to-black shadow-lg shadow-amber-500/10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Date Block */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 border ${
                    isHighlight 
                      ? 'bg-gradient-to-b from-amber-500 to-orange-600 text-stone-950 border-amber-400 font-black' 
                      : 'bg-white/5 text-slate-200 border-white/10 font-extrabold'
                  }`}>
                    <span className="text-xl leading-none">{show.day}</span>
                    <span className="text-xs uppercase tracking-widest">{show.month}</span>
                  </div>

                  {/* Event & Venue */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${
                        show.type === 'Privado'
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      }`}>
                        {show.type}
                      </span>
                      {isHighlight && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-stone-950">
                          Imperdível
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white">{show.event}</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span>{show.venue} • <strong className="text-slate-300">{show.city}</strong></span>
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  <a
                    href={bandInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      isHighlight
                        ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/30'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Contratar Data</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Poster / Tour Callout Column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rock-card p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden">
            <span className="text-xs font-black text-orange-400 uppercase tracking-widest block mb-2">
              Cartaz Oficial de Shows
            </span>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-4 bg-black group cursor-pointer">
              <img 
                src="images/agenda-poster.jpeg" 
                alt="Cartaz Próximos Shows Banda Livert" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h4 className="text-lg font-black text-white mb-2">Quer a Livert na sua cidade?</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Disponibilidade de datas para pubs, aniversários, casamentos e grandes eventos em toda a região sul.
            </p>

            <a
              href={bandInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Consultar Disponibilidade</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
