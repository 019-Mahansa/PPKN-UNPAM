import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DaftarDosen from "./pages/DaftarDosen";
import VisiMisi from "./pages/VisiMisi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dosen/id" replace />} />
        <Route path="/dosen" element={<Navigate to="/dosen/id" replace />} />
        <Route path="/dosen/:lang" element={<DaftarDosen />} />

        <Route path="/visi-misi" element={<VisiMisi/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
