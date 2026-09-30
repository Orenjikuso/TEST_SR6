# Design Guide: Pitch Deck Web "Instagram Desktop" (Landscape 16:9)

Panduan desain untuk deck **"The Architecture of Addiction: Review Sistem Rekomendasi Instagram"** (Tugas 1, Poin 5: Etika & Dampak Sosial). Deck berjalan di browser (HTML/CSS/JS), tampil seperti **Instagram versi web desktop**, dan setiap perpindahan slide meniru gerakan nyata di Instagram: story, reels, modal, like, notifikasi.

Kelompok: `recsys_group_05` • Adam • Alfa Ridho • Akmal • Dayat

---

## 1. Konsep Besar

**Ide utama:** audiens tidak melihat "slide", mereka melihat **akun Instagram kelompok** yang sedang dibuka di laptop. Setiap slide adalah satu layar asli Instagram, dan ironinya disengaja: platform yang dikritik dipakai sebagai media presentasinya.

| Slide | Layar Instagram yang ditiru | Gerakan khas |
|---|---|---|
| 1 | Profil + highlight | Story ring berputar, hitung naik statistik |
| 2 | Postingan feed | Skeleton loading, double-tap like |
| 3 | Reels (vertikal dalam bingkai landscape) | Swipe-up antar reel, progress bar |
| 4 | Feed + tiga kartu pilar | Carousel geser, dot indicator |
| 5 | Story viewer | Progress segmen 6 detik, tetangga diburamkan |
| 6 | Modal "Mengapa Anda melihat postingan ini?" | Scale-in modal, latar memburam |
| 7 | Settings / Privasi | Toggle menyala berurutan |
| 8 | Direct Message + Explore (CTA) | Bubble chat mengetik, grid explore |
| 9 | Story Q&A (penutup) | Stiker pertanyaan miring, kirim pesan |

> Materi tiap slide mengikuti `PITCHDECK.md` (8 slide asli). Di guide ini, Slide 3 asli (Pilar 1) dipecah jadi feed + carousel agar lebih hidup, sehingga total menjadi 9 layar. Jika waktu presentasi terbatas, gabungkan kembali sesuai peta di Bagian 8.

---

## 2. Prinsip Desain

1. **Konten adalah pusat.** UI menjadi bingkai tenang. Warna terang hanya untuk aksi dan peringatan.
2. **Gelap, datar, tipis.** Latar hitam, permukaan abu gelap, pemisah garis 1px. Tanpa gradient besar, tanpa bayangan berat.
3. **Gradient hanya untuk identitas.** Story ring, logo, dan satu sorotan per slide.
4. **Satu warna = satu makna.** Biru untuk aksi/tautan, merah untuk bahaya/like, abu untuk info sekunder.
5. **Setiap slide adalah layar asli.** Ada sidebar, top bar, atau overlay yang benar-benar ada di Instagram web.
6. **Gerak punya alasan.** Animasi meniru interaksi Instagram, bukan dekorasi.
7. **Ironi sebagai narasi.** Makin lama deck berjalan, elemen "adiktif" (notifikasi, like, badge) makin sering muncul, lalu dihentikan di slide solusi. Audiens merasakan sendiri maksud Pilar 2.

---

## 3. Kanvas, Grid, dan Skala

| Properti | Nilai |
|---|---|
| Rasio | 16:9 |
| Kanvas dasar | 1280 × 720 px |
| Skala | Seluruh kanvas di-scale dengan `transform: scale()` mengikuti ukuran jendela (letterbox hitam) |
| Padding luar | 0 (kanvas penuh seperti jendela browser) |
| Satuan spasi | kelipatan 4 px (4, 8, 12, 16, 24, 32, 48) |

**Kerangka tiga zona ala Instagram web:**

```
┌──────────┬───────────────────────────────┬────────────────┐
│ SIDEBAR  │        KONTEN TENGAH          │  PANEL KANAN   │
│ 72px     │        max 630px, center      │  319px         │
│ ikon     │  feed / profil / reel         │  saran & fakta │
└──────────┴───────────────────────────────┴────────────────┘
```

Angka di atas mengikuti Instagram web asli:

- Sidebar ikon saja **72 px** (mode ringkas, dipakai default agar ruang konten lega). Versi lebar **244 px** dengan label dipakai hanya di slide Profil.
- Kolom feed **maks 630 px**, postingan **470 px**.
- Panel saran kanan **319 px**, muncul hanya di layar ≥ 1160 px (kanvas kita 1280, jadi aman).

**Skala kanvas (JS):**
```js
function fit() {
  const s = Math.min(innerWidth / 1280, innerHeight / 720);
  stage.style.transform = `translate(-50%,-50%) scale(${s})`;
}
addEventListener('resize', fit); fit();
```
```css
.stage{position:fixed;left:50%;top:50%;width:1280px;height:720px;transform-origin:center}
body{margin:0;background:#000;overflow:hidden}
```

