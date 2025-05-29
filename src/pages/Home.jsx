import React from 'react';
import Navbar from '../components/Navbar';  // Import Navbar
import '../styles/Home.css';
import Logo from '../assets/logo-agitnutrikids.png';

const Home = () => {
  return (
    <>
      <Navbar />  {/* Panggil Navbar */}
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <img src={Logo} alt="Hero Logo" className="hero-logo" />
        <h1>Hai, Orang Tua Hebat!!!</h1>
        <p>Yukk cek status gizi si kecil dengan AgitNutriKids. Cepat, mudah, dan penuh warna!</p>
        <a href="/input" className="btn-primary">Mulai Kalkulasi</a>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="card">
          <div className="card-icon">📊</div>
          <h3>Hitung Z-Score</h3>
          <p>Metode WHO untuk HAZ & WHZ, akurat hingga decimal.</p>
        </div>
        <div className="card">
          <div className="card-icon">🍎</div>
          <h3>Saran Makan Sehat</h3>
          <p>Rekomendasi makanan bergizi sesuai status gizi.</p>
        </div>
        <div className="card">
          <div className="card-icon">🎨</div>
          <h3>Tema Ceria</h3>
          <p>Tampilan penuh warna yang disukai anak-anak.</p>
        </div>
        <div className="card">
          <div className="card-icon">⚙️</div>
          <h3>Performa Optimal</h3>
          <p>Dibangun dengan Java & JSP untuk kecepatan terbaik.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Apa itu AgitNutriKids?</h2>
        <p>
          AgitNutriKids adalah aplikasi web interaktif berbasis data LMS WHO untuk menghitung Z-score
          (HAZ & WHZ) anak. Antarmuka ceria dan intuitif membantu orang tua memantau status gizi si kecil kapan saja.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Hubungi kami: <a href="mailto:info@agitnutrikids.com">info@agitnutrikids.com</a> | +62 812 3456 7890</p>
        <p>&copy; 2025 AgitNutriKids. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
