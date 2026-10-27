import React from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function FloatingCTA() {
  const { marketing } = PROPERTY_INFO;

  return (
    <>
      {/* Floating Interactive WhatsApp Action Button (Desktop & Tablet) */}
      <aside className="fixed bottom-6 right-6 z-50 hidden lg:flex items-center group">
        <div className="mr-3 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-lg text-body-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-outline-variant/40">
          Tanya Brosur &amp; Unit Ready
        </div>
        <a
          href={getWhatsAppUrl('Halo Frans, saya ingin tanya ketersediaan unit dan promo Ruko Buana View.')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi WhatsApp Frans"
          className="relative w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-xl hover:bg-primary transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring pointer-events-none"></span>
          <span className="material-symbols-outlined text-[28px] relative z-10">chat</span>
        </a>
      </aside>

      {/* Sticky Bottom Conversion Ribbon for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
        <div className="bg-surface-container-lowest/95 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center justify-between gap-3 border border-outline-variant/30">
          <div className="flex flex-col min-w-0">
            <span className="font-label-sm text-label-sm text-error font-bold uppercase truncate">
              Unit Terbatas • Diskon 30Jt
            </span>
            <span className="font-label-md text-label-md text-on-surface font-bold truncate">
              Cash Bertahap 60x (Cukup KTP)
            </span>
          </div>
          <a
            href={getWhatsAppUrl('Halo Frans, saya tertarik dengan promo Ruko Buana View.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-md animate-pulse-glow font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Chat Frans</span>
          </a>
        </div>
      </div>
    </>
  );
}
