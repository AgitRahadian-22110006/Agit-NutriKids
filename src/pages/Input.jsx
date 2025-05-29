import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateZScore } from '../utils/calculateZScore';
import Navbar from '../components/Navbar';  // Import Navbar
import '../styles/Input.css';
import bayiImage from '../assets/bayi_index.png';

export default function Input() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: '',
    jenisKelamin: 'L',
    umurBulan: '',
    beratBadan: '',
    tinggiBadan: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.nama.trim()) errs.nama = 'Nama wajib diisi';
    if (!['L', 'P'].includes(formData.jenisKelamin)) errs.jenisKelamin = 'Jenis kelamin tidak valid';
    if (!(formData.umurBulan >= 0 && formData.umurBulan <= 60)) errs.umurBulan = 'Umur harus 0–60 bulan';
    if (!(formData.beratBadan > 0)) errs.beratBadan = 'Berat badan harus lebih dari 0';
    if (!(formData.tinggiBadan >= 45 && formData.tinggiBadan <= 110)) errs.tinggiBadan = 'Tinggi badan harus 45–110 cm';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nama' || name === 'jenisKelamin' ? value : Number(value)
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      try {
        const hasil = calculateZScore(formData);
        navigate('/stunting', { state: { calc: hasil } });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Navbar /> {/* Tambahkan Navbar di atas */}

      {/* Main container */}
      <div className="container">

        {/* Info Table */}
        <div className="info-table">
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Min</th>
                <th>Max</th>
                <th>Catatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Usia (bulan)</td>
                <td>0</td>
                <td>60</td>
                <td>0–5 tahun</td>
              </tr>
              <tr>
                <td>Tinggi Badan (cm)</td>
                <td>45</td>
                <td>110</td>
                <td>Rata-rata anak</td>
              </tr>
              <tr>
                <td>Berat Badan (kg)</td>
                <td>2</td>
                <td>35</td>
                <td>Ideal untuk anak</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Form Card */}
        <div className="card">
          <img src={bayiImage} alt="Bayi" className="bayi-image" />
          <h1>Input Data Anak</h1>
          <form onSubmit={handleSubmit} noValidate>
            <label>
              Nama:
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
              />
              {errors.nama && <div className="error">{errors.nama}</div>}
            </label>

            <label>
              Jenis Kelamin:
              <select
                name="jenisKelamin"
                value={formData.jenisKelamin}
                onChange={handleChange}
              >
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
              {errors.jenisKelamin && (
                <div className="error">{errors.jenisKelamin}</div>
              )}
            </label>

            <label>
              Umur (bulan):
              <input
                type="number"
                name="umurBulan"
                value={formData.umurBulan}
                onChange={handleChange}
                min="0"
                max="60"
              />
              {errors.umurBulan && (
                <div className="error">{errors.umurBulan}</div>
              )}
            </label>

            <label>
              Berat Badan (kg):
              <input
                type="number"
                name="beratBadan"
                value={formData.beratBadan}
                onChange={handleChange}
                step="0.01"
                min="0"
              />
              {errors.beratBadan && (
                <div className="error">{errors.beratBadan}</div>
              )}
            </label>

            <label>
              Tinggi Badan (cm):
              <input
                type="number"
                name="tinggiBadan"
                value={formData.tinggiBadan}
                onChange={handleChange}
                step="0.1"
                min="45"
                max="110"
              />
              {errors.tinggiBadan && (
                <div className="error">{errors.tinggiBadan}</div>
              )}
            </label>

            <button type="submit" className="submit-btn">
              Hitung Z-Score
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer>
        &copy; 2025 AgitNutriKids |{' '}
        <a href="/">Home</a> | <a href="/input">Kalkulator</a> |{' '}
        <a href="/info">Info</a>
      </footer>
    </>
  );
}
