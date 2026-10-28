import React, { useState, useId } from 'react';
import { PROPERTY_INFO, getWhatsAppUrl } from '../data/propertyData';

function formatRupiah(num) {
  return 'Rp ' + Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function FinancingCalculator() {
  const [price, setPrice] = useState(850000000);
  const sliderId = useId();

  // Cash Bertahap calculation: price divided by 60 months
  const bertahapMonthly = Math.round(price / 60);

  // KPR calculation: 20% DP, 80% loan, 15 years (180 months), 6.5% interest
  const loanAmount = price * 0.8;
  const annualRate = 0.065;
  const monthlyRate = annualRate / 12;
  const totalMonths = 180;
  const kprMonthly = Math.round(
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const presets = [
    { label: 'Rp 650 Jt', value: 650000000 },
    { label: 'Rp 850 Jt (Tipe Standar)', value: 850000000, featured: true },
    { label: 'Rp 1.2 M (Tipe Sudut/Hook)', value: 1200000000 }
  ];

  const getDynamicWaMessage = () => {
    return `Halo Frans, saya ingin konsultasi simulasi Ruko Buana View dengan estimasi harga ${formatRupiah(
      price
    )}. Estimasi Cash Bertahap 60x: ${formatRupiah(
      bertahapMonthly
    )}/bln atau KPR: ${formatRupiah(kprMonthly)}/bln. Mohon kirimkan tabel angsuran resminya.`;
  };

  return (
    <section className="w-full py-space-2xl bg-surface-bright" id="simulasi-promo">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-space-sm mb-space-xl">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
            Pilihan Pembiayaan Cerdas
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-headline-lg text-on-surface font-bold">
            Skema Pembayaran Fleksibel &amp; Simulasi Cicilan
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Pilih mekanisme pembayaran yang paling menguntungkan perputaran arus kas bisnis Anda: Cash Keras, Cash Bertahap Developer 60x, atau Fasilitas KPR Bank.
          </p>
        </div>

        {/* Scheme Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl items-stretch">
          {PROPERTY_INFO.pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-surface-container-lowest p-space-lg rounded-xl flex flex-col justify-between space-y-space-md interactive-card relative ${
                tier.featured
                  ? 'shadow-lg -translate-y-2 border-2 border-primary/40 hover:border-primary'
                  : 'shadow-sm border border-outline-variant/30'
              }`}
            >
              {/* Top Ribbon for Featured Card */}
              {tier.ribbon && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm overflow-hidden whitespace-nowrap">
                  <span className="relative z-10">{tier.ribbon}</span>
                  <span className="absolute inset-0 animate-shimmer"></span>
                </div>
              )}

              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    {tier.subtitle.split('•')[0]}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold ${tier.badgeColor}`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {tier.title}
                </h3>
                
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {tier.description}
                </p>

                <div className="p-space-sm rounded-lg bg-surface-container-low space-y-1.5 border border-outline-variant/20">
                  {tier.highlights.map((h, i) => (
                    <p
                      key={i}
                      className={`font-label-md text-label-md flex items-center gap-1.5 ${
                        i === 0
                          ? tier.featured
                            ? 'text-secondary font-bold'
                            : 'text-primary font-bold'
                          : 'text-on-surface'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(tier.ctaWaText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-label-md text-label-md transition-all ${
                    tier.featured
                      ? 'bg-primary-container text-on-primary hover:bg-primary shadow-md animate-pulse-glow font-bold'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest hover:scale-[1.02]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>{tier.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Calculator / Estimate Widget */}
        <div className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-md border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Explainer */}
            <div className="lg:col-span-5 space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                Kalkulator Cepat Investor
              </span>
              <h3 className="font-headline-md text-2xl sm:text-headline-md text-on-surface font-bold">
                Estimasi Angsuran Ruko Buana View
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Gunakan simulasi perkiraan cepat ini untuk menentukan komparasi skema cicilan bulanan sesuai kemampuan finansial usaha Anda.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">check</span>
                  <span>Termasuk Subsidi Legalitas UWTO</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">check</span>
                  <span>Promo Cash Bertahap 60 Bulan Langsung Developer</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[20px]">check</span>
                  <span>Tanpa BI Checking &amp; Cukup KTP</span>
                </div>
              </div>
            </div>

            {/* Right Simulator Inputs & Output */}
            <div className="lg:col-span-7 bg-surface-container-low p-space-md lg:p-space-lg rounded-xl space-y-space-md border border-outline-variant/20">
              <div className="space-y-space-sm">
                <div className="flex justify-between items-center">
                  <label htmlFor={sliderId} className="font-label-md text-label-md text-on-surface font-semibold">
                    Estimasi Plafon Pembayaran:
                  </label>
                  <span className="text-primary font-bold text-lg sm:text-xl transition-all">
                    {formatRupiah(price)}
                  </span>
                </div>

                <input
                  id={sliderId}
                  name="price_estimate"
                  type="range"
                  min="650000000"
                  max="1200000000"
                  step="25000000"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-surface-container-highest rounded-lg cursor-pointer transition-all"
                  aria-label="Estimasi Plafon Pembayaran"
                />

                {/* Preset Chips */}
                <div className="flex flex-wrap justify-between font-label-sm text-label-sm text-on-surface-variant gap-2 pt-1">
                  {presets.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setPrice(p.value)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        price === p.value
                          ? 'bg-primary text-on-primary font-bold shadow-sm'
                          : 'bg-surface hover:text-primary hover:bg-surface-container'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
                {/* Cash Bertahap Output */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-outline-variant/30 hover:border-secondary transition-all">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Cash Bertahap (60 Bulan)
                  </span>
                  <p className="font-headline-sm text-xl sm:text-headline-sm text-secondary font-bold mt-1 transition-all duration-300">
                    {formatRupiah(bertahapMonthly)} /bln
                  </p>
                  <span className="font-label-sm text-label-sm text-primary font-medium block mt-1">
                    Bebas Bunga Bank (Flat Developer)
                  </span>
                </div>

                {/* KPR Output */}
                <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm border border-outline-variant/30 hover:border-primary transition-all">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                    Estimasi KPR (15 Tahun - DP 20%)
                  </span>
                  <p className="font-headline-sm text-xl sm:text-headline-sm text-on-surface font-bold mt-1 transition-all duration-300">
                    {formatRupiah(kprMonthly)} /bln
                  </p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium block mt-1">
                    Asumsi Suku Bunga Ringan 6.5%
                  </span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(getDynamicWaMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all hover:shadow-md font-bold"
                >
                  <span className="material-symbols-outlined text-[18px]">calculate</span>
                  Minta Tabel Angsuran Resmi ke Frans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
