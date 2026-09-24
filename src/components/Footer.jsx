import React from 'react';
import { bandInfo } from '../data/bandData';
import { Instagram, Phone, ArrowUp, Heart, Sparkles, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Logo & About */}
          <div className="md:col-span-2 space-y-4">
            <img 
              src={bandInfo.logoImg} 
              alt="Banda Livert" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              O melhor do Rock, Pop e Flashback com mais de 130 anos de bagagem musical somada. De Tubarão/SC para os melhores palcos do Brasil.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Tubarão - Santa Catarina - Brasil</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-orange-400 transition-colors">Sobre a Banda</a></li>
              <li><a href="#musicas" className="hover:text-orange-400 transition-colors">Repertório</a></li>
              <li><a href="#integrantes" className="hover:text-orange-400 transition-colors">Integrantes</a></li>
              <li><a href="#agenda" className="hover:text-orange-400 transition-colors">Agenda de Shows</a></li>
              <li><a href="#galeria" className="hover:text-orange-400 transition-colors">Galeria de Fotos</a></li>
              <li><a href="#contato" className="hover:text-orange-400 transition-colors">Contato & Shows</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Booking */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-widest">Contatos Diretos</h4>
            <div className="flex flex-col gap-2">
              <a
                href={bandInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
              >
                <Phone className="w-4 h-4 fill-emerald-400" />
                <span>{bandInfo.phoneDisplay}</span>
              </a>
              <a
                href={bandInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-pink-400 hover:text-pink-300 transition-colors font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>@bandalivert</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={bandInfo.presskitPdf}
                download="PressKit-Banda-Livert.pdf"
                className="text-xs text-slate-300 hover:text-white underline"
              >
                Download do Press Kit Completo (.pdf)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Banda Livert. Todos os direitos reservados.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-orange-400 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
