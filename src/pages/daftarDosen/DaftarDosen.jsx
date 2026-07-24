import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../../data/dosen-id";
import { dataDosenEN } from "../../data/dosen-en";
import CardDosen from "../../components/CardDosen";
import { useEffect } from 'react';

function DaftarDosen() {
  
  useEffect(() => {
    // Setelah render, kirim tinggi
    const kirim = () => {
      window.parent.postMessage({ tinggi: document.documentElement.scrollHeight }, '*');
    };
    kirim();
    window.addEventListener('resize', kirim);
    return () => window.removeEventListener('resize', kirim);
  }, [data]); // kalau data adalah state yang sudah terisi

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