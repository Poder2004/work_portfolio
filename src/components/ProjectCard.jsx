import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ title, description, imageUrl, icon: IconComponent }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 rounded-2xl p-6 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
      {/* Image Container */}
      <div className="w-full aspect-square bg-purple-50 dark:bg-purple-900/10 rounded-xl mb-6 overflow-hidden relative">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={imageUrl} 
          alt={title} 
        />
        {/* Floating Icon */}
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-2.5 rounded-lg shadow-sm border border-purple-50 dark:border-slate-700">
          <IconComponent className="text-purple-600 text-xl" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Button */}
      <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-bold transition-all group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-500/30">
        <span>More Info</span>
        <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default ProjectCard;