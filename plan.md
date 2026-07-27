# Plan Pengembangan Website — Pisang Ijo Hasanuddin

## 1. Ringkasan Proyek

**Nama usaha:** Pisang Ijo Hasanuddin
**Jenis:** Landing page single-page, tanpa checkout
**Tujuan:** Memperkenalkan produk & menerima pesanan via WhatsApp/Instagram
**Target platform hosting:** Vercel
**Target audiens:** Pencari kuliner khas Makassar di area lokal (dan sekitarnya)

**Prioritas utama:** SEO lokal — website harus terhubung erat dengan Google Business Profile / Google Maps listing yang sudah ada, cepat diakses, dan mudah di-crawl Google.

---

## 2. Tech Stack

- **Framework:** Next.js (App Router, static export) — dipilih karena kompatibel native dengan Vercel, mendukung SEO (meta tags, sitemap, structured data) dengan mudah, tapi tetap output-nya cepat/statis.
  - Alternatif lebih ringan: HTML/CSS/JS murni jika agent lokal lebih nyaman tanpa framework. Next.js direkomendasikan karena deploy ke Vercel zero-config dan built-in image optimization.
- **Styling:** Tailwind CSS (utility-first, cepat untuk landing page)
- **Deployment:** Vercel (hubungkan repo GitHub → auto-deploy)
- **Font:** Google Fonts (pilih 1 font display untuk heading + 1 font sans untuk body, load via `next/font` agar tidak render-blocking)
- **Gambar:** format WebP, dikompresi, pakai `next/image` untuk lazy-load otomatis
- **Analytics (opsional):** Vercel Analytics atau Google Analytics 4
- **Search Console:** Google Search Console untuk submit sitemap & pantau indexing

---

## 3. Struktur Halaman (Single Page)

Urutan section dari atas ke bawah:

1. **Header/Navbar** — logo/nama usaha, sticky nav dengan anchor link ke tiap section, tombol "Pesan Sekarang" (WA) selalu terlihat
2. **Hero** — nama usaha, tagline singkat ("Pisang Ijo Khas Makassar Asli"), 1 foto/hero image kuat, 2 CTA: "Pesan via WhatsApp" & "Lihat Menu"
3. **Tentang Kami** — cerita singkat usaha, sejak kapan berdiri, apa yang membedakan (resep asli Makassar, bahan premium, dll)
4. **Menu & Harga** — grid/list varian produk, tiap item: nama, foto, deskripsi singkat, harga
5. **Galeri** — grid foto produk (bisa ambil dari konten IG/TikTok yang sudah ada)
6. **Testimoni** — kutipan review pelanggan (dari Google Maps/IG), tampilkan rating bintang
7. **Lokasi & Jam Operasional** — embed Google Maps (pakai listing yang sudah ada), alamat lengkap, jam buka per hari
8. **Cara Pesan** — langkah pemesanan singkat, tombol besar WA & link IG/TikTok
9. **Footer** — kontak, sosial media, jam operasional ringkas, copyright

---

## 4. Kebutuhan Konten (perlu diisi sebelum/selama development)

Agent lokal perlu placeholder yang jelas untuk data berikut (isi dengan data asli sebelum go-live):

- [ ] Nama resmi usaha & tagline
- [ ] Alamat lengkap (harus **identik** dengan yang tercantum di Google Maps)
- [ ] Nomor WhatsApp untuk tombol pesan (format `https://wa.me/62XXXXXXXXXX?text=...`)
- [ ] Jam operasional per hari
- [ ] Link Instagram & TikTok
- [ ] Link Google Maps embed (dari listing "Pisang Ijo Hasanuddin")
- [ ] Daftar menu + harga + foto tiap item
- [ ] Foto galeri (minimal 6-8 foto berkualitas baik)
- [ ] Testimoni pelanggan (kutip dari Maps/IG, dengan izin jika perlu)
- [ ] Nomor telepon alternatif (jika ada, untuk schema markup)

---

## 5. Checklist Implementasi Teknis

### A. Struktur & Setup
- [ ] Inisialisasi project Next.js (App Router)
- [ ] Setup Tailwind CSS
- [ ] Buat struktur folder komponen per section (`components/Hero.tsx`, `components/Menu.tsx`, dst)
- [ ] Buat file `app/layout.tsx` dengan metadata global (title, description, OG tags)
- [ ] Pastikan mobile-responsive (mobile-first, breakpoint sm/md/lg)

