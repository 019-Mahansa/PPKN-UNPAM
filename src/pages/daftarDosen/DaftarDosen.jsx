import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../../data/dosen-id";
import { dataDosenEN } from "../../data/dosen-en";
import CardDosen from "../../components/CardDosen";

function DaftarDosen() {
  const { lang } = useParams();
  const containerRef = useRef(null);
  const [data, setData] = useState(null);

  const kirimTinggi = useCallback(() => {
    const tinggi = document.documentElement.scrollHeight;
    if (window.parent !== window) {
      window.parent.postMessage({ tinggi }, "*");
    }
  }, []);

  useEffect(() => {
    try {
      const currentData = lang === "en" ? dataDosenEN : dataDosenID;
      setData(currentData);
    } catch (err) {
      console.error(err);
    }
  }, [lang]);

  useEffect(() => {
    if (data) {
      requestAnimationFrame(() => requestAnimationFrame(kirimTinggi));
    }
  }, [data, kirimTinggi]);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(kirimTinggi);
    resizeObserver.observe(containerRef.current);

    const mutationObserver = new MutationObserver(kirimTinggi);
    mutationObserver.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    window.addEventListener("load", kirimTinggi);
    window.addEventListener("resize", kirimTinggi);

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("load", kirimTinggi);
      window.removeEventListener("resize", kirimTinggi);
    };
  }, [kirimTinggi]);

  if (!data) return <p>Memuat...</p>;

  return (
    <div className="app-container" ref={containerRef}>
      <div className="grid-dosen">
        {data.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;