---

## 4. Design Tokens

```css
:root{
  /* Surface */
  --bg:#000000;
  --surface-1:#121212;   /* panel */
  --surface-2:#1C1C1E;   /* kartu */
  --surface-3:#262626;   /* input, chip, modal */
  --separator:#262626;
  --border:#363636;
  --overlay:rgba(0,0,0,.65);

  /* Teks */
  --text:#F5F5F5;
  --text-2:#A8A8A8;
  --text-3:#737373;

  /* Aksen */
  --blue:#0095F6;
  --blue-hover:#1877F2;
  --red:#ED4956;
  --like:#FF3040;
  --green:#00C853;
  --purple:#C13584;

  /* Gradient identitas */
  --ig-gradient:linear-gradient(45deg,#F58529,#FEDA77 25%,#DD2A7B 55%,#8134AF 80%,#515BD4);

  /* Bentuk */
  --r-sm:8px; --r-md:12px; --r-lg:16px; --r-xl:24px; --r-full:999px;

  /* Bayangan: hanya untuk modal */
  --shadow-modal:0 16px 48px rgba(0,0,0,.85);

  /* Easing & durasi */
  --ease-out:cubic-bezier(.22,1,.36,1);      /* mendarat halus */
  --ease-spring:cubic-bezier(.34,1.56,.64,1); /* memantul kecil (like, modal) */
  --t-fast:120ms; --t-base:250ms; --t-slow:450ms;
}
```

**Makna warna di deck ini**

| Warna | Dipakai untuk |
|---|---|
| Merah `#ED4956` | Bias, adiksi, kotak hitam sebagai masalah, nol akuntabilitas, badge bahaya |
| Biru `#0095F6` | Klaim resmi platform, tombol aksi, solusi, tautan, kesimpulan |
| Ungu `#C13584` | Label "Responsible AI" dan badge kategori |
| Gradient | Avatar kelompok, ring story, logo, stiker Q&A |
| Abu | Konten "ditekan", teks pendukung, meta |

---

## 5. Tipografi

Instagram memakai font sistem. Gunakan system stack agar terasa asli. **Plus Jakarta Sans** hanya untuk judul besar slide (Cover dan Q&A) agar deck tetap punya karakter.

```css
--font-ui:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
--font-display:"Plus Jakarta Sans",var(--font-ui);
--font-script:"Grand Hotel","Billabong",cursive; /* logo saja */
```

| Peran | Ukuran | Berat | Contoh |
|---|---|---|---|
| Judul cover | 44–52 px | 800 | THE ARCHITECTURE OF ADDICTION |
| Judul slide | 28–32 px | 700–800 | "Mengapa Kemarahan & Sensasionalisme Cepat Terjual?" |
| Judul kartu | 16 px | 600 | "Variable Rewards" |
| Username | 14 px | 600 | `recsys_group_05` |
| Isi | 14 px | 400 | Caption, deskripsi |
| Meta | 12 px | 400 | "32 mnt", "Disarankan untuk Anda" |
| Badge | 11–12 px | 700 | "ATTENTION POLARIZATION" |
| Angka statistik | 16–18 px | 600 | "4 post" |

Aturan: line-height 1.45–1.55. Teks isi minimal 12 px, idealnya 14 px ke atas karena diproyeksikan. Hindari huruf kapital penuh kecuali badge dan judul cover.

**Logo "Instagram":** tulis teks bergaya script (Grand Hotel dari Google Fonts), 24 px, warna putih, tanpa gradient. Jangan menggambar ulang logo kamera resmi.

---

## 6. Ikonografi

- Ikon **garis** (outline, stroke 1.5–2 px): Home, Search, Explore, Reels, Messages, Notifications, Create, Profile.
- Ukuran: 24 px sidebar, 24 px action bar postingan, 16 px inline.
- Ikon aktif menjadi versi solid putih (isi `fill: currentColor`).
- Pustaka: **Lucide** via `https://cdnjs.cloudflare.com/ajax/libs/lucide/0.383.0/lucide.min.js`. Semua ikon inline SVG, tanpa gambar eksternal.
- Emoji hanya sebagai penanda konten (🎰 ♾️ 🧠 ⚖️), bukan navigasi.
- Badge notifikasi: lingkaran merah 18 px, angka putih 11 px bold, posisi kanan-atas ikon.

---

## 7. Komponen (Peningkatan Fidelitas Instagram)

