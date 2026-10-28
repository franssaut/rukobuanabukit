import React from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function HeroSection({ onOpenLightbox }) {
  return (
    <section className="relative w-full bg-surface-bright py-space-xl lg:py-space-2xl overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        {/* Badge Bar */}
        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-bold shadow-sm hover:scale-105 transition-transform cursor-default">
            <span className="material-symbols-outlined text-[16px]">groups</span>
            Pusat Captive Market: Jantung Pemukiman Padat Penduduk
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:scale-105 transition-transform cursor-default">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Official Listing PT. Buana Cipta Propertindo
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error text-on-error font-label-md text-label-md uppercase tracking-wider shadow-sm cursor-default font-bold">
            <span className="material-symbols-outlined text-[16px] animate-pulse" aria-hidden="true">hourglass_top</span>
            Unit Terbatas
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-colors cursor-default">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Batu Aji, Kota Batam
          </span>
        </div>

        {/* Main Headline Grid (Editorial Asymmetric: 8 cols / 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start mb-space-xl">
          <div className="lg:col-span-8 space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold hover:bg-secondary-fixed-dim transition-colors">
              <span className="material-symbols-outlined text-[20px] text-secondary">store</span>
              RUKO DI KAWASAN PADAT PENDUDUK BATU AJI
            </div>
            
            <p className="font-label-lg text-label-lg uppercase tracking-widest text-secondary font-bold flex items-center gap-2">
              <span className="w-8 h-[2px] bg-secondary inline-block"></span>
              Kawasan Komersial Padat Penduduk
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-display text-on-surface font-bold leading-[1.08] tracking-tight">
              Pusat Bisnis Strategis di Jantung Aktivitas Batu Aji.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Investasi ruko komersial 2 lantai modern rancangan Cipta Group dengan captive market ribuan kepala keluarga, arus lalu lintas padat 24 jam, dan skema pembayaran paling fleksibel di Kota Batam.
            </p>

            {/* Quick Feature Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md bg-surface-container-low px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-[18px]">aspect_ratio</span>
                <span>Dimensi 4m × 17.5m (LT 70 m²)</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md bg-surface-container-low px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-[18px]">layers</span>
                <span>Konstruksi 2 Lantai Beton</span>
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md bg-surface-container-low px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-[18px]">directions_car</span>
                <span>Area Parkir &amp; Loading Luas</span>
              </div>
            </div>
          </div>

          {/* Sticky Highlight Banner Box with Interactive Pulse */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-md space-y-space-md border border-outline-variant/30 hover:shadow-xl transition-all duration-300 animate-float">
            <div className="relative overflow-hidden inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span className="relative z-10">Skema Unggulan Developer</span>
              <span className="absolute inset-0 animate-shimmer"></span>
            </div>

            <div className="space-y-1">
              <p className="font-label-md text-label-md text-on-surface-variant">Kemudahan Transaksi Langsung:</p>
              <h2 className="font-headline-md text-headline-md text-secondary font-bold tracking-tight leading-tight">
                CASH BERTAHAP 60X!
              </h2>
              <p className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[20px]">badge</span>
                Tanpa Ribet, Cukup KTP Saja
              </p>
            </div>

            <div className="p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm space-y-1.5 border border-outline-variant/20">
              <div className="flex items-center justify-between text-on-surface font-semibold">
                <span>Keuntungan Spesial:</span>
                <span className="text-primary font-bold">Terjamin Resmi</span>
              </div>
              <p className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>Diskon instan <strong className="text-on-surface">Rp 30.000.000</strong> (3 unit)</span>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                <span>Perlindungan izin <strong className="text-on-surface">Perpanjangan UWTO</strong></span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl('Halo Frans, saya tertarik dengan skema Cash Bertahap 60x dan Diskon Rp 30 Juta Ruko Buana View.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all shadow-md hover:shadow-lg animate-pulse-glow"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Klaim Promo via WhatsApp
              </a>
              <p className="text-center font-label-sm text-label-sm text-on-surface-variant">
                Marketing Resmi: <strong>Frans (0823 9105 9216)</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Hero Visual Gallery Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
          {/* Main Perspective Facade */}
          <div
            onClick={() => onOpenLightbox('/assets/hero-facade.png', 'Perspektif Fasad Modern Ruko Buana View')}
            className="md:col-span-8 relative rounded-xl overflow-hidden shadow-lg bg-surface-container group min-h-[380px] lg:min-h-[460px] cursor-pointer"
          >
            <img
              src="/assets/hero-facade.webp"
              alt="Perspektif Fasad Modern Ruko Buana View Batu Aji Batam"
              width="1132"
              height="1600"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Zoom hint badge */}
            <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-md text-on-surface p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              <span className="material-symbols-outlined text-[20px]">zoom_in</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent flex flex-col justify-end p-space-lg text-inverse-on-surface transition-opacity duration-300">
              <div className="flex flex-wrap items-center gap-space-sm mb-2">
                <span className="px-2.5 py-1 rounded bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                  Desain Terkini
                </span>
                <span className="px-2.5 py-1 rounded bg-inverse-surface/90 text-inverse-on-surface font-label-sm text-label-sm backdrop-blur-sm">
                  2 Lantai Komersial • Parkir Depan Luas
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-inverse-on-surface group-hover:translate-x-1 transition-transform">
                Kombinasi Elegan Aksesibilitas Toko &amp; Kenyamanan Lantai Atas
              </h3>
            </div>
          </div>

          {/* Secondary Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-space-md">
            {/* Street / Community Overview Card */}
            <div
              onClick={() => onOpenLightbox('/assets/brochure-main.png', 'Brosur & Konsep Komersial Ruko Buana View')}
              className="relative rounded-xl overflow-hidden shadow-md bg-surface-container h-[220px] lg:h-[220px] group cursor-pointer"
            >
              <img
                src="/assets/brochure-main.webp"
                alt="Ruko Buana View di Kawasan Ramai dengan Target Pasar Keluarga"
                width="1194"
                height="1599"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-surface-container-lowest/80 backdrop-blur-md text-on-surface p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-transparent to-transparent flex flex-col justify-end p-space-md text-inverse-on-surface">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-semibold">
                  Trafik Komersial Ramai
                </span>
                <h4 className="font-label-lg text-label-lg text-inverse-on-surface leading-tight group-hover:translate-x-1 transition-transform">
                  Cocok untuk F&amp;B, Retail, Klinik, Kantor, &amp; Toko Bahan Kue
                </h4>
              </div>
            </div>

            {/* Feature Callout Panel */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between flex-grow interactive-card group border border-outline-variant/30">
              <div className="space-y-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Keleluasaan Usaha
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Dimensi Lapang 4m × 17.5m
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Lahan komersial memanjang dengan fleksibilitas tata ruang maksimal, dilengkapi area loading barang dan parkir lapang.
                </p>
              </div>
              <div className="pt-space-sm flex items-center justify-between font-label-md text-label-md text-primary font-bold">
                <span>Siap Operasional Cepat</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
