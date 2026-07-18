import React from "react";

import './css/TentangProdi.css'

import gambarUnpam from '../assets/Prodi PPKn/Pendidikan Pancasila dan Kewarganegaraan.webp'


function TentangProdi(){
    return(
        <>
            <div className="upper">
                <div className="title">
                    <h1>Tentang Program Studi PPKN</h1>
                    
                </div>
                <div className="images">
                    <img src={gambarUnpam}></img>

                </div>
            </div>

            <div className="isi">
                {/**Profil singkat */}
                <p className="subTitle">
                    Profil singkat
                </p>
                <p className="paragraf">
                    Program Studi Pendidikan Pancasila dan Kewarganegaraan (PPKn) merupakan salah satu program studi unggulan yang bernaung di bawah Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Pamulang. Program studi ini secara resmi didirikan pada tanggal 25 Juli 2008 berdasarkan Surat Keputusan Direktorat Jenderal Pendidikan Tinggi Nomor 2359/D/T/2008. Keberadaan Program Studi PPKn memiliki makna historis yang sangat penting, karena menjadi program studi pertama yang mempelopori lahirnya Fakultas Keguruan dan Ilmu Pendidikan (FKIP) di lingkungan Universitas Pamulang. Sejak saat itu, program studi ini telah menjelma sebagai salah satu pilar utama dalam mencetak tenaga pendidik profesional yang kompeten di bidang pendidikan kewarganegaraan dan kebangsaan.
                </p>

                {/**Sejarah dan Perjalanan */}
                <p className="subTitle">
                    Sejarah dan Perjalanan
                </p>
                <p className="paragraf">
                    Sejak awal pendiriannya, Program Studi PPKn dirancang dengan visi yang jelas untuk menjawab berbagai tantangan zaman, khususnya dalam membentuk generasi muda yang berkarakter Pancasila, memiliki semangat kebangsaan yang kuat, serta berwawasan konstitusional dan demokratis. Komitmen tersebut diwujudkan melalui penyelenggaraan pendidikan tinggi yang berorientasi pada kualitas, integritas, dan relevansi terhadap kebutuhan masyarakat serta dunia pendidikan nasional. Berawal dari status akreditasi pertama dengan predikat "Baik", program studi ini terus menunjukkan perkembangan yang signifikan, tidak hanya dari sisi peningkatan jumlah mahasiswa, tetapi juga dari aspek kualitas lulusan, reputasi akademik, serta kontribusi nyata dalam dunia pendidikan dan pengabdian kepada masyarakat.

                </p>

                {/**Pencapaian Akreditasi*/}
                <p className="subTitle">
                    Pencapaian Akreditasi
                </p>
                <p className="paragraf">
                    Dedikasi tinggi dan kerja keras seluruh elemen sivitas akademika, mulai dari tenaga pendidik, tenaga kependidikan, hingga mahasiswa, telah membuahkan hasil yang membanggakan. Pada tahun 2022, Program Studi Pendidikan Pancasila dan Kewarganegaraan secara resmi berhasil meraih predikat akreditasi <strong>"Baik Sekali" </strong>berdasarkan Surat Keputusan LAMDIK Nomor 562/SK/LAMDIK/Ak/S/XI/2022. Pencapaian ini merupakan bentuk pengakuan resmi atas mutu penyelenggaraan pendidikan yang unggul, sistem akademik yang kokoh dan terstruktur, tata kelola program studi yang profesional, serta kontribusi nyata yang diberikan kepada masyarakat dan dunia pendidikan di Indonesia.
                </p>

                {/**Komitmen dan Visi Ke Depan */}
                <p className="subTitle">
                    Komitmen dan Visi Ke Depan
                </p>
                <p className="paragraf-spesial">
                    Keberhasilan tersebut tidak terlepas dari dukungan berbagai elemen strategis, di antaranya: 

                </p>
                <br></br>
                <ul className="bulet">
                    <li>Tenaga pendidik (dosen) yang profesional, kompeten, dan berdedikasi tinggi dalam bidang keahliannya masing-masing.</li>
                    <li>Kurikulum yang adaptif dan responsif terhadap dinamika perkembangan zaman, kebutuhan industri, serta tantangan globalisasi.</li>
                    <li>Semangat kebangsaan dan nilai-nilai Pancasila yang terus menyala dan menjadi ruh dalam setiap aktivitas pendidikan, penelitian, dan pengabdian kepada masyarakat.</li>
                    <li>Sarana dan prasarana pendukung yang memadai untuk mendukung proses pembelajaran yang berkualitas.</li>
                </ul>
                <br></br>

                <p className="paragraf-spesial2">
                    Dengan fondasi yang kuat tersebut, Program Studi Pendidikan Pancasila dan Kewarganegaraan terus berkomitmen untuk menjadi pusat 
pengembangan pendidikan kewarganegaraan yang humanis, religius, dan berdaya saing nasional. Kami bertekad untuk senantiasa 
menghasilkan lulusan yang tidak hanya unggul secara akademis, tetapi juga memiliki integritas, karakter kebangsaan, jiwa 
kepemimpinan, dan kepedulian sosial yang tinggi. Melalui sinergi seluruh pemangku kepentingan, Program Studi PPKn siap 
menghadapi tantangan masa depan dan berkontribusi secara aktif dalam mencerdaskan kehidupan bangsa serta memperkuat jati diri 
negara kesatuan Republik Indonesia.
                </p>

            </div>

        </>
    )
    
}

export default TentangProdi