### 7.1 Sidebar
- Lebar 72 px (ikon) atau 244 px (ikon + label). Border kanan 1px `--separator`.
- Atas: logo (script) di mode lebar, ikon kamera kecil di mode ringkas.
- Menu: Home, Search, Explore, Reels, Messages, Notifications, Create, Profile. Tinggi item 48 px, radius 12 px, jarak 4 px.
- Hover: latar `--surface-3` (120 ms), ikon membesar 1.05.
- Aktif: ikon solid, label bold.
- Bawah: ikon ☰ "Lainnya" dan "Threads" (opsional).
- **Navigasi deck menyatu dengan sidebar:** ikon aktif mengikuti slide (lihat Bagian 8).

### 7.2 Top bar mobile-style (hanya untuk Reels dan Story)
- Avatar 32 px ber-ring gradient, username bold, titik `•`, waktu abu, tombol **Ikuti** biru teks.
- Ikon `•••` rata kanan.

### 7.3 Story ring
- Diameter 64–80 px. Ring gradient 3 px, celah hitam 3 px.
- Ring **berputar pelan** saat slide aktif (rotasi 360° dalam 6 detik, sekali).
- Label 12 px di bawah, 1 baris, terpotong dengan ellipsis.
- Story yang sudah dilihat: ring berubah abu `--border`.

### 7.4 Kartu postingan
- Lebar 470 px, tanpa latar (menyatu dengan `--bg`), garis bawah 1px.
- Header: avatar 32 px + username + waktu + `•••`.
- Media: rasio 4:5 atau 1:1, berisi kartu konten deck.
- Action bar: ❤ 💬 ✈ di kiri, 🔖 di kanan, jarak 16 px.
- Like count bold, caption dengan username bold di depan, "Lihat semua 3.128 komentar" abu.
- Carousel: titik indikator di bawah media (aktif putih, lainnya `--text-3`), panah bulat kiri-kanan di tepi media.

### 7.5 Reels
- Bingkai vertikal 9:16 tinggi 620 px di tengah kanvas, lebar 349 px, radius 12 px.
- Kolom aksi di kanan luar bingkai: ❤ jumlah, 💬 jumlah, ✈, 🔖, `•••` disusun vertikal.
- Bawah bingkai: avatar, username, tombol Ikuti, caption 2 baris, baris audio "♪ original audio".
- Di kiri dan kanan bingkai, ruang kosong diisi teks besar penjelas (judul slide) agar landscape tidak hampa.

### 7.6 Story viewer
- Latar `--bg` penuh, konten tengah 420×620 px, radius 12 px.
- Progress: segmen di atas, tinggi 3 px, radius 2 px, segmen aktif terisi 6 detik.
- Story tetangga kiri dan kanan **diperkecil 0.7 dan diburamkan** (`blur(6px)`, opasitas .5).
- Bawah: input pil "Kirim pesan..." + ikon ♡ ✈.
- Klik area kiri/kanan atau tombol ← → pindah story.

### 7.7 Modal desktop
- Overlay `--overlay` dengan `backdrop-filter: blur(6px)`.
- Modal lebar 400–580 px, radius 16 px, latar `--surface-3`.
- Judul tengah 16 px bold, tombol tutup ✕ di pojok kanan atas layar (seperti Instagram asli).
- Aksi berupa baris teks penuh dipisah garis: biru (utama), merah (destruktif), putih (batal).

### 7.8 Baris pengaturan
- Tinggi 64–72 px, ikon/judul kiri, subteks abu 12 px, indikator kanan.
- Toggle 44×26 px, aktif `--blue`, mati `--border`, bulatan putih 20 px bergeser 18 px.

### 7.9 Panel saran kanan
- Atas: avatar 44 px + username + nama, tautan biru "Beralih".
- Judul "Disarankan untuk Anda" abu 14 px bold + tautan "Lihat semua".
- Isi: baris avatar 32–44 px + username + subteks + "Ikuti" biru. Dipakai untuk **Fakta Teknis** atau ringkasan poin.
- Footer kecil abu 12 px: "Tentang • Bantuan • Privasi • © 2026 RECSYS_GROUP_05".

### 7.10 Direct Message (Slide 8)
- Kiri: daftar percakapan 320 px. Kanan: jendela chat.
- Bubble kirim: biru `--blue`, bubble terima: `--surface-3`, radius 18 px, maks lebar 60%.
- Indikator mengetik: tiga titik bergantian naik-turun.
- Tiga bubble berisi tiga solusi (Platform, Regulasi, Pengguna).

### 7.11 Notifikasi toast
- Kapsul di pojok kanan atas, latar `--surface-3`, avatar + teks 13 px.
- Masuk dari atas (translateY -24 → 0), tampil 2,5 detik, keluar memudar.

### 7.12 Badge dan tombol

| Komponen | Spesifikasi |
|---|---|
| Badge bahaya | latar `rgba(237,73,86,.2)`, teks dan border `--red`, radius 6 px |
| Badge info | latar `rgba(0,149,246,.2)`, teks dan border `--blue` |
| Badge ungu | latar `rgba(129,52,175,.2)`, teks dan border `--purple` |
| Tombol utama | `--blue`, teks putih, tinggi 32–36 px, radius 8 px, bold 14 px |
| Tombol sekunder | `--surface-3`, teks putih |
| Tombol teks | tanpa latar, teks biru bold |

