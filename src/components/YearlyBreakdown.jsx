import React from 'react';

const YearCard = ({ year, label, gpa, sem1, sem2, totalCredits }) => (
  <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 shadow-xl shadow-purple-500/5 border border-purple-50 dark:border-slate-700 flex flex-col gap-6 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 group">
    <div className="flex justify-between items-start">
      <div className="flex flex-col">
        <span className="text-lg font-black text-slate-400 uppercase tracking-[0.2em]">{year}</span>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{label}</h4>
      </div>
      <div className={`font-black px-4 py-1.5 rounded-xl text-lg shadow-sm ${
        parseFloat(gpa) >= 3.8 ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
      }`}>
        {gpa}
      </div>
    </div>

    <div className="flex flex-col gap-5">
      {/* Semester 1 */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-lg font-bold">
          <span className="text-slate-500 uppercase tracking-wider">1st - Semester</span>
          <span className="text-slate-900 dark:text-white">{sem1.grade}</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-600/40 rounded-full transition-all duration-1000" 
            style={{ width: `${(parseFloat(sem1.grade) / 4) * 70}%` }}
          ></div>
        </div>
      </div>

      {/* Semester 2 */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-lg font-bold">
          <span className="text-slate-500 uppercase tracking-wider">2nd- Semester</span>
          <span className="text-slate-900 dark:text-white">{sem2.grade}</span>
        </div>
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-600 rounded-full transition-all duration-1000" 
            style={{ width: `${(parseFloat(sem2.grade) / 4) * 80}%` }}
          ></div>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-50 dark:border-slate-700">
      <p className="text-lg text-slate-400 font-bold uppercase tracking-widest italic">
        Total: {totalCredits} Credits Earned
      </p>
    </div>
  </div>
);

const YearlyBreakdown = () => {
  const academicYears = [
    { year: "Year 01", label: "Freshman Year", gpa: "3.43", sem1: { grade: "3.31" }, sem2: { grade: "3.37" }, totalCredits: 43 },
    { year: "Year 02", label: "Sophomore Year", gpa: "3.59", sem1: { grade: "3.44" }, sem2: { grade: "3.48" }, totalCredits: 84 },
    { year: "Year 03", label: "Junior Year", gpa: "3.68", sem1: { grade: "3.52" }, sem2: { grade: "รอ" }, totalCredits: 122 },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Yearly Breakdown</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {academicYears.map((data, index) => (
          <YearCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default YearlyBreakdown;