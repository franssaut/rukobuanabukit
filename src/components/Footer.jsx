import React from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function Footer({ onOpenBrochure }) {
  const { developer, marketing } = PROPERTY_INFO;

  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-2xl pb-space-lg">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl border-b border-outline/30">
          {/* Brand & Developer Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[22px]">eco</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-inverse-on-surface tracking-tight leading-none">
                  Ruko Buana View
                </span>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider mt-0.5">
                  Kawasan Komersial Eksklusif
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-label-lg text-label-lg font-bold text-inverse-on-surface uppercase">
                {developer.name}
              </p>
              <p className="font-label-md text-label-md text-primary-fixed-dim">
                Member of {developer.group} ("{developer.slogan}")
              </p>
            </div>

            <p className="font-body-md text-body-md text-surface-dim max-w-md leading-relaxed">
              Menghadirkan pusat bisnis dan komersial strategis yang menghubungkan potensi pertumbuhan ekonomi, kenyamanan operasional, dan nilai investasi properti jangka panjang di Batam.
            </p>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="lg:col-span-3 space-y-space-md">
            <h4 className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-wider font-bold">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 font-body-md text-body-md text-surface-dim">
              <li>
                <a href="#" className="hover:text-primary-fixed transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#keunggulan-dan-lokasi" className="hover:text-primary-fixed transition-colors">
                  Keunggulan &amp; Lokasi
                </a>
              </li>
              <li>
                <a href="#denah-dan-tipe" className="hover:text-primary-fixed transition-colors">
                  Denah &amp; Tipe Unit
                </a>
              </li>
              <li>
                <a href="#spesifikasi" className="hover:text-primary-fixed transition-colors">
                  Spesifikasi Bangunan
                </a>
              </li>
              <li>
                <a href="#simulasi-promo" className="hover:text-primary-fixed transition-colors">
                  Simulasi Cicilan &amp; Promo
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-primary-fixed transition-colors">
                  Hubungi Sales Gallery
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBrochure}
                  className="hover:text-primary-fixed transition-colors text-left"
                >
                  Download Brosur PDF
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-space-md">
            <h4 className="font-label-lg text-label-lg text-inverse-on-surface uppercase tracking-wider font-bold">
              Kantor Pemasaran &amp; Kontak
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm text-surface-dim">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary-fixed-dim mt-0.5 text-[20px] shrink-0">
                  location_on
                </span>
                <p>{developer.address}</p>
              </div>

              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[20px] shrink-0">
                  phone_in_talk
                </span>
                <p>Telp: {developer.phone} • Fax: {developer.fax}</p>
              </div>

              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[20px] shrink-0">
                  support_agent
                </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-fixed transition-colors"
                >
                  Sales Inquiries: {marketing.phone} ({marketing.name})
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-surface-dim font-body-sm text-body-sm">
          <p>© 2026 PT. Buana Cipta Propertindo (Cipta Group). Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-space-lg">
            <a href="#" className="hover:text-primary-fixed transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-primary-fixed transition-colors">
              Syarat &amp; Ketentuan
            </a>
            <a href="#" className="hover:text-primary-fixed transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
