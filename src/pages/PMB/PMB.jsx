import React, { useState,useEffect } from "react";
import '../css/PMB.css';




const cardIcons = [
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 2v5h5M8 12h8M8 16h8M8 8h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 12h18M12 3c2.5 2.6 4 5.9 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.9-4-9s1.5-6.4 4-9Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>,
];

const programs = [
    {
        id: "sarjana",
        label: "Sarjana",
        title: "Sarjana PPKn",
        subtitle: "Bangun karakter, literasi kebangsaan, dan kepemimpinan generasi muda melalui pendidikan kewarganegaraan di UNPAM.",
        cards: [
            "Kurikulum PPKn UNPAM dirancang untuk membentuk mahasiswa yang paham Pancasila, demokrasi, HAM, hukum, serta tanggung jawab sebagai warga negara yang aktif dan berintegritas.",
            "Mahasiswa dibekali kemampuan pedagogik, komunikasi, dan analisis sosial untuk siap menjadi pendidik, penggerak masyarakat, serta agen perubahan di lingkungan pendidikan dan bangsa.",
            "UNPAM mendorong pengembangan diri melalui kegiatan organisasi, pengabdian masyarakat, dan pengalaman belajar yang relevan dengan kebutuhan pendidikan Indonesia saat ini.",
        ],
    },
    {
        id: "pascasarjana",
        label: "Pascasarjana",
        title: "Pengembangan Profesi dan Keahlian",
        subtitle: "Perkuat kompetensi di bidang pendidikan kewarganegaraan, kebijakan publik, dan penguatan karakter bangsa.",
        cards: [
            "Program pengembangan profesi di UNPAM membantu mahasiswa dan tenaga pendidik memahami dinamika masyarakat, kebijakan publik, serta isu-isu kontemporer bangsa.",
            "Pembelajaran berbasis riset, diskusi, dan studi kasus menyiapkan lulusan untuk menjadi pemikir kritis, komunikator yang efektif, dan pemimpin yang berorientasi pada kepentingan bangsa.",
            "UNPAM membuka ruang kolaborasi dengan dosen, alumni, dan mitra pendidikan untuk memperluas peluang karier di bidang pendidikan, pemerintahan, dan masyarakat.",
        ],
    },
];

/* Catatan: tanggal & status di bawah masih contoh/placeholder —
   sesuaikan dengan jadwal PMB yang sebenarnya. */
const waves = [
    { id: "g1", wave: "Gelombang 1", date: "6 Maret – 5 Mei 2026", title: "Pendaftaran Gelombang 1", status: "closed", statusLabel: "Ditutup" },
    { id: "g2", wave: "Gelombang 2", date: "6 Mei    – 22 Juni 2026", title: "Pendaftaran Gelombang 2", status: "closed", statusLabel: "Ditutup" },
    { id: "g3", wave: "Gelombang 3", date: "23 Juni – 4 Agustus 2026", title: "Pendaftaran Gelombang 3", status: "closed", statusLabel: "Ditutup" },
    { id: "g4", wave: "Gelombang 4", date: "5 Agustus – 15 Agustus 2026", title: "Pendaftaran Gelombang 4", status: "open", statusLabel: "Dibuka" },
];

/* Catatan: angka & keterangan biaya di bawah disalin dari referensi (portal
   PMB UNPAM) — cek ulang ke bagian keuangan/prodi sebelum dipublikasikan. */
const tuition = {
    level: "Sarjana (S-1)",
    campus: "Kampus Tangerang Selatan",
    rows: [
        { label: "Formulir Pendaftaran", regAB: "Rp100.000", regC: "Rp100.000", note: "Gel. 1: Diskon 50%" },
        { label: "Jaket Almamater + KTM", regAB: "Rp250.000", regC: "Rp250.000", note: "Setelah lulus SPMB" },
        { label: "Registrasi Awal Semester", regAB: "Rp250.000", regC: "Rp250.000", note: "Setiap awal semester" },
        { label: "Biaya Kuliah (per semester)", regAB: "Rp1.500.000", regC: "Rp2.400.000", note: "A&B: Rp250rb/angsuran; C&CK: Rp400rb/angsuran", highlight: true },
        { label: "Angsuran Praktikum", subLabel: "Khusus Fak. Teknik, MIPA, Ilmu Komputer, Ilmu Komunikasi & Desain, serta Pend. Jasmani", regAB: "Rp200.000", regC: "Rp300.000", note: "Dilunasi sebelum UAS" },
        { label: "Biaya UTS", regAB: "Rp300.000", regC: "Rp400.000", note: "Dilunasi sebelum UTS" },
        { label: "Biaya UAS", regAB: "Rp300.000", regC: "Rp400.000", note: "Dilunasi sebelum UAS" },
    ],
    registration: { regAB: "Rp750.000", regC: "Rp900.000" },
};