### 7.13 Skeleton loading
- Blok abu `--surface-3` dengan kilau bergerak:
```css
.skel{background:linear-gradient(90deg,#1c1c1e 25%,#2a2a2c 50%,#1c1c1e 75%);
  background-size:200% 100%;animation:shimmer 1.2s linear infinite;border-radius:8px}
@keyframes shimmer{to{background-position:-200% 0}}
```

---

## 8. Peta Slide Detail (Materi dari PITCHDECK.md)

Di bawah tiap slide tertulis **layar IG**, **isi**, dan **animasi masuk**.

### Slide 1: Cover, Profil `recsys_group_05`
- **Sidebar:** Profile aktif, mode lebar 244 px.
- **Header profil:** avatar 150 px ber-ring gradient berisi ⚖️. Di samping: username `recsys_group_05`, tombol **Following** dan **Message**, ikon `•••`.
- **Statistik:** `8 post` • `4 anggota` • `Poin 5` (angka menghitung naik dari 0).
- **Bio:**
  - **THE ARCHITECTURE OF ADDICTION**
  - Dekonstruksi Etika & Dampak Sosial Sistem Rekomendasi Instagram
  - *"Jika produknya gratis, perhatian dan perilakumu adalah barang dagangannya."* (merah miring)
  - Adam • Alfa Ridho • Akmal • Dayat
- **Highlight (story ring ×4):** Bias, Adiksi, Kotak Hitam, Privasi.
- **Tab:** ▦ POSTS • 🎬 REELS • 🏷 TAGGED.
- **Grid 3 kolom:** 6 kartu kotak bertema (satu per pilar + masalah + solusi).
- **Animasi:** lihat 9.1 (Boot sequence).

### Slide 2: Feed, Masalah Utama ("Optimasi yang Salah Arah")
- **Tengah:** satu postingan. Media berisi dua kartu berdampingan:
  - Biru: **KLAIM RESMI PLATFORM** "Menghubungkan orang dengan hal-hal yang mereka sukai secara cerdas dan relevan."
  - Merah: **REALITAS ARSITEKTUR RECSYS** "Dioptimalkan untuk memanjangkan Time Spent demi ruang tayang iklan."
- **Kanan:** panel "Disarankan untuk Anda" berisi **funnel** vertikal: Atensi Pengguna → Dwell Time → Impresi Iklan → Pendapatan Meta (empat baris, panah ↓ di antaranya).
- **Caption:** "Jika produknya gratis, kamu adalah produknya. #RecSys #Etika", like `98,4 rb`.
- **Badge:** `MISALIGNED INCENTIVES` (merah).
- **Animasi:** skeleton 600 ms → kartu muncul → funnel menyala berurutan (lihat 9.5).

### Slide 3: Feed Carousel, Pilar 1 Potensi Bias
- **Judul:** "Mengapa Kemarahan & Sensasionalisme Cepat Terjual?" Badge `ATTENTION POLARIZATION`.
- **Carousel 3 panel**, masing-masing satu bias:
  1. Bias Interaksi (Engagement Baiting)
  2. Bias Ramah Pengiklan (Commercial Bias)
  3. Bias Visual Konvensional (Aesthetic Bias)
- Kartu "Diprioritaskan" (merah, terang) vs "Ditekan" (abu, redup) sebagai ilustrasi pada panel 1 dan 2.
- **Panel kanan:** ringkasan tiga bias sebagai daftar saran.
- **Animasi:** auto-geser carousel tiap 5 detik atau tombol →; titik indikator mengikuti.

### Slide 4: Reels, Pilar 2 Rekayasa Adiksi
- **Judul samping:** "Mekanisme Kasino Digital di Dalam Saku". Badge `DOOMSCROLLING TRAP`.
- **Bingkai reel vertikal** berisi 3 reel yang ditukar dengan swipe-up:
  - 🎰 Variable Rewards
  - ♾️ Ketiadaan Stopping Cue
  - 🧠 Dampak Sosial Nyata (penurunan attention span, insomnia, kecemasan akibat komparasi sosial)
- **Progress reel** tipis di bawah bingkai. Jumlah like di sisi kanan naik terus (simulasi adiksi).
- **Animasi:** swipe-up antar reel, ikon ❤ berdenyut, penghitung "menit menonton" bertambah di pojok.

### Slide 5: Story Viewer, Rangkuman Risiko (opsional, bisa digabung ke Slide 4)
- **Story utama:** banner merah putus-putus "Mengunci Pengguna Agar Terus Scroll".
- **Dua story tetangga** diburamkan.
- **Animasi:** progress 6 detik, klik kanan untuk lanjut.
- Jika waktu terbatas, **lewati slide ini**.

