# LAPORAN KELOMPOK 6
## SISTEM REKOMENDASI INSTAGRAM

**Dosen Pengampu:**
* Prof. Dr. Kusrini, S.Kom., M.Kom.
* Dr. Sri Ngudi Wahyuni, S.T., M.Kom.
* Arif Nur Rohman, M.Kom

**Disusun Oleh Kelompok 6:**
* MUHAMMAD ADAM SISWANTORO | 24.12.3281
* MUHAMMAD ALFARIDHO P.W | 24.12.3325
* MUHAMAD HAFIDZ AKMAL | 24.12.3215
* HIDAYAT NUR ROSYID | 24.12.3380

**PROGRAM STUDI SISTEM INFORMASI**  
**FAKULTAS ILMU KOMPUTER**  
**UNIVERSITAS AMIKOM YOGYAKARTA**  
**2025/2026**

---

## DAFTAR ISI

* DAFTAR ISI ........................................................................................ 1
* 1. IDENTIFIKASI SISTEM REKOMENDASI ............................................... 2
* 2. DATA YANG DIGUNAKAN ................................................................ 3
* 3. TUJUAN SISTEM REKOMENDASI ...................................................... 4
* 4. PENGALAMAN PENGGUNA (USER EXPERIENCE) ................................. 5
* 5. ASPEK ETIKA & DAMPAK SOSIAL ...................................................... 6

---

## 1. IDENTIFIKASI SISTEM REKOMENDASI

### Bentuk yang Kita Lihat Sehari-hari:
* **Reels:** Begitu kita geser ke atas (*swipe up*), video yang muncul hampir semuanya berasal dari akun orang asing yang tidak kita *follow*[cite: 3].
* **Tab Explore (Ikon Kaca Pembesar):** Kotak-kotak foto dan video yang isinya langsung sesuai dengan topik yang sering kita tonton belakangan ini[cite: 3].
* **Beranda (Feed):** Sesekali muncul tulisan *"Suggested Posts"* (Disarankan untuk Anda) di sela-sela postingan teman[cite: 3].
* **Urutan Stories:** Bulatan cerita di bagian paling atas otomatis menaruh teman atau akun yang paling sering kita kepoin di urutan paling kiri[cite: 3].

### Pendekatan yang Digunakan (Hybrid / Campuran):
* **Membaca Kontennya Sendiri (Content-Based):** Instagram mendeteksi lagu apa yang dipakai di video, kata-kata di *caption*, tanda pagar (#), hingga gambar apa yang ada di dalam video tersebut[cite: 3].
* **Melihat Orang yang Mirip dengan Kita (Collaborative Filtering):** Jika kita dan orang lain sama-sama suka menonton video kucing lucu dan resep kopi, ketika orang tersebut menemukan video baru yang bagus, Instagram akan menyodorkannya juga ke akun kita[cite: 3].
* **Kecerdasan Buatan (AI):** Semua data di atas dicampur dan dihitung dalam hitungan detik agar Instagram bisa menebak apa yang bakal kita tonton berikutnya[cite: 3].

---

## 2. DATA YANG DIGUNAKAN

### Data yang Sadar Kita Berikan (Eksplisit):
* Tombol Like (Hati)[cite: 3].
* Komentar yang kita ketik[cite: 3].
* Tombol Share (kirim video ke DM teman)[cite: 3].
* Tombol Save (menyimpan postingan)[cite: 3].
* Tombol Follow atau Unfollow[cite: 3].

### Data Diam-diam yang Dicatat Sistem (Implisit):
* **Durasi Menonton:** Berapa detik kita berhenti melihat sebuah postingan sebelum lanjut geser layar[cite: 3].
* **Tonton Sampai Habis:** Apakah video Reels ditonton sampai selesai, diulang-ulang, atau langsung kita lewati begitu saja[cite: 3].
* **Riwayat Pencarian:** Kata kunci apa yang baru saja kita ketik di kolom pencarian[cite: 3].
* **Koneksi dan Perangkat:** Lokasi kota kita, jenis ponsel yang dipakai, hingga jam berapa biasanya kita aktif membuka aplikasi[cite: 3].

### Apakah Mengambil Data Pribadi?
* **Iya, sangat banyak.** Instagram tahu minat kita, barang yang sedang ingin kita beli, selera humor kita, hingga lingkaran pertemanan terdekat kita[cite: 3].

---

## 3. TUJUAN SISTEM REKOMENDASI

### Tujuan Utama Platform:
* **Biar Kita Betah (Engagement):** Membuat pengguna berlama-lama membuka aplikasi dan sulit berhenti (*scroll* tanpa henti)[cite: 3].
* **Jualan Iklan (Bisnis):** Makin lama kita melihat layar, makin banyak iklan bersponsor yang bisa diselipkan oleh Instagram di antara video-video tersebut[cite: 3].

### Apakah Selaras dengan Kebutuhan Pengguna?
* **Sisi Baik:** Kita merasa terbantu karena langsung disuguhi video lucu atau informasi yang kita sukai tanpa perlu repot mencarinya sendiri[cite: 3].
* **Sisi Buruk:** Niat awal cuma ingin membuka Instagram 5 menit untuk mengecek pesan, tapi akhirnya terbuang sampai 1 jam karena terus-terusan disuguhi video menarik[cite: 3].

---

## 4. PENGALAMAN PENGGUNA (USER EXPERIENCE)

### Apakah Tepat Sasaran atau Acak?
* **Sangat tepat sasaran.** Jika siang ini kita menonton 3 video tentang tips gym sampai habis, sore harinya tab Explore dan Reels akan langsung dipenuhi video olahraga[cite: 3].

### Membantu Menemukan Hal Baru atau Malah Mengurung Kita (Filter Bubble)?
* **Cenderung Mengurung:** Algoritma sering memberi konten yang itu-itu saja sesuai kebiasaan kita, sehingga kita jarang melihat sudut pandang atau topik baru di luar lingkaran minat kita[cite: 3].

### Apakah Pengguna Bisa Mengaturnya Sendiri?
* Ada tombol titik tiga bertuliskan *"Not Interested"* (Tidak Tertarik) untuk mengusir video yang tidak disukai, tapi fitur ini jarang dipakai orang dan menu pengaturannya cukup tersembunyi[cite: 3].

---

## 5. ASPEK ETIKA & DAMPAK SOSIAL

* **Potensi Berat Sebelah (Bias):**  
  Video yang bikin heboh, marah, atau perdebatan di kolom komentar biasanya sengaja didorong oleh sistem agar viral, karena hal-hal kontroversial memancing interaksi yang tinggi[cite: 3].
* **Bikin Kecanduan (Doomscrolling):**  
  Sistem geser layar dibuat mirip seperti mesin permainan; kita tidak pernah tahu video seru apa yang akan muncul di geseran berikutnya, sehingga jempol kita terbiasa terus menggeser tanpa sadar waktu[cite: 3].
* **Kejelasan (Transparansi):**  
  Kita hanya diberi tahu secara garis besar lewat tombol *"Mengapa Anda melihat ini"*, namun rumus matematika dan cara penilaian pasti di balik layarnya tetap dirahasiakan oleh pihak pengembang[cite: 3].
* **Privasi:**  
  Hampir setiap ketukan layar, durasi tonton, dan gerak-gerik kita di aplikasi dijadikan catatan data untuk melatih mesin rekomendasi mereka[cite: 3].