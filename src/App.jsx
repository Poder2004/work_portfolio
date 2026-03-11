import React, { useState } from 'react'; // นำเข้า useState
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Grades from './components/Grades';
import Teaching from './components/Teaching';
import Projects from './components/Projects';
import Camps from './components/Camps';
import Activities from './components/Activities';
import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';

function App() {
  // 1. สร้าง State สำหรับเก็บชื่อหน้าที่เลือก (Default คือ 'Home')
  const [currentPage, setCurrentPage] = useState('Home');

  // 2. ฟังก์ชันสำหรับเลือก Render หน้าตามชื่อที่อยู่ใน State
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />; // ต้องส่ง prop นี้ไปด้วย
      case 'Profile':
        return <Profile />;
      case 'Profile': return <Profile />;
      case 'Courses': return <Grades />;
      case 'Teaching': return <Teaching />;
      case 'Project': return <Projects />;
      case 'Activities': return <Activities />;
      case 'Camps': return <Camps />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 font-sans antialiased text-slate-800 flex flex-col">
      {/* 3. ส่ง State และฟังก์ชันไปให้ Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 4. แสดงผลหน้าที่ถูกเลือก */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer (เหมือนเดิม) */}
      <footer className="py-12 bg-white/50 border-t border-purple-100 text-center">
        {/* ... โค้ด Footer เดิมของคุณ ... */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-[#00b900] transition-all"><MessageCircle size={24} /></a>
            <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-[#1877f2] transition-all"><Facebook size={24} /></a>
            <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-[#e4405f] transition-all"><Instagram size={24} /></a>
            <a href="tel:0xxxxxxxx" className="p-3 bg-black text-white rounded-full hover:bg-slate-700 transition-all"><Phone size={24} /></a>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-bold text-slate-900 tracking-tight">
              Contact: <span className="text-[#7311d4]">66010513039@msu.ac.th</span>
            </p>
            <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
              © 2026 by Jidapa Thanandorn
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;