### Slide 6: Modal, Pilar 3 Kotak Hitam
- **Latar:** feed diburamkan dan digelapkan.
- **Modal** "Mengapa Anda melihat postingan ini?":
  - Penjelasan resmi (normatif): "karena Anda menyukai video serupa" dengan badge abu **Superficial Only**.
  - Fakta teknis (garis kiri merah): **Lapisan Deep Learning Tersembunyi** dan **Nol Akuntabilitas**.
  - Aksi: **Pahami Risiko Sistem** (biru) dan **Tutup**.
- Badge `BLACK BOX DILEMMA` di atas modal.
- **Animasi:** modal scale-in pegas, baris teknis muncul bergantian, "kotak hitam" sensor hitam membuka (lihat 9.6).

### Slide 7: Settings, Pilar 4 Privasi & Kedaulatan Data
- **Kiri:** daftar menu Settings (Privasi aktif).
- **Kanan:** tiga baris pengaturan:
  - Dwell Time & Scroll Velocity — badge `IMPLISIT`
  - Pelacakan Eksternal via Meta Pixel — badge `CROSS-PLATFORM`
  - Kendali Semu (Illusion of Choice) — badge `NO OPT-OUT`
- Toggle untuk dua baris pertama **menyala sendiri dan tidak bisa dimatikan** (klik memantul kembali). Ini visualisasi langsung "tanpa opt-out".
- **Kotak kesimpulan biru** di bawah: "Jejak bawah sadar ditambang tanpa izin riil."
- **Animasi:** toggle menyala berurutan, klik dipantulkan balik.

### Slide 8: Direct Message, Call to Action ("Responsible AI")
- **Jendela chat** dengan akun `responsible_ai`.
- Tiga bubble biru masuk bergantian dengan indikator mengetik:
  1. ⚙️ **Platform:** wajibkan Explicit Stopping Cues dan opsi feed kronologis permanen.
  2. 🏛️ **Regulasi:** audit algoritmik independen berkala, terutama untuk anak muda.
  3. 💡 **Pengguna:** sadari bahwa beranda adalah manipulasi statistik, bukan realitas.
- **Kutipan penutup** sebagai pesan terakhir: *"Algoritma seharusnya menjadi cermin kebutuhan manusia, bukan kompas yang membelenggu perhatian kita."*
- **Animasi:** notifikasi, sengaja dihentikan di slide ini (lihat 9.8).

### Slide 9: Story Q&A, Penutup
- **Latar:** gradient identitas penuh (satu-satunya slide dengan gradient besar).
- **Stiker pertanyaan** putih di tengah, miring −1,5°: ❓ "Ada Pertanyaan Kritis?" dan "Mari diskusikan batas antara kemudahan teknologi dan eksploitasi atensi".
- **Kolom input:** "Kirim tanggapan ke: Adam, Alfa Ridho, Akmal, Dayat..."
- **Teks bawah:** "Terima Kasih • Sesi Tanya Jawab Dibuka".
- **Animasi:** stiker jatuh dengan pantulan, kolom input berkedip kursor.

**Peta ringkas 8 → 9 slide**

| PITCHDECK.md | Guide ini |
|---|---|
| 1 Cover | Slide 1 |
| 2 Problem | Slide 2 |
| 3 Pilar 1 | Slide 3 |
| 4 Pilar 2 | Slide 4 (+5 opsional) |
| 5 Pilar 3 | Slide 6 |
| 6 Pilar 4 | Slide 7 |
| 7 Solusi | Slide 8 |
| 8 Q&A | Slide 9 |

---

## 9. Animasi Slide

### 9.1 Prinsip Gerak
- Gerakan cepat di awal dan mendarat halus (`--ease-out`).
- Durasi transisi slide 400–500 ms. Elemen dalam slide stagger 60–80 ms.
- Hanya animasi `transform` dan `opacity` (ringan di GPU). Hindari animasi `width/height/top/left`, kecuali progress story.
- Satu "momen wow" per slide, sisanya halus.

### 9.2 Transisi Antar Slide (mirip perpindahan layar Instagram)

| Dari → ke | Gaya | Keterangan |
|---|---|---|
| Profil → Feed | **Zoom-in kartu** | Kartu grid membesar mengisi layar (seperti membuka postingan) |
| Feed → Feed Carousel | **Slide horizontal** | Geser 40 px + fade |
| Feed → Reels | **Swipe-up vertikal** | Slide lama naik, baru masuk dari bawah |
| Reels → Story | **Cross-fade + scale** | Story membesar dari 0,9 |
| Story → Modal | **Overlay pop** | Latar memburam, modal scale 0,94 → 1 |
| Modal → Settings | **Slide horizontal** | Seperti berpindah menu |
| Settings → DM | **Slide dari kanan** | Seperti membuka pesan |
| DM → Q&A | **Story cube** | Rotasi 3D ringan 90° (seperti pindah story) |

