import { useState, useEffect, useRef } from "react";
import "../css/PMB.css";
import Gambar from "../../assets/image-removebg-preview.png";

const Reveal = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const cardIcons = [
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.3L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 19V5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V19"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M4 19C4 17.9 4.9 17 6 17H20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 8H16M8 12H14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M5 20C5.5 16.5 8 14 12 14C16 14 18.5 16.5 19 20"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7H20M7 4V7M17 4V7M5 10H19V20H5V10Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14H16M8 17H13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,
];

const programs = [
  {
    id: "s1",
    label: "Undergraduate",
    title: "PPKn Undergraduate Program",
    subtitle:
      "Build character, civic literacy, and leadership through civic education at UNPAM.",
    cards: [
      "The UNPAM PPKn curriculum is designed to shape students who understand Pancasila, democracy, human rights, law, and their responsibilities as active and ethical citizens.",
      "Students are equipped with pedagogical, communication, and social analysis skills to become educators, community movers, and agents of change in education and society.",
      "UNPAM encourages self-development through student organizations, community service, and learning experiences aligned with the needs of education in Indonesia today.",
    ],
  },
  {
    id: "s2",
    label: "Professional Development",
    title: "Professional Growth and Expertise",
    subtitle:
      "Strengthen competence in civic education, public policy, and national character building.",
    cards: [
      "The professional development program at UNPAM helps students and educators understand social dynamics, public policy, and contemporary national issues.",
      "Research-based learning, discussion, and case studies prepare graduates to become critical thinkers, effective communicators, and leaders focused on the national interest.",
      "UNPAM provides space for collaboration with lecturers, alumni, and education partners to broaden career opportunities in education, government, and community service sectors.",
    ],
  },
];

const waves = [
  {
    id: 1,
    date: "Wave 1",
    status: "closed",
    statusLabel: "Closed",
    title: "Wave 1 Admission",
    wave: "Wave 1",
  },
  {
    id: 2,
    date: "Wave 2",
    status: "closed",
    statusLabel: "Closed",
    title: "Wave 2 Admission",
    wave: "Wave 2",
  },
  {
    id: 3,
    date: "Wave 3",
    status: "closed",
    statusLabel: "Closed",
    title: "Wave 3 Admission",
    wave: "Wave 3",
  },
  {
    id: 4,
    date: "Wave 4",
    status: "open",
    statusLabel: "Open",
    title: "Wave 4 Admission",
    wave: "Wave 4",
  },
];

const tuition = {
  level: "Bachelor",
  campus: "Tangsel",
  rows: [
    {
      label: "Registration Form",
      subLabel: "New student application fee",
      regAB: "IDR 100,000",
      regC: "IDR 100,000",
      note: "Paid during registration",
      highlight: false,
    },
    {
      label: "Tuition Fee",
      subLabel: "Semester education fee",
      regAB: "As specified",
      regC: "As specified",
      note: "Can be paid according to schedule",
      highlight: true,
    },
    {
      label: "Credit Fee",
      subLabel: "Fee based on number of credits",
      regAB: "As specified",
      regC: "As specified",
      note: "Follows university regulations",
      highlight: false,
    },
  ],
  registration: {
    regAB: "IDR 100,000",
    regC: "IDR 100,000",
  },
};

const linked = () => {
  window.open("https://pmb.unpam.ac.id/", "_blank", "noopener,noreferrer");
};

