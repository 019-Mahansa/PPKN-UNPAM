// Mapping foto dosen. Jika tidak ada, fallback ke icon.jpeg.
// Import gambar di sini agar Vite bisa membundle dan hashing nama file.
import icon from "../assets/imageDosen/icon.jpeg";
import ichwani from "../assets/imageDosen/1.png";
import sugiyanto from "../assets/imageDosen/Sugiyanto.jpg";
import roni from "../assets/imageDosen/Roni_Rustandi.jpg";
import herdi from "../assets/imageDosen/herdi_wisman_jaya.jpg";
import ahmadNana from "../assets/imageDosen/Ahmad_Nana_Mahmur.jpg";
import dedeSiswandi from "../assets/imageDosen/R_dede_Siswandi.jpg";
import setiawati from "../assets/imageDosen/Setiawati.jpg";
import masFierma from "../assets/imageDosen/Mas_Fierna_Janvierna.jpg";
import yatti from "../assets/imageDosen/Yatti_rosmiati.jpg";
import dewiPurnama from "../assets/imageDosen/Dewi_Purnama_seri.jpg";
import heriKurnia from "../assets/imageDosen/Heri_Kurnia.jpg";
import endang from "../assets/imageDosen/Endang_Prastini.jpg";
import abiRobian from "../assets/imageDosen/Abi Robian.jpg";
import dini from "../assets/imageDosen/Dini_handayani.jpg";
import saepudin from "../assets/imageDosen/Saepudin_Karta_Sasmita.jpg";
import lathifah from "../assets/imageDosen/Lathifah_Sandra.jpg";
import raistin from "../assets/imageDosen/Raistin_Nur_Abidin.jpg";
import susi from "../assets/imageDosen/Susi.jpg";
import suheppy from "../assets/imageDosen/Suhappy.jpg";
import nurullita from "../assets/imageDosen/Nurrullita.jpg";
import yayuk from "../assets/imageDosen/Yayuk_Muji_Rahayu.jpg";
import ivana from "../assets/imageDosen/Ivana_Aprilliana-.jpg";
import suanto from "../assets/imageDosen/Suanto.jpg";

// key = id dosen, value = import foto
const fotoMap = {
  1: ichwani, // Ichwani -> 1.png
  2: sugiyanto,
  3: roni,
  4: icon, // Aulia -> icon
  5: icon, // Nurdiyana -> icon
  6: herdi,
  7: icon, // Eti Hayati -> icon
  8: icon, // Abd. Chaidir -> icon
  9: ahmadNana,
  10: dedeSiswandi,
  11: setiawati,
  12: masFierma,
  13: icon, // Hendri -> icon
  14: yatti,
  15: dewiPurnama,
  16: heriKurnia,
  17: icon, // Awang Muhidin -> icon
  18: endang,
  19: abiRobian,
  20: icon, // Amrizal -> icon
  21: dini,
  22: saepudin,
  23: icon, // Darto -> icon
  24: lathifah,
  25: icon, // Eka Setiana -> icon
  26: raistin,
  27: susi,
  28: suheppy,
  29: nurullita,
  30: yayuk,
  31: icon, // Ruli Hardi -> icon
  32: icon, // M. Finandar -> icon
  33: ivana,
  34: icon, // Supandri -> icon
  35: suanto,
  36: icon, // Sulastri -> icon
};

export function getFotoDosen(id) {
  return fotoMap[id] || icon;
}

export default fotoMap;
