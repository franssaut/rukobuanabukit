import React from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function LocationSection({ onOpenLightbox }) {
  const { landmarks } = PROPERTY_INFO;

  return (
    <section className="w-full py-space-2xl bg-surface" id="keunggulan-dan-lokasi">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="space-y-2">
            <p className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">near_me</span>
              Jaringan Arteri Utama Kota Batam
            </p>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold">
              Lokasi Emas di Jantung Aktivitas Batu Aji
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Akses penghubung cepat antara pusat industri Muka Kuning, galangan kapal Tanjung Uncang, pusat rekreasi Marina, dan Sekupang.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={getWhatsAppUrl('Halo Frans, saya ingin menjadwalkan survei ke lokasi proyek Ruko Buana View Batu Aji.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all hover:scale-105 shadow-sm border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Jadwalkan Survei Lokasi
            </a>
          </div>
        </div>

        {/* Map & Landmark Breakdown (7/5 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Visual Site Map Graphic (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-space-md rounded-xl shadow-md space-y-space-md interactive-card border border-outline-variant/30">
            <div
              onClick={() => onOpenLightbox('/assets/location-map.png', 'Peta Lokasi & Aksesibilitas Ruko Buana View')}
              className="relative rounded-lg overflow-hidden bg-surface-container group cursor-pointer"
            >
              <img
                src="/assets/location-map.webp"
                alt="Peta Lokasi dan Aksesibilitas Ruko Buana View Batu Aji"
                width="1132"
                height="1600"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain max-h-[520px] mx-auto transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Pulsing Pin Badge */}
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 group-hover:scale-105 transition-transform border border-outline-variant/30">
                <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  Titik Lokasi Ruko Buana View
                </span>
              </div>

              {/* Zoom hint */}
              <div className="absolute top-3 right-3 bg-surface-container-lowest/80 backdrop-blur-md text-on-surface p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              </div>
            </div>

            <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm border border-outline-variant/20">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">explore</span>
                Arah Cepat: Sekupang • Marina • Tg. Uncang • Muka Kuning • Tembesi
              </span>
              <span className="font-label-md text-label-md text-primary font-semibold">
                Trafik Terbuka &amp; Row Jalan Lebar
              </span>
            </div>
          </div>

          {/* POI Matrix Breakdown Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-space-md">
            {/* Primary Captive Market Card */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-md space-y-space-sm interactive-card border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[22px]">location_city</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Pusat Captive Market Riil
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                  Nilai Jual Utama
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Posisi sangat prima tepat di tengah pemukiman warga Batu Aji yang sudah ramai dan aktif:
              </p>
              
              <div className="space-y-2 pt-1">
                {landmarks.captive.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors"
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${
                        item.color === 'secondary' ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface font-bold">
                        {item.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Hubs */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm interactive-card border border-outline-variant/30">
              <div className="flex items-center gap-2 text-error">
                <span className="material-symbols-outlined text-[22px]">local_hospital</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Fasilitas Kesehatan Terdekat
                </h3>
              </div>
              <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                {landmarks.health.map((hosp, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-1.5 bg-surface-container-low px-3 rounded hover:bg-surface-container transition-colors"
                  >
                    <span className="font-medium text-on-surface">{hosp.name}</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      {hosp.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Hubs */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm interactive-card border border-outline-variant/30">
              <div className="flex items-center gap-2 text-secondary">
                <span className="material-symbols-outlined text-[22px]">storefront</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Pusat Belanja &amp; Keramaian
                </h3>
              </div>
              <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                {landmarks.shopping.map((shop, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-1.5 bg-surface-container-low px-3 rounded hover:bg-surface-container transition-colors"
                  >
                    <span className="font-medium text-on-surface">{shop.name}</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      {shop.badge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Hubs */}
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm interactive-card border border-outline-variant/30">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-[22px]">school</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Zona Pendidikan &amp; Komunitas
                </h3>
              </div>
              <ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
                {landmarks.education.map((edu, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between py-1.5 bg-surface-container-low px-3 rounded hover:bg-surface-container transition-colors"
                  >
                    <span className="font-medium text-on-surface">{edu.name}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {edu.badge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
