// Mapping foto dosen. Jika tidak ada, fallback ke icon.png.
// Import gambar di sini agar Vite bisa membundle dan hashing nama file.
import icon from "../assets/icon.png";
import ichwani from "../assets/imageDosen/Ichwani.jpg";
import sugiyanto from "../assets/imageDosen/Sugiyanto.jpg";
import roni from "../assets/imageDosen/Roni_Rustandi.jpg";
import nurdiyana from "../assets/imageDosen/nurdiyana.jpg";
import herdi from "../assets/imageDosen/herdi_wisman_jaya.jpg";
import etiHayati from "../assets/imageDosen/eti hayati.png";
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
import sulastri from "../assets/imageDosen/Sultastri.png";
import Supandri from "../assets/imageDosen/Supandri, S.H, M.H.png";
import linaMarlina from "../assets/imageDosen/Lina_marlina.jpg";
import buNeng from "../assets/imageDosen/Bu_neng.jpg";

// key = id dosen, value = import foto
const fotoMap = {
  1: ichwani, // Ichwani
  2: sugiyanto, // Sugiyanto
  3: roni, // Roni Rustandi
  4: icon, // Aulia Nursyifa -> icon
  5: nurdiyana, // Nurdiyana
  6: herdi, // Herdi Wisman Jaya
  7: etiHayati, // Eti Hayati
  8: icon, // Abd. Chaidir -> icon
  9: ahmadNana, // Ahmad Nana Mahmur
  10: dedeSiswandi, // R. Dede Siswandi
  11: setiawati, // Setiawati
  12: masFierma, // Mas Fierna Janvierna
  13: icon, // Hendri -> icon
  14: yatti, // Yatti Rosmiati
  15: dewiPurnama, // Dewi Purnama Sari
  16: heriKurnia, // Heri Kurnia
  17: icon, // Aeng Muhidin -> icon
  18: endang, // Endang Prastini
  19: abiRobian, // Abi Robian
  20: icon, // Amrizal -> icon
  21: dini, // Dini Handayani
  22: saepudin, // Saepudin Karta Sasmita
  23: icon, // Darto -> icon
  24: lathifah, // Lathifah Sandra Devi
  25: icon, // Eka Setiana -> icon
  26: raistin, // Raistin Nur Abidin
  27: susi, // Susi
  28: suheppy, // Muhammad Suheppy
  29: nurullita, // Nurullita Sari
  30: yayuk, // Yayuk Muji Rahayu
  31: icon, // Ruli Hardi -> icon
  32: icon, // M. Finandar -> icon
  33: ivana, // Ivana Aprillia Harlyanikova
  34: Supandri, // Supandri
  35: suanto, // Suanto
  36: sulastri, // Sulastri
  37: linaMarlina, // Lina Marlina
  38: icon, // Dr. Akhirudin -> icon
  39: buNeng, // Dr. Neng Nurhemah
};

export function getFotoDosen(id) {
  return fotoMap[id] || icon;
}

export default fotoMap;
