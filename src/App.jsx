import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DaftarDosen from "./pages/DaftarDosen";
import VisiMisi from "./pages/VisiMisi";
import TentangProdi from "./pages/TentangProdi";

function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dosen/id" replace />} />
        <Route path="/dosen" element={<Navigate to="/dosen/id" replace />} />
        <Route path="/dosen/:lang" element={<DaftarDosen />} />

        <Route path="/visi-misi" element={<VisiMisi />}/>
        <Route path="/tentang-prodi" element={<TentangProdi />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
