import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const TBL = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 9",
            unit: "Unit: Place",
            title: "Tourist Attractions",
            imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
            imageAlt: "Children interacting in classroom",
            pdfUrl: "https://drive.google.com/file/d/1_JOjSfWA6-Pv8xuwLAIXLxxowU4eHVoh/view?usp=sharing",
            slideUrl: "https://docs.google.com/presentation/d/1JAoLQKZN9h2yT66LHvwv2pSILAtqQ0_a/edit?usp=sharing&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://youtu.be/meYAMAi985Q"
        },
        // เพิ่มข้อมูลตัวอย่างเพื่อดู Grid

    ];

    return (
        <div className="min-h-screen bg-[#fcfaff] dark:bg-slate-950 font-display">

            {/* 1. Navigation - ขยายให้ใหญ่ขึ้นตามที่คุณต้องการ */}
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

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

                {/* --- Hero Section --- */}
                <section className="mb-20">
                    <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] border-2 border-slate-50 dark:border-slate-800 shadow-2xl shadow-purple-500/5 relative overflow-hidden">

                        {/* Decoration Glow */}
                        <div className="absolute top-0 right-0 size-96 bg-purple-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
                                Task-Based Language <br className="hidden lg:block" />
                                <span className="text-purple-600">Teaching (TBLT)</span>
                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed mb-12 max-w-4xl font-medium">
                                Learners are given plenty of opportunities to expand their language competences by performing meaningful tasks.
                            </p>

                            {/* --- Three Stages Section --- */}
                            <div className="mt-16 py-12 border-t border-slate-100 dark:border-slate-800">
                                <div className="mb-12">
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                                        The three stages of a <span className="text-emerald-600">TBLT Lesson</span>
                                    </h2>
                                    <div className="h-2 w-24 bg-emerald-500 rounded-full"></div>
                                </div>

                                {/* Stages Grid - ปรับ Responsive 1 คอลัมน์บนมือถือ / 3 คอลัมน์บนจอใหญ่ */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {[
                                        { s: "Stage 1", t: "The Pre-task", d: "This is where you set the scene and get students ready. You’ll introduce the topic, build interest, and make sure everyone understands what they need to do." },
                                        { s: "Stage 2", t: "The Task", d: "Now comes the heart of the lesson. Students work in pairs or small groups to complete the task." },
                                        { s: "Stage 3", t: "The Review", d: "After the task, it’s time to focus on language. This is where you address the errors and gaps you noticed during monitoring. Maybe several students struggled with the same structure. You can do this through delayed error correction, where you write examples on the board and ask students to identify and fix problems." }
                                    ].map((stage, i) => (
                                        <div key={i} className="group relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                            <div className="relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 h-full transition-transform hover:-translate-y-2">
                                                <div className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-xl font-black text-lg mb-6">{stage.s}</div>
                                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{stage.t}</h3>
                                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-medium">{stage.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Source Button */}
                         
                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                <a
                                     href="https://www.barefootteflteacher.com/p/how-to-teach-with-task-based-language"
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

                {/* --- Content Grid --- */}
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

export default TBL;