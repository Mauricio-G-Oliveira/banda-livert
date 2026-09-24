import React, { useState } from 'react';
import { bandInfo } from '../data/bandData';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  Send, 
  Calendar, 
  Check, 
  Copy, 
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function ContactBookingSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    tipoEvento: 'Pub / Casa de Show',
    data: '',
    cidade: '',
    mensagem: ''
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(bandInfo.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, Banda Livert! Meu nome é *${formData.nome || 'Cliente'}*.
Gostaria de solicitar orçamento para um show:
🎸 *Tipo de Evento:* ${formData.tipoEvento}
📅 *Data Pretendida:* ${formData.data || 'A definir'}
📍 *Cidade / Local:* ${formData.cidade || 'Tubarão/Região'}
💬 *Mensagem:* ${formData.mensagem || 'Gostaria de saber a disponibilidade e valores!'}`;

    const url = `https://wa.me/55${bandInfo.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Info & Booking Guarantee */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Contratação & Shows
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Leve a Livert para o seu evento.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Seja para pubs, casas noturnas, casamentos inesquecíveis ou festivais, a Livert leva a energia definitiva do Rock e Pop com total profissionalismo.
          </p>

          {/* Quick Direct Contacts */}
          <div className="space-y-3 pt-2">
            {/* WhatsApp Direct Card */}
            <a
              href={bandInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 hover:border-emerald-500 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                  <Phone className="w-6 h-6 fill-emerald-400 text-transparent" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 block">WhatsApp Oficial</span>
                  <span className="text-base sm:text-lg font-black text-white">{bandInfo.phoneDisplay}</span>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-stone-950 font-black text-xs uppercase tracking-wider group-hover:scale-105 transition-transform">
                Chamar
              </span>
            </a>

            {/* Instagram Card */}
            <a
              href={bandInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-r from-pink-950/60 to-slate-900 border border-pink-500/30 hover:border-pink-500 transition-all flex items-center justify-between group shadow-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/40">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-pink-400 block">Instagram Oficial</span>
                  <span className="text-base sm:text-lg font-black text-white">@bandalivert</span>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-pink-500 text-white font-black text-xs uppercase tracking-wider group-hover:scale-105 transition-transform">
                Seguir
              </span>
            </a>

            {/* Location & Coverage */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-sky-400 block">Base de Operações</span>
                <span className="text-sm sm:text-base font-bold text-white">Tubarão - SC (Atendendo todo o Sul e Brasil)</span>
              </div>
            </div>
          </div>

          {/* Copy Phone button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyPhone}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-orange-400" />}
              <span>{copied ? 'Número copiado com sucesso!' : 'Clique para copiar o número'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Fast Quote Generator Form */}
        <div className="lg:col-span-7">
          <div className="rock-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl relative">
            <div className="mb-6">
              <span className="text-xs font-black text-orange-400 uppercase tracking-widest block mb-1">
                Orçamento Rápido via WhatsApp
              </span>
              <h3 className="text-2xl font-black text-white">Preencha os Dados do Evento</h3>
              <p className="text-xs text-slate-400 mt-1">
                Ao clicar em enviar, você será direcionado ao WhatsApp da banda com a proposta pronta!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Seu Nome / Empresa
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Tipo de Evento
                  </label>
                  <select
                    value={formData.tipoEvento}
                    onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="Pub / Casa Noturna">Pub / Casa Noturna</option>
                    <option value="Casamento">Casamento</option>
                    <option value="Aniversário / Festa Privada">Aniversário / Festa Privada</option>
                    <option value="Festival / Evento Municipal">Festival / Evento Municipal</option>
                    <option value="Encontro de Motos / Carros">Encontro de Motos / Carros</option>
                    <option value="Evento Corporativo">Evento Corporativo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Data Pretendida
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 15 de Novembro"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  >
                  </input>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Cidade & Local do Show
                </label>
                <input
                  type="text"
                  placeholder="Ex: Tubarão, Laguna, Criciúma, Florianópolis..."
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Mensagem Adicional / Detalhes
                </label>
                <textarea
                  rows={3}
                  placeholder="Conte um pouco sobre o horário previsto, estrutura de som do local, etc..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider py-4 px-6 rounded-xl shadow-xl shadow-orange-600/30 transition-all hover:scale-102 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Proposta Diretamente no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
