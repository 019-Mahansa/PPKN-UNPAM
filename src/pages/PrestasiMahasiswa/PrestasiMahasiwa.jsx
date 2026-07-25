import react from "react";
import CardPrestasiMahawasiwa from "../../components/CardPrestasiMahasiswa";
import '../css/PrestasiMahasiswa.css';
import GambarLomba1 from "../../assets/Selamat dan sukses.png";
const PrestasiMahasiswa = () => {
  return (
    <>
    <div className="PrestasiTerbaru">
        <div className="titlePrestasi">
            <h1>Prestasi Terbaru</h1>
        </div>
            <CardPrestasiMahawasiwa
                gambarLomba={GambarLomba1}
                juara="Juara 2"
                katagoriSubjek="Kelompok"
                tingkatLomba="Nasional"
            />
    </div>
    </>
  );
}

export default PrestasiMahasiswa