Implementasi dasar:
```css
.slide{position:absolute;inset:0;opacity:0;visibility:hidden;
  transition:opacity var(--t-base) var(--ease-out),transform var(--t-slow) var(--ease-out)}
.slide.active{opacity:1;visibility:visible}

/* Varian arah */
.slide[data-enter="slide-x"]{transform:translateX(40px)}
.slide[data-enter="slide-y"]{transform:translateY(60px)}
.slide[data-enter="zoom"]{transform:scale(.92)}
.slide[data-enter="cube"]{transform:perspective(1200px) rotateY(24deg);transform-origin:left center}
.slide.active{transform:none}
```

### 9.3 Mesin Slide (JS minimal)
```js
const slides = [...document.querySelectorAll('.slide')];
let i = 0;

function go(n){
  n = Math.max(0, Math.min(slides.length - 1, n));
  if(n === i) return;
  slides[i].classList.remove('active');
  slides[n].classList.add('active');
  i = n;
  document.body.dataset.slide = i;       // untuk styling sidebar aktif
  runSlideHooks(slides[i]);               // jalankan animasi khusus slide
}

addEventListener('keydown', e => {
  if(['ArrowRight',' ','PageDown'].includes(e.key)) go(i+1);
  if(['ArrowLeft','PageUp'].includes(e.key))        go(i-1);
  if(e.key === 'Escape') closeModal();
  if(e.key === 'f') document.documentElement.requestFullscreen?.();
});
addEventListener('wheel', e => { if(Math.abs(e.deltaY) > 40) go(i + Math.sign(e.deltaY)); }, {passive:true});
```

### 9.4 Stagger Masuk Elemen
Tambahkan `data-stagger` pada container, anak-anaknya muncul berurutan.
```css
.slide [data-stagger] > *{opacity:0;transform:translateY(12px)}
.slide.active [data-stagger] > *{opacity:1;transform:none;
  transition:opacity var(--t-slow) var(--ease-out),transform var(--t-slow) var(--ease-out);
  transition-delay:calc(var(--n) * 70ms + 200ms)}
```
```js
document.querySelectorAll('[data-stagger]').forEach(p =>
  [...p.children].forEach((c, n) => c.style.setProperty('--n', n)));
```

### 9.5 Animasi Khas Instagram (pilih sesuai slide)

**Count-up statistik** (Slide 1)
```js
function countUp(el, to, ms = 900){
  const t0 = performance.now();
  (function tick(t){
    const p = Math.min(1, (t - t0) / ms);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString('id-ID');
    if(p < 1) requestAnimationFrame(tick);
  })(t0);
}
```

**Story ring berputar** (Slide 1)
```css
.slide.active .ring{animation:spin 6s var(--ease-out) 1}
@keyframes spin{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}
```

**Double-tap like dengan hati besar** (Slide 2)
```css
.heart-pop{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.heart-pop svg{width:96px;fill:#fff;opacity:0;transform:scale(.3)}
.heart-pop.go svg{animation:pop .9s var(--ease-spring)}
@keyframes pop{0%{opacity:0;transform:scale(.3)}25%{opacity:1;transform:scale(1.15)}
  40%{transform:scale(.95)}60%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.2) translateY(-20px)}}
```
```js
media.addEventListener('dblclick', () => {
  heartPop.classList.remove('go'); void heartPop.offsetWidth; heartPop.classList.add('go');
  countUp(likeEl, 98400 + 1, 300);
});
```

**Funnel menyala berurutan** (Slide 2)
```css
.funnel li{opacity:.3;transition:opacity .4s,color .4s}
.funnel li.on{opacity:1;color:var(--red)}
```
```js
[...funnel.children].forEach((li, n) => setTimeout(() => li.classList.add('on'), 600 + n * 500));
```

**Carousel** (Slide 3)
```css
.track{display:flex;transition:transform var(--t-slow) var(--ease-out)}
.track>*{flex:0 0 100%}
```
```js
let c = 0;
function carousel(n){
  c = (n + 3) % 3;
  track.style.transform = `translateX(${-c * 100}%)`;
  dots.forEach((d, k) => d.classList.toggle('on', k === c));
}
```

**Swipe-up Reels** (Slide 4)
```css
.reel{position:absolute;inset:0;transform:translateY(100%);transition:transform var(--t-slow) var(--ease-out)}
.reel.cur{transform:none}
.reel.past{transform:translateY(-100%)}
```

**Progress Story 6 detik** (Slide 5)
```css
.seg{flex:1;height:3px;background:rgba(255,255,255,.3);border-radius:2px;overflow:hidden}
.seg.done i{width:100%}
.seg.active i{animation:fill 6s linear forwards}
.seg i{display:block;height:100%;width:0;background:#fff}
@keyframes fill{to{width:100%}}
```

