import React from "react";
import "../css/VisiMisi.css";

const VisiMisiEN = () => {
  return (
    <section className="visi-misi">
      {/* Header */}
      <div className="visi-misi-header">
        <h1 className="visi-misi-title">Vision and Mission</h1>
        <div className="visi-misi-divider"></div>
      </div>

      {/* Vision */}
      <div className="visi-card">
        <h2 className="visi-label">Vision</h2>
        <p className="visi-quote">
          "To develop the integrative scholarship of Pancasila and Civic Education grounded in humanistic and religious values, producing globally minded and competitive graduates."
        </p>
      </div>

      {/* Mission */}
      <div className="misi-section">
        <h2 className="misi-title">Mission</h2>
        <div className="misi-grid">
          <div className="misi-card">
            <span className="misi-number">01</span>
            <p className="misi-text">To deliver integrative education and learning for prospective teachers of Pancasila and Civic Education.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">02</span>
            <p className="misi-text">To conduct innovative interdisciplinary research that supports the advancement of knowledge in the field of PPKn.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">03</span>
            <p className="misi-text">To carry out research-based community service in Pancasila and Civic Education that is sustainable and has a real impact on societal progress.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">04</span>
            <p className="misi-text">To implement effective and responsive academic governance to support the quality of globally minded and competitive graduates.</p>
          </div>
          <div className="misi-card">
            <span className="misi-number">05</span>
            <p className="misi-text">To establish partnerships at the local, national, and international levels to strengthen the implementation of the three pillars of higher education (tridharma).</p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="tujuan-section">
        <h2 className="tujuan-title">Goals</h2>
        <div className="tujuan-grid">
          <div className="tujuan-card">
            <span className="tujuan-number">01</span>
            <p className="tujuan-text">To produce integrative education and learning for prospective teachers of Pancasila and Civic Education.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">02</span>
            <p className="tujuan-text">To produce innovative interdisciplinary research that supports the advancement of knowledge in the field of Pancasila and Civic Education.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">03</span>
            <p className="tujuan-text">To produce research-based community service in Pancasila and Civic Education that is sustainable and has a real impact on societal progress.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">04</span>
            <p className="tujuan-text">To implement effective and responsive academic governance to support the quality of globally minded and competitive graduates.</p>
          </div>
          <div className="tujuan-card">
            <span className="tujuan-number">05</span>
            <p className="tujuan-text">To establish partnerships at the local, national, and international levels to strengthen the implementation of the three pillars of higher education (tridharma).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiEN;