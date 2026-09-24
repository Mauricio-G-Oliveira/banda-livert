import React from 'react';
import { X, MapPin, Award, Music, Sparkles } from 'lucide-react';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-rock-900 border border-white/15 rounded-2xl overflow-hidden shadow-2xl animate-scaleUp text-slate-100 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-orange-600 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Member Photo Column */}
        <div className="md:w-5/12 bg-slate-950 relative overflow-hidden flex items-center justify-center min-h-[260px] md:min-h-full">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rock-900 via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Content Column */}
        <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 font-extrabold text-[11px] uppercase tracking-wider border border-orange-500/30">
                {member.role}
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-slate-300 font-semibold text-[11px]">
                {member.experience}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
              {member.name}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-medium">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{member.city}</span>
              <span className="mx-1.5 text-white/20">•</span>
              <Music className="w-3.5 h-3.5 text-amber-400" />
              <span>{member.instrument}</span>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4">
              <p className="whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span className="text-xs text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {member.badge}
            </span>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 uppercase transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
