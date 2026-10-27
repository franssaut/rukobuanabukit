import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';

export default function SpecsSection() {
  const specs = PROPERTY_INFO.specifications;
  const half = Math.ceil(specs.length / 2);
  const leftSpecs = specs.slice(0, half);
  const rightSpecs = specs.slice(half);

  return (
    <section className="w-full py-space-2xl bg-surface" id="spesifikasi">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="space-y-2">
            <p className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">construction</span>
              Standar Mutu Bangunan Cipta Group
            </p>
            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold">
              Spesifikasi Teknis Material Premium
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Seluruh komponen struktural dan arsitektural diproduksi dengan material berkualitas tinggi untuk menjamin ketahanan bangunan komersial jangka panjang.
            </p>
          </div>
          <div className="bg-surface-container-high px-4 py-2 rounded-lg text-on-surface-variant font-label-sm text-label-sm font-semibold shadow-sm border border-outline-variant/30 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary">verified</span>
            Data Resmi Brosur Pemasaran
          </div>
        </div>

        {/* Specification Grid Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* Left Specs Column */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden interactive-card border border-outline-variant/30">
            <div className="p-space-md bg-surface-container font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2 border-b border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[22px]">foundation</span>
              Struktur, Dinding &amp; Atap
            </div>
            <div className="p-space-md space-y-2.5">
              {leftSpecs.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center py-2.5 px-3 rounded transition-colors ${
                    idx % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface'
                  } hover:bg-surface-container`}
                >
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    {item.label}
                  </span>
                  <span className="font-label-lg text-label-lg font-bold text-on-surface text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Specs Column */}
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden interactive-card border border-outline-variant/30">
            <div className="p-space-md bg-surface-container font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2 border-b border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[22px]">electrical_services</span>
              Pintu, Utilitas &amp; Cat Finishing
            </div>
            <div className="p-space-md space-y-2.5">
              {rightSpecs.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center py-2.5 px-3 rounded transition-colors ${
                    idx % 2 === 0 ? 'bg-surface-container-low' : 'bg-surface'
                  } hover:bg-surface-container`}
                >
                  <span className="font-label-md text-label-md text-on-surface-variant">
                    {item.label}
                  </span>
                  <span
                    className={`font-label-lg text-label-lg font-bold text-right ${
                      item.label.includes('PLN') ? 'text-secondary' : 'text-on-surface'
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer Note As In Official Flyer */}
        <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-label-sm text-label-sm flex items-start gap-2 border border-outline-variant/20">
          <span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5">info</span>
          <span>
            *Detail dalam brosur sesuai dengan kondisi pada saat perencanaan. Pihak pengembang memiliki hak penuh atas perubahan sesuai dengan keadaan teknis di lapangan.
          </span>
        </div>
      </div>
    </section>
  );
}
