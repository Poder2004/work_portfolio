import React from 'react';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import CLTCard from '../components/CLTCard';

const CLIL = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 11",
            unit: "Unit: Places",
            title: "Different Environment",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg2fgi5oiYDTxJ4sVisxCbVG6vNsvzuRfaidH-UDItYSYtkU_9zF_M7DPCLzLjakQymL4nLeWtJHgCzOpovhdCaOPf6mUdW9nGfSpk5YxrNeScBGR7Rew9b2XC5o6Os9ZMTYmAb1efjEIqbsN--4JZeqYYTn23b-46gZ6c7CdF5sXw3Y_H2LlGxsomlxT71VOtzuVRrWV4xKRRBqeZynG_1vyILe9X7ObpSM6EeigKtNGhZ4wnEqA5p0FDjL3x7_w9yqYnzV8FBdCy",
            imageAlt: "Teenagers discussing topics",
            pdfUrl: "https://drive.google.com/file/d/1t-tB1ymudQoz85o9gWrEN9dWCxeAOz3l/view?usp=sharing",
            slideUrl: "https://docs.google.com/presentation/d/1tbHbkNRq2Mt-bT2lWdEKBhGoRN4TfBuN/edit?usp=sharing&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://example.com/food-drinks-video"
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfaff] dark:bg-slate-950 font-display transition-colors">
            {/* 1. Navigation - Sticky & Responsive Height */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <button
                        onClick={onBack}
                        /* - ปรับจาก text-2xl เป็น text-3xl (สำหรับจอเล็ก) 
                           - ปรับ md:text-2xl (สำหรับจอใหญ่)
                           - เพิ่ม py-5 เพื่อให้ Navbar หนาขึ้นเล็กน้อย ดูพรีเมียม
                        */
                        className="py-5 md:py-6 text-emerald-600 font-black flex items-center gap-3 hover:gap-5 transition-all group text-3xl md:text-2xl"
                    >
                        {/* - ปรับขนาดไอคอนให้ล้อไปกับตัวหนังสือ 
         - ใช้ strokeWidth (ถ้าไอคอนรองรับ) หรือขยาย size โดยตรง
      */}
                        <FaArrowLeft className="transition-transform group-hover:-translate-x-2" />

                        <span className="tracking-tight">Back to Gallery</span>
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                {/* --- Hero Section --- */}
                <section className="mb-12 md:mb-16">
                    <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-purple-500/5 relative overflow-hidden">
                        {/* Decoration Glow - Hidden on very small screens to save performance */}
                        <div className="absolute -top-20 -right-20 size-48 md:size-64 bg-purple-500/10 blur-[80px] md:blur-[100px] rounded-full"></div>

                        <div className="relative z-10 max-w-4xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
                                Content and Language <br className="hidden sm:block" />
                                <span className="text-purple-600 font-extrabold italic sm:not-italic">Integrated Learning (CLIL)</span>
                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl">
                                CLIL is an umbrella term for studying a subject (e.g., science, geography) through a foreign language, teaching both the subject and the language simultaneously.
                            </p>

                            {/* --- 4Cs Sub-section --- */}
                            <div className="py-10 px-6 md:py-16 md:px-10 bg-emerald-50/50 dark:bg-slate-900/50 rounded-[2rem] md:rounded-[3rem] border border-emerald-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 size-48 md:size-64 bg-emerald-200/20 blur-[80px] md:blur-[100px] rounded-full -mr-20 -mt-20"></div>

                                <div className="relative z-10 mb-8 md:mb-12">
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                                        The <span className="text-emerald-600">4Cs Curriculum</span>
                                    </h2>
                                    <p className="text-3xl md:text-2xl text-slate-500 dark:text-slate-400 font-bold mt-4 leading-snug">
                                        Integrating four essential elements for a successful CLIL lesson:
                                    </p>
                                </div>

                                {/* 4Cs Grid - Responsive: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
                                {/* ปรับ Grid: จอมือถือ/Tablet แนวตั้งเป็น 1 คอลัมน์, จอ Laptop เป็น 2 คอลัมน์ (เพื่อรองรับ text-xl) */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 relative z-10">
                                    {[
                                        { id: "C1", label: "Content", desc: "Progression in knowledge and understanding related to specific curriculum elements." },
                                        { id: "C2", label: "Communication", desc: "Using language to learn whilst learning to use language." },
                                        { id: "C3", label: "Cognition", desc: "Developing thinking skills which link concept formation and language." },
                                        { id: "C4", label: "Culture", desc: "Exposure to alternative perspectives and deeper awareness of self and others." }
                                    ].map((c) => (
                                        <div key={c.id} className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] border-2 border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:border-emerald-200 transition-all group flex flex-col items-start">

                                            {/* ขยายขนาด Icon Badge ให้ใหญ่สะใจ รับกับ text-3xl */}
                                            <div className="size-16 md:size-20 bg-emerald-600 text-white rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-emerald-500/20 font-black text-2xl md:text-3xl">
                                                {c.id}
                                            </div>

                                            <h3 className="text-4xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 transition-colors tracking-tight">
                                                {c.label}
                                            </h3>

                                            <p className="text-2xl md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                                {c.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Source Button */}
                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                <a
                                    href="https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/clil-lesson-framework"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all cursor-pointer group shadow-md"
                                >
                                    <span className="text-lg md:text-xl font-bold tracking-wide">Learn More Source</span>
                                    <SlArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Content Grid Section --- */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                        <div className="flex items-center gap-6">
                            <div className="size-16 bg-purple-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-purple-500/40">
                                <MdLibraryBooks className="text-3xl" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Grade Specific Resources</h2>
                                <p className="text-slate-500 font-medium text-lg">Curated materials for your TBLT lessons</p>
                            </div>
                        </div>

                        <div className="p-2 bg-white dark:bg-slate-900 rounded-[1.5rem] border-2 border-slate-100 dark:border-slate-800 flex">
                            <button className="px-8 py-3 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white text-lg font-black shadow-lg">All Levels</button>
                        </div>
                    </div>

                    {/* ปรับ Grid เป็น 1 คอลัมน์บนมือถือ และสูงสุด 2 คอลัมน์บนจอใหญ่เพื่อให้การ์ดกว้างขึ้น */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
                        {cltResources.map((res, index) => (
                            <CLTCard key={index} {...res} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CLIL;