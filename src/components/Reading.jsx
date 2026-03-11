import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const Reading = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 7",
            unit: "Unit: Interest",
            title: "Animal",
            imageUrl: "https://img2.clipart-library.com/28/happy-animals-clipart/happy-animals-clipart-9.jpg",
            imageAlt: "Children interacting in classroom",
            pdfUrl: "https://drive.google.com/file/d/1rQZBi3dHjZWicj3lu-cuYMdHUZ9yTx8r/view?usp=drive_link", // ใส่ลิงก์จริงที่นี่
            slideUrl: "https://docs.google.com/presentation/d/1FODGavTSWD6-Rsk08cvCqQwyJKmZrWjo/edit?usp=drive_link&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://youtu.be/KKmzuwPg6Lg"
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
                                Reading <br className="hidden md:block" />

                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-8">
                                Reading is an important skill in language learning and it is also a communicative activity. As English teachers, our goal is to help students see reading as a form of communication between the reader and the writer. When students read a text, they try to understand the writer’s ideas, opinions, and messages. Teachers can encourage this communication by using students’ written work as reading materials in the classroom. In addition, discussing what students have read with their classmates can make reading more meaningful. Through sharing ideas and opinions about a text, students not only improve their reading comprehension but also develop their speaking and critical thinking skills.
                            </p>
                            {/* --- Reading Framework Section --- */}
                            <section className="py-12">
                                <div className="grid grid-cols-1 gap-8">

                                    {/* 1. Pre-reading Tasks */}
                                    <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-black uppercase tracking-widest">Stage 01</span>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white">Pre-reading Tasks</h3>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-6">
                                                Pre-reading tasks aim to <span className="text-slate-800 dark:text-slate-200 font-bold">activate students’ background knowledge</span> about the topic before they read the text. This knowledge helps learners understand the content more easily. In first language reading, readers usually use their background knowledge unconsciously, but in second language learning teachers need to help students activate it consciously. Therefore, collaborative activities are often used to prepare students for reading.
                                            </p>
                                            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/30">
                                                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                                                    <span className="size-2 bg-emerald-500 rounded-full"></span>
                                                    Examples of pre-reading activities:
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-lg italic">
                                                    include asking students to tell their partners what they know about the topic, doing a short quiz in pairs, and looking at pictures related to the topic to predict the content of the text.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. While-reading Tasks */}
                                    <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-black uppercase tracking-widest">Stage 02</span>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white">While-reading Tasks</h3>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-6">
                                                While-reading tasks focus on <span className="text-slate-800 dark:text-slate-200 font-bold">helping students understand the text</span> while they are reading. Although reading is usually considered an individual activity, it can also be done collaboratively in the classroom. One example is the “running and reading” activity, which encourages students to scan the text quickly to find specific information.
                                            </p>
                                            <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100/50 dark:border-purple-800/30">
                                                <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2 flex items-center gap-2">
                                                    <span className="size-2 bg-purple-500 rounded-full"></span>
                                                    Highlighted Activity: "Reading"
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-lg italic">
                                                   In this activity, students work in pairs where one student reads questions and the other student runs to the text posted on the wall to find the answers and report them back. This type of activity helps students practice reading skills such as scanning and comprehension while making the reading process more interactive.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. Post-reading Tasks */}
                                    <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-black uppercase tracking-widest">Stage 03</span>
                                                <h3 className="text-3xl font-black text-slate-900 dark:text-white">Post-reading Tasks</h3>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-6">
                                                Post-reading tasks give students the opportunity to <span className="text-slate-800 dark:text-slate-200 font-bold">reflect on and communicate</span> what they have read. After reading a text, it is natural for readers to share their understanding or opinions with others.
                                            </p>
                                            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-800/30">
                                                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                                                    <span className="size-2 bg-blue-500 rounded-full"></span>
                                                    Follow-up Ideas:
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-400 text-lg italic">
                                                   Teachers can use activities such as discussing the text, summarizing the main ideas, reviewing the text, or completing follow-up speaking tasks related to the topic. In addition, students may analyze language features from the text, such as vocabulary or collocations, to deepen their understanding of the language used.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>


                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                <a
                                    href="https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/making-reading-communicative"
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

export default Reading;