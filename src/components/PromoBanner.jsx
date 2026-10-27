import React from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function PromoBanner({ onOpenBrochure }) {
  return (
    <div className="relative w-full bg-secondary text-on-secondary px-gutter-mobile lg:px-gutter py-2.5 text-center flex items-center justify-center gap-2 overflow-hidden shadow-inner z-30">
      <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
      
      <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-secondary-fixed animate-ping shrink-0"></span>
      
      <p className="font-label-md text-label-md relative z-10 font-medium tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>{PROPERTY_INFO.promo.bannerText}</span>
        <a
          href="#simulasi-promo"
          className="underline decoration-secondary-fixed hover:text-secondary-fixed font-bold inline-flex items-center gap-1 transition-colors ml-1"
        >
          Lihat Simulasi &amp; Syarat &rarr;
        </a>
      </p>
    </div>
  );
}
