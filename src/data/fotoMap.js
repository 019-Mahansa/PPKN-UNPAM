// Mapping foto dosen. Jika tidak ada, fallback ke icon.png.
// Import gambar di sini agar Vite bisa membundle dan hashing nama file.
import icon from "../assets/icon.png";
import ichwani from "../assets/imageDosen/Ichwani.png";
import sugiyanto from "../assets/imageDosen/sugiyanto.png";
import roni from "../assets/imageDosen/roni.png";
import herdi from "../assets/imageDosen/Herdi.png";
import etiHayati from "../assets/imageDosen/Eti.png";
import ahmadNana from "../assets/imageDosen/Ahmad nana.png";
import dedeSiswandi from "../assets/imageDosen/R dede.png";
import setiawati from "../assets/imageDosen/Setiawati.png";
import masFierma from "../assets/imageDosen/Mas fierna.png";
import yatti from "../assets/imageDosen/Yatti.png";
import dewiPurnama from "../assets/imageDosen/Dewi.png";
import heriKurnia from "../assets/imageDosen/Heri kurnia.png";
import endang from "../assets/imageDosen/Endang prastini.png";
import abiRobian from "../assets/imageDosen/Abi Robian.png";
import dini from "../assets/imageDosen/Dini handayani.png";
import saepudin from "../assets/imageDosen/Saepudin.png";
import lathifah from "../assets/imageDosen/Lathifah .png";
import raistin from "../assets/imageDosen/Raistin Nur Abidin.png";
import susi from "../assets/imageDosen/Susi.png";
import suheppy from "../assets/imageDosen/Muhammad Suheppy.png";
import nurullita from "../assets/imageDosen/Nurullita Sari.png";
import yayuk from "../assets/imageDosen/Yayuk Muji Rahayu.png";
import ivana from "../assets/imageDosen/Ivana Aprillia Harlyanikova,.png";
import suanto from "../assets/imageDosen/Suanto.png";
import sulastri from "../assets/imageDosen/Sulastri.png";
import Supandri from "../assets/imageDosen/Supandri.png";
import linaMarlina from "../assets/imageDosen/Lina Marlina.png";
import buNeng from "../assets/imageDosen/Neng Nurhemah.png";
import eka from "../assets/imageDosen/Eka Setiana,.png";

// key = id dosen, value = import foto
const fotoMap = {
  1: ichwani, // Ichwani
  2: sugiyanto, // Sugiyanto
  3: roni, // Roni Rustandi
  4: icon, // Aulia Nursyifa -> icon
  5: icon, // Nurdiyana -> icon (file PNG belum ada di imageDosen)
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
  25: eka, // Eka Setiana
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