export default function PMBEn() {
  useEffect(() => {
    document.title =
      "PMB UNPAM - New Student Admission for PPKn Study Program, Pamulang University";
  }, []);

  const [activeId, setActiveId] = useState(programs[0].id);
  const active = programs.find((p) => p.id === activeId);

  return (
    <div className="pmbPage">
      <section className="pmb">
        <div className="pmb__hero">
          <Reveal className="pmb__left" delay={100}>
            <h1 className="pmb__title">
              <span className="pmb__title-base">New Student Admissions</span>
              <span className="pmb__title-accent">Wave 4 Is Now Open</span>
            </h1>

            <p className="pmb__desc">
              Join the Pancasila and Civic Education Study Program at Pamulang
              University and prepare yourself to become an educator, a smart
              citizen, and a future leader with integrity.
            </p>

            <a href="#program" className="pmb__cta">
              Explore the Program
              <span className="pmb__cta-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Reveal>

          <Reveal className="pmb__right" delay={200}>
            <div className="pmb__imageFrame">
              <div className="pmb__imagePlaceholder">
                <img
                  src={Gambar}
                  alt="New student admission illustration"
                  className="pmb__image"
                />
              </div>

              <svg
                className="pmb__pattern"
                viewBox="0 0 220 220"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect
                  x="10"
                  y="10"
                  width="90"
                  height="90"
                  rx="45"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
                <path
                  d="M120 10 L200 10 L200 90"
                  fill="none"
                  stroke="var(--pmb-maroon)"
                  strokeWidth="1.2"
                />
                <path
                  d="M120 90 L200 90"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
                <rect
                  x="10"
                  y="120"
                  width="90"
                  height="90"
                  fill="none"
                  stroke="var(--pmb-maroon)"
                  strokeWidth="1.2"
                />
                <circle
                  cx="165"
                  cy="165"
                  r="45"
                  fill="none"
                  stroke="var(--pmb-ink)"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pmbProgram" id="program">
        <div className="pmbProgram__inner">
          <Reveal>
            <span className="pmbProgram__badge">Program</span>

            <h2 className="pmbProgram__heading">
              Realize Your Role as an Educator and a Citizen Who Is Smart,
              Character-Driven, and Contributes to the Nation
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="pmbProgram__tabs" role="tablist">
              {programs.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={activeId === p.id}
                  className={`pmbProgram__tab${
                    activeId === p.id ? " is-active" : ""
                  }`}
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

              <p className="pmbProgram__label">Why PPKn UNPAM?</p>

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
                <a
                  href="#study"
                  className="pmbProgram__btn pmbProgram__btn--outline"
                >
                  View Study Program
                </a>

                <a
                  href="#program"
                  className="pmbProgram__btn pmbProgram__btn--solid"
                >
                  Explore the Program
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pmbDates" id="schedule">
        <div className="pmbDates__inner">
          <Reveal>
            <div className="pmbDatesTitles">
              <h1>PMB 2026</h1>
            </div>

            <div className="pmbDates__listHead">
              <h2>Degree Program</h2>

              <a href="#schedule" className="pmbDates__more">
                See More Schedule
                <span className="pmbDates__moreIcon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </Reveal>

          <div className="pmbbox">
            {waves.map((w, index) => (
              <Reveal key={w.id} delay={index * 100}>
                <div className="pmbbox__row">
                  <div className="pmbbox__date">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M3 9h18M8 3v4M16 3v4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span>{w.date}</span>
                  </div>

                  <span className={`pmbbox__status pmbbox__status--${w.status}`}>
                    {w.statusLabel}
                  </span>

                  <p className="pmbbox__title">{w.title}</p>

                  <span className="pmbbox__wave">{w.wave}</span>

                  {w.status !== "closed" ? (
                    <a onClick={linked} className="pmbbox__cta">
                      Apply Now
                    </a>
                  ) : (
                    <a className="pmbbox__ctac">Registration closed</a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pmbCost" id="tuition">
        <div className="pmbCost__inner">
          <Reveal>
            <h2 className="pmbCost__heading">
              Education <span className="pmbCost__heading-accent">Fee Details</span>
            </h2>

            <p className="pmbCost__sub">
              Affordable tuition with no building fee, specifically for the {tuition.level} PPKn Program at {tuition.campus}.
            </p>

            <div className="pmbCost__badges">
              <span className="pmbCost__badge pmbCost__badge--discount">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                50% form discount for Wave 1 (Undergraduate &amp; Diploma)
              </span>

              <span className="pmbCost__badge pmbCost__badge--wave">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                4 Admission Waves
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="pmbCost__tabs">
              <span className="pmbCost__tab is-active">Bachelor (S-1) Tangsel</span>
            </div>

            <div className="pmbCost__card">
              <div className="pmbCost__cardHeader">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2.5"
                    y="6"
                    width="19"
                    height="13"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M2.5 10h19M16 15h2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                {tuition.level} – {tuition.campus}
              </div>

              <div className="pmbCost__tableWrap">
                <table className="pmbCost__table">
                  <thead>
                    <tr>
                      <th>Cost Description</th>
                      <th>Reg. A &amp; B</th>
                      <th>Reg. C, S &amp; CK</th>
                      <th>Notes</th>
                    </tr>
                  </thead>

                  <tbody>
                    {tuition.rows.map((r, i) => (
                      <tr
                        key={i}
                        className={r.highlight ? "is-highlight" : undefined}
                      >
                        <td>
                          <span className="pmbCost__rowLabel">{r.label}</span>

                          {r.subLabel && (
                            <span className="pmbCost__rowSub">
                              {r.subLabel}
                            </span>
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 8h.01M11 11h1v5h1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div>
                  <p className="pmbCost__summaryTitle">Initial Registration Fee</p>

                  <div className="pmbCost__summaryValues">
                    <span>
                      Reg. A &amp; B: <strong>{tuition.registration.regAB}</strong>
                    </span>

                    <span>
                      Reg. C, S &amp; CK: <strong>{tuition.registration.regC}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
