import React, { useState } from 'react';
import { members } from '../data/bandData';
import MemberModal from './MemberModal';
import { Users, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function MembersSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="integrantes" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5" />
          Formação Oficial
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Os Músicos da Livert
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Músicos experientes com histórico em grandes bandas autorais e projetos icônicos do cenário musical catarinense.
        </p>
      </div>

      {/* Members Grid - 5 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="rock-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl bg-slate-950/70"
          >
            {/* Portrait Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              
              {/* Badge overlay on top */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-orange-400 border border-white/10">
                  {member.instrument.split(' ')[0]}
                </span>
                <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-bold text-slate-300 border border-white/10">
                  {member.experience.split(' ')[0]} Anos
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-black text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-orange-500/90 uppercase tracking-wider mb-2">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-400 flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  {member.city}
                </p>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-orange-400 group-hover:text-amber-300">
                <span>Ver Biografia</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Member Modal */}
      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </section>
  );
}
