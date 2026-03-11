import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
const CLT = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 3",
            unit: "Unit: Opinion/Interest",
            title: "Food and Drinks",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdGKMrFTIX8lPfIz9nepz8QPXuIwkP7SE8WjLGBIOZ6Kz-f2NuP29NxrLvjcH0exe7ugj8Eg_Mehc-g9XTJ3DFr4sumzBawPYgqQVl44nXaKyWtWFHGIi6AmNiHJ3eHhx5oEkh1aqJCwXAkm01SdMhKdVhDp3ilGfN28WyEzEoNwe3UDanMg7JaRJmTnrXuCnlkXxYTNr4NhtM9LdNK_0J65Z0oayi1L-pyWlIUyMXUGJI-KnlurVTI1gIWp-N36pkuy7ShsRkf0C",
            imageAlt: "Children interacting in classroom",
            pdfUrl: "https://drive.google.com/file/d/1MI-jRwY1ju6xmqwvzD9t0ZSyIfZy5it4/view?usp=sharing", // ใส่ลิงก์จริงที่นี่
            slideUrl: "https://docs.google.com/presentation/d/1tiFFM7tTDx87fvDw0W3wAWGOZvUTnyVq/edit?usp=sharing&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://example.com/food-drinks-video"
        },
        {
            grade: "Grade 9",
            unit: "Unit: Travel Around the World",
            title: "Weather",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg2fgi5oiYDTxJ4sVisxCbVG6vNsvzuRfaidH-UDItYSYtkU_9zF_M7DPCLzLjakQymL4nLeWtJHgCzOpovhdCaOPf6mUdW9nGfSpk5YxrNeScBGR7Rew9b2XC5o6Os9ZMTYmAb1efjEIqbsN--4JZeqYYTn23b-46gZ6c7CdF5sXw3Y_H2LlGxsomlxT71VOtzuVRrWV4xKRRBqeZynG_1vyILe9X7ObpSM6EeigKtNGhZ4wnEqA5p0FDjL3x7_w9yqYnzV8FBdCy",
            imageAlt: "Teenagers discussing topics",
            pdfUrl: "https://drive.google.com/file/d/1t-tB1ymudQoz85o9gWrEN9dWCxeAOz3l/view?usp=sharing", // ใส่ลิงก์จริงที่นี่
            slideUrl: "https://docs.google.com/presentation/d/1tbHbkNRq2Mt-bT2lWdEKBhGoRN4TfBuN/edit?usp=sharing&ouid=110929478797396051725&rtpof=true&sd=true",
            videoUrl: "https://example.com/food-drinks-video"
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
                <section className="mb-20">
                    <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] border-2 border-slate-50 dark:border-slate-800 shadow-2xl shadow-purple-500/5 relative overflow-hidden">

                        {/* Glow Decoration */}
                        <div className="absolute top-0 right-0 size-96 bg-purple-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
                                Communicative Language <br className="hidden lg:block" />
                                <span className="text-purple-600">Teaching (CLT)</span>
                            </h1>

                            <div className="space-y-6 max-w-4xl">
                                <p className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed font-medium">
                                    Communicative Language Teaching (CLT) has become common in classrooms around the world at all levels of ability and with students of all ages. The starting point for the CLT approach is to consider what people actually do with language outside the classroom. Every day, people use language to provide and to ask for information, to make requests, to give and to ask for permission, and for a long list of other functions. In other words, they use language to communicate. The aim of Communicative Language Teaching is to give students the skills they need in order to be able to communicate effectively in English. 
                                </p>
                                <p className="text-slate-400 dark:text-slate-500 text-xl md:text-2xl leading-relaxed italic border-l-4 border-emerald-500 pl-6">
                                    Mechanical, Meaningful, and Communicative Practice Another useful distinction that some advocates of CLT proposed was the distinction between three different kinds of practice – mechanical, meaningful, and communicative.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
                                <a
                                    href="https://www.professorjackrichards.com/wp-content/uploads/Richards-Communicative-Language.pdf"
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

export default CLT;