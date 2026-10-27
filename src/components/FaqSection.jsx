import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/propertyData';

const FAQ_ITEMS = [
  {
    question: "Apa itu Ruko Buana View dan di mana lokasinya?",
    answer: "Ruko Buana View adalah kawasan ruko komersial 2 lantai modern rancangan PT. Buana Cipta Propertindo (Cipta Group), berlokasi strategis di Jl. Permata Putri Komp. Ruko Griya Batu Aji, Kota Batam. Berada persis di tengah pemukiman padat penduduk dengan arus lalu lintas 24 jam serta akses cepat ke Sekupang, Marina, Tanjung Uncang, dan Muka Kuning."
  },
  {
    question: "Bagaimana mekanisme skema pembayaran Cash Bertahap 60x Developer?",
    answer: "Skema Cash Bertahap 60x adalah fasilitas cicilan langsung ke pengembang selama 5 tahun tanpa melalui proses BI Checking perbankan. Syaratnya sangat mudah, cukup melampirkan identitas KTP saja, sehingga perputaran modal usaha Anda tetap terjaga aman."
  },
  {
    question: "Apa saja promo perdana yang bisa didapatkan saat ini?",
    answer: "Saat ini tersedia Promo Perdana berupa diskon instan Rp 30.000.000 (khusus 3 unit pertama) dan subsidi pengurusan perpanjangan izin UWTO resmi developer untuk kepastian legalitas jangka panjang aset Anda."
  },
  {
    question: "Berapa ukuran dimensi tanah dan spesifikasi teknis ruko?",
    answer: "Setiap unit ruko memiliki dimensi 4,0 meter x 17,5 meter (luas tanah 70 m²), dibangun 2 lantai dengan pondasi tapak beton, dinding batako press plester/aci, atap spandek rangka baja ringan, jendela kusen aluminium kaca, pintu utama folding gate kokoh, pintu belakang teralis besi, suplai air ABH, dan daya listrik PLN 16A komersial."
  },
  {
    question: "Bagaimana cara melakukan survei lokasi dan konsultasi unit bersama Frans Rumah Batam?",
    answer: "Anda dapat langsung menghubungi Frans Rumah Batam melalui WhatsApp di 0823 9105 9216. Kami siap melayani konsultasi gratis 24/7, simulasi tabel angsuran resmi, serta pendampingan langsung ke lokasi proyek."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/30" id="faq">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-space-sm mb-space-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
            Pusat Informasi &amp; Edukasi Pembeli
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Temukan jawaban lengkap seputar legalitas, skema pembayaran, dimensi unit, dan keuntungan investasi di Ruko Buana View Batu Aji Batam.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-headline-sm text-base sm:text-lg font-bold text-on-surface hover:text-primary transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined text-[24px] text-primary transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed border-t border-outline-variant/10">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Unanswered Questions */}
        <div className="mt-space-lg text-center">
          <p className="font-body-sm text-on-surface-variant mb-2">
            Ada pertanyaan lain yang belum terjawab?
          </p>
          <a
            href={getWhatsAppUrl("Halo Frans Rumah Batam, saya ingin bertanya lebih lanjut mengenai Ruko Buana View.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-label-md font-bold hover:underline"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Tanyakan Langsung ke Frans Rumah Batam via WhatsApp &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
