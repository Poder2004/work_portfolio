import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";

const CBI = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 10",
            unit: "Unit: Environment",
            title: "How to Preserve Environment",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg2fgi5oiYDTxJ4sVisxCbVG6vNsvzuRfaidH-UDItYSYtkU_9zF_M7DPCLzLjakQymL4nLeWtJHgCzOpovhdCaOPf6mUdW9nGfSpk5YxrNeScBGR7Rew9b2XC5o6Os9ZMTYmAb1efjEIqbsN--4JZeqYYTn23b-46gZ6c7CdF5sXw3Y_H2LlGxsomlxT71VOtzuVRrWV4xKRRBqeZynG_1vyILe9X7ObpSM6EeigKtNGhZ4wnEqA5p0FDjL3x7_w9yqYnzV8FBdCy",
            imageAlt: "Teenagers discussing topics",
            pdfUrl: "https://drive.google.com/file/d/1bjgoD3Jrv66hLO0qOYyAKpkvRziHKzi8/view?usp=sharing", // ใส่ลิงก์จริงที่นี่
            slideUrl: "https://docs.google.com/presentation/d/1MTpXa0twINRqeZAsUkRCpr2FNQghAaeM/edit?usp=sharing&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://youtu.be/fibTgVea4so?si=5jKF978-m2gMo1iy"
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
                                Content-Based <br className="hidden md:block" />
                                <span className="text-purple-600">Instruction (CBI)</span>
                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-8">
                                CBI  (Content-Based Instruction) lesson is on the topic or subject matter. During the lesson students are focused on learning about something. This could be anything that interests them from a serious science subject to their favourite pop star or even a topical news story or film. They learn about this subject using the language they are trying to learn, rather than their native language, as a tool for developing knowledge and so they develop their linguistic ability in the target language. This is thought to be a more natural way of developing language ability and one that corresponds more to the way we originally learn our first language.
                            </p>


                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                <a
                                    href="https://www.teachingenglish.org.uk/professional-development/teachers/understanding-my-context/content-based-instruction"
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

export default CBI;