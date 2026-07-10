import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { dataDosenID } from "../data/dosen-id";
import { dataDosenEN } from "../data/dosen-en";
import CardDosen from "../components/CardDosen";

function DaftarDosen() {
  const { lang } = useParams();
  const navigate = useNavigate();

  if (lang !== "id" && lang !== "en") {
    return <Navigate to="/id" replace />;
  }

  const currentData = lang === "id" ? dataDosenID : dataDosenEN;
  const title =
    lang === "id"
      ? "Daftar Dosen Prodi PPKn"
      : "Civics Education Lecturers List";

  const switchLang = (newLang) => {
    if (newLang !== lang) navigate(`/${newLang}`);
  };

  return (
    <div className="app-container">
      <h1 className="title" style={{ textAlign: "center", margin: "2rem 0" }}>
        {title}
      </h1>

      <div
        className="lang-switcher"
        style={{ textAlign: "center", marginBottom: "1.5rem" }}
      >
        <button
          onClick={() => switchLang("id")}
          disabled={lang === "id"}
          style={{
            marginRight: "0.5rem",
            padding: "0.4rem 1rem",
            fontWeight: lang === "id" ? 700 : 400,
            cursor: lang === "id" ? "default" : "pointer",
          }}
        >
          Indonesia
        </button>
        <button
          onClick={() => switchLang("en")}
          disabled={lang === "en"}
          style={{
            padding: "0.4rem 1rem",
            fontWeight: lang === "en" ? 700 : 400,
            cursor: lang === "en" ? "default" : "pointer",
          }}
        >
          English
        </button>
      </div>

      <div className="grid-dosen">
        {currentData.map((dosen) => (
          <CardDosen key={dosen.id} dosen={dosen} lang={lang} />
        ))}
      </div>
    </div>
  );
}

export default DaftarDosen;
