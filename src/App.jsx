// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Result from "./pages/Result";
import Info from "./pages/Info"; // ✅ import halaman Info
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/stunting" element={<Result />} />
        <Route path="/info" element={<Info />} /> {/* ✅ route ke halaman Info */}
      </Routes>
    </Router>
  );
}

export default App;
