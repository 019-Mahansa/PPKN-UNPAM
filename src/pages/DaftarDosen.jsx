import React, { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { dataDosenID } from "../data/dosen-id";
import { dataDosenEN } from "../data/dosen-en";
import CardDosen from "../components/CardDosen";

function DaftarDosen() {
  const { lang } = useParams();
  const containerRef = useRef(null);

  if (lang !== "id" && lang !== "en") {
    return <Navigate to="/dosen/id" replace />;
  }

  const currentData = lang === "id" ? dataDosenID : dataDosenEN;

  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;

      window.parent.postMessage(
        {
          type: "resize-iframe",
          height: height,
        },
        "*",
      );
    };

    const observer = new ResizeObserver(() => {
      sendHeight();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    sendHeight();

    window.addEventListener("resize", sendHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sendHeight);
    };
  }, []);

  return (
    <div className="app-container" ref={containerRef}>
      <div className="grid-dosen">
        {currentData.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;
