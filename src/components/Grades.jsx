import React from 'react';
import CourseTable from './CourseTable';
import YearlyBreakdown from './YearlyBreakdown';

const Grades = () => {
  return (
    // ใช้ฟอนต์หลักที่ตั้งค่าไว้ใน tailwind.config (มักเป็น Inter หรือ Kanit)
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0f172a] p-4 md:p-10 font-display">
      <main className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section - ปรับให้ดู Minimal ขึ้น */}
        <header className="space-y-1">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white tracking-tight">
            Academic Performance
          </h2>
          <p className="text-2xl text-slate-500 dark:text-slate-400 font-medium">
            Detailed overview of your university grade journey.
          </p>
        </header>

        {/* GPA Card - ปรับความโค้งและฟอนต์ให้ดูทันสมัย */}
        <section className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center gap-12 transition-all hover:shadow-md">
          <div className="relative size-36 flex items-center justify-center shrink-0">
            <svg className="size-full transform -rotate-90" viewBox="0 0 100 100">
              <circle className="text-slate-100 dark:text-slate-700" cx="50" cy="50" fill="transparent" r="44" stroke="currentColor" strokeWidth="6"></circle>
              <circle className="text-purple-600" cx="50" cy="50" fill="transparent" r="44" stroke="currentColor" strokeWidth="7" strokeDasharray="190" strokeDashoffset="30" strokeLinecap="round"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-slate-800 dark:text-white tracking-tighter">3.68</span>
              <span className="text-lg uppercase font-bold text-purple-400 tracking-widest">GPA</span>
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">Cumulative GPA Score</h3>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Based on 124 completed credit hours. 
            </p>
            <div className="flex justify-center md:justify-start gap-5 pt-2">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-purple-600"></span>
                <span className="text-lg font-semibold text-slate-600 dark:text-slate-300">Current (3.52)</span>
              </div>
              
            </div>
          </div>
        </section>

        <YearlyBreakdown />
        <CourseTable />

      </main>
    </div>
  );
};

export default Grades;