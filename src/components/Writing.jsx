import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
const Writing =({ onBack }) => {
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
                           <div className="max-w-7xl mx-auto px-6">
                               <button
                                   onClick={onBack}
                                   className="py-4 text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group"
                               >
                                   {/* ใช้ Component FaArrowLeft แทน span เดิม */}
                                   <FaArrowLeft className="text-sm transition-transform group-hover:-translate-x-1" />
                                   Back to Gallery
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
                                Communicative Language <br className="hidden md:block" />
                                <span className="text-purple-600">Teaching (CLT)</span>
                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-8">
                                Communicative Language Teaching (CLT) has become common in classrooms around the world at all levels of ability and with students of all ages. The starting point for the CLT approach is to consider what people actually do with language outside the classroom. Every day, people use language to provide and to ask for information, to make requests, to give and to ask for permission, and for a long list of other functions. In other words, they use language to communicate. The aim of Communicative Language Teaching is to give students the skills they need in order to be able to communicate effectively in English.
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed mb-8">
                                Mechanical, Meaningful, and Communicative Practice Another useful distinction that some advocates of CLT proposed was the distinction between three different kinds of practice – mechanical, meaningful, and communicative.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {/* ใช้แท็ก a ครอบ และใส่ target="_blank" เพื่อให้เปิดแท็บใหม่ */}
                                <a
                                    href="https://www.professorjackrichards.com/wp-content/uploads/Richards-Communicative-Language.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-700 rounded-xl border border-emerald-400/20 transition-all cursor-pointer group shadow-sm shadow-emerald-500/10"
                                >
                                    <span className="text-sm font-bold text-white tracking-wide">Source</span>
                                    <SlArrowRight className="text-white text-lg font-bold transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Content Grid --- */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-600 rounded-2xl text-white shadow-lg shadow-purple-500/30">
                                <MdLibraryBooks className="text-white text-lg font-bold transition-transform group-hover:translate-x-1" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Grade Specific Resources</h2>
                        </div>

                        <div className="flex items-center gap-2 p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                            <button className="px-5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-bold">All Levels</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cltResources.map((res, index) => (
                            <CLTCard
                                key={index}
                                grade={res.grade}
                                unit={res.unit}
                                title={res.title}
                                imageUrl={res.imageUrl}
                                imageAlt={res.imageAlt}
                                pdfUrl={res.pdfUrl}       // ส่ง PDF link
                                slideUrl={res.slideUrl}   // ส่ง Slide link
                                videoUrl={res.videoUrl}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Writing;