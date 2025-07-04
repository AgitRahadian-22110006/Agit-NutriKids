import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// Optional: Tambahkan efek dark mode awal dari localStorage (kalau mau disimpan preferensinya)
const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
