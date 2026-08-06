import React from "react";
import { useEffect, useState, useCallback, useRef } from "react";
import ichwaniPhoto from "../../assets/Bu_ichwani_with_text.png";
import "../css/SambutanKaprodi.css";

function SambutanKaprodi() {
  const containerRef = useRef(null);
  const [data, setData] = useState(null);

  const kirimTinggi = useCallback(() => {
    const tinggi = document.documentElement.scrollHeight;
    if (window.parent !== window) {
      window.parent.postMessage({ tinggi }, "*");
    }
  }, []);

  useEffect(() => {
    // Data Kaprodi statis (ID/EN)
    setData({
      id: {
        nama: "Dr. Ichwani Siti Utami, S.Pd., M.H",
        jabatan: "Ketua Program Studi",
        fotoId: 1,
        paragraf: [
          "Assalamu’alaikum Warahmatullahi Wabarakatuh,",
          "Salam Sejahtera,",
          "Selamat datang di Website Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKN). Fakultas Keguruan dan Ilmu Pendidikan Universitas Pamulang.",
          "Berdasarkan keputusan Lembaga Akreditasi Mandiri Kependidikan (LAMDIK) Nomor: 562/SK/LAMDIK/Ak/S/XI/2022, Prodi Pendidikan Pancasila dan Kewarganegaraan (PPKn) Pada Program Sarjana Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Pamulang, terakreditasi dengan peringkat Baik Sekali.",
          "Di era globalisasi saat ini, perkembangan ilmu pengetahuan dan teknologi sangat begitu cepat. dimana kita semakin mudah dalam mengakses segala informasi yang dibutuhkan dan menjadikan pendidikan Indonesia mampu bersaing dengan negara-negara lain. Kami merupakan program studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) yang mengembangkan karakter keilmuan berbasis filsafat Pancasila, sehingga menghasilkan lulusan yang cerdas dan dapat bersaing di dunia insdustri dan dunia usaha (DIDU).",
          "Website ini menyajikan informasi yang berkaitan dengan seluruh kegiatan sivitas akademika Program Studi PPKn. Semoga website Program Studi PPKn Fakultas Keguruan dan Ilmu Pendidikan Universitas Pamulang ini dapat memberikan informasi yang dibutuhkan oleh para pengunjung. Akhirul kalam, Saya ucapkan terima kasih.",
          "Wassalamu’alaikum Wr. Wb.",
        ],
      },
      en: {
        nama: "Dr. Ichwani Siti Utami, S.Pd., M.H",
        jabatan: "Head of Study Program",
        fotoId: 1,
        paragraf: [
          "Assalamu’alaikum Warahmatullahi Wabarakatuh,",
          "May peace be upon you,",
          "Welcome to the website of the Pancasila and Civic Education Study Program (PPKN), Faculty of Teacher Training and Education, Universitas Pamulang.",
          "Based on the decree of the Independent Accreditation Agency for Education (LAMDIK) Number: 562/SK/LAMDIK/Ak/S/XI/2022, the Pancasila and Civic Education Study Program (PPKn) at the Undergraduate Program of the Faculty of Teacher Training and Education (FKIP), Universitas Pamulang, is accredited with an “Excellent” rating.",
          "In the current era of globalization, the development of science and technology is moving very rapidly. It enables us to access all the information we need more easily and allows Indonesian education to compete with other countries. We are the Pancasila and Civic Education (PPKn) study program that develops academic character based on the philosophy of Pancasila, producing graduates who are intelligent and able to compete in the industrial and business world.",
          "This website provides information related to all activities of the PPKn Study Program’s academic community. We hope this website of the PPKn Study Program, Faculty of Teacher Training and Education, Universitas Pamulang, can deliver the information needed by all visitors. Finally, I would like to express my gratitude.",
          "Wassalamu’alaikum Wr. Wb.",
        ],
      },
    });
  }, []);

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

  const bahasa = window.location.pathname.includes("/en") ? "en" : "id";
  const content = data?.[bahasa];

  if (!content) return <p>Memuat...</p>;

  return (
    <section className="sambutan-kaprodi" ref={containerRef}>
      <header className="sambutan-header">
        <p className="sambutan-eyebrow">
          {bahasa === "en" ? "Foreword" : "Sambutan"}
        </p>
        <h1 className="sambutan-title">
          {bahasa === "en" ? "Head of Program's Welcome" : "Sambutan Ketua Program Studi"}
        </h1>
        <div className="sambutan-divider" />
      </header>

      <div className="sambutan-photo-wrapper">
        <img
          src={ichwaniPhoto}
          alt={content.nama}
          className="sambutan-photo"
          onLoad={kirimTinggi}
        />
      </div>

      <div className="sambutan-identity">
        <h2 className="sambutan-name">{content.nama}</h2>
        <span className="sambutan-role">{content.jabatan}</span>
      </div>

      <div className="sambutan-paragraphs">
        {content.paragraf.map((p, i) => {
          const isFirst = i === 0;
          const isLast = i === content.paragraf.length - 1;
          const cls = isFirst
            ? "sambutan-paragraph sambutan-paragraph--lead"
            : isLast
            ? "sambutan-paragraph sambutan-paragraph--closing"
            : "sambutan-paragraph";
          return (
            <p key={i} className={cls}>
              {p}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default SambutanKaprodi;
