# Design Guide: Mockup Instagram Landscape

Panduan desain untuk deck "Review Sistem Rekomendasi Instagram" (Poin 5: Etika & Dampak Sosial). Tujuannya: tampilan yang terasa seperti **Instagram versi desktop/web** (bukan bingkai HP potret), tetap dalam format **landscape 16:9**, dengan konten yang sama seperti `GD_INSTAGRAM.md`.

---

## 1. Prinsip Desain

1. **Konten adalah pusat.** UI menjadi bingkai yang tenang, dan warna terang hanya dipakai untuk aksi dan peringatan.
2. **Gelap, datar, tipis.** Latar hitam, permukaan abu sangat gelap, pemisah garis 1px. Hindari gradient besar dan bayangan berat pada panel.
3. **Gradient hanya untuk identitas.** Cincin story, logo, dan satu elemen sorotan per slide.
4. **Satu warna = satu makna.** Biru untuk aksi/tautan, merah untuk bahaya/like, abu untuk info sekunder.
5. **Lapisan seperti aplikasi asli.** Sidebar, feed, modal, dan story overlay harus terlihat sebagai layar Instagram yang nyata.
6. **Landscape berarti tiga zona.** Navigasi kiri, konten tengah, panel konteks kanan.

---

## 2. Kanvas & Grid

| Properti | Nilai |
|---|---|
| Rasio | 16:9 |
| Ukuran dasar | 1280 × 720 px (skala proporsional ke layar) |
| Padding luar | 24 px |
| Radius jendela | 20 px |
| Grid | 12 kolom, gutter 24 px |
| Satuan spasi | kelipatan 4 px (4, 8, 12, 16, 24, 32) |

**Layout dasar (slide standar):**

```
┌────────────┬─────────────────────────────┬──────────────────┐
│  SIDEBAR   │        KONTEN UTAMA         │   PANEL KANAN    │
│  72–220px  │        flex, max 630px      │   320px          │
│  ikon+menu │  feed / story / profil      │  konteks & fakta │
└────────────┴─────────────────────────────┴──────────────────┘
```

- Sidebar: 220 px dengan label, atau 72 px ikon saja pada slide yang padat.
- Konten tengah: maksimal 630 px, sama seperti kolom feed Instagram web.
- Panel kanan: tempat "Disarankan untuk Anda", ringkasan fakta, atau catatan penyaji.

---

## 3. Design Tokens

```css
:root {
  /* Surface */
  --bg:            #000000;  /* latar utama */
  --surface-1:     #121212;  /* jendela/panel */
  --surface-2:     #1C1C1E;  /* kartu */
  --surface-3:     #262626;  /* input, chip, modal */
  --separator:     #262626;
  --border:        #363636;

  /* Teks */
  --text:          #F5F5F5;
  --text-2:        #A8A8A8;
  --text-3:        #737373;

  /* Aksen */
  --blue:          #0095F6;  /* aksi, tautan */
  --blue-hover:    #1877F2;
  --red:           #ED4956;  /* peringatan, bahaya */
  --like:          #FF3040;  /* hati */
  --green:         #00C853;  /* status aman (opsional) */

  /* Gradient identitas */
  --ig-gradient: linear-gradient(45deg,#F58529,#FEDA77 25%,#DD2A7B 55%,#8134AF 80%,#515BD4);

  /* Bentuk */
  --r-sm: 8px;  --r-md: 12px;  --r-lg: 16px;  --r-xl: 24px;  --r-full: 999px;

  /* Bayangan (hanya untuk modal/overlay) */
  --shadow-modal: 0 16px 48px rgba(0,0,0,.85);
}
```

**Penggunaan warna aksen di deck ini:**

| Warna | Dipakai untuk |
|---|---|
| Merah `#ED4956` | Bias, risiko adiksi, kotak hitam sebagai masalah, badge bahaya |
| Biru `#0095F6` | Tombol aksi, "Data Audit", kesimpulan, tautan |
| Gradient | Avatar akun kelompok, ring story, logo |
| Abu | Konten yang "ditekan", teks pendukung |

