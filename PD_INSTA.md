---
marp: true
theme: default
paginate: false
header: ' '
footer: ' '
style: |
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
  
  section {
    background-color: #000000;
    color: #F5F5F5;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    padding: 24px 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .deck-screen {
    width: 920px;
    height: 590px;
    background: #121212;
    border: 1px solid #262626;
    border-radius: 24px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.9);
    position: relative;
    box-sizing: border-box;
  }

  .deck-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #262626;
    padding-bottom: 10px;
    margin-bottom: 14px;
  }

  .badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .badge-purple { background: rgba(129, 52, 175, 0.2); color: #C13584; border: 1px solid #C13584; }
  .badge-blue { background: rgba(0, 149, 246, 0.2); color: #0095F6; border: 1px solid #0095F6; }
  .badge-red { background: rgba(237, 73, 86, 0.2); color: #ED4956; border: 1px solid #ED4956; }
  .badge-gray { background: #262626; color: #A8A8A8; border: 1px solid #363636; }

  .card-box {
    background: #1C1C1E;
    border: 1px solid #2C2C2E;
    border-radius: 12px;
    padding: 12px 14px;
  }

  .subtext {
    font-size: 12px;
    color: #8E8E8E;
    line-height: 1.4;
  }

  ul {
    margin: 4px 0 0 0;
    padding-left: 18px;
    font-size: 12px;
    color: #DDD;
    line-height: 1.5;
  }
---

<!-- SLIDE 1: JUDUL UTAMA -->

<div class="deck-screen" style="justify-content: space-between; text-align: center;">
  <div class="deck-header">
    <span class="badge badge-purple">LAPORAN KELOMPOK 6</span>
    <span class="subtext">Universitas Amikom Yogyakarta</span>
  </div>

  <div style="margin: auto 0;">
    <div style="width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #FFF;">
      📱
    </div>
    <h1 style="font-size: 30px; margin: 0 0 8px 0; color: #FFF; font-weight: 800; letter-spacing: -0.5px;">
      SISTEM REKOMENDASI INSTAGRAM
    </h1>
    <p style="font-size: 14px; color: #A8A8A8; margin: 0 auto; max-width: 680px; line-height: 1.5;">
      Analisis Mendalam: Identifikasi Arsitektur, Data, Tujuan Bisnis, UX, hingga Dampak Sosial & Etika
    </p>
  </div>

  <div style="border-top: 1px solid #262626; padding-top: 10px; display: flex; justify-content: space-between; font-size: 11px; color: #8E8E8E;">
    <span><b>Dosen Pengampu:</b> Prof. Dr. Kusrini, M.Kom. • Dr. Sri Ngudi Wahyuni, M.Kom. • Arif Nur Rohman, M.Kom</span>
    <span>T.A. 2025/2026</span>
  </div>
</div>

---

<!-- SLIDE 2: PERKENALAN TIM PRESENTER -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">TEAM PROFILE</span>
    <span class="badge badge-purple">KELOMPOK 6</span>
  </div>

  <h2 style="font-size: 20px; margin: 0 0 16px 0; color: #FFF;">Tim Penyusun & Presenter</h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;">
    <div class="card-box" style="display: flex; gap: 12px; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: #262626; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #E1306C;">1</div>
      <div>
        <strong style="color: #FFF; font-size: 13px;">MUHAMMAD ADAM SISWANTORO</strong><br>
        <span class="subtext">NIM: 24.12.3281</span>
      </div>
    </div>

    <div class="card-box" style="display: flex; gap: 12px; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: #262626; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #E1306C;">2</div>
      <div>
        <strong style="color: #FFF; font-size: 13px;">MUHAMMAD ALFARIDHO P.W</strong><br>
        <span class="subtext">NIM: 24.12.3325</span>
      </div>
    </div>

    <div class="card-box" style="display: flex; gap: 12px; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: #262626; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #E1306C;">3</div>
      <div>
        <strong style="color: #FFF; font-size: 13px;">MUHAMAD HAFIDZ AKMAL</strong><br>
        <span class="subtext">NIM: 24.12.3215</span>
      </div>
    </div>

    <div class="card-box" style="display: flex; gap: 12px; align-items: center;">
      <div style="width: 44px; height: 44px; border-radius: 50%; background: #262626; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #E1306C;">4</div>
      <div>
        <strong style="color: #FFF; font-size: 13px;">HIDAYAT NUR ROSYID</strong><br>
        <span class="subtext">NIM: 24.12.3380</span>
      </div>
    </div>
  </div>

  <div class="card-box" style="text-align: center; background: rgba(129, 52, 175, 0.1); border-color: rgba(129, 52, 175, 0.3);">
    <span style="font-size: 12px; color: #C13584; font-weight: 600;">
      Program Studi Sistem Informasi • Fakultas Ilmu Komputer • Universitas Amikom Yogyakarta
    </span>
  </div>
</div>

---

<!-- SLIDE 3: POIN 1 - IDENTIFIKASI SISTEM REKOMENDASI -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">POIN 1: IDENTIFIKASI SISTEM REKOMENDASI</span>
    <span class="badge badge-blue">FITUR & PENDEKATAN</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
    <!-- Kiri: Bentuk Rekomendasi -->
    <div class="card-box">
      <strong style="color: #0095F6; font-size: 13px;">Bentuk yang Kita Lihat Sehari-hari</strong>
      <ul>
        <li><b>Reels:</b> Geser atas (<em>swipe up</em>), video yang muncul hampir semua dari akun asing[cite: 2].</li>
        <li><b>Tab Explore (Kaca Pembesar):</b> Kotak foto & video sesuai topik tontonan akhir-akhir ini[cite: 2].</li>
        <li><b>Feed (Beranda):</b> Sisipan <em>"Suggested Posts"</em> di sela-sela postingan teman[cite: 2].</li>
        <li><b>Urutan Stories:</b> Akun yang paling sering dikepoin ditaruh di urutan paling kiri[cite: 2].</li>
      </ul>
    </div>

    <!-- Kanan: Pendekatan Sistem -->
    <div class="card-box">
      <strong style="color: #C13584; font-size: 13px;">Pendekatan Hybrid (Campuran)</strong>
      <ul>
        <li><b>Content-Based:</b> Deteksi audio video, caption, hashtag (#), dan objek gambar[cite: 2].</li>
        <li><b>Collaborative Filtering:</b> Pola kesamaan antar-pengguna (sama-sama suka video kucing/kopi ➔ saling menyodorkan konten baru)[cite: 2].</li>
        <li><b>Kecerdasan Buatan (AI):</b> Mengolah seluruh data dalam hitungan detik untuk prediksi tontonan[cite: 2].</li>
      </ul>
    </div>
  </div>

  <div style="margin-top: auto; padding: 10px 14px; background: #18181B; border-radius: 8px; font-size: 11px; color: #8E8E8E;">
    💡 <b>Insight:</b> Instagram menggabungkan atribut konten internal dengan graf pertemanan untuk personalisasi tanpa jeda[cite: 2].
  </div>
</div>

---

<!-- SLIDE 4: POIN 2 - DATA YANG DIGUNAKAN -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">POIN 2: DATA YANG DIGUNAKAN</span>
    <span class="badge badge-purple">INPUT & PROFILING</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 12px;">
    <!-- Data Eksplisit -->
    <div class="card-box">
      <strong style="color: #FFF; font-size: 13px;">Data Sadar (Eksplisit)</strong>
      <ul>
        <li>Tombol Like (Hati)[cite: 2].</li>
        <li>Komentar yang diketik[cite: 2].</li>
        <li>Tombol Share (kirim ke DM teman)[cite: 2].</li>
        <li>Tombol Save (simpan konten)[cite: 2].</li>
        <li>Follow atau Unfollow akun[cite: 2].</li>
      </ul>
    </div>

    <!-- Data Implisit -->
    <div class="card-box">
      <strong style="color: #FFF; font-size: 13px;">Data Diam-diam (Implisit)</strong>
      <ul>
        <li><b>Durasi Menonton:</b> Hitungan detik berhenti sebelum geser[cite: 2].</li>
        <li><b>Tonton Selesai:</b> Durasi tuntas, diulang, atau diskip[cite: 2].</li>
        <li><b>Riwayat Pencarian:</b> Kata kunci di kolom cari[cite: 2].</li>
        <li><b>Koneksi & Device:</b> Kota, tipe HP, hingga jam aktif[cite: 2].</li>
      </ul>
    </div>
  </div>

  <div class="card-box" style="border-left: 4px solid #ED4956;">
    <strong style="font-size: 12px; color: #ED4956;">Apakah Mengambil Data Pribadi?</strong>
    <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
      <b>Iya, sangat banyak.</b> Instagram memetakan minat, barang yang ingin dibeli, selera humor, hingga lingkaran pertemanan terdekat secara mendalam[cite: 2].
    </p>
  </div>
</div>

---

<!-- SLIDE 5: POIN 3 - TUJUAN SISTEM REKOMENDASI -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">POIN 3: TUJUAN SISTEM REKOMENDASI</span>
    <span class="badge badge-red">MOTIVASI & BISNIS</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 12px;">
    <div class="card-box">
      <strong style="color: #ED4956; font-size: 13px;">Tujuan Utama Platform</strong>
      <ul>
        <li><b>Biar Betah (Engagement):</b> Menjaga pengguna berlama-lama membuka aplikasi dan sulit berhenti scroll[cite: 2].</li>
        <li><b>Jualan Iklan (Bisnis):</b> Semakin lama tatapan layar, semakin banyak slot iklan bersponsor terselip[cite: 2].</li>
      </ul>
    </div>

    <div class="card-box">
      <strong style="color: #0095F6; font-size: 13px;">Selaras Kebutuhan Pengguna?</strong>
      <ul>
        <li><b>Sisi Baik:</b> Terbantu menemukan konten lucu/informasi favorit tanpa repot mencari manual[cite: 2].</li>
        <li><b>Sisi Buruk:</b> Niat buka 5 menit cek pesan, akhirnya terbuang 1 jam karena terus disodori video menarik[cite: 2].</li>
      </ul>
    </div>
  </div>

  <div class="card-box" style="text-align: center; background: rgba(237, 73, 86, 0.08); border-color: rgba(237, 73, 86, 0.3);">
    <span style="font-size: 12px; color: #ED4956; font-weight: 600;">
      Dilema Atensi: Efisiensi pencarian pengguna ditukar dengan keterikatan waktu penggunaan layar[cite: 2].
    </span>
  </div>
</div>

---

<!-- SLIDE 6: POIN 4 - PENGALAMAN PENGGUNA (USER EXPERIENCE) -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">POIN 4: USER EXPERIENCE (UX)</span>
    <span class="badge badge-blue">RELEVANSI & KENDALI</span>
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="card-box">
      <strong style="color: #0095F6; font-size: 13px;">🎯 Apakah Tepat Sasaran atau Acak?</strong>
      <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
        <b>Sangat tepat sasaran.</b> Menonton 3 video tips gym sampai habis siang ini, sore harinya tab Explore dan Reels langsung dipenuhi konten olahraga[cite: 2].
      </p>
    </div>

    <div class="card-box">
      <strong style="color: #ED4956; font-size: 13px;">🫧 Menemukan Hal Baru vs Filter Bubble (Mengurung)?</strong>
      <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
        <b>Cenderung Mengurung:</b> Sistem menyajikan konten berulang sesuai kebiasaan lama, sehingga pengguna jarang melihat sudut pandang atau topik baru[cite: 2].
      </p>
    </div>

    <div class="card-box">
      <strong style="color: #8E8E8E; font-size: 13px;">⚙️ Apakah Pengguna Bisa Mengaturnya Sendiri?</strong>
      <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
        Ada tombol <b>"Not Interested"</b> pada titik tiga untuk menolak konten, namun fitur ini jarang disentuh dan posisinya tersembunyi[cite: 2].
      </p>
    </div>
  </div>
</div>

---

<!-- SLIDE 7: POIN 5 - ASPEK ETIKA & DAMPAK SOSIAL -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">POIN 5: ASPEK ETIKA & DAMPAK SOSIAL</span>
    <span class="badge badge-red">CRITICAL AUDIT</span>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
    <div class="card-box" style="border-left: 3px solid #ED4956;">
      <strong style="color: #FFF; font-size: 13px;">1. Potensi Bias (Berat Sebelah)</strong>
      <p class="subtext" style="margin-top: 4px;">
        Konten heboh, memicu kemarahan, atau perdebatan sengit didorong viral karena interaksi emosionalnya tinggi[cite: 2].
      </p>
    </div>

    <div class="card-box" style="border-left: 3px solid #ED4956;">
      <strong style="color: #FFF; font-size: 13px;">2. Doomscrolling (Kecanduan)</strong>
      <p class="subtext" style="margin-top: 4px;">
        Sistem swipe mirip mesin judi kasino; ketidaktahuan video berikutnya memicu jempol terus menggeser tanpa sadar waktu[cite: 2].
      </p>
    </div>

    <div class="card-box" style="border-left: 3px solid #0095F6;">
      <strong style="color: #FFF; font-size: 13px;">3. Transparansi (Kejelasan)</strong>
      <p class="subtext" style="margin-top: 4px;">
        Menu "Mengapa Anda melihat ini" hanya normatif; formula matematika dan bobot penilaian AI tetap dirahasiakan[cite: 2].
      </p>
    </div>

    <div class="card-box" style="border-left: 3px solid #0095F6;">
      <strong style="color: #FFF; font-size: 13px;">4. Pengawasan Privasi</strong>
      <p class="subtext" style="margin-top: 4px;">
        Tiap ketukan layar, durasi jeda, dan gerak-gerik pengguna dicatat otomatis untuk melatih mesin rekomendasi[cite: 2].
      </p>
    </div>
  </div>

  <div style="margin-top: auto; padding: 10px; background: rgba(237, 73, 86, 0.1); border-radius: 8px; text-align: center; font-size: 11px; color: #ED4956; font-weight: 600;">
    Perhatian pengguna bukan lagi sekadar data konsumen, melainkan produk utama yang dimonetisasi platform[cite: 2].
  </div>
</div>

---

<!-- SLIDE 8: SESI TANYA JAWAB (Q&A) -->

<div class="deck-screen" style="justify-content: center; align-items: center; text-align: center;">
  <div style="width: 520px; background: #FFFFFF; border-radius: 20px; padding: 26px 20px; color: #121212;">
    <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); margin: 0 auto 10px auto; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 20px;">
      💬
    </div>
    <h3 style="margin: 0 0 6px 0; font-size: 18px; color: #000; font-weight: 800;">Sesi Tanya Jawab (Q&A)</h3>
    <p style="font-size: 12px; color: #666; margin: 0 0 16px 0;">Terima kasih atas perhatian Dosen Pengampu & Rekan-rekan Mahasiswa</p>
    
    <div style="background: #F0F2F5; border-radius: 10px; padding: 12px; font-size: 12px; color: #8E8E8E; text-align: left; border: 1px solid #E4E6EB;">
      Kelompok 6: Adam • Alfa Ridho • Akmal • Dayat
    </div>
  </div>

  <div style="margin-top: 20px; font-size: 12px; color: #8E8E8E;">
    Sistem Informasi • Universitas Amikom Yogyakarta
  </div>
</div>