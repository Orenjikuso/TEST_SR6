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
    width: 900px;
    height: 580px;
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
    margin-bottom: 16px;
  }

  .badge {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .badge-red { background: rgba(237, 73, 86, 0.2); color: #ED4956; border: 1px solid #ED4956; }
  .badge-blue { background: rgba(0, 149, 246, 0.2); color: #0095F6; border: 1px solid #0095F6; }
  .badge-purple { background: rgba(129, 52, 175, 0.2); color: #C13584; border: 1px solid #C13584; }

  .card-box {
    background: #1C1C1E;
    border: 1px solid #2C2C2E;
    border-radius: 12px;
    padding: 14px;
  }

  .subtext {
    font-size: 12px;
    color: #8E8E8E;
    line-height: 1.4;
  }
---

<!-- SLIDE 1: COVER & HOOK -->

<div class="deck-screen" style="justify-content: space-between;">
  <div class="deck-header">
    <span class="badge badge-purple">PITCH DECK: RECSYS REVIEW</span>
    <span class="subtext">Ethics & Social Impact Focus</span>
  </div>

  <div style="text-align: center; margin: auto 0;">
    <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); margin: 0 auto 14px auto; display: flex; align-items: center; justify-content: center; font-size: 26px;">
      ⚖️
    </div>
    <h1 style="font-size: 32px; margin: 0 0 10px 0; color: #FFF; font-weight: 800;">THE ARCHITECTURE OF ADDICTION</h1>
    <h3 style="font-size: 16px; font-weight: 400; color: #A8A8A8; margin: 0 0 20px 0;">Dekonstruksi Etika & Dampak Sosial Sistem Rekomendasi Instagram</h3>
    <div style="display: inline-block; background: #1C1C1E; border: 1px dashed #363636; border-radius: 20px; padding: 6px 18px; font-size: 13px; color: #ED4956;">
      <i>"Jika produknya gratis, perhatian dan perilakumu adalah barang dagangannya."</i>
    </div>
  </div>

  <div style="display: flex; justify-content: space-between; border-top: 1px solid #262626; padding-top: 12px;">
    <span class="subtext"><b>Kelompok:</b> Adam • Alfa Ridho • Akmal • Dayat</span>
    <span class="subtext">Tugas 1: Point 5 Review</span>
  </div>
</div>

---

<!-- SLIDE 2: THE CORE PROBLEM -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">PROBLEM STATEMENT</span>
    <span class="badge badge-red">MISALIGNED INCENTIVES</span>
  </div>

  <h2 style="font-size: 22px; margin: 0 0 16px 0; color: #FFF;">Optimasi yang Salah Arah: Menjual Waktu Layar</h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 16px;">
    <div class="card-box" style="border-top: 3px solid #0095F6;">
      <div style="font-size: 13px; font-weight: 700; color: #0095F6; margin-bottom: 6px;">KLAIM RESMI PLATFORM</div>
      <p style="font-size: 13px; color: #E0E0E0; line-height: 1.5; margin: 0;">
        "Menghubungkan orang dengan hal-hal yang mereka sukai secara cerdas dan relevan."
      </p>
    </div>

    <div class="card-box" style="border-top: 3px solid #ED4956;">
      <div style="font-size: 13px; font-weight: 700; color: #ED4956; margin-bottom: 6px;">REALITAS ARSITEKTUR RECSYS</div>
      <p style="font-size: 13px; color: #E0E0E0; line-height: 1.5; margin: 0;">
        Sistem dioptimalkan secara agresif untuk memanjangkan durasi keterlibatan (<em>Time Spent</em>) demi memperbanyak ruang tayang iklan sponsor.
      </p>
    </div>
  </div>

  <div class="card-box" style="background: rgba(237, 73, 86, 0.08); border-color: rgba(237, 73, 86, 0.3); text-align: center;">
    <span style="font-size: 13px; color: #ED4956; font-weight: 600;">
      Funnel Konversi: Atensi Pengguna ➔ Penahanan Layar (Dwell Time) ➔ Impresi Iklan ➔ Pendapatan Meta
    </span>
  </div>
</div>

---

<!-- SLIDE 3: PILLAR 1 - ALGORITHMIC BIAS -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">PILAR 1: POTENSI BIAS</span>
    <span class="badge badge-red">ATTENTION POLARIZATION</span>
  </div>

  <h2 style="font-size: 22px; margin: 0 0 14px 0; color: #FFF;">Mengapa Kemarahan & Sensasionalisme Cepat Terjual?</h2>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="card-box">
      <strong style="color: #ED4956; font-size: 13px;">1. Bias Interaksi (Engagement Baiting)</strong>
      <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
        Algoritma tidak memiliki moral. Konten provokatif dan debat kusir di kolom komentar menghasilkan skor retensi tertinggi, sehingga otomatis diangkat ke jangkauan viral.
      </p>
    </div>

    <div class="card-box">
      <strong style="color: #ED4956; font-size: 13px;">2. Bias Ramah Pengiklan (Commercial Bias)</strong>
      <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
        Konten gaya hidup konsumtif diprioritaskan karena aman disandingkan dengan iklan produk, sementara wacana independen atau kritis rawan terkena pembatasan jangkauan.
      </p>
    </div>

    <div class="card-box">
      <strong style="color: #ED4956; font-size: 13px;">3. Bias Visual Konvensional (Aesthetic Bias)</strong>
      <p class="subtext" style="color: #DDD; margin: 4px 0 0 0;">
        Ekstraksi computer vision memprioritaskan profil visual tertentu yang dianggap "menarik perhatian", menciptakan standar estetika seragam secara algoritmis.
      </p>
    </div>
  </div>
</div>

---

<!-- SLIDE 4: PILLAR 2 - THE PSYCHOLOGY OF DOOMSCROLLING -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">PILAR 2: REKAYASA ADIKSI</span>
    <span class="badge badge-red">DOOMSCROLLING TRAP</span>
  </div>

  <h2 style="font-size: 22px; margin: 0 0 16px 0; color: #FFF;">Mekanisme Kasino Digital di Dalam Saku</h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
    <div class="card-box">
      <div style="font-size: 22px; margin-bottom: 6px;">🎰</div>
      <strong style="color: #FFF; font-size: 14px;">Variable Rewards</strong>
      <p class="subtext" style="margin-top: 6px;">
        Gestur <em>swipe-up</em> di Reels mengadopsi prinsip mesin slot. Hasil yang acak (kadang lucu, kadang biasa saja) memicu pelepasan dopamin berkelanjutan.
      </p>
    </div>

    <div class="card-box">
      <div style="font-size: 22px; margin-bottom: 6px;">♾️</div>
      <strong style="color: #FFF; font-size: 14px;">Ketiadaan Stopping Cue</strong>
      <p class="subtext" style="margin-top: 6px;">
        Desain <em>infinite scroll</em> tanpa nomor halaman menghilangkan jeda alami sadar, mengunci pengguna dalam siklus tontonan tanpa ujung.
      </p>
    </div>
  </div>

  <div class="card-box" style="margin-top: 14px; border-left: 4px solid #ED4956;">
    <strong style="font-size: 12px; color: #ED4956;">Dampak Sosial Nyata:</strong>
    <span class="subtext" style="color: #DDD; margin-left: 6px;">
      Penurunan drastis pada <em>attention span</em>, gangguan pola tidur (insomnia), dan kecemasan akibat komparasi sosial.
    </span>
  </div>
</div>

---

<!-- SLIDE 5: PILLAR 3 - THE BLACK BOX PROBLEM -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">PILAR 3: TRANSPARANSI SISTEM</span>
    <span class="badge badge-blue">BLACK BOX DILEMMA</span>
  </div>

  <h2 style="font-size: 22px; margin: 0 0 16px 0; color: #FFF;">Ilusi Penjelasan vs Kotak Hitam Algoritma</h2>

  <div class="card-box" style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
      <strong style="font-size: 13px; color: #0095F6;">Menu "Mengapa Anda Melihat Postingan Ini"</strong>
      <span class="badge" style="background: #262626; color: #8E8E8E;">Superficial Only</span>
    </div>
    <p class="subtext" style="color: #CCC; margin: 0;">
      Penjelasan resmi platform hanya bersifat normatif ("karena Anda menyukai video serupa"). Platform tidak pernah membuka parameter atau bobot matematis yang sebenarnya.
    </p>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
    <div class="card-box" style="border-left: 3px solid #ED4956;">
      <strong style="color: #FFF; font-size: 13px;">Lapisan Deep Learning Tersembunyi</strong>
      <p class="subtext" style="margin-top: 6px;">
        Model multi-stage retrieval memproses ratusan dimensi laten yang tidak dapat diaudit oleh publik maupun pengguna.
      </p>
    </div>

    <div class="card-box" style="border-left: 3px solid #ED4956;">
      <strong style="color: #FFF; font-size: 13px;">Nol Akuntabilitas</strong>
      <p class="subtext" style="margin-top: 6px;">
        Saat sistem merekomendasikan konten toksik atau radikal, platform berlindung di balik dalih keputusan otomatisasi AI.
      </p>
    </div>
  </div>
</div>

---

<!-- SLIDE 6: PILLAR 4 - PRIVACY & SURVEILLANCE -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">PILAR 4: PRIVASI & KEDAULATAN DATA</span>
    <span class="badge badge-red">MICRO-SURVEILLANCE</span>
  </div>

  <h2 style="font-size: 22px; margin: 0 0 14px 0; color: #FFF;">Jejak Bawah Sadar yang Ditambang Tanpa Izin Riil</h2>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="card-box" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: #FFF; font-size: 13px;">Dwell Time & Scroll Velocity</strong><br>
        <span class="subtext">Sistem menghitung fraksi milidetik tatapan mata pada postingan tanpa perlu menekan tombol suka.</span>
      </div>
      <span class="badge badge-red">IMPLISIT</span>
    </div>

    <div class="card-box" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: #FFF; font-size: 13px;">Pelacakan Eksternal via Meta Pixel</strong><br>
        <span class="subtext">Merekam riwayat belanja daring dan pencarian web pengguna di luar ekosistem aplikasi.</span>
      </div>
      <span class="badge badge-red">CROSS-PLATFORM</span>
    </div>

    <div class="card-box" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="color: #FFF; font-size: 13px;">Kendali Semu (Illusion of Choice)</strong><br>
        <span class="subtext">Tombol "Not Interested" hanya menyembunyikan sementara; sistem tidak memberi opsi mematikan profiling.</span>
      </div>
      <span class="badge badge-blue">NO OPT-OUT</span>
    </div>
  </div>
</div>

---

<!-- SLIDE 7: RECOMMENDATIONS & SOLUTIONS -->

<div class="deck-screen">
  <div class="deck-header">
    <span style="font-weight: 700; font-size: 14px;">CALL TO ACTION</span>
    <span class="badge badge-purple">RESPONSIBLE AI</span>
  </div>

  <h2 style="font-size: 22px; margin: 0 0 16px 0; color: #FFF;">Menuju Ekosistem Rekomendasi yang Beretika</h2>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 14px;">
    <div class="card-box">
      <div style="font-size: 18px; margin-bottom: 6px;">⚙️</div>
      <strong style="color: #FFF; font-size: 13px;">Platform</strong>
      <p class="subtext" style="margin-top: 6px;">
        Wajibkan <em>Explicit Stopping Cues</em> (jeda otomatis) dan sediakan opsi permanen untuk beralih ke feed kronologis murni.
      </p>
    </div>

    <div class="card-box">
      <div style="font-size: 18px; margin-bottom: 6px;">🏛️</div>
      <strong style="color: #FFF; font-size: 13px;">Regulasi</strong>
      <p class="subtext" style="margin-top: 6px;">
        Audit algoritmik independen berkala untuk mencegah eksploitasi data atensi berlebih, terutama pada anak muda.
      </p>
    </div>

    <div class="card-box">
      <div style="font-size: 18px; margin-bottom: 6px;">💡</div>
      <strong style="color: #FFF; font-size: 13px;">Pengguna</strong>
      <p class="subtext" style="margin-top: 6px;">
        Membangun kesadaran kritis bahwa beranda kita adalah hasil manipulasi statistik, bukan realitas objektif dunia luar.
      </p>
    </div>
  </div>

  <div class="card-box" style="text-align: center; background: #18181B;">
    <span style="font-size: 12px; color: #A8A8A8;">
      "Algoritma seharusnya menjadi cermin kebutuhan manusia, bukan kompas yang membelenggu perhatian kita."
    </span>
  </div>
</div>

---

<!-- SLIDE 8: Q&A / CLOSING -->

<div class="deck-screen" style="justify-content: center; align-items: center; text-align: center;">
  <div style="width: 520px; background: #FFFFFF; border-radius: 20px; padding: 26px 20px; color: #121212;">
    <div style="width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); margin: 0 auto 10px auto; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 20px;">
      ❓
    </div>
    <h3 style="margin: 0 0 6px 0; font-size: 18px; color: #000; font-weight: 800;">Ada Pertanyaan Kritis?</h3>
    <p style="font-size: 12px; color: #666; margin: 0 0 16px 0;">Mari diskusikan batas antara kemudahan teknologi dan eksploitasi atensi</p>
    
    <div style="background: #F0F2F5; border-radius: 10px; padding: 12px; font-size: 12px; color: #8E8E8E; text-align: left; border: 1px solid #E4E6EB;">
      Kirim tanggapan ke: Adam, Alfa Ridho, Akmal, Dayat...
    </div>
  </div>

  <div style="margin-top: 20px; font-size: 13px; color: #8E8E8E;">
    Terima Kasih • Sesi Tanya Jawab Dibuka
  </div>
</div>