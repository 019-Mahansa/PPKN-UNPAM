import react from "react";
import '../css/TentangProdiNew.css';
import Gambar_kaprodi from "../../assets/Bu_ichwani_with_text.png";
export default function TentangProdiNewID() {
  return (
    <div className="tentang-prodi-new">
        <div className="images-unpam"></div>

        <div className="content">
            <p>Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) merupakan salah satu program studi unggulan yang bernaung di bawah Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Pamulang. Program studi ini secara resmi didirikan pada tanggal 25 Juli 2008 berdasarkan Surat Keputusan Direktorat Jenderal Pendidikan Tinggi Nomor 2359/D/T/2008.</p>
            <button className="btn">Selengkapnya</button>
        </div>

        <div className="titlevideo">
          <h2>Profil</h2>
        </div>

        <div className="videocontainer">
          <div className="video">
            <iframe width="1200" height="515" src="https://www.youtube.com/embed/SVWM1uO48FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>

        <div className="titlevideo title-pimpinan-prodi">
          <h2>Pimpinan Prodi</h2>
        </div>
        <div className="pimpinan">
          <div className="left">
          <p className="title-pimpinan">Kepala Prodi</p>
          <p className="title-pimpinan">Dr Ichwani Siti Utami, S.Pd. MH</p>
          <p>Dr Ichwani Siti Utami adalah kepala program studi Pendidikan Pancasila dan Kewarganegaraan di Universitas Pamulang.</p>
          <button className="btn">Sambutan Kepala Prodi</button>
          </div>
          <div className="right">
            <img src={Gambar_kaprodi} alt="Kepala Prodi" />
          </div>
        </div>
    </div>
  );
}