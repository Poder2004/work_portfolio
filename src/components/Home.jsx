import React from 'react';
import { HiOutlineAcademicCap, HiOutlineExternalLink } from "react-icons/hi"; // นำเข้าไอคอนสวยๆ
import profilePic from '../assets/IMG_9150.JPG';
import C1Pic from '../assets/1.JPG';
import C2Pic from '../assets/2.JPG';
import C3Pic from '../assets/3.png';
import C4Pic from '../assets/4.png';
import C5Pic from '../assets/5.png';
import C6Pic from '../assets/6.png';



const Home = ({ setCurrentPage }) => {
  // ข้อมูลเกียรติบัตร (สามารถเพิ่มลดได้จากตรงนี้)
  const certificates = [
    {
      title: "Kon Pun Kru (EDU Camp)",
      issuer: "Faculty of Education",
      year: "2024",
      image: C1Pic // เปลี่ยนเป็น path รูปจริงของคุณ
    },
    {
      title: "Scout camp for teacher",
      issuer: "Nong Wa Non Thong School Scout Camp",
      year: "2025",
      image: C3Pic
    },
    {
      title: "EIS English camp",
      issuer: "Somdetpittayaform School",
      year: "2024",
      image: C6Pic
    },
     {
      title: "Kru Eng Term fun pun Roi Yim 2nd camp",
      issuer: "Chongkon Kitti Khachon Witthaya School",
      year: "2023",
      image: C4Pic
    },
    {
      title: "Kru Eng Term fun pun Roi Yim 3rd camp",
      issuer: "Bungklawittayakom friendship 194 School",
      year: "2024",
      image: C5Pic
    },
    {
      title: "Kru Eng Term fun pun Roi Yim 4th camp",
      issuer: "Ban Nonbor School",
      year: "2025",
      image: C2Pic
    }
  ];

  return (
    <main className="flex-1 bg-purple-50 flex flex-col max-w-7xl mx-auto w-full px-4 md:px-10 py-10 transition-all duration-300">

      {/* --- Hero Section (Responsive Optimized) --- */}
      <section className="mb-16 overflow-hidden bg-white rounded-[2.5rem] shadow-xl flex flex-col md:flex-row min-h-[450px] border border-purple-100">
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center items-start text-left">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Welcome to my Portfolio
          </span>
          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-2">Jidapa Thanandorn</p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
            An English Major <span className="text-purple-600">Student</span>
          </h2>
          <div className="space-y-1 mb-10 text-slate-600 font-semibold text-xl">
            <p>Faculty of Education</p>
            <p>Mahasarakham University</p>
          </div>
          <button
            onClick={() => setCurrentPage('Profile')}
            className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl shadow-purple-200 hover:bg-purple-600 hover:-translate-y-1 transition-all duration-300"
          >
            View Full Profile
          </button>
        </div>

        {/* Profile Image Container */}
        <div className="w-full md:w-[40%] bg-slate-100 relative min-h-[350px]">
          <img
            alt="Jidapa"
            className="absolute inset-0 h-full w-full object-cover" // ลบ object-top ออก
            /* เพิ่ม object-position ตรงนี้ */
            style={{ objectPosition: 'center 60%' }} // ปรับ % ตรงนี้เพื่อดันภาพขึ้น-ลง
            src={profilePic}
          />
        </div>
      </section>

      {/* --- Certificates Section (แทนที่คอมเมนต์เดิม) --- */}
      <section className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-100 pb-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 p-4 rounded-2xl text-white shadow-lg shadow-purple-200">
              <HiOutlineAcademicCap size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Certificates</h3>
              <p className="text-xl text-slate-500 font-medium">Recognition of my academic</p>
            </div>
          </div>
          {/* <button className="text-purple-600 font-bold hover:underline underline-offset-8">View All</button> */}
        </div>

        {/* Certificate Grid - Responsive: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Box */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                />
                {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <HiOutlineExternalLink className="text-white text-4xl" />
                </div> */}
              </div>

              {/* Text Info */}
              <div className="px-2 pb-2">
                <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-1 block">
                  {cert.year} • {cert.issuer}
                </span>
                <h4 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-purple-600 transition-colors">
                  {cert.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;