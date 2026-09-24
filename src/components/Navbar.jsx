import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Calendar, Music, Sparkles } from 'lucide-react';
import { bandInfo } from '../data/bandData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'MÚSICAS', href: '#musicas' },
    { name: 'INTEGRANTES', href: '#integrantes' },
    { name: 'AGENDA', href: '#agenda' },
    { name: 'GALERIA', href: '#galeria' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={bandInfo.logoImg} 
              alt="Banda Livert Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-slate-300 hover:text-orange-400 transition-colors uppercase py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={bandInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-all"
              title="Instagram Oficial"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href={bandInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg shadow-lg shadow-orange-600/20 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Contratar Show</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-rock-900/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold tracking-wider text-slate-200 hover:text-orange-400 py-2 border-b border-white/5 uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={bandInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm uppercase py-3 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </a>
            <a
              href={bandInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-slate-200 text-sm font-medium py-2.5 rounded-lg hover:text-pink-400"
            >
              <Instagram className="w-4 h-4" />
              @bandalivert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
