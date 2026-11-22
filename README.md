# Mockup Website — PT Cakra Proteksi Indonesia

Lima mockup website company profile (statis: HTML + CSS + JavaScript murni, tanpa build/framework).

| Folder | Mockup | Karakter |
|---|---|---|
| `mockup-1/` | **Corporate Clarity** | Tema terang, navy dominan + aksen oranye, Plus Jakarta Sans |
| `mockup-2/` | **Midnight Premium** | Tema gelap, glassmorphism, transisi tirai, preloader logo, kursor kustom |
| `mockup-3/` | **Editorial Warm** | Gaya majalah, krem hangat, serif Fraunces, scroll-zoom, carousel, accordion |
| `mockup-4/` | **Hexa Grid** | Putih, grid Swiss, bingkai heksagon dari logo, foto asli, Instrument Sans |
| `mockup-5/` | **Private Office** | Menu samping, gading + walnut + kuningan, foto asli, Cormorant Garamond |

`index.html` di root adalah halaman pemilih untuk mempresentasikan kelimanya.

**Menu di setiap mockup:** Beranda · Tentang Perusahaan · Struktur Organisasi · Event · Produk · Berita (+ detail berita, formulir kontak di footer).
**Bahasa:** tombol ID / EN (tersimpan di browser; bisa juga lewat URL `?lang=en`).

## Struktur

```
code/
├─ index.html            ← halaman pemilih mockup
├─ vercel.json           ← konfigurasi Vercel (cache aset)
├─ assets/
│  ├─ css/base.css       ← reset + primitif animasi bersama
│  ├─ js/content.js      ← SEMUA konten bilingual (ubah teks di sini)
│  ├─ js/core.js         ← router, i18n, ikon, sistem animasi
│  ├─ img/               ← foto (img/real/ = foto asli dari sesi foto CPI, dipakai mockup 4 & 5)
│  └─ logo/              ← logo PNG asli + logo vektor (SVG)
├─ mockup-1/ (index.html, style.css, app.js)
├─ mockup-2/ (…)
├─ mockup-3/ (…)
├─ mockup-4/ (…)
└─ mockup-5/ (…)
```

## Mengubah konten

Semua teks (ID & EN), produk, direksi, klien, event, dan berita ada di `assets/js/content.js`.
Satu perubahan di sana langsung berlaku di ketiga mockup.

> **Catatan:** data **Event** dan **Berita** adalah konten contoh untuk mockup (compro tidak memuat data tersebut). Ganti dengan data asli sebelum go-live.

## Menjalankan secara lokal

Buka `index.html` langsung di browser, atau jalankan server statis apa pun, misalnya:

```powershell
npx serve .
```

## Deploy ke Vercel

1. Upload folder `code/` ke repository GitHub, lalu di vercel.com → **Add New → Project** → pilih repo.
2. Framework Preset: **Other**. Build Command: kosong. Output Directory: `./` (root folder ini).
3. Klik **Deploy**.

Atau via CLI dari dalam folder `code/`:

```powershell
npx vercel --prod
```

## Deploy ke web hosting biasa (cPanel / Hostinger / Niagahoster, dll.)

1. Buka **File Manager** → masuk ke `public_html/`.
2. Upload seluruh isi folder `code/` (boleh dalam bentuk .zip lalu **Extract**).
3. Selesai — situs langsung berjalan, tidak perlu PHP/Node/database.

Mockup memakai routing berbasis hash (`#/about`, `#/news/...`), jadi tidak butuh konfigurasi rewrite server dan aman ditaruh di subfolder.

## Catatan teknis

- Animasi: reveal saat scroll, split-text, counter angka, parallax, magnetic button, spotlight hover, transisi halaman — semuanya vanilla JS (tanpa library).
- Menghormati pengaturan **Reduce Motion** di sistem operasi.
- Responsif: desktop, tablet, dan mobile (menu burger).
- Font dimuat dari Google Fonts.

## Kredit foto

Foto produk diambil dari Unsplash dan bebas dipakai untuk komersial di bawah [Unsplash License](https://unsplash.com/license). Atribusi tidak diwajibkan, tetapi dianjurkan.

| File | Fotografer | Sumber |
|---|---|---|
| `assets/img/products/cargo.jpg` | Ian Taylor | https://unsplash.com/photos/jOqJbvo1P9g |
| `assets/img/products/property.jpg` | Adrian Sulyok (meminta kredit ke https://www.sulyokimaging.ro) | https://unsplash.com/photos/sczNLg6rrhQ |

Foto di `assets/img/real/` adalah foto asli dari sesi foto CPI.
