import { Link } from "react-router-dom";
import "../css/Home.css";

const routes = [
  {
    group: "Core Pages",
    items: [
      { label: "Lecturers - Indonesian", path: "/dosen/id" },
      { label: "Lecturers - English", path: "/dosen/en" },
      { label: "Vision & Mission - Indonesian", path: "/visi-misi/id" },
      { label: "Vision & Mission - English", path: "/visi-misi/en" },
      { label: "About the Study Program - Indonesian", path: "/tentang-prodi/id" },
      { label: "About the Study Program - English", path: "/tentang-prodi/en" },
      {
        label: "About the Study Program New - Indonesian",
        path: "/tentang-prodi/new/id",
      },
      {
        label: "About the Study Program New - English",
        path: "/tentang-prodi/new/en",
      },
      { label: "Head of Program Welcome", path: "/sambutan-kaprodi" },
        { label: "Head of Program Welcome - Indonesian", path: "/sambutan-kaprodi/id" },
      { label: "Head of Program Welcome - English", path: "/sambutan-kaprodi/en" },
      { label: "Student Achievements", path: "/prestasi-mahasiswa" },
      { label: "FAQ - Indonesian", path: "/faq/id" },
      { label: "FAQ - English", path: "/faq/en" },
      { label: "PMB - Indonesian", path: "/pmb/id" },
      { label: "PMB - English", path: "/pmb/en" },
    ],
  },
  {
    group: "Shortcuts",
    items: [
      { label: "Lecturers shortcut", path: "/dosen" },
      { label: "PMB shortcut", path: "/pmb" },
      { label: "Home", path: "/" },
    ],
  },
];

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <p className="home-kicker">PPKn UNPAM</p>
        <h1 className="home-title">All Available Pages</h1>
        <p className="home-lead">
          Use this page as a route index. Every public URL in this workspace is listed below, including the English PMB page.
        </p>
      </section>

      <section className="home-grid">
        {routes.map((group) => (
          <article key={group.group} className="home-card">
            <h2>{group.group}</h2>
            <div className="home-links">
              {group.items.map((item) => (
                <Link key={item.path} to={item.path} className="home-link">
                  <span>{item.label}</span>
                  <small>{item.path}</small>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
