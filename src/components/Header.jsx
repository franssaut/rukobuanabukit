import React, { useState, useEffect } from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';
import PromoBanner from './PromoBanner';

export default function Header({ onOpenBrochure }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'kontak',
        'faq',
        'simulasi-promo',
        'spesifikasi',
        'denah-dan-tipe',
        'keunggulan-dan-lokasi'
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection('beranda');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'beranda', label: 'Beranda', href: '#' },
    { id: 'keunggulan-dan-lokasi', label: 'Keunggulan & Lokasi', href: '#keunggulan-dan-lokasi' },
    { id: 'denah-dan-tipe', label: 'Denah & Tipe', href: '#denah-dan-tipe' },
    { id: 'spesifikasi', label: 'Spesifikasi', href: '#spesifikasi' },
    { id: 'simulasi-promo', label: 'Simulasi Promo', href: '#simulasi-promo' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'kontak', label: 'Kontak', href: '#kontak' }
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
          : 'bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-16 lg:h-20 max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-lg">
          <a
            href="#"
            className="flex items-center gap-space-sm group"
            onClick={() => setActiveSection('beranda')}
          >
            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-all group-hover:rotate-6 shadow-sm">
              <span className="material-symbols-outlined text-[26px]">eco</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight leading-none group-hover:text-primary-container transition-colors">
                Buana View
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">
                Ruko Komersial
              </span>
            </div>
          </a>

          {/* Limited Unit Urgent Badge */}
          <div className="hidden xl:flex items-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm tracking-wider uppercase font-bold shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Unit Terbatas
            </span>
          </div>
        </div>

        {/* Desktop Nav Pills */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-space-xs py-1 rounded-xl bg-surface-container/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary font-semibold shadow-sm scale-100'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high hover:scale-105'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons Right */}
        <div className="flex items-center gap-space-sm">
          {/* Brosur PDF Button */}
          <button
            onClick={onOpenBrochure}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md hover:bg-secondary-fixed/50 hover:text-secondary-container transition-all shadow-[0_1px_4px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Brosur PDF</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden md:inline">Konsultasi: 0823 9105 9216 (Frans)</span>
            <span className="md:hidden">WhatsApp</span>
          </a>

          {/* User Icon Badge */}
          <a
            href={getWhatsAppUrl('Halo Frans, saya ingin konsultasi langsung.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-primary hover:bg-primary-container flex items-center justify-center shrink-0 shadow-sm transition-colors"
            title="Hubungi Frans"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Shimmer Announcement Ribbon Promo Perdana (Integrated & Never Covered) */}
      <PromoBanner onOpenBrochure={onOpenBrochure} />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest/98 backdrop-blur-xl border-t border-outline-variant/30 px-gutter-mobile py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg font-label-md text-label-md flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </a>
            ))}

            <div className="pt-2 border-t border-outline-variant/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-surface-container-low text-secondary font-label-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Download Brosur Lengkap
              </button>
              
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-primary-container text-on-primary font-label-md flex items-center justify-center gap-2 font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Chat Frans (0823 9105 9216)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
