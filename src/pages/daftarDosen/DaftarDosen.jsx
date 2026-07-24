import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../../data/dosen-id";
import { dataDosenEN } from "../../data/dosen-en";
import CardDosen from "../../components/CardDosen";

function DaftarDosen() {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.6.1/js/iframeResizer.contentWindow.min.js';
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    // Sekarang window.parentIFrame tersedia
    if (window.parentIFrame) {
      window.parentIFrame.size();
    }
  };

  return () => {
    document.body.removeChild(script);
  };
}, []);

  return (
    <div className="app-container" >
      <div className="grid-dosen">
        {data.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;