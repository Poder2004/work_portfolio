import React from 'react';

const CampCard = ({ category, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 group">
      {/* Image Container */}
      <div className="aspect-video rounded-2xl overflow-hidden mb-5 relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="px-2 pb-2">
        <span className="text-[10px] font-black text-purple-600 dark:text-purple-400 mb-2 block uppercase tracking-[0.2em]">
          {category}
        </span>
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-purple-600 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CampCard;