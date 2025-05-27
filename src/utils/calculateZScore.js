// Import semua file LMS JSON
import wfa_boys from '../data/wfa_boys.json';
import wfa_girls from '../data/wfa_girls.json';
import hfa_boys from '../data/hfa_boys.json';
import hfa_girls from '../data/hfa_girls.json';
import wfh_boys from '../data/wfh_boys.json';
import wfh_girls from '../data/wfh_girls.json';

/**
 * Fungsi utama untuk menghitung z-score dan status gizi
 * @param {Object} input - Data anak
 * @param {string} input.nama - Nama anak
 * @param {'L'|'P'} input.jenisKelamin - Jenis kelamin anak ('L' atau 'P')
 * @param {number} input.umurBulan - Umur dalam bulan
 * @param {number} input.beratBadan - Berat badan dalam kg
 * @param {number} input.tinggiBadan - Tinggi badan dalam cm
 * @returns {Object} - Hasil kalkulasi: nama, haz, whz, statusGizi
 */
export function calculateZScore({ nama, jenisKelamin, umurBulan, beratBadan, tinggiBadan }) {
  if (umurBulan < 0 || umurBulan > 60) {
    throw new Error('Umur harus antara 0–60 bulan');
  }

  const roundedTinggi = roundToNearestHalf(tinggiBadan);
  if (roundedTinggi < 45.0 || roundedTinggi > 110.0) {
    throw new Error('Tinggi badan harus antara 45.0–110.0 cm');
  }

  // Pilih data LMS sesuai jenis kelamin
  const hfaMap = jenisKelamin === 'L' ? hfa_boys : hfa_girls;
  const wfhMap = jenisKelamin === 'L' ? wfh_boys : wfh_girls;

  // Ambil data LMS berdasarkan umur dan tinggi
  const lmsHFA = hfaMap.find(item => Number(item.umur) === umurBulan);
  const lmsWFH = wfhMap.find(item => Number(item.Height) === roundedTinggi);

  if (!lmsHFA) {
    throw new Error(`Data HFA tidak tersedia untuk umur=${umurBulan}`);
  }
  if (!lmsWFH) {
    throw new Error(`Data WFH tidak tersedia untuk tinggi=${roundedTinggi}`);
  }

  // Pilih data LMS berat badan per umur untuk WFA
  const wfaMap = jenisKelamin === 'L' ? wfa_boys : wfa_girls;
  const lmsWFA = wfaMap.find(item => Number(item.umur) === umurBulan);
  if (!lmsWFA) {
    throw new Error(`Data WFA tidak tersedia untuk umur=${umurBulan}`);
  }

  const haz = calculateZ(tinggiBadan, lmsHFA);
  const whz = calculateZ(beratBadan, lmsWFH);
  const waz = calculateZ(beratBadan, lmsWFA);

  let statusGizi;
  if (whz < -3) {
    statusGizi = 'Gizi Buruk (Severe)';
  } else if (whz < -2) {
    statusGizi = 'Gizi Kurang (Moderate)';
  } else if (whz <= 2) {
    statusGizi = 'Normal';
  } else {
    statusGizi = 'Gizi Lebih (Overweight)';
  }

  return {
    nama,
    jenisKelamin,
    umurBulan,
    beratBadan,
    tinggiBadan: roundedTinggi,
    haz: roundTo2(haz),
    whz: roundTo2(whz),
    waz: roundTo2(waz),
    statusGizi
  };
}

// === Helpers ===

/**
 * Fungsi rumus WHO LMS
 * @param {number} x - nilai pengukuran (berat badan atau tinggi badan)
 * @param {Object} param1 - object LMS {L, M, S}
 * @returns {number} z-score
 */
function calculateZ(x, { L, M, S }) {
  L = Number(L);
  M = Number(M);
  S = Number(S);

  if (L === 0) return Math.log(x / M) / S;
  return (Math.pow(x / M, L) - 1) / (L * S);
}

/**
 * Bulatkan ke 0.5 terdekat
 * @param {number} num
 * @returns {number}
 */
function roundToNearestHalf(num) {
  return Math.round(num * 2) / 2;
}

/**
 * Pembulatan ke 2 desimal
 * @param {number} num
 * @returns {number}
 */
function roundTo2(num) {
  return Math.round(num * 100) / 100;
}
