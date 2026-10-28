import React, { useState } from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function DeveloperSection() {
  const { developer, marketing } = PROPERTY_INFO;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unitInterest: 'Cash Bertahap 60x',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo Frans, saya ${formData.name} (${formData.phone}). Saya tertarik dengan Ruko Buana View skema ${formData.unitInterest}. Catatan: ${formData.notes || 'Mohon info ketersediaan unit dan jadwal survei.'}`;
    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full py-space-2xl bg-surface" id="kontak">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Developer Profile Card (6 cols) */}
          <div className="lg:col-span-6 space-y-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-primary text-[16px]">apartment</span>
              Pengembang Terpercaya Batam
            </div>

            <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold leading-tight">
              {developer.name}
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sebagai bagian integral dari <strong>{developer.group}</strong> ("{developer.slogan}"), kami telah mendedikasikan pengalaman puluhan tahun dalam merintis perumahan, pusat perbelanjaan, dan kawasan komersial mandiri yang menguntungkan di Kepulauan Riau.
            </p>

            <div className="space-y-3 pt-2 font-body-sm text-body-sm text-on-surface">
              <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-on-surface">Kantor Pemasaran &amp; Pengembang:</p>
                  <p className="text-on-surface-variant">{developer.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors border border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0">
                  call
                </span>
                <div>
                  <p className="font-bold text-on-surface">Telepon / Fax Kantor:</p>
                  <p className="text-on-surface-variant">
                    Telp: {developer.phone} • Fax: {developer.fax}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Interactive Inquiry Form */}
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-3 border border-outline-variant/30">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
                <span className="font-label-md text-label-md uppercase">Jadwalkan Survei atau Minta Brosur</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-label="Nama Lengkap"
                    placeholder="Nama Lengkap *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    aria-label="Nomor WhatsApp"
                    placeholder="Nomor WhatsApp *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <select
                    id="inquiry-interest"
                    name="unitInterest"
                    aria-label="Pilih Skema Pembayaran atau Minat Unit"
                    value={formData.unitInterest}
                    onChange={(e) => setFormData({ ...formData, unitInterest: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Cash Bertahap 60x">Minat: Cash Bertahap 60x</option>
                    <option value="Cash Keras (Diskon 30Jt)">Minat: Cash Keras (Diskon 30Jt)</option>
                    <option value="KPR Bank Rekanan">Minat: KPR Bank Rekanan</option>
                    <option value="Survei Lokasi Langsung">Ingin Survei Lokasi Langsung</option>
                  </select>

                  <input
                    id="inquiry-notes"
                    name="notes"
                    type="text"
                    autoComplete="off"
                    aria-label="Catatan Tambahan"
                    placeholder="Catatan tambahan (opsional)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container transition-all flex items-center justify-center gap-2 font-bold shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Kirim Permintaan Langsung ke WhatsApp {marketing.name}
                </button>
              </form>
            </div>
          </div>

          {/* Official Agent Frans Showcase Box (6 cols) */}
          <div className="lg:col-span-6 bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-lg border border-outline-variant/30 space-y-space-md interactive-card">
            <div className="flex items-center justify-between pb-space-sm bg-surface-container-low p-space-md rounded-xl border border-outline-variant/20">
              <div className="flex items-center gap-space-md">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm text-sm sm:text-base font-bold shadow-md tracking-wider">
                  FRB
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    {marketing.title}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {marketing.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Konsultan Properti Resmi Cipta Group
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                {marketing.status}
              </span>
            </div>

            <div className="space-y-space-sm text-on-surface-variant font-body-sm text-body-sm">
              <p>Dapatkan konsultasi gratis langsung bersama {marketing.name}:</p>
              <ul className="space-y-2 font-label-md text-label-md text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>Pemilihan nomor unit hook/sudut terbaik dengan lalu lintas tertinggi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>Klaim diskon Rp 30 Juta &amp; subsidi perpanjangan UWTO resmi developer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>Bantuan administrasi cicilan cash bertahap 60x cukup KTP tanpa BI checking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>Layanan antar-jemput pendampingan survei fisik ke lokasi ruko</span>
                </li>
              </ul>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="space-y-2 pt-2 border-t border-outline-variant/20">
              <a
                href={getWhatsAppUrl(
                  'Halo Frans, saya ingin informasi lengkap dan pendampingan survei unit Ruko Buana View Batu Aji.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all shadow-md animate-pulse-glow font-bold"
              >
                <span className="material-symbols-outlined text-[24px]">chat</span>
                WhatsApp: {marketing.phone} ({marketing.name})
              </a>
              <p className="text-center font-label-sm text-label-sm text-on-surface-variant">
                {marketing.workingHours} • Pendampingan Survei Gratis ke Lokasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