**Modal pegas** (Slide 6)
```css
.overlay{opacity:0;backdrop-filter:blur(0);transition:opacity 200ms,backdrop-filter 200ms}
.overlay.show{opacity:1;backdrop-filter:blur(6px)}
.modal{transform:scale(.94);transition:transform 260ms var(--ease-spring)}
.overlay.show .modal{transform:scale(1)}
```

**Sensor "kotak hitam" terbuka** (Slide 6)
```css
.redact{position:relative;color:transparent}
.redact::after{content:"";position:absolute;inset:0;background:#000;border-radius:4px;
  transition:transform .8s var(--ease-out);transform-origin:left}
.slide.active .redact.reveal::after{transform:scaleX(0);transition-delay:1.2s}
```
Teks yang tetap tertutup (mis. "bobot parameter") memakai `.redact` tanpa `.reveal`: audiens melihat langsung bahwa bagian itu memang tidak pernah dibuka.

**Toggle yang menolak dimatikan** (Slide 7)
```css
.toggle.locked.shake{animation:shake .35s}
@keyframes shake{20%,60%{transform:translateX(-4px)}40%,80%{transform:translateX(4px)}}
```
```js
lockedToggles.forEach(t => t.addEventListener('click', () => {
  t.classList.remove('shake'); void t.offsetWidth; t.classList.add('shake');
  toast('Opsi ini tidak dapat dinonaktifkan');
}));
```

**Bubble chat mengetik** (Slide 8)
```css
.typing i{display:inline-block;width:6px;height:6px;margin:0 2px;border-radius:50%;background:var(--text-2);
  animation:bounce 1s infinite}
.typing i:nth-child(2){animation-delay:.15s}
.typing i:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,60%,100%{transform:none}30%{transform:translateY(-4px)}}
.bubble{opacity:0;transform:translateY(8px) scale(.96);transform-origin:left bottom}
.bubble.in{opacity:1;transform:none;transition:all .3s var(--ease-spring)}
```

**Stiker jatuh** (Slide 9)
```css
.sticker{transform:rotate(-1.5deg) translateY(-140%);opacity:0}
.slide.active .sticker{animation:drop .8s var(--ease-spring) .2s forwards}
@keyframes drop{to{transform:rotate(-1.5deg);opacity:1}}
```

### 9.6 Strategi Ironi: Elemen Adiktif Berlebih
Dari Slide 2 sampai 7, munculkan sinyal yang meniru "jebakan" Instagram:
- Lencana notifikasi merah bertambah angka pelan di sidebar.
- Toast "baru saja disukai" sesekali (maks 1 tiap 12 detik).
- Penghitung "waktu menonton" di pojok kanan bawah bertambah.

Di **Slide 8 (Solusi)** semua elemen itu **berhenti dan memudar**, lalu muncul kartu kecil "Jeda: kamu sudah menonton 9 slide" sebagai *explicit stopping cue*. Kamu mempraktikkan solusi yang kamu usulkan.

### 9.7 Micro-interaction Global

| Elemen | Animasi | Durasi |
|---|---|---|
| Hover item sidebar | latar berubah, ikon scale 1.05 | 120 ms |
| Tombol Ikuti/Following | teks berganti, latar berubah | 150 ms |
| Tombol like | scale 1 → 1.25 → 1 | 250 ms |
| Kartu grid hover | naik 2 px + garis biru | 150 ms |
| Toggle | bulatan bergeser | 200 ms |
| Toast | masuk dari atas, keluar memudar | 300 ms |

### 9.8 Reduced Motion
```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;
    transition-duration:.01ms!important}
  .slide{transform:none!important}
}
```
Tambahkan tombol kecil "Kurangi gerak" di pojok, berguna jika proyektor kelas lambat.

---

## 10. Teknis: Struktur File

Satu file `index.html` saja, semua CSS dan JS inline. Pustaka eksternal hanya Lucide dan Google Fonts.

```
index.html
├─ <style>   tokens, komponen, slide, animasi
├─ <div class="stage">
│   ├─ <aside class="sidebar">   (selalu ada, ikon aktif mengikuti slide)
│   ├─ <main class="viewport">
│   │   └─ <section class="slide" data-enter="zoom"> ... ×9
│   ├─ <div class="toast-zone">
│   └─ <div class="overlay" id="modal"> ... </div>
└─ <script>  fit(), go(), hooks per slide, countUp(), carousel(), dll.
```

Kerangka tiga zona:
```css
.app{width:1280px;height:720px;background:var(--surface-1);border-radius:20px;overflow:hidden;
  display:grid;grid-template-columns:72px minmax(0,1fr) 319px}
.sidebar{border-right:1px solid var(--separator);padding:12px 8px}
.main{position:relative;overflow:hidden}
.aside{border-left:1px solid var(--separator);padding:24px}
```

