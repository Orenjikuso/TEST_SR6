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
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* Frame Mockup Smartphone */
  .ig-screen {
    width: 880px;
    height: 580px;
    background: #121212;
    border: 1px solid #262626;
    border-radius: 28px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
    position: relative;
    overflow: hidden;
  }

  /* Header Bar Instagram */
  .ig-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #262626;
    padding-bottom: 12px;
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
  }
  .ig-user {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ig-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 800;
    color: #fff;
  }
  .ig-subtext {
    font-size: 12px;
    color: #A8A8A8;
    font-weight: 400;
  }

  /* Story Bars */
  .story-bars {
    display: flex;
    gap: 6px;
    width: 100%;
    margin-bottom: 16px;
  }
  .story-bar {
    height: 3px;
    flex: 1;
    background: #363636;
    border-radius: 2px;
  }
  .story-bar.active {
    background: #FFFFFF;
  }

  /* Action Bar (Love, Komen, Share, Save) */
  .ig-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 8px 0;
    border-top: 1px solid #262626;
    margin-top: auto;
  }
  .ig-icons-left {
    display: flex;
    gap: 18px;
    font-size: 18px;
  }

  /* Badges & Box */
  .badge-tag {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }
  .badge-danger { background: rgba(237, 73, 86, 0.2); color: #ED4956; border: 1px solid #ED4956; }
  .badge-blue { background: rgba(0, 149, 246, 0.2); color: #0095F6; border: 1px solid #0095F6; }

  .card-box {
    background: #1C1C1E;
    border: 1px solid #2C2C2E;
    border-radius: 14px;
    padding: 16px;
  }
---

<!-- SLIDE 1: COVER (PROFILE VIEW) -->

<div class="ig-screen">
  <div class="ig-top-bar">
    <div class="ig-user">
      <span>🔒 recsys_group_05 ▾</span>
    </div>
    <div style="font-size: 20px;">☰</div>
  </div>

  <div style="display: flex; gap: 32px; align-items: center; margin-top: 10px;">
    <div style="width: 86px; height: 86px; border-radius: 50%; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); padding: 3px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 100%; height: 100%; border-radius: 50%; background: #121212; display: flex; align-items: center; justify-content: center; font-size: 28px;">⚖️</div>
    </div>
    <div style="display: flex; gap: 36px; text-align: center;">
      <div><strong style="font-size: 18px;">4</strong><br><span class="ig-subtext">Post</span></div>
      <div><strong style="font-size: 18px;">4</strong><br><span class="ig-subtext">Members</span></div>
      <div><strong style="font-size: 18px;">Poin 5</strong><br><span class="ig-subtext">Ethics Focus</span></div>
    </div>
  </div>

  <div style="margin-top: 20px; font-size: 14px; line-height: 1.6;">
    <strong style="font-size: 16px;">Review Sistem Rekomendasi: Instagram</strong><br>
    <span class="ig-subtext">Analisis Aspek Etika & Dampak Sosial Algoritma AI</span><br>
    👥 <b>Tim Penyusun:</b> Adam • Alfa Ridho • Akmal • Dayat<br>
    📌 <i>Membedah realitas di balik optimasi atensi, bias konten, dan kedaulatan data pengguna.</i>
  </div>

  <div style="display: flex; gap: 14px; margin-top: auto; padding-bottom: 10px;">
    <div class="card-box" style="flex: 1; text-align: center; font-size: 12px; font-weight: 600;">⭕ Bias Algoritma</div>
    <div class="card-box" style="flex: 1; text-align: center; font-size: 12px; font-weight: 600;">⭕ Doomscrolling</div>
    <div class="card-box" style="flex: 1; text-align: center; font-size: 12px; font-weight: 600;">⭕ Kotak Hitam</div>
    <div class="card-box" style="flex: 1; text-align: center; font-size: 12px; font-weight: 600;">⭕ Privasi Mikro</div>
  </div>
</div>

---

<!-- SLIDE 2: FEED POST (BIAS ALGORITMA) -->

<div class="ig-screen">
  <div class="ig-top-bar">
    <div class="ig-user">
      <div class="ig-avatar">IG</div>
      <div>
        <span>recsys_ethics</span> • <span class="badge-danger">Potensi Bias</span><br>
        <span class="ig-subtext">Disarankan untuk Anda</span>
      </div>
    </div>
    <div>•••</div>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 8px 0;">
    <div class="card-box" style="border-left: 4px solid #ED4956;">
      <span class="badge-danger" style="margin-bottom: 8px;">DIPRIORITASKAN SISTEM 🚀</span>
      <h4 style="margin: 6px 0; font-size: 15px; color: #FFF;">Konten Sensasional & Komersial</h4>
      <p style="font-size: 12px; color: #A8A8A8; line-height: 1.5; margin: 0;">
        • Memancing amarah & debat komentar sengit (<em>engagement baiting</em>).<br>
        • Konten ramah pengiklan (gaya hidup, belanja, konsumtif) demi ruang sponsor.
      </p>
    </div>

    <div class="card-box" style="border-left: 4px solid #8E8E8E;">
      <span class="badge-tag" style="background: #262626; color: #A8A8A8; margin-bottom: 8px;">DITEKAN / SHADOWBAN 📉</span>
      <h4 style="margin: 6px 0; font-size: 15px; color: #FFF;">Konten Edukasi & Independen</h4>
      <p style="font-size: 12px; color: #A8A8A8; line-height: 1.5; margin: 0;">
        • Minim interaksi emosional instan, jangkauan organik diturunkan.<br>
        • Bias standar visual: Akun dengan estetika konvensional lebih diuntungkan.
      </p>
    </div>
  </div>

  <div class="ig-actions">
    <div class="ig-icons-left"><span>❤️ 98.4K</span><span>💬 3.1K</span><span>✈️</span></div>
    <div>📌</div>
  </div>
  
  <div style="font-size: 12px; line-height: 1.5; color: #E0E0E0;">
    <b>recsys_ethics</b> Algoritma tidak memiliki kompas moral; optimasi murni bertumpu pada waktu keterlibatan layar dan potensi laba iklan.
  </div>
</div>

---

<!-- SLIDE 3: REELS / STORIES (RISIKO KECANDUAN / DOOMSCROLLING) -->

<div class="ig-screen">
  <div class="story-bars">
    <div class="story-bar active"></div>
    <div class="story-bar active"></div>
    <div class="story-bar"></div>
    <div class="story-bar"></div>
  </div>

  <div class="ig-top-bar" style="border: none; margin-bottom: 8px;">
    <div class="ig-user">
      <div class="ig-avatar" style="background: #ED4956;">⚠️</div>
      <div>
        <span>attention_economy</span> <span class="ig-subtext">32m</span><br>
        <span class="ig-subtext">Audience Retention Engineering</span>
      </div>
    </div>
    <div>✕</div>
  </div>

  <div style="background: rgba(237, 73, 86, 0.08); border: 1px dashed #ED4956; border-radius: 14px; padding: 12px 18px; margin-bottom: 12px;">
    <h3 style="margin: 0; font-size: 16px; color: #ED4956;">🔴 RISIKO ADIKSI: "Mengunci Pengguna Agar Terus Scroll"</h3>
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px;">
    <div class="card-box" style="display: flex; gap: 14px; align-items: center;">
      <span style="font-size: 22px;">🎰</span>
      <div style="font-size: 13px;">
        <b>Mekanisme Mesin Slot (Variable Rewards)</b><br>
        <span class="ig-subtext">Pengguna menggeser layar berulang kali karena rasa penasaran dopaminergik tak terduga.</span>
      </div>
    </div>

    <div class="card-box" style="display: flex; gap: 14px; align-items: center;">
      <span style="font-size: 22px;">♾️</span>
      <div style="font-size: 13px;">
        <b>Antarmuka Tanpa Hambatan (Infinite Frictionless Scroll)</b><br>
        <span class="ig-subtext">Ketiadaan <em>stopping cue</em> (batas halaman) merusak kesadaran waktu pengguna secara riil.</span>
      </div>
    </div>

    <div class="card-box" style="display: flex; gap: 14px; align-items: center;">
      <span style="font-size: 22px;">🧠</span>
      <div style="font-size: 13px;">
        <b>Degradasi Rentang Perhatian (Shortened Attention Span)</b><br>
        <span class="ig-subtext">Format video mikro melatih otak hanya menerima stimulasi instan dan memicu kelelahan mental.</span>
      </div>
    </div>
  </div>
</div>

---

<!-- SLIDE 4: POP-UP OVERLAY (TRANSPARANSI KOTAK HITAM) -->

<div class="ig-screen" style="justify-content: center; align-items: center;">
  <div style="width: 580px; background: #262626; border-radius: 20px; padding: 24px; box-shadow: 0 15px 50px rgba(0,0,0,0.9); border: 1px solid #363636;">
    <div style="text-align: center; font-size: 16px; font-weight: 700; margin-bottom: 12px; color: #FFF;">
      Mengapa Anda melihat postingan ini?
    </div>
    
    <div style="background: #1A1A1A; border-radius: 10px; padding: 12px; margin-bottom: 14px; font-size: 12px; color: #A8A8A8; line-height: 1.5;">
      💬 <b>Klaim Resmi Aplikasi:</b><br>
      <i>"Aktivitas Anda menunjukkan Anda mungkin menyukai postingan dari kreator sejenis berdasarkan riwayat tontonan."</i>
    </div>

    <div style="border-left: 3px solid #ED4956; padding-left: 12px; margin-bottom: 16px;">
      <div style="font-size: 13px; font-weight: 700; color: #ED4956; margin-bottom: 4px;">Fakta Teknis: Masalah Kotak Hitam (Black Box)</div>
      <p style="font-size: 12px; color: #E0E0E0; line-height: 1.5; margin: 0;">
        • Penjelasan yang disajikan bersifat superfisial/permukaan semata.<br>
        • Bobot matematis model <em>Deep Learning</em> dan penargetan psikometrik tetap menjadi rahasia dagang platform tanpa akuntabilitas independen.
      </p>
    </div>

    <div style="display: flex; gap: 10px;">
      <button style="flex: 1; padding: 10px; border-radius: 8px; border: none; background: #0095F6; color: #FFF; font-weight: 600; font-size: 12px;">Pahami Risiko Sistem</button>
      <button style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #363636; background: transparent; color: #FFF; font-weight: 600; font-size: 12px;">Tutup</button>
    </div>
  </div>
</div>

---

<!-- SLIDE 5: SETTINGS MENU (PRIVASI & PENGAWASAN DATA) -->

<div class="ig-screen">
  <div class="ig-top-bar">
    <div class="ig-user">
      <span style="font-size: 18px;">←</span>
      <span style="font-weight: 700;">Privasi & Pengawasan Perilaku</span>
    </div>
    <span class="badge-blue">Data Audit</span>
  </div>

  <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 6px;">
    <div class="card-box" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="font-size: 14px; color: #FFF;">Eksploitasi Dwell Time Mikro</strong><br>
        <span class="ig-subtext">Merekam milidetik jeda tatap layar pada postingan tertentu tanpa persetujuan eksplisit.</span>
      </div>
      <span style="color: #0095F6; font-size: 20px;">●</span>
    </div>

    <div class="card-box" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="font-size: 14px; color: #FFF;">Pelacakan Lintas Platform (Meta Pixel)</strong><br>
        <span class="ig-subtext">Mengumpulkan riwayat pencarian web dan keranjang e-commerce di luar aplikasi.</span>
      </div>
      <span style="color: #0095F6; font-size: 20px;">●</span>
    </div>

    <div class="card-box" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong style="font-size: 14px; color: #FFF;">Ilusi Kendali Pengguna (Illusion of Control)</strong><br>
        <span class="ig-subtext">Opsi "Not Interested" hanya bersifat lokal; algoritma tetap memaksakan feed terpersonalisasi.</span>
      </div>
      <span style="color: #ED4956; font-size: 20px;">●</span>
    </div>
  </div>

  <div style="margin-top: auto; padding: 12px; background: rgba(0, 149, 246, 0.1); border-radius: 10px; font-size: 12px; text-align: center; color: #0095F6;">
    💡 <b>Kesimpulan:</b> Pengguna bukan sekadar audiens konten, melainkan sumber komodifikasi data atensi.
  </div>
</div>

---

<!-- SLIDE 6: PENUTUP / Q&A (STORY STICKER) -->

<div class="ig-screen" style="justify-content: center; align-items: center; text-align: center;">
  <div style="width: 520px; background: #FFFFFF; border-radius: 24px; padding: 28px 24px; color: #121212; box-shadow: 0 10px 40px rgba(255,255,255,0.15);">
    <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); margin: 0 auto 12px auto; display: flex; align-items: center; justify-content: center; color: #FFF; font-size: 22px;">
      ❓
    </div>
    <h3 style="margin: 0 0 6px 0; font-size: 18px; color: #000;">Ada Pertanyaan untuk Kelompok Kami?</h3>
    <p style="font-size: 13px; color: #666; margin: 0 0 18px 0;">Ketik tanggapan Anda mengenai etika sistem rekomendasi Instagram</p>
    
    <div style="background: #F0F2F5; border-radius: 12px; padding: 14px; font-size: 13px; color: #8E8E8E; text-align: left; border: 1px solid #E4E6EB;">
      Kirim pesan ke Adam, Alfa Ridho, Akmal, Dayat...
    </div>
  </div>

  <div style="margin-top: 24px; font-size: 13px; color: #A8A8A8;">
    Terima Kasih • Sesi Diskusi & Tanya Jawab
  </div>
</div>