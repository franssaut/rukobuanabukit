import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';

export default function PromoBanner({ onOpenBrochure }) {
  return (
    <div className="relative w-full bg-secondary text-on-secondary px-3 sm:px-gutter py-2 text-center flex items-center justify-center gap-2 overflow-hidden shadow-inner z-30">
      <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-label-md text-xs sm:text-label-md tracking-wide">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold uppercase text-[11px] tracking-wider shrink-0 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
          Promo Perdana
        </span>

        <span className="font-semibold text-white">
          Diskon Rp 30 Juta + Subsidi Perpanjangan UWTO Khusus 3 Unit Pertama!
        </span>

        <a
          href="#simulasi-promo"
          className="inline-flex items-center gap-0.5 text-secondary-fixed hover:text-white font-bold underline transition-colors"
        >
          <span>Lihat Syarat</span>
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
