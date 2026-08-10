import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DaftarDosen from "./pages/daftarDosen/DaftarDosen";

import VisiMisiID from "./pages/visiMisi/VisiMisi-ID";
import VisiMisiEN from "./pages/visiMisi/VisiMisi-EN";

import TentangProdiID from "./pages/tentangProdi/TentangProdi-ID";
import TentangProdiNewID from "./pages/tentangProdi/TentangProdiNew-ID";
import TentangProdiEN from "./pages/tentangProdi/tentangProdi-EN";


import SambutanKaprodi from "./pages/sambutanKaprodi/SambutanKaprodi";
import FaqID from "./pages/faq/FaqID";

import PrestasiMahasiswa from "./pages/PrestasiMahasiswa/PrestasiMahasiwa";
function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dosen/id" replace />} />

        <Route path="/dosen" element={<Navigate to="/dosen/id" replace />} />
        <Route path="/dosen/:lang" element={<DaftarDosen />} />

        <Route path="/visi-misi/id" element={<VisiMisiID />}/>
        <Route path="/visi-misi/en" element={<VisiMisiEN />}/>

        <Route path="/tentang-prodi/id" element={<TentangProdiID />}/>
        <Route path="/tentang-prodi/en" element={<TentangProdiEN />}/>
        <Route path="/tentang-prodi/new/id" element={<TentangProdiNewID />}/>

        <Route path="/sambutan-kaprodi" element={<SambutanKaprodi />}/>
        <Route path="/sambutan-kaprodi/:lang" element={<SambutanKaprodi />}/>

        <Route path="/prestasi-mahasiswa" element={<PrestasiMahasiswa />}/>
        <Route path="/faq/id" element={<FaqID />}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
