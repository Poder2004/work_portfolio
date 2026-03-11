import React from 'react';
import CLTCard from '../components/CLTCard';
import { SlArrowRight } from "react-icons/sl";
import { MdLibraryBooks, MdRecordVoiceOver } from "react-icons/md";
import { FaArrowLeft, FaLightbulb } from "react-icons/fa6";

const Speaking = ({ onBack }) => {
    const cltResources = [
        {
            grade: "Grade 7",
            unit: "Unit: My family",
            title: "Family",
            imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
            imageAlt: "Teenagers discussing topics",
            pdfUrl: "https://drive.google.com/file/d/1t-tB1ymudQoz85o9gWrEN9dWCxeAOz3l/view?usp=sharing",
            slideUrl: "https://docs.google.com/presentation/d/1raoNv1CFLJkiin_19ZV0JjTzxPrtaOVt/edit?usp=sharing",
            videoUrl: "https://example.com/food-drinks-video"
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfaff] dark:bg-slate-950 font-display">
            {/* 1. Navigation - ปรับขนาดให้ใหญ่และชัดเจน */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6">
                    <button
                        onClick={onBack}
                        className="py-6 text-emerald-600 font-black flex items-center gap-4 hover:gap-6 transition-all group text-2xl"
                    >
                        <FaArrowLeft className="transition-transform group-hover:-translate-x-2" />
                        <span className="tracking-tight">Back to Gallery</span>
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

                {/* --- Hero Section: ขยายให้ใหญ่ขึ้นเพื่อเปิดตัวเนื้อหา --- */}
                <section className="mb-20">
                    <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-purple-500/5 relative overflow-hidden">
                        {/* Glow Decoration */}
                        <div className="absolute top-0 right-0 size-96 bg-purple-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

                        <div className="relative z-10">
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[1.1]">
                                Teaching <span className="text-purple-600">Speaking</span> Skills
                            </h1>

                            <p className="text-slate-500 dark:text-slate-400 text-2xl md:text-3xl leading-relaxed mb-10 max-w-5xl font-medium">
                                Speaking is often the most desired yet most difficult skill to teach in the language classroom. 
                                It’s more than just saying words—it’s how we express ideas, build relationships, and survive in real-life situations.
                            </p>
                            
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-300 text-lg font-bold">
                                <MdRecordVoiceOver className="text-purple-600 text-2xl" />
                                Vocabulary • Grammar • Pronunciation • Rhythm • Turn-taking
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Knowledge Section: ปรับปรุงการวาง Card และ Spacing --- */}
                <div className="space-y-20 mb-24">
                    
                    {/* --- SECTION 1: What language should I teach? --- */}
                    <section>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="size-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <span className="font-bold text-xl">01</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                                What language <span className="text-emerald-600">should I teach?</span>
                            </h2>
                        </div>
                        
                        <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-10 max-w-4xl">
                            Spoken language is both interactional and transactional, but what should teachers focus on in class? Brown and Yule (1983) suggest the following:
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Transactional Focus */}
                            <div className="group p-10 rounded-[2.5rem] bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 hover:shadow-xl transition-all">
                                <h3 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mb-4 uppercase tracking-wider">Transactional Focus</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-medium">
                                    When teaching spoken language, focus on teaching longer transactional turns. This is because native speakers have difficulty with them and because learners need to be able to communicate information efficiently.
                                </p>
                            </div>

                            {/* Interactional Awareness */}
                            <div className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all shadow-sm">
                                <h3 className="text-2xl font-black text-purple-600 mb-4 uppercase tracking-wider">Interactional Awareness</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
                                    Teach interactional language by using an awareness-raising approach. For example, listening to a recorded L1 conversation before a similar L2 recording.
                                    Check <span className="font-bold italic text-slate-800 dark:text-white">'Exploring Spoken English'</span> by McCarthy and Carter (1997) for recordings and analysis.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* --- SECTION 2: How do I get learners to use new language? --- */}
                    <section className="pt-20 border-t-2 border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="size-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <span className="font-bold text-xl">02</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                How do I get learners to use <span className="text-emerald-600 font-black">New Language?</span>
                            </h2>
                        </div>

                        <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed mb-12 max-w-4xl font-medium">
                            Research by Peter Skehan on Task-based learning shows that giving learners preparation time significantly increases the range of language used in the performance of the task, whereas the accuracy of the language is not as influenced. If this is so, then it seems sensible to give learners preparation time when encouraging them to use new language.
                        </p>

                        {/* Guided Preparation Guide */}
                        <div className="mb-12 bg-emerald-600 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl shadow-emerald-500/20 relative overflow-hidden">
                            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                                <div className="md:w-1/2">
                                    <h4 className="text-3xl font-black mb-6 flex items-center gap-3">
                                        <FaLightbulb className="text-emerald-300" />
                                        Guided Preparation
                                    </h4>
                                    <p className="text-emerald-50 text-xl leading-relaxed">
                                        Imagine you have been working on the language that would be useful for the following task: Having a conversation with a stranger on public transport. You have now reached the stage where you want learners to perform the task. Rather than just give them 10 minutes to prepare and rehearse the task, give them guided preparation time. A simple preparation guide for the task could be a few key questions like:
                                    </p>
                                </div>
                                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                    {['How will you start the conversation?', 'What topics are you going to talk about?', 'How are you going to move from one topic to another?' , 'How are you going to end the conversation?'].map((q, i) => (
                                        <div key={i} className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-xl font-bold">
                                            {q}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Performance & Gamification Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 p-10 bg-slate-900 text-white rounded-[2.5rem] flex flex-col justify-center">
                                <h4 className="text-emerald-400 font-black text-2xl mb-4 uppercase tracking-widest">The Performance</h4>
                                <p className="text-xl text-slate-300 leading-relaxed">
                                   After the preparation stage, learners can give a 'live performance'. This can be in front of the class, or group-to-group in a large class. This increases motivation and adds an element of real-life stress. 
                                </p>
                            </div>

                            <div className="lg:col-span-2 p-10 rounded-[2.5rem] border-2 border-dashed border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-900/50">
                                <h4 className="text-emerald-600 font-black text-2xl mb-4 uppercase tracking-widest">Gamification & Strategy</h4>
                                <div className="space-y-6">
                                    <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
                                        Another way of encouraging learners to use new language in a communication activity is to make a game out of it. Give them a situation and several key phrases to include. They get points for using the language.
                                    </p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xl italic bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border-l-4 border-emerald-500">
                                        Similarly, when working on the language of discussion, you can produce a set of cards with the key phrases/exponents on. The cards are laid out in front of each group of 2–4 learners. If a learner uses the language on a particular card appropriately during the discussion, they keep the card. The one with the most cards wins. If they use the language inappropriately, then they can be challenged and have to leave the card on the table.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/teaching-speaking-skills-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-black text-xl transition-all shadow-xl shadow-emerald-500/30 hover:-translate-y-1 active:scale-95 group"
                            >
                                Learn More Source
                                <SlArrowRight className="transition-transform group-hover:translate-x-2" />
                            </a>
                        </div>
                    </section>
                </div>

                {/* --- Content Grid: Grade Specific Resources --- */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 border-b-2 border-slate-100 dark:border-slate-800 pb-8">
                        <div className="flex items-center gap-6">
                            <div className="size-20 bg-purple-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-purple-500/40">
                                <MdLibraryBooks className="text-4xl" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">Grade Specific Resources</h2>
                                <p className="text-slate-500 font-medium text-xl mt-2">Curated materials for your Speaking lessons</p>
                            </div>
                        </div>

                        <div className="p-2 bg-white dark:bg-slate-900 rounded-[1.5rem] border-2 border-slate-100 dark:border-slate-800 flex">
                            <button className="px-10 py-4 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white text-xl font-black shadow-lg">All Levels</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {cltResources.map((res, index) => (
                            <CLTCard key={index} {...res} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Speaking;