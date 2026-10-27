import React, { useState } from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

export default function BrochureModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleDownloadAndSend = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger download of the high-res brochure
    const link = document.createElement('a');
    link.href = '/assets/brochure-main.png';
    link.download = 'Brosur-Resmi-Ruko-Buana-View-Batu-Aji.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open WhatsApp to also connect with Frans
    const msg = `Halo Frans, saya ${name} (${phone}). Saya baru saja mengunduh brosur Ruko Buana View dan ingin info lebih detail mengenai promo perdana diskon Rp 30 Juta dan skema Cash Bertahap 60x.`;
    setTimeout(() => {
      window.open(getWhatsAppUrl(msg), '_blank');
      onClose();
      setSubmitted(false);
      setName('');
      setPhone('');
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-surface-container-lowest rounded-2xl shadow-2xl p-6 sm:p-8 border border-outline-variant/30 space-y-space-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
          title="Tutup"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary mx-auto flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[26px]">picture_as_pdf</span>
          </div>
          <h3 id="brochure-title" className="font-headline-sm text-2xl font-bold text-on-surface">
            Unduh Brosur Resmi Ruko Buana View
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Dapatkan e-katalog lengkap, siteplan detail, denah arsitektur 2 lantai, dan simulasi cicilan cash bertahap 60x.
          </p>
        </div>

        <form onSubmit={handleDownloadAndSend} className="space-y-3.5 pt-2">
          <div>
            <label className="block font-label-sm text-on-surface font-semibold mb-1">
              Nama Anda *
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-outline-variant/40 text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block font-label-sm text-on-surface font-semibold mb-1">
              Nomor WhatsApp Aktif *
            </label>
            <input
              type="tel"
              required
              placeholder="Contoh: 0812 3456 7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-outline-variant/40 text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="p-3 bg-surface-container-low rounded-lg text-xs text-on-surface-variant space-y-1">
            <p className="font-semibold text-primary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Privilese Eksklusif:
            </p>
            <p>• Brosur langsung tersimpan di perangkat Anda.</p>
            <p>• Prioritas konfirmasi ketersediaan unit sisa promo diskon Rp 30 Jt.</p>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-3 px-4 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all shadow-md font-bold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">download</span>
            {submitted ? 'Sedang Mengunduh...' : 'Unduh Sekarang & Terhubung via WA'}
          </button>
        </form>
      </div>
    </div>
  );
}
