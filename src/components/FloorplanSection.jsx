import React, { useState } from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function FloorplanSection({ onOpenLightbox, onOpenBrochure }) {
  const [selectedFloor, setSelectedFloor] = useState('all');
  const { floorplan } = PROPERTY_INFO;

  const filteredFloors =
    selectedFloor === 'all'
      ? floorplan.floors
      : floorplan.floors.filter((f) => f.level === selectedFloor);

  return (
    <section className="w-full py-space-2xl bg-surface-container-low" id="denah-dan-tipe">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-space-sm mb-space-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
            Rancang Bangun Komersial 2 Lantai
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold">
            {floorplan.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {floorplan.description}
          </p>

          {/* Floor filter tabs */}
          <div className="inline-flex p-1 bg-surface-container rounded-xl shadow-inner mt-2">
            <button
              onClick={() => setSelectedFloor('all')}
              className={`px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                selectedFloor === 'all'
                  ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Semua Lantai
            </button>
            <button
              onClick={() => setSelectedFloor('1')}
              className={`px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                selectedFloor === '1'
                  ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Lantai 1 (Komersial)
            </button>
            <button
              onClick={() => setSelectedFloor('2')}
              className={`px-4 py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                selectedFloor === '2'
                  ? 'bg-primary-container text-on-primary font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Lantai 2 (Office / Hunian)
            </button>
          </div>
        </div>

        {/* Plan Layout Viewport Container */}
        <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-md border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Floor Plan Image Viewer (7 cols) */}
            <div className="lg:col-span-7 space-y-space-md">
              <div
                onClick={() =>
                  onOpenLightbox(
                    '/assets/floorplan.png',
                    'Denah Arsitektur Lantai 1 & Lantai 2 Ruko Buana View'
                  )
                }
                className="bg-surface p-space-md rounded-xl shadow-inner flex items-center justify-center group overflow-hidden cursor-pointer relative border border-outline-variant/20"
              >
                <img
                  src="/assets/floorplan.png"
                  alt="Denah Arsitektur Lantai 1 dan Lantai 2 Ruko Buana View"
                  className="w-full h-auto max-h-[580px] object-contain rounded-lg transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 text-on-surface font-label-sm font-semibold opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                  <span>Klik untuk Perbesar</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-on-surface-variant font-body-sm text-body-sm px-2 gap-2">
                <span className="flex items-center gap-1 font-semibold text-primary">
                  <span className="material-symbols-outlined text-[18px]">straighten</span>
                  {floorplan.dimension}
                </span>
                <span className="text-on-surface-variant/80">Dokumen Cetak Brosur Resmi</span>
              </div>
            </div>

            {/* Floorplan Specification Explainer (5 cols) */}
            <div className="lg:col-span-5 space-y-space-md">
              {filteredFloors.map((floor) => (
                <div
                  key={floor.level}
                  className="bg-surface-container-low p-space-md rounded-xl space-y-2.5 interactive-card border border-outline-variant/20"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-7 h-7 rounded-full text-white font-bold text-center leading-7 font-label-md text-label-md shadow-sm ${
                          floor.level === '1' ? 'bg-primary' : 'bg-secondary'
                        }`}
                      >
                        {floor.level}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {floor.name}
                      </h3>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase px-2.5 py-1 rounded bg-surface-container-highest font-bold text-on-surface-variant">
                      {floor.tag}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {floor.description}
                  </p>

                  <ul className="text-on-surface font-body-sm text-body-sm space-y-2 pt-1 border-t border-outline-variant/20">
                    {floor.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-[18px] shrink-0 ${
                            floor.level === '1' ? 'text-primary' : 'text-secondary'
                          }`}
                        >
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-space-sm">
                <a
                  href={getWhatsAppUrl(
                    'Halo Frans, saya minta dikirimkan file lengkap Denah dan Siteplan Ruko Buana View.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all flex-grow shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  Minta File Denah via WA
                </a>

                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-all shadow-sm border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Unduh PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