---

## 4. Tipografi

Instagram memakai font sistem, jadi **gunakan system stack** agar terasa asli. Plus Jakarta Sans boleh dipakai sebagai alternatif untuk judul.

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

| Peran | Ukuran | Berat | Contoh |
|---|---|---|---|
| Judul slide | 28–32 px | 700–800 | "Mengapa Anda melihat postingan ini?" |
| Judul kartu | 16 px | 600 | "Konten Sensasional & Komersial" |
| Username | 14 px | 600 | `recsys_ethics` |
| Isi | 14 px | 400 | Caption, deskripsi |
| Meta | 12 px | 400 | "32m", "Disarankan untuk Anda" |
| Badge | 11–12 px | 700 | "POTENSI BIAS" |

Aturan: line-height 1.45–1.55, teks isi tidak lebih kecil dari 12 px, hindari huruf kapital semua kecuali badge.

---

## 5. Ikonografi

- Gunakan **ikon garis** (outline, stroke 1.5–2 px) seperti Instagram: Home, Search, Explore, Reels, Messages, Notifications, Create, Profile.
- Ukuran ikon: 24 px (sidebar), 20 px (action bar), 16 px (inline).
- Ikon aktif berubah menjadi versi solid dan berwarna putih.
- Emoji hanya sebagai penanda konten (🎰 ♾️ 🧠), bukan sebagai ikon navigasi.
- Rekomendasi pustaka: Lucide atau Feather (tersedia via cdnjs).

---

## 6. Komponen

### 6.1 Sidebar (kiri)
- Logo "Instagram" bergaya script di atas, lalu daftar menu vertikal jarak 8 px.
- Item: ikon 24 px + label 16 px, tinggi 48 px, radius 12 px.
- Hover: latar `--surface-3`. Aktif: label bold.
- Bawah: "Lainnya ☰". Pada slide profil, item Profile aktif.

### 6.2 Top bar / Header postingan
- Avatar 32–36 px dengan ring gradient 2 px, celah hitam 2 px.
- Username bold, titik pemisah `•`, lalu badge atau waktu.
- Ikon `•••` rata kanan.

### 6.3 Story ring
- Diameter 64–80 px, ring 3 px gradient, celah 3 px `--bg`.
- Label 12 px di bawah, maksimal 1 baris.
- Dipakai sebagai **highlight** di profil: Bias Algoritma, Doomscrolling, Kotak Hitam, Privasi Mikro.

### 6.4 Kartu postingan (feed)
- Lebar maksimal 470–630 px, latar `--bg`, pemisah bawah 1px.
- Area media rasio 1:1 atau 4:5, isi berupa kartu-kartu konten deck.
- Action bar: ❤ 💬 ✈ di kiri, 📌 di kanan, jarak ikon 16 px.
- Like count bold, caption dengan username bold di depan.

### 6.5 Story viewer (overlay)
- Latar gelap penuh dengan konten di tengah, lebar 420–480 px, rasio 9:16 atau dilonggarkan ke 4:5 agar teks muat.
- Progress bar segmen di atas: tinggi 3 px, radius 2 px, segmen aktif animasi mengisi 6 detik.
- Di kiri dan kanan viewer tampilkan story tetangga yang diperkecil dan diburamkan (efek desktop Instagram).
- Bawah: kolom "Kirim pesan..." bentuk pil + ikon ♡ ✈.

### 6.6 Modal (desktop) menggantikan bottom sheet
- Latar redup `rgba(0,0,0,.65)`, modal di tengah, lebar 400–580 px, radius 16 px, `--surface-3`.
- Judul tengah 16 px bold, pemisah 1px antar bagian.
- Aksi berupa baris teks penuh (biru untuk utama, merah untuk destruktif, putih untuk batal), dipisah garis, seperti dialog Instagram asli.

