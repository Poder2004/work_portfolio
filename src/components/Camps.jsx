import React from 'react';
import CampCard from '../components/CampCard';
import { FaArrowDown, FaExternalLinkAlt, FaCalendarCheck } from "react-icons/fa";

const Camps = () => {
  const highlights = [
    {
      category: "STEM WORKSHOP",
      title: "Innovation Leaders Camp",
      description: "Developing critical thinking through engineering challenges and hands-on robotics.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw6XuG2VgZ46-2zw9o4EmuwEoqtjxBemzhPH3Q80Ih6lygxijTD_TZI2MUY4DwZ3GmCqx47dKvdpnjFAe9WNEQzyf7dFYvtdVAE6CV7FoYkhcTSjM182RLqBt-nHtSY9rZfY3qr705fahEytdttBZtiMx4hmVx8mKLZRdUlLHefbn-xqEGRjE9uNhIz9VTZFPEzzC2rM-wYimc-6ikezGVIS8aseNc15APaSf9bnB01mN0HhsOVAld4eEI6E6gGfalh3cZdXmpSrP_"
    },
    {
      category: "LEADERSHIP",
      title: "Student Mentor Program",
      description: "Guided incoming freshmen through the academic transition period with peer support.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnOHR_mAn52beoDLry1SlH97u1jBwpD0JRRXCWRZMC8YwkxSkgrMjyt2gWCYfMjR7GOyyN_9Mhkq8m4Hc1IL8mwzs0J7zjSloWd8ar51Cq2SNHppTbgx8BgXuuTiEsqsdLKYBOCMWtjWK2vqaPqLJsWDa6efkbgwx7WyZm-1rkzcQJNDaSvFVpEz_9iq6pIB6sL-HSq7jm9I2xO2SwHEsvMiPO1z10vOH9KxJJh1hHAf7pdqEH4OTNMTYjnqS_RSvNj_YoueYWiyGt"
    },
    {
      category: "CULTURAL",
      title: "Heritage Discovery Camp",
      description: "Exploring historical significance and community impact through site visits.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlSf6jd8RDvc0aVcI_KsEbnvq9gSbHBIw_AYnPpJWU46db2grzf64aGHLmeZlh7dwY3O3PiIJcfQhl4swn0zUeoeVKl87rSxhGUS_H_RfWsX8NRsnd6bzHX6MAA6m12i_nU2uAX7jeuz6jpdkAYoRYrOL_sv1B6cbeQa1SpTm4vRnh9EqBsC7ojvVfZ4spSjyTm5-Ua-8PL43NMoj8_ucv32nbyoThONkwC3cTWHOL5Vu_uFkavkbndZ6Hjz4o5bpjvzoTXftrH-dr"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfaff] dark:bg-slate-950 font-display transition-colors">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* --- Hero Section --- */}
        <section className="relative mb-20">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-600 to-indigo-700 p-8 md:p-20 text-center text-white shadow-2xl shadow-purple-500/20">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[80px] -ml-32 -mb-32"></div>

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-black uppercase tracking-widest text-white/90">
                Academic Growth
              </span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight">
                Camps
              </h1>
              <p className="text-purple-100 text-lg md:text-xl font-medium leading-relaxed opacity-90">
                Exploring leadership and academic excellence through immersive, hands-on experiences and collaborative learning.
              </p>
              <div className="pt-6">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-2xl font-black text-sm transition-all hover:scale-105 active:scale-95 hover:shadow-xl">
                  Explore Activities <FaArrowDown className="animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Main Feature: Kru Eng Camp --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-2 bg-purple-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Kru Eng Camp</h2>
          </div>

          <div className="group relative flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 transition-all hover:border-purple-200">
            {/* Camp Image */}
            <div className="w-full lg:w-3/5 overflow-hidden h-[300px] lg:h-auto">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWdl7bT_ZPYRjVAURBVskc2UWHunDX7B2MHjaMEc00Pbjeqg-1z99iNvFuinNV-vUWyddGhVWJT8P21XlDRcJhODfHtPg38YuGUseELZe7V5MG8Y_JNt1YDWoUcuk-8kYMwxCVI4r5SldfqWIpxXiZDVa7gqvdVXkOW6XHr5siCkfAwbjbpx2zmFwkyXdU6jIRIwrdNBx4HrB5z_48Z9mPIntjqj8VjCSGXjA2ILxPJD1y0Acl-uTF4NdDQTm3m9PaqRfHynh5HtMu" 
                alt="English Camp" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Camp Content */}
            <div className="flex w-full lg:w-2/5 flex-col p-10 md:p-14 gap-8 justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-purple-600 font-black text-xs uppercase tracking-widest">
                  <FaCalendarCheck className="text-lg" />
                  <span>Summer 2023</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  Educational Transformation
                </h3>
                <div className="space-y-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                  <p>A transformative academic experience focused on English language immersion and pedagogical innovation.</p>
                  <p>Participants engaged in collaborative workshops designed to enhance communication skills.</p>
                </div>
              </div>
              <button className="w-fit flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-purple-600 text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-all">
                View Gallery <FaExternalLinkAlt className="text-xs" />
              </button>
            </div>
          </div>
        </section>

        {/* --- Experience Highlights Grid --- */}
        <section className="pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Other Highlights</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Diverse leadership and skill-building experiences</p>
            </div>
            <button className="text-purple-600 font-black text-sm hover:underline underline-offset-8">View All Experiences</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {highlights.map((item, index) => (
              <CampCard key={index} {...item} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Camps;