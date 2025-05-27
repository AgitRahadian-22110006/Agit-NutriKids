import React from 'react';
import '../styles/Info.css';
 // Pastikan file CSS disiapkan secara terpisah

const Info = () => {
  return (
    <>
    <div className="info-container">
      <header>
        <h1>Panduan Lengkap Tumbuh Kembang & Gizi Anak</h1>
        <p>Edukasi praktis bagi orang tua untuk memantau dan mendukung si kecil</p>
        <a href="/" className="back-button">← Kembali ke Beranda</a>
      </header>

      <nav>
        <ul>
          <li><a href="#overview">Ringkasan</a></li>
          <li><a href="#interpreting">Membaca Hasil</a></li>
          <li><a href="#milestones">Milestone</a></li>
          <li><a href="#menu">Contoh Menu</a></li>
          <li><a href="#micronutrients">Mikronutrien</a></li>
          <li><a href="#immunization">Imunisasi</a></li>
          <li><a href="#sleep">Tidur</a></li>
          <li><a href="#stimulation">Stimulasi</a></li>
          <li><a href="#screentime">Screen Time</a></li>
          <li><a href="#dental">Kesehatan Gigi</a></li>
          <li><a href="#dangersigns">Tanda Bahaya</a></li>
          <li><a href="#community">Sumber & Komunitas</a></li>
        </ul>
      </nav>

      <main>
        <section id="overview">
          <h2>Ringkasan Hasil Analisis</h2>
          <p>Sistem menghitung <strong>HAZ</strong> (tinggi relatif umur) dan <strong>WHZ</strong> (berat relatif tinggi). Ditampilkan:</p>
          <ul>
            <li>Angka Z-score</li>
            <li>Progress bar (0–100%)</li>
            <li>Status gizi: Buruk, Kurang, Normal, Lebih</li>
          </ul>
        </section>

        <section id="interpreting">
          <h2>Bagaimana Membaca Hasil</h2>
          <div className="info-box">
            <p><strong>Progress bar</strong> menunjukkan posisi anak di kurva WHO:</p>
            <ul>
              <li>0%: sangat di bawah standar</li>
              <li>50%: rata-rata</li>
              <li>100%: sangat di atas standar</li>
            </ul>
          </div>
          <p><strong>Status gizi</strong> membantu menentukan langkah selanjutnya.</p>
        </section>

        <section id="formula">
          <h2>Cara Sistem Menghitung Z-score</h2>
          <p>Sistem kami menggunakan metodologi WHO untuk menilai seberapa jauh tinggi dan berat anak menyimpang dari standar populasi:</p>
          <pre>{`Jika L = 0:
Z = ln(X / M) / S

Jika L ≠ 0:
Z = ((X / M)^L - 1) / (L × S)`}</pre>
          <p>Di mana:</p>
          <ul>
            <li><strong>X</strong> = Tinggi badan (cm) untuk HAZ atau berat badan (kg) untuk WHZ</li>
            <li><strong>M</strong> = Median standar populasi pada usia/tinggi tersebut</li>
            <li><strong>L</strong> = Parameter Box‑Cox (mengoreksi simetri distribusi)</li>
            <li><strong>S</strong> = Koefisien keragaman (skala distribusi)</li>
          </ul>
          <p>Setelah Z-score diperoleh, status gizi ditentukan sebagai berikut:</p>
          <table>
            <thead>
              <tr><th>Z-score</th><th>Status Gizi</th></tr>
            </thead>
            <tbody>
              <tr><td>&lt; -3</td><td>Gizi Buruk</td></tr>
              <tr><td>-3 hingga &lt; -2</td><td>Gizi Kurang</td></tr>
              <tr><td>-2 hingga +2</td><td>Normal</td></tr>
              <tr><td>&gt; +2</td><td>Gizi Lebih</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Bagaimana Membaca Hasil</h2>
          <div className="info-box">
            <p><strong>Progress bar</strong> menunjukkan posisi anak di kurva WHO:</p>
            <ul>
              <li>0%: sangat di bawah standar</li>
              <li>50%: rata-rata</li>
              <li>100%: sangat di atas standar</li>
            </ul>
          </div>
          <p><strong>Status gizi</strong> membantu menentukan langkah selanjutnya.</p>
        </section>

        <section id="milestones">
          <h2>Tonggak Perkembangan Anak</h2>
          <h3>0–6 Bulan</h3>
          <ul>
            <li>Buka dan pegang benda di depan mata</li>
            <li>Angkat kepala beberapa detik saat tengkurap</li>
            <li>Refleks menggenggam kuat ketika batang tangan disentuh</li>
            <li>Tersenyum sosial sebagai respons interaksi</li>
          </ul>
          <h3>7–12 Bulan</h3>
          <ul>
            <li>Merangkak maju, berdiri dengan tangan berpegangan</li>
            <li>Mengucapkan kata sederhana seperti “ma-ma”, “pa-pa”</li>
            <li>Melempar benda kecil dan melihat arah jatuhnya</li>
            <li>Mulai makan finger food (makanan potong kecil)</li>
          </ul>
          <h3>13–24 Bulan (1–2 Tahun)</h3>
          <ul>
            <li>Berjalan mandiri dan mulai berlari pelan</li>
            <li>Mengenal alat makan: menyendok, memegang cangkir</li>
            <li>Kosakata aktif &gt;50 kata, membentuk kalimat 2 kata</li>
            <li>Bermain tumpuk balok (2–4 balok)</li>
          </ul>
          <h3>25–36 Bulan (2–3 Tahun)</h3>
          <ul>
            <li>Berlari lancar, menendang bola, melompat dengan dua kaki</li>
            <li>Bangun menara balok 6–8 buah, mulai gunting kertas sederhana</li>
            <li>Kalimat 3–4 kata, mengikuti instruksi berurutan 2 langkah</li>
            <li>Mulai berinteraksi bermain peran (misalnya pura-pura memasak)</li>
          </ul>
          <h3>37–48 Bulan (3–4 Tahun)</h3>
          <ul>
            <li>Keterampilan motorik halus: mewarnai dalam garis sederhana</li>
            <li>Menangkap bola kecil dengan kedua tangan</li>
            <li>Menggunakan kalimat lengkap, bercerita singkat</li>
            <li>Mulai paham konsep hitung sederhana (1–5)</li>
          </ul>
          <h3>49–60 Bulan (4–5 Tahun)</h3>
          <ul>
            <li>Bersepeda roda tiga atau sepatu roda sederhana</li>
            <li>Menulis nama dan beberapa huruf/angka dengan benar</li>
            <li>Berbicara jelas, bercerita runtut, bertanya “kenapa”</li>
            <li>Bermain interaktif: berbagi peran, aturan, bergiliran</li>
          </ul>
        </section>

    <section id="menu">
      <h2>Contoh Menu Harian</h2>
      <table>
        <thead>
          <tr><th>Usia</th><th>Sarapan</th><th>Camilan Pagi</th><th>Makan Siang</th><th>Camilan Sore</th><th>Makan Malam</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>0–6 Bulan</td>
            <td colspan="5">ASI eksklusif sesuai permintaan (8–12×/hari)</td>
          </tr>
          <tr>
            <td>7–12 Bulan</td>
            <td>Bubur sereal bayi + buah pisang halus</td>
            <td>Buah pepaya halus (1 sdm/umur bln)</td>
            <td>Bubur nasi tim + sayur wortel + daging cincang</td>
            <td>Yogurt plain (1 sdm/umur bln)</td>
            <td>Pure labu + ikan kukus halus</td>
          </tr>
          <tr>
            <td>13–24 Bulan</td>
            <td>Oatmeal + potong pisang + ASI/formula</td>
            <td>Biskuit gandum + susu</td>
            <td>Nasi + ayam suwir + sayur bayam cincang</td>
            <td>Puding buah (pisang-ogura)</td>
            <td>Sup sayur + telur orak-arik + roti kecil</td>
          </tr>
          <tr>
            <td>25–36 Bulan</td>
            <td>Roti gandum + selai kacang + susu</td>
            <td>Potong apel + yoghurt</td>
            <td>Nasi merah + ikan panggang + capcay sayur</td>
            <td>Buah potong (melon/semangka)</td>
            <td>Pasta gandum utuh + saus daging cincang</td>
          </tr>
          <tr>
            <td>37–48 Bulan</td>
            <td>Sereal gandum utuh + susu + potongan stroberi</td>
            <td>Rolade sayur kecil</td>
            <td>Nasi + ayam tumis jamur + brokoli kukus</td>
            <td>Yoghurt + buah beri</td>
            <td>Sayur sup + tahu panggang + kentang rebus</td>
          </tr>
          <tr>
            <td>49–60 Bulan</td>
            <td>Pancake gandum + blueberry + susu rendah lemak</td>
            <td>Potongan wortel & hummus</td>
            <td>Nasi + daging sapi cincang + salad sayur</td>
            <td>Smoothie pisang + bayam</td>
            <td>Quinoa + tumis ayam sayur</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="micronutrients">
      <h2>Mikronutrien Penting & Sumbernya</h2>
      <ul>
        <li><strong>Zat Besi:</strong> mencegah anemia; kebutuhan: 7–10 mg/hari (1–3 th), 10–12 mg/hari (4–5 th). Sumber: daging merah, hati ayam, kacang lentil, bayam.</li>
        <li><strong>Vitamin A:</strong> untuk penglihatan & kekebalan; kebutuhan: 300–400 µg/hari. Sumber: wortel, ubi jalar, bayam, hati, telur.</li>
        <li><strong>Vitamin D:</strong> untuk penyerapan kalsium; kebutuhan: 400 IU/hari. Sumber: sinar matahari pagi (10–15 menit), ikan berlemak, susu fortifikasi.</li>
        <li><strong>Kalsium:</strong> membangun tulang & gigi; kebutuhan: 500 mg/hari. Sumber: susu, yoghurt, keju, brokoli, kacang kedelai.</li>
        <li><strong>Vitamin C:</strong> mendukung penyerapan zat besi & imunitas; kebutuhan: 15–25 mg/hari. Sumber: jeruk, stroberi, kiwi, tomat.</li>
        <li><strong>Zinc:</strong> penting untuk pertumbuhan sel; kebutuhan: 3–5 mg/hari. Sumber: daging sapi, kacang-kacangan, biji labu.</li>
        <li><strong>Yodium:</strong> mendukung fungsi tiroid & perkembangan otak; kebutuhan: 90 µg/hari. Sumber: garam beryodium, ikan laut, rumput laut.</li>
        <li><strong>Vitamin B kompleks:</strong> (B1, B2, B6, B12) untuk metabolisme energi dan perkembangan saraf. Sumber: biji-bijian utuh, daging, telur, kacang-kacangan.</li>
        <li><strong>Vitamin K:</strong> untuk pembekuan darah; kebutuhan: 30 µg/hari. Sumber: sayur hijau (bayam, kangkung), brokoli.</li>
      </ul>
      <p class="info-box">Perhatikan porsi & variasi untuk memenuhi kebutuhan harian, hindari suplemen tanpa rekomendasi dokter.</p>
    </section>

 <section id="immunization">
      <h2>Jadwal Imunisasi National (Kemenkes RI)</h2>
      <table>
        <thead><tr><th>Usia</th><th>Vaksin</th></tr></thead>
        <tbody>
          <tr><td>Baru Lahir</td><td>BCG, Hepatitis B (dosis 1)</td></tr>
          <tr><td>1 Bulan</td><td>Polio Tetes (dosis 0)</td></tr>
          <tr><td>2 Bulan</td><td>Polio 1, DPT-HB-Hib 1, PCV (Pneumokokus) 1</td></tr>
          <tr><td>3 Bulan</td><td>Polio 2, DPT-HB-Hib 2, PCV 2</td></tr>
          <tr><td>4 Bulan</td><td>Polio 3, DPT-HB-Hib 3, PCV 3</td></tr>
          <tr><td>6 Bulan</td><td>Campak-Rubella (MR) 1</td></tr>
          <tr><td>9 Bulan</td><td>Campak</td></tr>
          <tr><td>12–18 Bulan</td><td>DPT-HB-Hib Booster, PCV Booster</td></tr>
          <tr><td>18 Bulan</td><td>Campak-Rubella (MR) 2</td></tr>
          <tr><td>5–7 Tahun</td><td>DT (Difteri-Tetanus) Booster, Polio Booster</td></tr>
        </tbody>
      </table>
      <p class="info-box">Jadwal dapat disesuaikan sesuai rekomendasi dokter atau kondisi kesehatan anak.</p>
    </section>

    <section id="sleep">
      <h2>Panduan Tidur & Rutinitas Malam</h2>
      <ul>
        <li><strong>0–3 Bulan</strong>: Total 14–17 jam/hari (termasuk 4–6 sesi tidur siang, 30–120 menit per sesi).</li>
        <li><strong>4–6 Bulan</strong>: Total 12–16 jam/hari (3–4 tidur siang, 30–90 menit per sesi).</li>
        <li><strong>7–12 Bulan</strong>: Total 12–15 jam/hari (2 tidur siang, 1–2 jam setiap sesi).</li>
        <li><strong>1–2 Tahun</strong>: Total 11–14 jam/hari (1–2 tidur siang, 1–3 jam per sesi).</li>
        <li><strong>2–3 Tahun</strong>: Total 10–13 jam/hari (1 tidur siang, 1–2 jam).</li>
        <li><strong>3–5 Tahun</strong>: Total 10–13 jam/hari (tidur siang opsional 30–60 menit).</li>
      </ul>
      <h3>Tips Menciptakan Rutinitas Tidur</h3>
      <ul>
        <li>Tetapkan waktu tidur dan bangun yang konsisten setiap hari.</li>
        <li>Rutinitas 30 menit sebelum tidur: mandi hangat, pijat lembut, membaca cerita, lampu redup.</li>
        <li>Gunakan suara lembut dan tenang saat menidurkan anak.</li>
        <li>Hindari stimulasi kuat (layar gadget, aktivitas berat) 1 jam sebelum tidur.</li>
        <li>Pastikan suhu kamar nyaman (sekitar 24°C) dan ventilasi baik.</li>
        <li>Pakai kasur dan bantal anak yang sesuai usia untuk dukung postur.</li>
      </ul>
    </section>

    <section id="stimulation">
      <h2>Stimulasi & Aktivitas Bermain</h2>
      <h3>0–6 Bulan</h3>
      <ul>
        <li><strong>Tummy Time</strong>: minimal 3–4×/hari, 3–5 menit tiap sesi untuk menguatkan otot leher dan bahu.</li>
        <li><strong>Stimulasi Sensorik</strong>: mainkan benda dengan tekstur dan suara berbeda di depan bayi.</li>
        <li><strong>Interaksi Bicara</strong>: ajak bicara, nyanyikan lagu lembut untuk perkembangan bahasa awal.</li>
      </ul>
      <h3>7–12 Bulan</h3>
      <ul>
        <li><strong>Merangkak & Berdiri</strong>: dorong bayi meraih mainan di lantai untuk melatih motorik kasar.</li>
        <li><strong>Main Balok Besar</strong>: susun blok besar 2–3 tumpuk untuk koordinasi tangan-mata.</li>
        <li><strong>Puzzle Sederhana</strong>: papan batu dan bentuk besar (2–4 potong).</li>
      </ul>
      <h3>13–24 Bulan (1–2 Tahun)</h3>
      <ul>
        <li><strong>Permainan Bola</strong>: lempar dan tangkap bola lunak untuk keseimbangan.</li>
        <li><strong>Blok & Menara</strong>: tumpuk balok hingga 4–6 susun.</li>
        <li><strong>Buku Bergambar</strong>: cerita bersama sambil menunjuk gambar untuk kosa kata.</li>
      </ul>
      <h3>25–36 Bulan (2–3 Tahun)</h3>
      <ul>
        <li><strong>Bermain Peran</strong>: pura-pura memasak, dokter-dokteran untuk kreativitas sosial.</li>
        <li><strong>Puzzle 4–8 Potong</strong> dan mewarnai gambar sederhana.</li>
        <li><strong>Lompat & Lari</strong>: ajak bermain lompat tali mini dan lomba lari kecil.</li>
      </ul>
      <h3>37–48 Bulan (3–4 Tahun)</h3>
      <ul>
        <li><strong>Main Sepeda Roda Tiga</strong> untuk koordinasi motorik kasar.</li>
        <li><strong>Mewarnai & Menggunting</strong>: latih motorik halus dengan gunting kertas bergigi besar.</li>
        <li><strong>Permainan Papan</strong>: ular tangga atau domino sederhana.</li>
      </ul>
      <h3>49–60 Bulan (4–5 Tahun)</h3>
      <ul>
        <li><strong>Bermain Tim</strong>: sepak bola mini atau bola basket anak.</li>
        <li><strong>Bermain Instrumen</strong>: alat musik sederhana (drum mainan, keyboard kecil).</li>
        <li><strong>Puzzle 10–20 Potong</strong> dan aktivitas prakarya (kerajinan tangan sederhana).</li>
      </ul>
    </section>

    <section id="screentime">
      <h2>Manajemen Screen Time</h2>
      <ul>
        <li><strong>0–23 Bulan:</strong> Hindari paparan layar; fokus pada interaksi langsung dan permainan sensorik.</li>
        <li><strong>2–4 Tahun:</strong> Maksimal 1 jam per hari; pilih konten edukatif, temani anak saat menonton.</li>
        <li><strong>5–7 Tahun:</strong> Maksimal 1–2 jam per hari; pisahkan durasi layar ke beberapa sesi pendek.</li>
      </ul>
      <h3>Tips Mengelola Screen Time</h3>
      <ul>
        <li>Tetapkan zona bebas gadget (misal saat makan dan 1 jam sebelum tidur).</li>
        <li>Gunakan timer atau alarm untuk membatasi durasi.</li>
        <li>Pilih aplikasi/game berkualitas tinggi dan interaktif.</li>
        <li>Libatkan anak dalam aktivitas alternatif: membaca, menggambar, bermain di luar.</li>
        <li>Jadilah teladan; batasi pula penggunaan layar oleh orang tua di depan anak.</li>
      </ul>
    </section>


   <section id="dental">
  <h2>Kesehatan Gigi & Mulut</h2>
  <ul>
    <li>Sikat gigi dua kali sehari (pagi dan malam) menggunakan pasta gigi khusus anak dengan kadar fluoride yang sesuai usia.</li>
    <li>Gunakan sikat gigi anak dengan bulu halus dan kepala kecil agar nyaman dan aman.</li>
    <li>Mulai membersihkan gusi bayi bahkan sebelum gigi tumbuh, dengan kain lembab dan bersih.</li>
    <li>Gigi pertama biasanya tumbuh sekitar usia 6 bulan – mulai menyikat sejak gigi pertama muncul.</li>
    <li>Pertama kali ke dokter gigi sebaiknya saat gigi susu mulai tumbuh lengkap (~ usia 2 tahun), atau paling lambat usia 1 tahun.</li>
    <li>Hindari memberikan susu/makanan manis saat anak tertidur tanpa membersihkan mulut terlebih dahulu (risiko gigi berlubang).</li>
    <li>Batasi konsumsi makanan dan minuman manis untuk mencegah kerusakan gigi.</li>
    <li>Periksakan gigi anak ke dokter gigi secara berkala, minimal 6 bulan sekali.</li>
    <li>Ajarkan anak membiasakan perawatan gigi sejak dini untuk membentuk kebiasaan sehat hingga dewasa.</li>
  </ul>
</section>


    <section id="dangersigns">
      <h2>Tanda Bahaya</h2>
      <ul>
        <li>Diare lebih dari 3 hari, muntah terus-menerus</li>
        <li>Demam lebih dari 39°C, napas cepat</li>
        <li>Lesu, menolak makan/minum</li>
      </ul>
      <p>Konsultasi ke dokter jika muncul tanda tersebut.</p>
    </section>

    <section id="community">
      <h2>Komunitas & Sumber Daya</h2>
      <ul>
        <li>Posyandu & PKK setempat</li>
        <li>Grup parenting & laktasi online</li>
        <li>Hotline gizi: 1500-567</li>
      </ul>
    </section>

    <section id="references">
      <h2>Referensi</h2>
      <ul>
        <li><a href="https://www.who.int/childgrowth/standards" target="_blank">WHO Growth Standards</a></li>
        <li><a href="https://www.unicef.org" target="_blank">UNICEF</a></li>
        <li><a href="https://kemenkes.go.id" target="_blank">Kemenkes RI</a></li>
      </ul>
    </section>
        {/* Lanjutkan dengan section lainnya sesuai struktur di atas */}
      </main>
       <footer>
    &copy; 2025 MyApp • Dibuat berdasar pedoman WHO & Kemenkes RI
  </footer>
  </div>
    </>
  );
};
export default Info;
