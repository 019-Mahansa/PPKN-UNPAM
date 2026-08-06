import React, { useState } from "react";
import "./Faq.css";

function FaqEN() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "About our profile?",
      answer:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
    },
    {
      question: "News and topics?",
      answer: "Isi jawaban untuk news and topics ditaruh di sini.",
    },
    {
      question: "How to use?",
      answer: "Isi panduan cara penggunaan ditaruh di sini.",
    },
  ];

  const toggleFaq = (index) => {
    // Kalau di-klik lagi saat terbuka, bakal nutup. Kalau klik yang lain, ganti yang buka.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-background">
      <div className="faq-container">
        {/* Navigation Bar */}
        {/* <header className="navbar">
          <div className="brand-contact">CONTACT US</div>
          <nav className="nav-menu">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#blog">BLOG</a>
            <a href="#faq" className="active">
              FAQ
            </a>
          </nav>
          <div className="user-greeting">HELLO, USERNAME</div>
        </header> */}

        {/* Main Content Area */}
        <main className="content-layout">
          {/* Left Column - FAQ Text & Accordion */}
          <section className="faq-text-section">
            <h1>
              Frequently Asked
              <br />
              Questions
            </h1>

            <div className="search-box">
              <input type="text" placeholder="Search question here" />
              <span className="search-icon">
                {/* Simple SVG Magnifying Glass */}
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>

            <div className="accordion">
              {faqData.map((item, index) => (
                <div key={index} className="accordion-item">
                  <button
                    className="accordion-header"
                    onClick={() => toggleFaq(index)}
                  >
                    <h2>{item.question}</h2>
                    <span className="toggle-icon">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Right Column - Illustration */}
          <section className="faq-illustration">
            {/* Taruh asset gambar ilustrasi cewek dan teks FAQ gede di sini */}
            <img src="/assets/faq-illustration.png" alt="FAQ Illustration" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default FaqEN;