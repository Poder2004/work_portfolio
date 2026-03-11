import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', label: 'Home' },
        { name: 'Profile', label: 'Profile' },
        { name: 'Courses', label: 'Courses' },
        { name: 'Teaching', label: 'Teaching EFL/ESL' },
        { name: 'Project', label: 'Project' },
        { name: 'Activities', label: 'Activities' },
        { name: 'Camps', label: 'Camps' },
    ];

    const handleNavClick = (name) => {
        setCurrentPage(name);
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md py-4 border-b border-purple-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
                
                {/* Logo */}
                <button 
                    onClick={() => handleNavClick('Home')}
                    className="text-2xl font-black tracking-tighter text-[#7311d4] hover:opacity-80 transition-opacity"
                >
                    JIDAPA'S PORTFOLIO
                </button>

                {/* --- Desktop Navigation --- */}
                <nav className="hidden md:flex items-center bg-white/50 backdrop-blur-sm border border-purple-100 rounded-full px-2 py-1.5 shadow-sm">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setCurrentPage(item.name)}
                            className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all rounded-full ${
                                currentPage === item.name 
                                ? 'bg-slate-900 text-white shadow-md' 
                                : 'text-slate-500 hover:text-[#7311d4]'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* --- Mobile Hamburger Button --- */}
                <button 
                    className="md:hidden text-[#7311d4] p-2 hover:bg-purple-100/50 rounded-xl transition-colors"
                    onClick={() => setIsOpen(true)}
                >
                    <HiMenuAlt3 size={30} />
                </button>

                {/* --- Mobile Sidebar (Glassmorphism Version) --- */}
                {/* Overlay พื้นหลัง (กดเพื่อปิด) */}
                <div 
                    className={`fixed inset-0 bg-purple-900/10 backdrop-blur-[2px] z-[60] transition-opacity duration-500 md:hidden ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Panel - ตัวเครื่องใสๆ เบลอๆ */}
                <div className={`
                    fixed top-0 right-0 h-full w-[280px] z-[70]  duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden
                    bg-white/70 backdrop-blur-xl border-l border-white shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)]
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <div className="flex flex-col h-full text-slate-800">
                        {/* Header */}
                       <div className="p-8 flex items-center justify-between border-b border-slate-800">
                            <span className="font-black text-[#7311d4] tracking-widest text-sm opacity-60">MENU</span>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/50 rounded-full transition-colors"
                            >
                                <HiX size={28} className="text-slate-500" />
                            </button>
                        </div>

                        {/* List items - ใสและยาวลงมา */}
                        {/* เมนูกางยาวลงมาทั้งหมด */}
                        <div className="flex flex-col py-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.name)}
                                    className={`w-full flex items-center px-8 py-5 text-[13px] font-bold uppercase tracking-[0.2em] transition-all relative border-r-4 ${
                                        currentPage === item.name 
                                        ? 'text-white bg-slate-800 border-purple-500' 
                                        : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800/50'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Footer Status */}
                        <div className="mt-auto p-8 border-t border-white/20">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Current View</p>
                            <div className="flex items-center gap-2">
                                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm font-black text-slate-700 uppercase">{currentPage}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;