Hook per slide:
```js
const hooks = {
  0: s => s.querySelectorAll('[data-count]').forEach(el => countUp(el, +el.dataset.count)),
  1: s => runFunnel(s),
  2: s => carousel(0),
  5: s => setTimeout(openModal, 500),
  7: s => runChat(s),
};
function runSlideHooks(s){ hooks[slides.indexOf(s)]?.(s); }
```

---

## 11. Aksesibilitas

- Kontras teks isi minimal 4.5:1 (`#A8A8A8` di atas `#000` sudah memenuhi).
- Jangan menyampaikan status hanya lewat warna: sertakan label atau ikon (titik merah + kata "Risiko").
- Area klik minimal 40 × 40 px.
- Keyboard: ← → pindah slide, `Esc` tutup modal, `F` fullscreen, fokus terlihat dengan outline biru 2 px.
- `aria-label` pada semua tombol ikon. `aria-live="polite"` pada toast.
- Animasi berkedip cepat (> 3 kali/detik) dilarang.
- Tombol "Kurangi gerak" tersedia (9.8).

---

## 12. Do & Don't

| Do | Don't |
|---|---|
| Garis tipis 1px sebagai pemisah | Bayangan tebal di setiap kartu |
| Gradient hanya di avatar, ring, logo, satu sorotan, dan slide penutup | Gradient sebagai latar semua kartu |
| Satu ide per kartu, teks singkat | Paragraf panjang di dalam mockup |
| Kolom feed sempit (≤ 630 px) di tengah | Konten direntangkan penuh selebar layar |
| Merah hanya untuk risiko, biru untuk aksi/solusi | Merah dan biru bergantian tanpa makna |
| Animasi yang meniru interaksi Instagram nyata | Animasi dekoratif (spin, bounce) tanpa alasan |
| Animasi `transform`/`opacity` | Animasi `width`/`top`/`left` (patah-patah) |
| Logo teks script seperti tampilan web | Menggambar ulang ikon/logo resmi Instagram |
| Hentikan elemen adiktif di slide solusi | Membiarkan notifikasi terus muncul sampai akhir |

---

## 13. Catatan Etika & Hak Cipta

- Deck ini **parodi edukatif** untuk tugas kuliah. Tulis di footer slide 1 atau 9: *"Tampilan terinspirasi Instagram. Bukan produk atau afiliasi Meta."*
- Jangan memakai foto orang sungguhan sebagai avatar. Pakai inisial, ikon, atau gradient.
- Angka (98,4 rb like, 3,1 rb komentar, dst.) adalah **data fiktif** untuk ilustrasi. Tandai dengan catatan kecil bila ada yang bertanya.
- Klaim faktual pada slide (dwell time, Meta Pixel, dsb.) sebaiknya disertai sumber di catatan penyaji atau slide referensi tambahan.

---

## 14. Checklist Sebelum Presentasi

- [ ] Seluruh slide memakai kerangka sidebar 72 px + konten + panel kanan (atau overlay penuh untuk reels/story/modal)
- [ ] Token warna, radius, dan easing konsisten
- [ ] Teks terkecil ≥ 12 px dan terbaca dari jarak proyektor
- [ ] Username, nama tim, dan judul sesuai dokumen: `recsys_group_05`, Adam • Alfa Ridho • Akmal • Dayat
- [ ] Peta 9 slide sesuai materi `PITCHDECK.md` (8 slide asli + 1 carousel tambahan)
- [ ] Transisi tiap slide berjalan, termasuk mundur (←)
- [ ] Modal dan story dapat ditutup/dilanjutkan dengan keyboard
- [ ] Elemen adiktif berhenti di Slide 8, kartu "Jeda" muncul
- [ ] Tes `prefers-reduced-motion` dan tombol "Kurangi gerak"
- [ ] Tes di 1280×720 dan 1920×1080, plus mode fullscreen (`F`)
- [ ] Tes tanpa internet (font fallback ke system stack, ikon inline)
- [ ] Footer parodi dan catatan data fiktif terpasang

---

## 15. Prompt Siap Pakai untuk Membangun Deck

Salin ke Claude atau editor AI lain untuk menghasilkan `index.html`:

> Buat satu file `index.html` (HTML+CSS+JS inline) berupa pitch deck web 16:9 (kanvas 1280×720, di-scale mengikuti layar) bertema "Instagram desktop". Ikuti `DESIGN_GUIDE_INSTAGRAM_WEB_DECK.md` untuk token, komponen, peta 9 slide, dan animasi. Gunakan materi dari `PITCHDECK.md`. Navigasi dengan ← → / spasi / scroll, `Esc` tutup modal, `F` fullscreen. Sertakan `prefers-reduced-motion`, ikon Lucide inline, dan footer parodi.
