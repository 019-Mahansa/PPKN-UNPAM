import '../css/TentangProdi.css'

import gambarUnpam from '../../assets/Prodi PPKn/Pendidikan Pancasila dan Kewarganegaraan.webp'


function TentangProdiEN(){
    return(
        <>
            <div className="upper">
                <div className="title">
                    <h1>About the PPKN Study Program</h1>
                    
                </div>
                <div className="images">
                    <img src={gambarUnpam}></img>

                </div>
            </div>

            <div className="isi">
                {/**Profil singkat */}
                <p className="subTitle">
                    Brief Profile
                </p>
                <p className="paragraf">
                    The Pancasila and Civic Education (PPKn) Study Program is one of the leading study programs under the Faculty of Teacher Training and Education (FKIP) at Pamulang University. This study program was officially established on July 25, 2008, based on the Decree of the Director General of Higher Education Number 2359/D/T/2008. The existence of the PPKn Study Program holds a very important historical meaning, as it became the first study program that pioneered the establishment of the Faculty of Teacher Training and Education (FKIP) within Pamulang University. Since then, this study program has grown into one of the main pillars in producing professional educators who are competent in the field of civic and national education.
                </p>

                {/**Sejarah dan Perjalanan */}
                <p className="subTitle">
                    History and Journey
                </p>
                <p className="paragraf">
                    Since its establishment, the PPKn Study Program has been designed with a clear vision to address the challenges of the times, particularly in shaping a young generation with strong Pancasila character, a strong sense of nationalism, as well as constitutional and democratic awareness. This commitment is realized through the delivery of higher education that focuses on quality, integrity, and relevance to the needs of society and the national education landscape. Starting from its first accreditation status with the predicate "Good" (Baik), this study program has continued to show significant development, not only in terms of the increasing number of students, but also in the quality of its graduates, academic reputation, and real contributions to the world of education and community service.
                </p>

                {/**Pencapaian Akreditasi*/}
                <p className="subTitle">
                    Accreditation Achievements
                </p>
                <p className="paragraf">
                    The high dedication and hard work of all elements of the academic community, ranging from educators, education staff, to students, have yielded proud results. In 2022, the Pancasila and Civic Education Study Program officially succeeded in attaining the accreditation predicate of <strong>"Very Good" (Baik Sekali)</strong> based on the Decree of LAMDIK Number 562/SK/LAMDIK/Ak/S/XI/2022. This achievement is a form of official recognition of the excellent quality of education delivery, a solid and structured academic system, professional study program governance, and the real contributions made to society and the world of education in Indonesia.
                </p>

                {/**Komitmen dan Visi Ke Depan */}
                <p className="subTitle">
                    Commitment and Future Vision
                </p>
                <p className="paragraf-spesial">
                    This success would not have been possible without the support of various strategic elements, including: 
                </p>
                <br></br>
                <ul className="bulet">
                    <li>Professional, competent, and highly dedicated educators (lecturers) in their respective fields of expertise.</li>
                    <li>A curriculum that is adaptive and responsive to the dynamics of changing times, industry needs, and the challenges of globalization.</li>
                    <li>The spirit of nationalism and Pancasila values that continues to burn and serves as the soul in every educational activity, research, and community service.</li>
                    <li>Adequate supporting facilities and infrastructure to ensure a high-quality learning process.</li>
                </ul>
                <br></br>

                <p className="paragraf-spesial2">
                    With this strong foundation, the Pancasila and Civic Education Study Program remains committed to becoming a center for the development of civic education that is humanistic, religious, and nationally competitive. We are determined to continuously produce graduates who are not only academically excellent, but who also possess integrity, national character, leadership spirit, and a high sense of social care. Through the synergy of all stakeholders, the PPKn Study Program is ready to face future challenges and contribute actively to enlightening the life of the nation as well as strengthening the identity of the unitary state of the Republic of Indonesia.
                </p>

            </div>

        </>
    )
    
}

export default TentangProdiEN