const linked = () =>{
    window.open("https://pmb.unpam.ac.id/")
}

export default function PMB() {
    useEffect(() => {
    document.title = "PMB UNPAM - Penerimaan Mahasiswa Baru Program Studi PPKn Universitas Pamulang";
    alert("Pages ini masih dalam perbaikan!")
}, [])
    const [activeId, setActiveId] = useState(programs[0].id);
    const active = programs.find((p) => p.id === activeId);

    return (
        <div className="pmbPage">

            {/* ================= HERO ================= */}
            <section className="pmb">
                <div className="pmb__hero">
                    <div className="pmb__left">
                        <h1 className="pmb__title">
                            <span className="pmb__title-base">Penerimaan Mahasiswa Baru</span>
                            <span className="pmb__title-accent">Gelombang 4 Telah Dibuka</span>
                        </h1>

                        <p className="pmb__desc">
                            Bergabunglah dengan Program Studi Pendidikan Pancasila dan Kewarganegaraan Universitas Pamulang, dan siapkan diri menjadi pendidik, warga negara yang cerdas, serta pemimpin masa depan yang berintegritas.
                        </p>

                        <a href="#program" className="pmb__cta">
                            Pelajari Program
                            <span className="pmb__cta-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="pmb__right">
                        <div className="pmb__imageFrame">
                            <div className="pmb__imagePlaceholder">
                                {/* <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <circle cx="100" cy="82" r="46" fill="var(--pmb-maroon)" opacity="0.18" />
                                    <circle cx="100" cy="78" r="34" fill="var(--pmb-maroon)" opacity="0.35" />
                                    <path d="M40 232c4-52 30-98 60-98s56 46 60 98" fill="var(--pmb-maroon)" opacity="0.18" />
                                </svg> */}
                                <span className="pmb__imagePlaceholder-label">Ganti gambar di sini</span>
                            </div>

                            <svg className="pmb__pattern" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <rect x="10" y="10" width="90" height="90" rx="45" fill="none" stroke="var(--pmb-ink)" strokeWidth="1.2" />
                                <path d="M120 10 L200 10 L200 90" fill="none" stroke="var(--pmb-maroon)" strokeWidth="1.2" />
                                <path d="M120 90 L200 90" fill="none" stroke="var(--pmb-ink)" strokeWidth="1.2" />
                                <rect x="10" y="120" width="90" height="90" fill="none" stroke="var(--pmb-maroon)" strokeWidth="1.2" />
                                <circle cx="165" cy="165" r="45" fill="none" stroke="var(--pmb-ink)" strokeWidth="1.2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= PROGRAM (Sarjana / Pascasarjana) ================= */}
            <section className="pmbProgram">
                <div className="pmbProgram__inner">

                    <span className="pmbProgram__badge">Program</span>

                    <h2 className="pmbProgram__heading">
                        Wujudkan Peran Anda Sebagai Pendidik dan Warga Negara yang Cerdas, Berkarakter, dan Berkontribusi bagi Bangsa
                    </h2>

                    <div className="pmbProgram__tabs" role="tablist">
                        {programs.map((p) => (
                            <button
                                key={p.id}
                                type="button"
                                role="tab"
                                aria-selected={activeId === p.id}
                                className={`pmbProgram__tab${activeId === p.id ? " is-active" : ""}`}
                                onClick={() => setActiveId(p.id)}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    <div className="pmbProgram__panel" role="tabpanel">
                        <div className="pmbProgram__panelTop">
                            <h3 className="pmbProgram__panelTitle">{active.title}</h3>
                            <p className="pmbProgram__panelSubtitle">{active.subtitle}</p>
                        </div>

                        <p className="pmbProgram__label">Mengapa PPKn UNPAM?</p>

                        <div className="pmbProgram__cards">
                            {active.cards.map((text, i) => (
                                <div className="pmbProgram__card" key={i}>
                                    <span className="pmbProgram__cardIcon" aria-hidden="true">
                                        {cardIcons[i]}
                                    </span>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pmbProgram__actions">
                            <a href="#studi" className="pmbProgram__btn pmbProgram__btn--outline">
                                Lihat Program Studi
                            </a>
                            <a href="#program" className="pmbProgram__btn pmbProgram__btn--solid">
                                Pelajari Program
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= ADMISSION 2026 (Gelombang 1–4) ================= */}
            <section className="pmbDates">
                <div className="pmbDates__inner">

                    <div className="pmbDatesTitles">
                        <h1>PMB 2026</h1>
                    </div>

                    <div className="pmbDates__listHead">
                        <h2>Program Gelar</h2>
                        <a href="#jadwal" className="pmbDates__more">
                            Lihat Jadwal Lebih Banyak
                            <span className="pmbDates__moreIcon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="pmbbox">
                        {waves.map((w) => (
                            <div className="pmbbox__row" key={w.id}>
                                <div className="pmbbox__date">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                                        <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                    <span>{w.date}</span>
                                </div>

                                <span className={`pmbbox__status pmbbox__status--${w.status}`}>
                                    {w.statusLabel}
                                </span>

                                <p className="pmbbox__title">{w.title}</p>

                                <span className="pmbbox__wave">{w.wave}</span>

                                {w.status !== "closed" && (
                                    <a onClick={linked} className="pmbbox__cta">
                                        Daftar Sekarang
                                    </a>
                                )}

                                {w.status == "closed" && (
                                    <a  className="pmbbox__ctac">
                                        Pendaftaran tutup
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= RINCIAN BIAYA PENDIDIKAN ================= */}
            <section className="pmbCost">
                <div className="pmbCost__inner">

                    <h2 className="pmbCost__heading">
                        Rincian <span className="pmbCost__heading-accent">Biaya Pendidikan</span>
                    </h2>

                    <p className="pmbCost__sub">
                        Biaya kuliah terjangkau tanpa uang gedung, khusus untuk Program {tuition.level} PPKn {tuition.campus}.
                    </p>

                    <div className="pmbCost__badges">
                        <span className="pmbCost__badge pmbCost__badge--discount">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Diskon 50% Formulir Gelombang 1 (Sarjana & Diploma)
                        </span>
                        <span className="pmbCost__badge pmbCost__badge--wave">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                            </svg>
                            4 Gelombang Pendaftaran
                        </span>
                    </div>

                    {/* Hanya Kampus Tangsel yang tersedia untuk PPKn */}
                    <div className="pmbCost__tabs">
                        <span className="pmbCost__tab is-active">Sarjana (S-1) Tangsel</span>
                    </div>

                    <div className="pmbCost__card">
                        <div className="pmbCost__cardHeader">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <rect x="2.5" y="6" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                                <path d="M2.5 10h19M16 15h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            {tuition.level} – {tuition.campus}
                        </div>

                        <div className="pmbCost__tableWrap">
                            <table className="pmbCost__table">
                                <thead>
                                    <tr>
                                        <th>Uraian Biaya</th>
                                        <th>Reg. A &amp; B</th>
                                        <th>Reg. C, S &amp; CK</th>
                                        <th>Keterangan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tuition.rows.map((r, i) => (
                                        <tr key={i} className={r.highlight ? "is-highlight" : undefined}>
                                            <td>
                                                <span className="pmbCost__rowLabel">{r.label}</span>
                                                {r.subLabel && (
                                                    <span className="pmbCost__rowSub">{r.subLabel}</span>
                                                )}
                                            </td>
                                            <td className="pmbCost__amount">{r.regAB}</td>
                                            <td className="pmbCost__amount">{r.regC}</td>
                                            <td className="pmbCost__note">{r.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="pmbCost__summary">
                            <span className="pmbCost__summaryIcon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                                    <path d="M12 8h.01M11 11h1v5h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div>
                                <p className="pmbCost__summaryTitle">Biaya Registrasi Awal</p>
                                <div className="pmbCost__summaryValues">
                                    <span>Reg. A &amp; B: <strong>{tuition.registration.regAB}</strong></span>
                                    <span>Reg. C, S &amp; CK: <strong>{tuition.registration.regC}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}