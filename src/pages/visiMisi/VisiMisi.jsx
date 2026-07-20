import React from "react";
import "../css/VisiMisi.css";

const VisiMisi = () => {
  return (
    <section className="visi-misi">
      {/* Header */}
      <div className="visi-misi-header">
        <h1 className="visi-misi-title">Visi dan Misi</h1>
        <div className="visi-misi-divider"></div>
      </div>

      {/* Visi */}
      <div className="visi-card">
        <h2 className="visi-label">Visi</h2>
        <p className="visi-quote">
          "Mengembangkan keilmuan Pendidikan Pancasila dan Kewarganegaraan yang Integratif berlandaskan nilai Humanis dan Religius untuk Menghasilkan Lulusan yang Berwawasan Global dan Berdaya Saing."
        </p>
      </div>

      {/* Misi */}
      <div className="misi-section">
        <h2 className="misi-title">Misi</h2>
        <div className="misi-grid">
          <div className="misi-card">
            <span className="misi-number">01</span>
            <p className="misi-text">Menyelenggarakan Pendidikan dan Pembelajaran yang Integratif bagi calon guru Pendidikan Pancasila dan Kewarganegaraan.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">02</span>
            <p className="misi-text">Menyelenggarakan penelitian interdisipliner yang inovatif untuk menunjang pengembangan ilmu pengetahuan di bidang PPKN.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">03</span>
            <p className="misi-text">Menyelenggarakan pengabdian di bidang pendidikan PPKN berbasis penelitian, berkelanjutan, dan berdampak bagi kemajuan masyarakat.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">04</span>
            <p className="misi-text">Menyelenggarakan tata kelola akademik yang efektif dan responsif untuk menunjang kualitas lulusan yang berwawasan global dan berdaya saing.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">05</span>
            <p className="misi-text">Menjalin kemitraan di tingkat lokal, nasional, dan internasional dalam rangka memperkuat implementasi tridharma.</p>
          </div>
        </div>
      </div>

      {/* Tujuan */}
      <div className="tujuan-section">
        <h2 className="tujuan-title">Tujuan</h2>
        <div className="tujuan-grid">
          <div className="tujuan-card">
            <span className="tujuan-number">01</span>
            <p className="tujuan-text">Menghasilkan Pendidikan dan Pembelajaran yang Integratif bagi calon guru Pendidikan Pancasila dan Kewarganegaraan.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">02</span>
            <p className="tujuan-text">Menghasilkan penelitian interdisipliner yang inovatif untuk menunjang pengembangan ilmu pengetahuan di bidang Pendidikan Pancasila dan Kewarganegaraan.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">03</span>
            <p className="tujuan-text">Menghasilkan pengabdian di bidang pendidikan Pancasila dan Kewarganegaraan berbasis penelitian, berkelanjutan, dan berdampak bagi kemajuan masyarakat.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">04</span>
            <p className="tujuan-text">Terlaksananya tata kelola akademik yang efektif dan responsif untuk menunjang kualitas lulusan yang berwawasan global dan berdaya saing.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">05</span>
            <p className="tujuan-text">Terjalinnya kemitraan di tingkat lokal, nasional, dan internasional dalam rangka memperkuat implementasi tridharma.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