### 6.7 Baris pengaturan
- Tinggi 64–72 px, ikon/judul kiri, subteks abu 12 px, indikator kanan (toggle atau titik status).
- Toggle: 44×26 px, aktif `--blue`, mati `--border`.

### 6.8 Panel saran kanan
- Avatar 44 px + username + subteks + tautan biru "Ikuti".
- Dipakai untuk "Fakta Teknis" atau ringkasan poin, dengan judul "Disarankan untuk Anda".

### 6.9 Badge & tombol

| Komponen | Spesifikasi |
|---|---|
| Badge bahaya | latar `rgba(237,73,86,.2)`, teks & border `--red`, radius 6 px |
| Badge info | latar `rgba(0,149,246,.2)`, teks & border `--blue` |
| Tombol utama | `--blue`, teks putih, tinggi 32–36 px, radius 8 px, bold 14 px |
| Tombol sekunder | `--surface-3`, teks putih |
| Tombol teks | tanpa latar, teks biru bold |

---

## 7. Peta Slide (Landscape)

Enam slide, sama seperti versi asli, ditata ulang untuk layar lebar.

### Slide 1: Profil (Cover)
```
Sidebar (Profile aktif) | Header profil: avatar 150px + stats (4 Post • 4 Members • Poin 5)
                        | Bio: judul, tim penyusun, deskripsi
                        | Highlight ring ×4 (Bias, Doomscrolling, Kotak Hitam, Privasi Mikro)
                        | Tab: ▦ POSTS  🎬 REELS  🏷 TAGGED
                        | Grid 3 kolom: 6 kartu kotak bertema
```
Username: `recsys_group_05`. Tombol "Following" dan "Message" di samping username.

### Slide 2: Feed Post (Bias Algoritma)
- Tengah: satu postingan, media berisi dua kartu berdampingan: **DIPRIORITASKAN** (merah) dan **DITEKAN** (abu).
- Kanan: panel "Disarankan untuk Anda" berisi ringkasan bias visual dan bias komersial.
- Caption: "Algoritma tidak memiliki kompas moral…". Like 98.4K, komentar 3.1K.

### Slide 3: Story (Risiko Adiksi)
- Latar gelap penuh, story utama di tengah, dua story tetangga diburamkan di kiri dan kanan.
- Isi story: banner merah putus-putus "Mengunci Pengguna Agar Terus Scroll" dan tiga kartu (slot machine, infinite scroll, attention span).
- Progress bar animasi di atas.

### Slide 4: Modal (Kotak Hitam)
- Latar belakang: feed diburamkan dan digelapkan.
- Modal tengah "Mengapa Anda melihat postingan ini?" berisi klaim resmi, fakta teknis (garis kiri merah), dan dua aksi teks: **Pahami Risiko Sistem** (biru) dan **Tutup**.

### Slide 5: Pengaturan (Privasi & Pengawasan)
- Layout dua kolom seperti halaman Settings web: kiri daftar menu (Privasi aktif), kanan tiga baris pengaturan dengan indikator dan kotak kesimpulan biru di bawah.

### Slide 6: Story Q&A (Penutup)
- Latar gradient identitas, stiker pertanyaan putih di tengah (miring −1.5°), kolom "Kirim pesan ke Adam, Alfa Ridho, Akmal, Dayat…", teks terima kasih di bawah.

---

## 8. Motion

| Elemen | Animasi | Durasi |
|---|---|---|
| Pergantian slide | fade + geser 12 px | 250–300 ms, `ease-out` |
| Progress story | lebar 0 → 100% linear | 6 s |
| Modal | fade latar + scale 0.96 → 1 | 200 ms |
| Tombol like | scale 1 → 1.25 → 1 | 250 ms |
| Hover kartu/menu | ganti latar | 120 ms |

