import React from 'react';
import { FaUsersGear, FaFilePdf, FaArrowUpRightFromSquare } from "react-icons/fa6"; 

// 1. เปลี่ยนโครงสร้างข้อมูลเป็น Object ตัวเดียว (เพราะมีชิ้นเดียว)
const projectData = {
  title: "Action Research",
  subtitle: "Using Communicative Strategies for Improving Speaking Skills and Problem Solving of Grade 10 Students",
  details: "The importance of this research lies in providing a guideline for classroom instruction by applying communicative strategies to improve students’ speaking skills and develop their problem-solving abilities.",
  pdfUrl: "/วิจัย.pdf", // ตรวจสอบว่าไฟล์อยู่ในโฟลเดอร์ public นะครับ
  icon: FaUsersGear,
};

const ResearchCard = ({ subtitle, details, pdfUrl, icon: Icon }) => {
  return (
    <div className="max-w-5xl mx-auto group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col md:flex-row h-auto md:h-[900px]">
      
      {/* --- ส่วนแสดง PDF (ซ้าย) --- */}
      <div className="w-full md:w-2/3 bg-slate-100 dark:bg-slate-800 relative h-[400px] md:h-full">
        <iframe 
          src={`${pdfUrl}#toolbar=0&navpanes=0`} 
          className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity"
          title="PDF Preview"
        />
        <div className="absolute top-6 left-6 bg-purple-600 text-white p-4 rounded-2xl shadow-xl">
          <Icon size={28} />
        </div>
      </div>

      {/* --- ส่วนแสดงเนื้อหา (ขวา) --- */}
      <div className="w-full md:w-1/3 p-10 flex flex-col justify-center bg-white dark:bg-slate-900">
        <div className="space-y-6">
          <div>
            <span className="text-purple-600 font-black text-xs uppercase tracking-widest">Research Overview</span>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight mt-2">
              {subtitle}
            </h3>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-purple-200 dark:bg-purple-800 rounded-full" />
            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed italic pl-2">
              "{details}"
            </p>
          </div>

          <div className="pt-6">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <FaFilePdf />
              Open Full Paper
              <FaArrowUpRightFromSquare size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#fdfcff] dark:bg-slate-950 font-display transition-colors duration-300 pb-24">
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center space-y-6">
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter italic">
            RES<span className="text-purple-600">EARCH.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-2xl max-w-2xl leading-relaxed">
            As part of the Educational Research course, I carried out qualitative and action research projects aimed at developing the English language skills of high school and primary students.
          </p>
        </div>
      </section>

      {/* 2. แก้จุดนี้: เรียกใช้ ResearchCard โดยตรง ไม่ต้อง .map เพราะไม่ใช่ Array แล้ว */}
      <main className="mx-auto max-w-7xl px-6">
        <ResearchCard 
          subtitle={projectData.subtitle}
          details={projectData.details}
          pdfUrl={projectData.pdfUrl}
          icon={projectData.icon}
        />
        
      
      </main>
    </div>
  );
};

export default Projects;