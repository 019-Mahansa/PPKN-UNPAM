// Mapping foto dosen. Jika tidak ada, fallback ke icon.webp.
// Import gambar di sini agar Vite bisa membundle dan hashing nama file.
import icon from "../assets/icon.webp";
import ichwani from "../assets/imageDosen/Ichwani.webp";
import sugiyanto from "../assets/imageDosen/sugiyanto.webp";
import roni from "../assets/imageDosen/roni.webp";
import herdi from "../assets/imageDosen/Herdi.webp";
import etiHayati from "../assets/imageDosen/Eti.webp";
import ahmadNana from "../assets/imageDosen/Ahmad nana.webp";
import dedeSiswandi from "../assets/imageDosen/R dede.webp";
import setiawati from "../assets/imageDosen/Setiawati.webp";
import masFierma from "../assets/imageDosen/Mas fierna.webp";
import yatti from "../assets/imageDosen/Yatti.webp";
import dewiPurnama from "../assets/imageDosen/Dewi.webp";
import heriKurnia from "../assets/imageDosen/Heri kurnia.webp";
import endang from "../assets/imageDosen/Endang prastini.webp";
import abiRobian from "../assets/imageDosen/Abi Robian.webp";
import dini from "../assets/imageDosen/Dini handayani.webp";
import saepudin from "../assets/imageDosen/Saepudin.webp";
import lathifah from "../assets/imageDosen/Lathifah .webp";
import raistin from "../assets/imageDosen/Raistin Nur Abidin.webp";
import susi from "../assets/imageDosen/Susi.webp";
import suheppy from "../assets/imageDosen/Muhammad Suheppy.webp";
import nurullita from "../assets/imageDosen/Nurullita Sari.webp";
import yayuk from "../assets/imageDosen/Yayuk Muji Rahayu.webp";
import ivana from "../assets/imageDosen/Ivana Aprillia Harlyanikova,.webp";
import suanto from "../assets/imageDosen/Suanto.webp";
import sulastri from "../assets/imageDosen/Sulastri.webp";
import Supandri from "../assets/imageDosen/Supandri.webp";
import linaMarlina from "../assets/imageDosen/Lina Marlina.webp";
import buNeng from "../assets/imageDosen/Neng Nurhemah.webp";
import eka from "../assets/imageDosen/Eka Setiana,.webp";

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
