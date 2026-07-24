import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../../data/dosen-id";
import { dataDosenEN } from "../../data/dosen-en";
import CardDosen from "../../components/CardDosen";
import { useEffect, useState, useCallback } from 'react'

function DaftarDosen() {
  
    const [data, setData] = useState(null);

    // Fungsi untuk mengirim tinggi ke parent (hanya jika ada parent)
    const kirimTinggi = useCallback(() => {
      if (window.parent !== window) {  // cek apakah berada di dalam iframe
        const tinggi = document.documentElement.scrollHeight;
        window.parent.postMessage({ tinggi }, '*');
      }
    }, []);

    useEffect(() => {
      // Ambil data dari API
      fetch('/api/dosen/id')  // sesuaikan endpoint
        .then(res => res.json())
        .then(hasil => setData(hasil));
    }, []);

    // Kirim tinggi SETELAH data tampil (render selesai)
    useEffect(() => {
      kirimTinggi();
    }, [data, kirimTinggi]);

    // Kirim tinggi setiap kali window di-resize
    useEffect(() => {
      window.addEventListener('resize', kirimTinggi);
      return () => window.removeEventListener('resize', kirimTinggi);
    }, [kirimTinggi]);

  const { lang } = useParams();

  if (lang !== "id" && lang !== "en") {
    return <Navigate to="/dosen/id" replace />;
  }

  const currentData = lang === "id" ? dataDosenID : dataDosenEN;
  // const title =
  //   lang === "id"
  //     ? "Daftar Dosen Prodi PPKn"
  //     : "Civics Education Lecturers List";

  return (
    <div className="app-container">
      {/* <h1 className="title" style={{ textAlign: "center", margin: "2rem 0" }}>
        {title}
      </h1> */}

      <div className="grid-dosen">
        {currentData.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;