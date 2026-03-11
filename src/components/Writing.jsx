import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
const Writing =({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 7",
            unit: "Unit: My Interest/Opinion",
            title: "Food and Drink",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdGKMrFTIX8lPfIz9nepz8QPXuIwkP7SE8WjLGBIOZ6Kz-f2NuP29NxrLvjcH0exe7ugj8Eg_Mehc-g9XTJ3DFr4sumzBawPYgqQVl44nXaKyWtWFHGIi6AmNiHJ3eHhx5oEkh1aqJCwXAkm01SdMhKdVhDp3ilGfN28WyEzEoNwe3UDanMg7JaRJmTnrXuCnlkXxYTNr4NhtM9LdNK_0J65Z0oayi1L-pyWlIUyMXUGJI-KnlurVTI1gIWp-N36pkuy7ShsRkf0C",
            imageAlt: "Children interacting in classroom",
            pdfUrl: "https://drive.google.com/file/d/1zaXOOIh08ELvtFKxlpSr4qj211PNRke4/view?usp=sharing", // ใส่ลิงก์จริงที่นี่
            slideUrl: "https://docs.google.com/presentation/d/1AJclS9C-dlqEhlSYNwFt8C8YbjWyoy-l/edit?usp=sharing&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://youtu.be/vxWkkhWK07w?si=D3IhrlP6fI-uzHbA"
        },
        

    ];

    return (
        <div className="min-h-screen bg-[#fcfaff] dark:bg-slate-950 font-display">
            {/* 1. ส่วนปุ่มย้อนกลับ (Navigation) */}
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
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* --- Hero Section --- */}
                <section className="mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-purple-500/5 relative overflow-hidden">
                        {/* Decoration Glow */}
                        <div className="absolute top-55 right-0 size-64 bg-purple-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>

                        <div className="relative z-10 max-w-3xl">

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                Writing <br className="hidden md:block" />
                                
                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-8">
                                Writing is the ability to express your thoughts clearly in another language. It demands vocabulary, structure, and coherence — and for students, it's often the first time they’re asked to produce language beyond a sentence or two. There are many types of writing tasks in the classroom: story writing, emails, opinion essays, notes, descriptions, applications. Each one has different conventions. A good writing lesson makes these expectations clear and helps students build towards them.
                            </p>
                            {/* --- Writing Process Section --- */}
<section className="py-12 max-w-5xl mx-auto px-4">
    
    {/* Intro Box */}
    <div className="mb-12 p-8 bg-slate-900 rounded-[2rem] shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <h3 className="text-purple-400 font-black uppercase tracking-[0.2em] text-sm mb-4">Design Strategy</h3>
        <p className="text-slate-300 text-lg leading-relaxed relative z-10">
            "Working backwards from the final task makes it easier to design activity sets. Viewing writing as a <span className="text-white font-bold underline decoration-purple-500 underline-offset-4">process</span> ensures that brainstorming, rewriting, and active revision are taught effectively."
        </p>
    </div>

    {/* Process Steps */}
    <div className="space-y-6 relative">
        {/* เส้นเชื่อมแนวตั้ง (Vertical Line) */}
        <div className="absolute left-[2.25rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-slate-200 to-transparent hidden md:block"></div>

        {/* 1. Pre-writing */}
        <div className="relative flex flex-col md:flex-row gap-6 group">
            <div className="hidden md:flex items-center justify-center size-12 rounded-full bg-purple-600 text-white font-black z-10 shrink-0 shadow-lg shadow-purple-200">1</div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <span className="md:hidden size-8 flex items-center justify-center bg-purple-600 text-white rounded-full text-xs font-bold">1</span>
                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Pre-writing Activities</h4>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-4">
                    Prepare learners by activating and building sub-skills. Focuses on the <span className="text-slate-800 font-bold">audience, content,</span> and <span className="text-slate-800 font-bold">vocabulary</span> necessary for the task.
                </p>
                <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-xl text-sm font-bold">
                    Focus: Word & Phrase level activities
                </div>
            </div>
        </div>

        {/* 2. During-writing */}
        <div className="relative flex flex-col md:flex-row gap-6 group">
            <div className="hidden md:flex items-center justify-center size-12 rounded-full bg-slate-800 text-white font-black z-10 shrink-0 shadow-lg">2</div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex-1 border-l-4 border-l-purple-500">
                <div className="flex items-center gap-3 mb-4">
                    <span className="md:hidden size-8 flex items-center justify-center bg-slate-800 text-white rounded-full text-xs font-bold">2</span>
                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">During-writing Activities</h4>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-4">
                    Engage learners in <span className="text-slate-800 font-bold">recursive writing</span>, self-editing, and revisions. Teachers provide guidance on complex areas like <span className="text-purple-600 font-bold italic">syntax</span> during the re-writing process.
                </p>
            </div>
        </div>

        {/* 3. Post-writing */}
        <div className="relative flex flex-col md:flex-row gap-6 group">
            <div className="hidden md:flex items-center justify-center size-12 rounded-full bg-slate-800 text-white font-black z-10 shrink-0 shadow-lg">3</div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <span className="md:hidden size-8 flex items-center justify-center bg-slate-800 text-white rounded-full text-xs font-bold">3</span>
                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Post-writing Activities</h4>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Reflection and revision based on <span className="text-slate-800 font-bold underline decoration-dotted decoration-purple-300">feedback</span> from an audience, such as peers or the instructor, to finalize the work.
                </p>
            </div>
        </div>
    </div>
</section>

                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                                            <a
                                                                 href="https://coerll.utexas.edu/methods/modules/writing/02/sets.php"
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

export default Writing;