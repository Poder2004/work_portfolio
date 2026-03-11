import React from 'react';
import ProjectCard from '../components/ProjectCard';
// 1. ตรวจสอบการ Import: เราใช้ Fa6 เป็นหลักตามที่คุณเขียนไว้ตอนแรก
import { FaLaptopCode, FaUsersGear, FaMicroscope } from "react-icons/fa6"; 

const Projects = () => {
  const projectData = [
    {
      title: "CALL Project",
      description: "Computer Assisted Language Learning initiatives focusing on integrating AI-driven feedback loops for ESL students.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4l00r_NYHFNZlSLdf9uq8grrjrQ1ELBut_QDRT6yDCd5Da5-X3Vo9JlICfEei-OlrmYZYASlTGilRQgNB5oqpV7392OnPhurNy9aIM36SCMEvQ8RPrxZdeklcqg3yVY8_Nr4K3bhEB-VirDgyfwB6Jl2MBi-C3Bf5-bjeqrsbNxpURcXBOVBCEZI0x6E3uT2E6jjmskOAMMMIi7LksATXPXUmDQDb50TQTT_Y5jgovChT7aQSNzojZhtnpmRQmZYlxW5uoq0UjcUE",
      // 2. แก้ไขตรงนี้: เปลี่ยนจาก LuLaptop2 เป็น FaLaptopCode ตามที่ Import มาด้านบน
      icon: FaLaptopCode 
    },
    {
      title: "Action Research",
      description: "Improving classroom dynamics through iterative cycles of planning, action, and critical reflection in higher education.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByWQwMjIGtmVyo5ijHzybUxCO9_NnSNR-fgaEWG9_291LR1o9VaqBEq1HaFl8SNo0hEBs3cChdnKCHNZgfGPtFqkQsEikXsTV3GXmJQ6otA-UoFksfKV7uX8QsSCV5AZdeExcLQaRfu5GFqW5jMU1w7dg9_dgAAxoJBQQlKUeEv9WKTNwLpwKIz04nOXp3fcZBqFEgSnUscmHwv4avFrh-iHzFQopzxsHjP1YxEUD9Jm4jjaWX8f5_6E_1XjLcxtRRS8uniC0XxKI_",
      // 3. แก้ไขตรงนี้: เปลี่ยนจาก LuUsers2 เป็น FaUsersGear
      icon: FaUsersGear 
    },
    {
      title: "Experimental Research",
      description: "Quantitative analysis of learning outcomes comparing traditional methods with immersive virtual reality environments.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuChV2O6IFaH3tcrel_g9NUX174IpX26JOAEN5mqHZJXs3GP7zSHKR1WM4AJXrA36R5sawcLM5hSm4kwnF2EcNtrrnQfRbCcZd0U15XgDVtk28CioHQT0ysiezLvId8PX6C1LympLEqQE-Rldw1h855KVuZU2eM-XTP-SXJmBkZD9xnDBW4PiwsmcNo_xOpbfn9LK5U8gTs9z7bFPcumoQK_0VpVCC93_Mh5ctS3dIBWulaARIDagz3knoUJl9A6BqfOS0AmHUdrFvhO",
      // 4. แก้ไขตรงนี้: เปลี่ยนให้ตรงกับชื่อที่ Import มา
      icon: FaMicroscope 
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcff] dark:bg-slate-950 font-display transition-colors duration-300">
      <main>
        {/* --- Hero Section --- */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            {/* Hero Image Overlay */}
            <div className="relative w-full aspect-video lg:w-1/2 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-purple-500/10 border border-purple-100 dark:border-slate-800">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMUC-Ed7x-NRFSMoizDzutgwuDGZursGk9ToXfVkL7hmtprqMiEMs83-OOUa2OSGWsmaCvkDzdvrQZqLM3ZJT4YlcmOuMLACdOMhgbF7d-m-ELR7oVpptVUohyybJzAfl_HYcaWU1I7Pu7zbOt3gttapQ2KhX3pBdfXJl1HlE4RzJx8vuuPxDyLh8B7lzUt8_ZjYJ7V8lVPdOTWGcMkz9RiYGfDLtRFs65BSYV2ZoBYLwbxNiYwWeqKHffcds6Ndr8EHR4h30kLEFt" 
                alt="Research Workspace" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
            </div>

            {/* Hero Text */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-[10px] rounded-full border border-purple-100 dark:border-purple-800">
                  Scholarly Works
                </span>
                <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                  Projects
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
                  A showcase of my academic research, technical implementations, and pedagogical studies across various disciplines.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="rounded-2xl bg-purple-600 px-8 py-4 text-white font-bold transition-all hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95">
                  Download CV
                </button>
                <button className="rounded-2xl border-2 border-purple-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-4 text-purple-600 dark:text-white font-bold transition-all hover:bg-purple-50 dark:hover:bg-slate-800 active:scale-95">
                  Research Logs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Grid Section --- */}
        <section className="bg-slate-50/50 dark:bg-white/5 py-24 border-y border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">
                Research & Development
              </h2>
              <div className="h-1 flex-1 mx-8 bg-purple-100 dark:bg-slate-800 rounded-full hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {projectData.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  {...project} 
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;