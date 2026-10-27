# Ruko Buana View - Commercial Real Estate Landing Page (React JS)

Website landing page komersial modern untuk **Ruko Buana View**, proyek komersial strategis 2 lantai oleh **PT. Buana Cipta Propertindo (Cipta Group)** di Batu Aji, Batam.

Dibangun dengan **React JS + Vite + Tailwind CSS** sesuai dengan spesifikasi desain resmi dan materi pemasaran properti.

---

## 🌟 Fitur Utama Website

1. **Brand Identity & Desain Editorial Modern**
   - Mengikuti panduan desain resmi (*Emerald Forest* `#00652c`/`#15803d`, *Warm Bronze* `#9b4500`/`#b45309`, dan *Warm Pearl/Ivory* `#faf9f5`).
   - Tipografi kombinasi **Playfair Display** (display/headline berkelas) dan **Plus Jakarta Sans** (teks dan spesifikasi teknik).
   - Efek animasi halus: Shimmer gradient, pulse rings, hover scale, dan count-up counter.

2. **Top Notification Announcement**
   - Banner promo perdana dengan efek shimmer: *Diskon Rp 30 Juta + Subsidi Perpanjangan UWTO Khusus 3 Unit Pertama!*

3. **Hero Section & Bento Showcase**
   - Headline atraktif & penegasan captive market puluhan ribu kepala keluarga.
   - Kotak highlight skema unggulan developer: **Cash Bertahap 60x - Cukup KTP**.
   - Bento gallery visual interaktif dengan gambar resolusi tinggi fasad ruko dan lingkungan komersial.

4. **4 Pilar Nilai Investasi (Dengan Counter Interaktif)**
   - Cash Bertahap 60x (Cicilan langsung tanpa BI checking).
   - Early Bird Privilege Diskon Rp 30 Juta (3 unit pertama).
   - Jaminan Legalitas Perpanjangan UWTO.
   - Potensi Pasar & Trafik 24 Jam Non-Stop.

5. **Lokasi Strategis & Peta Aksesibilitas (7/5 Asymmetric Split)**
   - Peta konektivitas koridor arteri (Sekupang, Marina, Tanjung Uncang, Muka Kuning, Tembesi).
   - Daftar fasilitas kesehatan terdekat (RS Graha Hermine, RSUD Embung Fatimah, RS Mutiara Aini, RS Awal Bros).
   - Pusat perbelanjaan (SP Plaza, Aviari Plaza, Pertokoan Griya Batu Aji) & zona pendidikan unggulan.

6. **Denah Arsitektur & Tata Ruang 2 Lantai (Floorplan)**
   - Viewer gambar denah resolusi tinggi lengkap dengan dimensi (4.0m × 17.5m).
   - Filter interaktif: Semua Lantai, Lantai 1 (Area Komersial), Lantai 2 (Office/Hunian).
   - Detail spesifikasi fungsional tiap lantai.

7. **Tabel Spesifikasi Teknis Material Asli Brosur**
   - Pondasi Tapak Beton, Dinding Batako Press plester/aci, Lantai Semen, Plafon Gypsum, Rangka Baja Ringan, Atap Spandek, Kusen Aluminium Kaca, Folding Gate, Pintu Belakang Teralis, Kloset Jongkok, Air ABH, Listrik PLN 16A Komersial, Cat Jotun/KFC Putih.

8. **Kalkulator Simulasi Pembiayaan Interaktif**
   - Slider plafon harga (Rp 650 Jt - Rp 1.2 M) dengan tombol preset cepat.
   - Kalkulasi realtime angsuran bulanan:
     - **Cash Bertahap 60 Bulan** (flat pengembang tanpa bunga bank).
     - **Estimasi KPR 15 Tahun** (asumsi DP 20% & bunga perbankan).
   - Tombol integrasi WhatsApp yang otomatis menghasilkan pesan simulasi sesuai nominal yang dipilih pengguna.

9. **Profil Pengembang & Sales Executive Frans Rumah Batam**
   - Kredensial PT. Buana Cipta Propertindo (Member of Cipta Group - *"Mengerti Kebutuhan Anda"*).
   - Kontak langsung Executive Sales Frans Rumah Batam dengan indikator status online dan nomor WhatsApp `0823 9105 9216`.
   - Formulir reservasi jadwal survei langsung terhubung ke chat WhatsApp.

10. **Modal Lightbox & Unduh Brosur**
    - Fullscreen lightbox modal untuk memperbesar denah arsitektur dan peta lokasi.
    - Modal unduh brosur PDF resmi dengan integrasi follow-up WhatsApp.

11. **Mobile Experience & Sticky Conversion**
    - Floating action button WhatsApp dengan pulse ring pada tampilan desktop.
    - Sticky bottom bar responsive pada tampilan mobile untuk konversi cepat.

---

## 🚀 Menjalankan Project

### Prasyarat
- Node.js (v18 ke atas)
- NPM

### Instalasi & Menjalankan Server Pengembangan
```bash
# Menjalankan dev server (port 3000)
npm run dev
```

Buka peramban di: [http://localhost:3000](http://localhost:3000)

### Melakukan Build Production
```bash
npm run build
```
File hasil build yang siap dipublikasikan akan berada di folder `dist/`.

### Preview Build Production
```bash
npm run preview
```

---

## 📁 Struktur Direktori
```text
rukobuanabukit/
├── public/
│   └── assets/
│       ├── hero-facade.png          # Gambar resolusi tinggi fasad ruko
│       ├── brochure-main.png        # Brosur utama resmi pemasaran
│       ├── location-map.png         # Peta lokasi dan koridor arteri
│       └── floorplan.png            # Denah arsitektur lantai 1 & 2
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Header & navigasi responsif
│   │   ├── PromoBanner.jsx          # Banner pengumuman promo perdana
│   │   ├── HeroSection.jsx          # Hero showcase & bento gallery
│   │   ├── MetricsSection.jsx       # 4 pilar metrik dengan counter
│   │   ├── LocationSection.jsx      # Peta dan POI captive market
│   │   ├── FloorplanSection.jsx     # Denah interaktif & tab lantai
│   │   ├── SpecsSection.jsx         # Tabel spesifikasi material
│   │   ├── FinancingCalculator.jsx  # Kalkulator simulasi cicilan
│   │   ├── DeveloperSection.jsx     # Profil developer & sales Frans
│   │   ├── FloatingCTA.jsx          # Floating WhatsApp & mobile ribbon
│   │   ├── Footer.jsx               # Footer & navigasi legal
│   │   ├── LightboxModal.jsx        # Modal zoom gambar resolusi tinggi
│   │   └── BrochureModal.jsx        # Modal unduh brosur resmi
│   ├── data/
│   │   └── propertyData.js          # Sumber data konten & helper WhatsApp
│   ├── App.jsx                      # Komponen utama aplikasi
│   ├── index.css                    # Tailwind CSS & custom keyframe styling
│   └── main.jsx                     # Entry point React
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
