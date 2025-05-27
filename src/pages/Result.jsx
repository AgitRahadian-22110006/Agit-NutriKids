// File: src/pages/Result.jsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Result.css';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const calc = location.state?.calc;

  if (!calc) {
    return (
      <div className="card">
        <p>Data tidak tersedia.</p>
        <button onClick={() => navigate('/input')}>Kembali ke Input</button>
      </div>
    );
  }

  const hazValue = Number(calc.haz);
  const whzValue = Number(calc.whz);
  const wazValue = Number(calc.waz);
  const status = calc.statusGizi || 'Normal';
  const umur = Number(calc.umurBulan) || 0;
  const jenisKelamin = calc.jenisKelamin || 'L';
  const nama = calc.nama || 'Anak';

  const hazPct = Math.max(0, Math.min(100, Math.round(((hazValue + 3) / 6) * 100)));
  const whzPct = Math.max(0, Math.min(100, Math.round(((whzValue + 3) / 6) * 100)));
  const wazPct = Math.max(0, Math.min(100, Math.round(((wazValue + 3) / 6) * 100)));

  // Kelompok usia untuk rekomendasi
  let ageGroup = '';
  if (umur <= 6) ageGroup = '0-6';
  else if (umur <= 12) ageGroup = '7-12';
  else if (umur <= 24) ageGroup = '13-24';
  else if (umur <= 36) ageGroup = '25-36';
  else if (umur <= 48) ageGroup = '37-48';
  else ageGroup = '49-60';

  // Animasi bubble kecil biar keren
  useEffect(() => {
    const body = document.body;
    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 50 + 30;
      bubble.classList.add('bubble');
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
      body.appendChild(bubble);
      setTimeout(() => body.removeChild(bubble), 12000);
    };
    const interval = setInterval(createBubble, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <div className="header">
        <h1>Hasil Tumbuh Kembang</h1>
        <h1>{nama}</h1>
      </div>

      <div className="meta">
        <div>Nama: {nama}</div>
        <div>Jenis Kelamin: {jenisKelamin === 'L' ? 'Laki-laki' : 'Perempuan'}</div>
        <div>Usia: {umur} bulan</div>
        <div>
          Tanggal:{' '}
          {new Date().toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </div>
      </div>

      <div className="progress-group">
        <div className="progress-label">HAZ: {hazValue.toFixed(2)}</div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${hazPct}%` }} />
        </div>
      </div>

      <div className="progress-group">
        <div className="progress-label">WHZ: {whzValue.toFixed(2)}</div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${whzPct}%` }} />
        </div>
      </div>

      <div className="progress-group">
        <div className="progress-label">WAZ: {wazValue.toFixed(2)}</div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${wazPct}%` }} />
        </div>
      </div>

      <div className="status">
        <span
          className={
            status.toLowerCase().includes('severe')
              ? 'severe'
              : status.toLowerCase().includes('moderate')
              ? 'moderate'
              : status.toLowerCase().includes('overweight')
              ? 'overweight'
              : 'normal'
          }
        >
          {status}
        </span>
      </div>

      <div className="recommendation">
        <h2>Rekomendasi Nutrisi & Pola Hidup Anak</h2>
        <p className="subtitle">
          Kelompok Usia: {ageGroup} bulan | Status Gizi: {status}
        </p>
        <ul className="recommendation-list">
          {/* TODO: Tambahkan rekomendasi nutrisi dan pola hidup di sini */}
        </ul>
      </div>

      <div className="footer">
        <button onClick={() => navigate('/input')}>&larr; Hitung Lagi</button>
      </div>
    </div>
  );
}
