import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DaftarDosen from "./pages/daftarDosen/DaftarDosen";

import VisiMisi from './pages/visiMisi/VisiMisi'


import TentangProdiID from "./pages/tentangProdi/TentangProdi-ID";
import TentangProdiEN from "./pages/tentangProdi/tentangProdi-EN";

function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dosen/id" replace />} />

        <Route path="/dosen" element={<Navigate to="/dosen/id" replace />} />
        <Route path="/dosen/:lang" element={<DaftarDosen />} />

        <Route path="/visi-misi" element={<VisiMisi />}/>

        <Route path="/tentang-prodi/id" element={<TentangProdiID />}/>
        <Route path="/tentang-prodi/en" element={<TentangProdiEN />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
