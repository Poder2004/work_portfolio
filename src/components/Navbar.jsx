import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
    // รายชื่อเมนูทั้งหมด
    const navItems = [
        { name: 'Home', label: 'Home' },
        { name: 'Profile', label: 'Profile' },
        { name: 'Courses', label: 'Courses' },
        { name: 'Teaching', label: 'Teaching EFL/ESL' },
        { name: 'Project', label: 'Project' },
        { name: 'Activities', label: 'Activities' },
        { name: 'Camps', label: 'Camps' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md py-4 border-b border-purple-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
                <button 
                    onClick={() => setCurrentPage('Home')}
                    className="text-2xl font-black tracking-tighter text-[#7311d4] hover:opacity-80 transition-opacity"
                >
                    JIDAPA'S PORTFOLIO
                </button>

                {/* Navigation */}
                <nav className="hidden md:flex items-center bg-white border border-purple-100 rounded-full px-2 py-1.5 shadow-sm">
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
            </div>
        </header>
    );
};

export default Navbar;