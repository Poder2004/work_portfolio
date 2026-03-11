import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
const MethodCard = ({ title, description, imageUrl, imageAlt, onSeeMore }) => {
  return (
    <div className="bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-emerald-100 dark:border-slate-800 group hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 shadow-sm">
      <div className="aspect-video overflow-hidden relative">
        <div 
          className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={imageAlt}
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2 text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xl mb-5 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* แก้ปุ่มให้เรียกใช้ onSeeMore */}
        <button 
          onClick={onSeeMore}
          className=" w-full py-3 rounded-xl border-2 border-emerald-100 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 text-lg font-bold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200 flex items-center justify-center gap-2"
        >
          See More
           <IoIosArrowForward className="text-sm transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default MethodCard;