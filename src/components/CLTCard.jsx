import React from 'react';
import { FaFilePdf, FaPhotoVideo } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { RiSlideshow2Line } from "react-icons/ri";

const CLTCard = ({ grade, unit, title, imageUrl, imageAlt, pdfUrl, slideUrl, videoUrl }) => {
  
  const actionButtons = [
    { icon: <FaFilePdf />, label: 'PDF', url: pdfUrl, color: 'hover:text-red-500 hover:border-red-200' },
    { icon: <RiSlideshow2Line />, label: 'Slides', url: slideUrl, color: 'hover:text-blue-500 hover:border-blue-200' },
    { icon: <FaPhotoVideo />, label: 'Video', url: videoUrl, color: 'hover:text-emerald-500 hover:border-emerald-200' }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
      
      {/* Image Header - ปรับความสูงให้สมดุลกับตัวหนังสือที่ใหญ่ขึ้น */}
      <div className="h-64 md:h-72 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        {/* Badge เกรด - ใหญ่ขึ้น */}
        <div className="absolute top-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-2xl text-sm md:text-base font-black shadow-xl uppercase tracking-widest">
          {grade}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10">
        <div className="mb-8">
          {/* Unit Tag - ใหญ่ขึ้นและอ่านง่ายขึ้น */}
          <p className="text-sm md:text-base font-black text-emerald-600 uppercase tracking-[0.25em] mb-3">
            {unit}
          </p>
          
          {/* Title - ขยายใหญ่ระดับ 3xl ในมือถือ */}
          <h3 className="text-3xl md:text-2xl font-black text-slate-900 dark:text-white leading-[1.2] group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
        </div>

        {/* Footer Actions - ปรับให้ Responsive และปุ่มใหญ่ขึ้น */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 border-t-2 border-slate-50 dark:border-slate-800 gap-6">
          
          {/* Action Icons - ขยายขนาด size-14 เพื่อให้กดง่าย (Finger-friendly) */}
          <div className="flex gap-4">
            {actionButtons.map((btn, i) => (
              <a 
                key={i}
                href={btn.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`size-14 md:size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 ${btn.color} hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center justify-center shadow-md border-2 border-transparent hover:shadow-lg active:scale-95`}
                title={btn.label}
              >
                <span className="text-2xl md:text-xl">{btn.icon}</span>
              </a>
            ))}
          </div>
          
          {/* View Details Button - ขยายตัวหนังสือและ Gap */}
          <button className="text-emerald-600 font-black text-xl md:text-lg hover:gap-3 transition-all flex items-center gap-2 group/btn">
            View Details 
            <FaAngleRight className="text-base transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CLTCard;