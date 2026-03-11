import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
const Listening = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 11",
            unit: "Unit: Interest",
            title: "Animal",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdGKMrFTIX8lPfIz9nepz8QPXuIwkP7SE8WjLGBIOZ6Kz-f2NuP29NxrLvjcH0exe7ugj8Eg_Mehc-g9XTJ3DFr4sumzBawPYgqQVl44nXaKyWtWFHGIi6AmNiHJ3eHhx5oEkh1aqJCwXAkm01SdMhKdVhDp3ilGfN28WyEzEoNwe3UDanMg7JaRJmTnrXuCnlkXxYTNr4NhtM9LdNK_0J65Z0oayi1L-pyWlIUyMXUGJI-KnlurVTI1gIWp-N36pkuy7ShsRkf0C",
            imageAlt: "Children interacting in classroom",
            pdfUrl: "https://drive.google.com/file/d/1eZWzQbhIVuzDhEUzTIg1RkWgQL2usnSt/view?usp=drive_link", // ใส่ลิงก์จริงที่นี่
            slideUrl: "https://docs.google.com/presentation/d/1lHPA4tVQecHGIYGLd04PE8GtG1WEIS-j/edit?usp=drive_link&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://youtu.be/7xLgqsCpN_A"
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
            </nav>            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* --- Hero Section --- */}
                <section className="mb-16">
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-purple-500/5 relative overflow-hidden">
                        {/* Decoration Glow */}
                        <div className="absolute top-55 right-0 size-64 bg-purple-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>

                        <div className="relative z-10 max-w-3xl">

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                Listening  <br className="hidden md:block" />

                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-8">
                                Listening is a receptive language skill, meaning that language is primarily received rather than produced. It involves the process of interpreting and comprehending spoken messages. When producing messages or texts, speakers organize language through individual sounds, syllables, words, phrases, clauses, sentences, and extended discourse. Meaning is also conveyed through intonation, as well as word and sentence stress. Therefore, listeners must be able to decode multiple linguistic elements in order to understand the message. Listening can occur in either an active or a passive form.
                            </p>
                            <div className="py-16 px-4 md:px-8 bg-white dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">

                                {/* Header */}
                                <div className="max-w-3xl mb-16">
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                                        The Basic <span className="text-emerald-600">Listening Framework</span>
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-xl">
                                        The basic framework on which you can construct a listening lesson can be divided into three main stages.
                                    </p>
                                </div>

                                {/* Timeline Stages */}
                                <div className="space-y-12 relative">
                                    {/* Vertical Line (Desktop only) */}
                                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-100 dark:bg-emerald-900/30 hidden md:block"></div>

                                    {/* Stage 1: Pre-listening */}
                                    <div className="relative md:pl-20 group">
                                        <div className="absolute left-6 md:left-6 top-0 size-4 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-950 z-10 hidden md:block"></div>
                                        <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-8 rounded-[2.5rem] border border-emerald-100/50 dark:border-emerald-800/30 transition-all hover:shadow-lg">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                                <div className="px-4 py-1 bg-emerald-600 text-white text-xs font-black rounded-full uppercase tracking-widest w-fit">Stage 01</div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Pre-listening</h3>
                                            </div>
                                            <p className="mt-6 text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                                There are certain goals that should be achieved before learners attempt to listen to any text. These are motivation, contextualisation, and preparation.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stage 2: While-listening */}
                                    <div className="relative md:pl-20 group">
                                        <div className="absolute left-6 md:left-6 top-0 size-4 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-950 z-10 hidden md:block"></div>
                                        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:border-emerald-200">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                                <div className="px-4 py-1 bg-emerald-600 text-white text-xs font-black rounded-full uppercase tracking-widest w-fit">Stage 02</div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">While-listening</h3>
                                            </div>
                                            <div className="space-y-4 text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                                <p>
                                                    In authentic situations, people listen with a specific purpose. Similarly, learners need a clear reason for listening in order to maintain their attention. To effectively develop listening skills, learners usually need to listen to the text several times, typically three or four. During the first listening, learners may feel nervous and may need time to adjust to the speaker’s accent and speaking rate.
                                                </p>

                                                <blockquote className="border-l-4 border-emerald-500 pl-4 py-1 italic bg-emerald-50/30 dark:bg-emerald-900/5 rounded-r-xl">
                                                    Therefore, listening tasks should be carefully designed to guide learners through the text and should be <span className="text-emerald-600 font-bold ">graded in difficulty.</span> The initial listening task should be relatively simple and aim to help learners gain a  <span className="text-emerald-600 font-bold  ">general understanding of the text</span>  before moving on to more detailed comprehension.
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage 3: Post-listening */}
                                    <div className="relative md:pl-20 group">
                                        <div className="absolute left-6 md:left-6 top-0 size-4 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-950 z-10 hidden md:block"></div>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                                <div className="px-4 py-1 bg-emerald-600 text-white text-xs font-black rounded-full uppercase tracking-widest w-fit">Stage 03</div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Post-listening</h3>
                                            </div>
                                            <div className="space-y-4 text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                                <p>
                                                    The post-listening stage focuses on helping learners extend their understanding of the listening text. In this stage, the teacher first checks students’ comprehension and clarifies important points. After that, learners may respond to the content by discussing their opinions, agreeing or disagreeing, or relating the ideas to their own experiences. In addition, students can analyze linguistic features from the text, such as vocabulary, grammar, or useful expressions. Finally, learners may apply what they have learned through follow-up activities like speaking, writing, or summarizing.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                <a
                                    href="https://www.teachingenglish.org.uk/professional-development/teachers/planning-lessons-and-courses/framework-planning-listening-skills"
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

                    {/* Grid ปรับเป็น 1 คอลัมน์บนมือถือ และ 2 คอลัมน์บนจอใหญ่เพื่อให้การ์ดมีพื้นที่ขยายด้านข้าง */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
                        {cltResources.map((res, index) => (
                            <CLTCard
                                key={index}
                                {...res}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Listening;