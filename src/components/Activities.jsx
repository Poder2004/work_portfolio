import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa6";
import ac1Pic from '../assets/กิจกรรม.png';
import s1Pic from '../assets/sout1.JPG';
import s2Pic from '../assets/sout2.JPG';
import s3Pic from '../assets/sout3.png';
import s4Pic from '../assets/3.png';

// 1. ดึงข้อมูลรูปภาพทั้งหมดจาก assets และโฟลเดอร์ย่อย
// เพิ่ม HEIC และ heic เข้าไปในเงื่อนไขการดึงรูปภาพ
// เอา HEIC ออกจากเงื่อนไขการดึงรูป
const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,JPG,PNG}', { eager: true });

// 2. สร้างฟังก์ชันช่วยดึงรูปตามชื่อโฟลเดอร์
const getImagesByFolder = (folderName) => {
  return Object.keys(allImages)
    .filter((path) => path.includes(`/${folderName}/`)) // กรองเฉพาะโฟลเดอร์กิจกรรมนั้นๆ
    .map((path) => allImages[path].default || allImages[path]); // ดึง URL ที่ Vite ประมวลผลแล้วออกม
};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Activities = () => {
  // ข้อมูลกิจกรรม (คุณสามารถ Copy เพิ่มให้ครบ 10 กิจกรรมได้ที่นี่)
  const allActivities = [
    {
      title: "180 Degree",
      tag: "Language & Community", // เพิ่ม Tag
      description: "A student center for English communication and fun activities, learning through diverse perspectives with foreign teachers.",
      images: getImagesByFolder('180 Degree-20260311T085333Z-3-001')
    },
    {
      title: "Cheerleader",
      tag: "Cheerleading Captain | 2024-2025",
      description: "Served as a cheer captain for two consecutive years. Developed leadership skills, responsibility, and team coordination within the English major.",
      images: getImagesByFolder('Cheerleader-20260311T085304Z-3-001')
    },
    {
      title: "MSU Homeroom",
      tag: "MSU EnglishHACK Season 2 (Top 20)",
      description: "Participated in a creative competition with team 'Old Campus'. Successfully selected as one of the top 20 teams in the campaign.",
      images: getImagesByFolder('MSU Homeroom-20260311T084945Z-3-001')
    },
    {
      title: "Social Service",
      tag: "Volunteer @ Wat Chai Jum Phol",
      description: "Dedicated volunteer work from 1st to 3rd year, focusing on temple maintenance and community service within the local area.",
      images: getImagesByFolder('Social Service -20260311T085246Z-3-001')
    },
    {
      title: "EDU First Date",
      tag: "Student Mentor | Faculty of Education",
      description: "Guided first-year students during their induction, fostering a sense of community and helping them adapt to university life.",
      images: getImagesByFolder('EDU First Date-20260311T085223Z-3-001')
    },
    {
      title: "Research Workshop",
      tag: "Academic Research & Methodology",
      description: "In-depth training with international lecturers on methodology, data collection, analysis, and academic report writing.",
      images: getImagesByFolder('Research Workshop-20260311T085203Z-3-001')
    },
    {
      title: "Teacher Appreciation Ceremony",
      tag: "Wai Kru Ceremony | Tradition",
      description: "Participated in the annual ceremony to express gratitude and respect to teachers for their guidance and knowledge.",
      images: getImagesByFolder('Teacher Appreciation Ceremony-20260311T085148Z-3-001')
    },
    {
      title: "EN Orientation",
      tag: "Community Building | English Major",
      description: "Organized events to help new English major students build friendships and become familiar with the faculty environment.",
      images: getImagesByFolder('EN Orientation -20260311T085048Z-3-001')
    },
    {
      title: "Boonnak Game",
      tag: "Sports Day | Teamwork",
      description: "Represented the faculty in Pétanque during the annual sports day, promoting physical health and unit collaboration.",
      images: getImagesByFolder('Boonnak Game-20260311T085028Z-3-001')
    },
    {
      title: "Teacher Scout Camp",
      tag: "Leadership & Scout Training",
      description: "Enhanced scouting skills, outdoor survival techniques, and leadership through intensive teamwork-based activities.",
      images: [s1Pic, s2Pic, s3Pic, s4Pic]
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#120d1a] font-display transition-colors pb-20">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">

        {/* --- Header Section (ใช้อันเดิมที่คุณต้องการ) --- */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 shadow-2xl">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${ac1Pic})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/50 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[400px] md:min-h-[550px] flex-col gap-8 items-start justify-center p-10 md:p-20">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-white text-6xl md:text-8xl font-black leading-none tracking-tighter">
                  Activities
                </h1>
                <p className="text-purple-100 text-xl md:text-2xl font-medium leading-relaxed opacity-90">
                  A showcase of academic engagements, leadership roles, and transformative extracurricular journeys.
                </p>
              </div>
              <button className="group flex items-center gap-3 px-10 py-5 bg-white text-purple-900 rounded-2xl text-lg font-black shadow-xl hover:bg-purple-50 transition-all active:scale-95">
                Explore More <FaChevronDown className="text-sm animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* --- Activities Grid (10 Items พร้อม Slider) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {allActivities.map((act, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Slider Section */}
              <div className="relative h-[300px] md:h-[380px] overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectFade]}
                  effect="fade"
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  navigation={{
                    nextEl: `.next-${idx}`,
                    prevEl: `.prev-${idx}`,
                  }}
                  className="h-full w-full"
                >
                  {act.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={act.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </SwiperSlide>
                  ))}

                  {/* ปุ่มควบคุม (จะแสดงเมื่อ Hover) */}
                  <div className={`prev-${idx} absolute left-4 top-1/2 -translate-y-1/2 z-20 size-11 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:bg-white hover:text-purple-600`}>
                    <FaChevronLeft size={16} />
                  </div>
                  <div className={`next-${idx} absolute right-4 top-1/2 -translate-y-1/2 z-20 size-11 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer hover:bg-white hover:text-purple-600`}>
                    <FaChevronRight size={16} />
                  </div>
                </Swiper>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-black uppercase tracking-[0.25em] text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 rounded-full">
                    {act.tag}
                  </span>
                  <span className="text-slate-200 dark:text-slate-700 font-black text-3xl italic">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 transition-colors">
                  {act.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-2xl mb-8">
                  {act.description}
                </p>


              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Activities;