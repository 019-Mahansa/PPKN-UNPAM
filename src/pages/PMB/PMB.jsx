import React, { useState } from "react";
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

export default function PMB() {
    const [activeId, setActiveId] = useState(programs[0].id);
    const active = programs.find((p) => p.id === activeId);

    return (
        <div className="pmbPage">
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
                                <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <circle cx="100" cy="82" r="46" fill="var(--pmb-maroon)" opacity="0.18" />
                                    <circle cx="100" cy="78" r="34" fill="var(--pmb-maroon)" opacity="0.35" />
                                    <path d="M40 232c4-52 30-98 60-98s56 46 60 98" fill="var(--pmb-maroon)" opacity="0.18" />
                                </svg>
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

        </div>
    )
}