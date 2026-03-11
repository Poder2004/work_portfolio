import React from 'react';
// อย่าลืมติดตั้ง lucide-react ด้วยคำสั่ง npm install lucide-react
import {
    User, School, Languages, Heart, Terminal,
    MapPin, Mail, Award, CheckCircle2, MessageSquare,
    Users, Brain, RefreshCw, FileText, Table, Palette, Video
} from 'lucide-react';
import profilePic from '../assets/IMG_5149.JPG';
import AdaptabilityPic from '../assets/IMG_7348.JPG';
import LeadershipPic from '../assets/IMG_2787.JPG';
import CollaborationPic from '../assets/IMG_1877.JPG';
import DecisionmakingPic from '../assets/758B5493.jpeg';
import SchoolLogo from '../assets/โลโก้อนุบาลอุดร.png';
import UniLogo from '../assets/โลโก้อุดรพิท.jfif';

const Profile = () => {
    return (
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-10 py-8 space-y-8">

            {/* --- Hero / Header Section --- */}
            <section className="bg-white dark:bg-slate-900/50 rounded-2xl shadow-xl border border-purple-100 p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                        <div className="w-40 h-40 rounded-full border-4 border-purple-100 p-1 overflow-hidden">
                            <img
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                                src={profilePic}
                            />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-purple-600 text-white p-1.5 rounded-full border-2 border-white">
                            <CheckCircle2 size={16} />
                        </div>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Miss Jidapa Thanandorn</h1>
                        
                        

                        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                            <div className="flex items-center gap-2 text-lg text-slate-500 bg-purple-50 px-3 py-1.5 rounded-full">
                                <MapPin size={16} className="text-purple-600" />
                                <span>419/58 Makkhang, Mueng Udonthani, Udon Thani 41000</span>
                            </div>
                            <div className="flex items-center gap-2 text-lg text-slate-500 bg-purple-50 px-3 py-1.5 rounded-full">
                                <Mail size={16} className="text-purple-600" />
                                <span>66010513039@msu.ac.th</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* --- Left Column --- */}
                <div className="lg:col-span-1 space-y-8">

                    {/* Personal Details */}
                    <section className="bg-white rounded-2xl shadow-lg border border-purple-50 p-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-700">
                            <User size={20} /> Personal Details
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: "Nickname", value: "Baitong" },
                                { label: "Date of Birth", value: "Jan 23, 2004" },
                                { label: "Age", value: "22 years old" },
                                { label: "Nationality", value: "Thai" }
                            ].map((item) => (
                                <div key={item.label} className="flex justify-between items-center py-2 border-b border-purple-50">
                                    <span className="text-slate-500 text-lg">{item.label}</span>
                                    <span className="font-semibold text-slate-800 text-xl">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Languages */}
                    <section className="bg-white rounded-2xl shadow-lg border border-purple-50 p-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-700">
                            <Languages size={20} /> Languages
                        </h3>
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">Thai</span>
                                    <span className="text-lg text-purple-600 font-bold">Native</span>
                                </div>
                                <div className="w-full bg-purple-100 rounded-full h-1.5">
                                    <div className="bg-purple-600 h-1.5 rounded-full w-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">Laos </span>
                                    <span className="text-lg text-purple-600 font-bold">Native</span>
                                </div>
                                <div className="w-full bg-purple-100 rounded-full h-1.5">
                                    <div className="bg-purple-600 h-1.5 rounded-full w-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">English</span>
                                    <span className="text-lg text-purple-600 font-bold">Intermediate</span>
                                </div>
                                <div className="w-full bg-purple-100 rounded-full h-1.5">
                                    <div className="bg-purple-600 h-1.5 rounded-full w-[60%]"></div>
                                </div>

                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-xl font-medium">Vietnamese</span>
                                    <span className="text-lg text-purple-600 font-bold">Beginner</span>
                                </div>
                                <div className="w-full bg-purple-100 rounded-full h-1.5">
                                    <div className="bg-purple-600 h-1.5 rounded-full w-[25%]"></div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>

                {/* --- Right Column --- */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Soft Skills */}
                    <section className="bg-white rounded-2xl shadow-lg border border-purple-50 p-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-700">
                            <Award size={20} /> Soft Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SkillItem imgSrc={LeadershipPic} title="Leadership" />
                            <SkillItem imgSrc={CollaborationPic} title="Collaboration" />
                            <SkillItem imgSrc={DecisionmakingPic} title="Decision making" />
                            <SkillItem imgSrc={AdaptabilityPic} title="Adaptability" />
                        </div>
                    </section>

                    {/* Educational Background */}
                    <section className="bg-white rounded-2xl shadow-lg border border-purple-50 p-6">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-purple-700">
                            <School size={20} /> Educational Background
                        </h3>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 before:h-full before:w-0.5 before:bg-purple-100">
                            <TimelineItem
                                year="2013-2015"
                                imgSrc={SchoolLogo}
                                title="Elementary Diploma"

                                loc="Anuban Udonthani School, Udon Thani"
                            />
                            <TimelineItem
                                year="2016-2018"
                                imgSrc={UniLogo}
                                title="Middle School Diploma"

                                loc="Udon Pittayanukoon School, Udon Thani"
                            />
                            <TimelineItem
                                year="2019-2021"
                                imgSrc={UniLogo}
                                title="High School Diploma"
                                sub="Science–Math Program"
                                loc="Udon Pittayanukoon School, Udon Thani"
                                active
                            />
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="bg-white rounded-2xl shadow-lg border border-purple-50 p-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-700">
                            <Terminal size={20} /> Technical Proficiency
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <TechCard
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Microsoft_Office_Word_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_Word_%282025%E2%80%93present%29.svg.png?_=20251029163307"
                                label="Microsoft Word"
                            />
                            <TechCard
                                image="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
                                label="Google Sheets"
                            />
                            <TechCard
                                image="https://logo-teka.com/wp-content/uploads/2025/09/canva-icon-logo.svg"
                                label="Canva"
                            />
                            <TechCard
                                image="https://brandlogos.net/wp-content/uploads/2022/10/inshot-logo_brandlogos.net_wjq85-512x512.png"
                                label="Inshot"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

// Helper Components เพื่อให้โค้ดสะอาด
const SkillItem = ({ imgSrc, title }) => (
    <div className="flex flex-col items-center gap-4 p-6 bg-purple-50/50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-purple-100 group">
        {/* w-full จะทำให้รูปใหญ่ตามขนาดช่อง Grid และปรับ aspect-video เป็นรูปทรงสี่เหลี่ยมผืนผ้าที่ใหญ่ขึ้น */}
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
        <h4 className="font-black text-lg text-slate-800 text-center uppercase tracking-[0.2em] mt-2">
            {title}
        </h4>
    </div>
);

const TimelineItem = ({ year, title, sub, loc, active, imgSrc }) => (
    <div className="relative pl-24 pb-12 last:pb-0">
        {/* เส้นเชื่อม Timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-purple-100/60 -z-10 group-last:hidden"></div>

        {/* ส่วนแสดงรูปภาพโลโก้ */}
        <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl border-2 flex items-center justify-center z-10 overflow-hidden shadow-md bg-white
            ${active ? 'border-purple-600 ring-4 ring-purple-50' : 'border-purple-100'}`}>
            {imgSrc ? (
                <img src={imgSrc} alt={loc} className="w-full h-full object-contain p-1.5" />
            ) : (
                <School size={28} className="text-purple-300" />
            )}
        </div>
        <div className="pt-1">
            <span className={`inline-block px-3 py-0.5 rounded-full text-lg font-bold uppercase tracking-wider mb-2
                ${active ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'}`}>
                {year}
            </span>
            <h4 className="text-slate-900 font-bold text-xl leading-tight">{title}</h4>
            <p className="text-purple-600 text-lg font-semibold mt-1">{sub}</p>
            <p className="text-slate-500 text-lg mt-1 flex items-center gap-1">
                <MapPin size={14} /> {loc}
            </p>
        </div>
    </div>
);

const TechCard = ({ image, label }) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group hover:-translate-y-1">
            {/* Container สำหรับ Logo */}
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={label}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Label */}
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 text-center tracking-tight">
                {label}
            </span>
        </div>
    );
};

export default Profile;