Hormati `prefers-reduced-motion`: matikan animasi geser dan progress otomatis.

---

## 9. Aksesibilitas

- Kontras teks isi minimal 4.5:1 (`#A8A8A8` di atas `#000` sudah memenuhi).
- Jangan menyampaikan status hanya lewat warna: sertakan label atau ikon (contoh: titik merah + kata "Risiko").
- Area klik minimal 40 × 40 px.
- Navigasi keyboard: ← → untuk slide, `Esc` menutup modal, fokus terlihat dengan outline biru 2 px.
- Beri `aria-label` pada tombol ikon.

---

## 10. Snippet CSS Siap Pakai

**Kerangka tiga zona**
```css
.app{width:1280px;height:720px;background:var(--surface-1);border:1px solid var(--separator);
  border-radius:20px;display:grid;grid-template-columns:220px minmax(0,1fr) 320px;overflow:hidden}
.sidebar{border-right:1px solid var(--separator);padding:24px 12px}
.main{padding:24px 32px;overflow:hidden}
.aside{border-left:1px solid var(--separator);padding:24px}
```

**Avatar dengan ring gradient**
```css
.ring{padding:2px;border-radius:50%;background:var(--ig-gradient);display:inline-flex}
.ring>img,.ring>div{border:2px solid var(--bg);border-radius:50%;background:var(--surface-1)}
```

**Item sidebar**
```css
.nav-item{display:flex;align-items:center;gap:16px;height:48px;padding:0 12px;border-radius:12px;font-size:16px}
.nav-item:hover{background:var(--surface-3)}
.nav-item.active{font-weight:700}
```

**Modal**
```css
.overlay{position:absolute;inset:0;background:rgba(0,0,0,.65);display:grid;place-items:center}
.modal{width:520px;background:var(--surface-3);border-radius:16px;box-shadow:var(--shadow-modal);overflow:hidden}
.modal-action{display:block;width:100%;padding:14px;border-top:1px solid var(--border);text-align:center;font-weight:700}
.modal-action.primary{color:var(--blue)}
```

**Progress story**
```css
.seg{flex:1;height:3px;background:var(--border);border-radius:2px;overflow:hidden}
.seg.active i{display:block;height:100%;background:#fff;width:0;animation:fill 6s linear forwards}
@keyframes fill{to{width:100%}}
```

**Untuk Marp:** bungkus setiap slide dalam satu `<div class="app">…</div>`, set `section{padding:0;display:grid;place-items:center;background:var(--bg)}`, dan gunakan ukuran kanvas 1280×720 (`size: 16:9` pada front-matter).

---

## 11. Do & Don't

| Do | Don't |
|---|---|
| Pakai garis tipis 1px sebagai pemisah | Memberi bayangan tebal di setiap kartu |
| Batasi gradient ke avatar, ring, dan satu sorotan | Memakai gradient sebagai latar semua kartu |
| Tulis teks singkat, satu ide per kartu | Menumpuk paragraf panjang di dalam mockup |
| Pertahankan kolom feed sempit (≤630 px) di tengah | Merentangkan konten penuh selebar layar |
| Gunakan merah hanya untuk risiko | Memakai merah dan biru bergantian tanpa makna |
| Tampilkan interaksi kecil (like, hover, progress) | Menambah animasi dekoratif yang mengalihkan perhatian |

---

## 12. Checklist Sebelum Presentasi

- [ ] Semua slide memakai kerangka tiga zona (atau overlay penuh untuk story/modal)
- [ ] Token warna dan radius konsisten di semua slide
- [ ] Teks terkecil ≥ 12 px dan terbaca dari jarak proyektor
- [ ] Username, nama tim, dan judul sesuai dokumen: `recsys_group_05`, Adam • Alfa Ridho • Akmal • Dayat
- [ ] Modal dan story dapat ditutup atau dilanjutkan dengan keyboard
- [ ] Uji di resolusi 1280×720 dan 1920×1080
