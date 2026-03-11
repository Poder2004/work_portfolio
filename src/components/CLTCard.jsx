import React, { useState } from 'react';
import { FaFilePdf, FaPhotoVideo, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { RiSlideshow2Line } from "react-icons/ri";

const CLTCard = ({ grade, unit, title, imageUrl, imageAlt, pdfUrl, slideUrl, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actionButtons = [
    { 
      icon: <FaFilePdf />, 
      label: 'PDF Document', 
      url: pdfUrl, 
      desc: 'Download or view the lesson plan in PDF format.',
      color: 'bg-red-50 text-red-600 border-red-100 hover:bg-red-600 hover:text-white' 
    },
    { 
      icon: <RiSlideshow2Line />, 
      label: 'Presentation Slides', 
      url: slideUrl, 
      desc: 'Access interactive slides for teaching in the classroom.',
      color: 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white' 
    },
    { 
      icon: <FaPhotoVideo />, 
      label: 'Video Resource', 
      url: videoUrl, 
      desc: 'Watch the supplementary video for this lesson unit.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-600 hover:text-white' 
    }
  ];

  return (
    <>
      {/* --- Main Card --- */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
        <div className="h-64 md:h-72 overflow-hidden relative">
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute top-6 left-6 bg-emerald-600 text-white px-5 py-2 rounded-2xl text-sm font-black shadow-xl uppercase tracking-widest">
            {grade}
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <p className="text-sm font-black text-emerald-600 uppercase tracking-[0.25em] mb-3">{unit}</p>
            <h3 className="text-3xl md:text-2xl font-black text-slate-900 dark:text-white leading-[1.2]">{title}</h3>
          </div>

          <div className="pt-8 border-t-2 border-slate-50 dark:border-slate-800 flex justify-end">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-emerald-600 font-black text-xl md:text-lg hover:gap-4 transition-all flex items-center gap-2 group/btn"
            >
              View Details 
              <FaAngleRight className="transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Detailed Modal --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Overlay ค่อยๆ ดำ */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="p-8 md:p-12 pb-6 flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">{unit} • {grade}</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                  {title}
                </h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all shadow-sm"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Resources List (แถวละอย่างตามที่ขอ) */}
            <div className="px-8 md:px-12 pb-12 space-y-4">
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-6">Learning Resources</p>
              
              {actionButtons.map((btn, i) => (
                <a 
                  key={i}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all group/row ${btn.color}`}
                >
                  <div className="text-3xl shrink-0 transition-transform group-hover/row:scale-110">
                    {btn.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-lg">{btn.label}</h4>
                    <p className="text-sm opacity-80 font-medium">{btn.desc}</p>
                  </div>
                  <FaExternalLinkAlt className="opacity-0 group-hover/row:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            {/* Footer Tip */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 text-center">
               <p className="text-slate-400 text-sm font-medium">Click on any resource to open in a new tab.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CLTCard;