### B. SEO On-Page
- [ ] `<title>` unik & deskriptif: contoh `Pisang Ijo Hasanuddin | Pisang Ijo Khas Makassar Asli`
- [ ] `<meta name="description">` dengan kata kunci lokal, max ~155 karakter
- [ ] Satu `<h1>` per halaman (nama usaha/tagline utama), heading lain pakai `<h2>`/`<h3>` terstruktur
- [ ] Semua `<img>` punya `alt` deskriptif dan mengandung kata kunci natural (contoh: `alt="Pisang ijo original khas Makassar"`)
- [ ] URL bersih (untuk landing page single-page, gunakan anchor `#menu`, `#lokasi`, dst)
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) untuk preview share di WA/IG/FB
- [ ] Twitter Card tags
- [ ] Favicon & app icon

### C. Structured Data (Schema.org / JSON-LD)
- [ ] Tambahkan schema `LocalBusiness` atau `Restaurant` di `<head>`, berisi:
  - `name`, `image`, `address` (PostalAddress lengkap), `telephone`
  - `openingHoursSpecification`
  - `geo` (latitude/longitude dari Google Maps)
  - `priceRange`
  - `sameAs`: array link ke Instagram, TikTok, Google Maps listing
- [ ] Validasi schema pakai [Google Rich Results Test](https://search.google.com/test/rich-results)

### D. Konsistensi NAP (Name, Address, Phone)
- [ ] Pastikan nama, alamat, nomor telepon di website **sama persis karakter demi karakter** dengan Google Business Profile — ini krusial untuk local SEO ranking

### E. Performa (Core Web Vitals)
- [ ] Gunakan `next/image` untuk semua gambar (auto lazy-load, resize, WebP)
- [ ] Load font via `next/font` (hindari render-blocking)
- [ ] Minimalkan JS pihak ketiga; embed Google Maps pakai iframe lazy-load
- [ ] Test skor di [PageSpeed Insights](https://pagespeed.web.dev/) — target skor mobile ≥ 90
- [ ] Kompresi semua gambar sebelum upload (WebP, max ~150-200KB per foto)

### F. File Teknis SEO
- [ ] `robots.txt` — allow all, arahkan ke sitemap
- [ ] `sitemap.xml` — generate otomatis (Next.js support built-in via `app/sitemap.ts`)
- [ ] `manifest.json` (opsional, untuk PWA-lite/add-to-homescreen)

### G. Integrasi Kontak
- [ ] Tombol WA pakai link `wa.me` dengan pesan pre-filled (contoh: "Halo, saya mau pesan pisang ijo")
- [ ] Link IG langsung ke profil `@pisangijo.hasanuddin`
- [ ] Embed Google Maps section lokasi (iframe dari listing Maps yang sudah ada)
- [ ] Pastikan semua tombol CTA cukup besar & jelas di mobile (thumb-friendly)

### H. Deployment ke Vercel
- [ ] Push project ke GitHub repo
- [ ] Connect repo ke Vercel, deploy
- [ ] Setup custom domain (jika sudah punya domain, misal `pisangijohasanuddin.com`)
- [ ] Aktifkan HTTPS (otomatis dari Vercel)
- [ ] Setelah live, submit sitemap ke Google Search Console
- [ ] Setup Google Business Profile → pastikan link website mengarah ke domain Vercel/custom domain ini
- [ ] (Opsional) Pasang Vercel Analytics atau GA4 untuk pantau traffic

---

## 6. Prioritas Pengerjaan (urutan disarankan)

1. Setup project + struktur dasar (Next.js + Tailwind)
2. Bangun semua section dengan konten placeholder
3. Styling & responsivitas penuh
4. Isi konten asli (foto, teks, harga, kontak)
5. Tambahkan SEO meta tags + structured data (JSON-LD)
6. Optimasi gambar & performa
7. Buat `sitemap.xml` & `robots.txt`
8. Deploy ke Vercel, cek di PageSpeed Insights & Rich Results Test
9. Submit ke Google Search Console
10. Sinkronkan info dengan Google Business Profile (NAP konsisten + link website)

---

## 7. Catatan Tambahan untuk Agent

- Ini adalah landing page, **bukan** e-commerce — tidak perlu cart, checkout, atau payment gateway.
- Semua "pemesanan" diarahkan keluar ke WhatsApp atau Instagram DM.
- Prioritaskan kecepatan loading dan SEO lokal di atas animasi/efek visual yang berat.
- Gunakan warna & branding yang mengasosiasikan dengan kuliner tradisional Makassar (hijau dari pisang ijo bisa jadi warna aksen utama).
- Jika ada keraguan konten (alamat, jam buka, harga), tandai dengan komentar `{/* TODO: isi data asli */}` di kode agar mudah ditemukan sebelum go-live.
