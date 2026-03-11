import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ActivityCard = ({ title, description, imageUrl, link = "#" }) => {
  return (
    <div className="flex flex-col rounded-[2rem] bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group">
      {/* Image Section */}
      <div className="h-56 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-3 group-hover:text-purple-600 transition-colors">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <a 
          href={link} 
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm hover:gap-3 transition-all"
        >
          Learn more <FaArrowRight className="text-xs" />
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;