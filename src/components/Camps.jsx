import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaMapMarkerAlt, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaArrowDown } from "react-icons/fa";
import { HiOutlineAcademicCap, HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlineHeart } from "react-icons/hi";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const campCategories = [
  {
    id: "edu-camp",
    categoryTitle: "Kon Pun Kru (EDU Camp)",
    items: [
      {
        title: "Kon Pun Kru 4th & 5th Camp",
        tag: "Activity Team & Design",
        description: "I was selected to be part of the activity team for the “Khon Phan Kru EDU Camp” (Teacher Spirit Camp) in the 4th and 5th camps. This experience helped me develop leadership, communicative skills, and teamwork while collaborating with students from different majors at Mahasarakham University. My responsibility was to design camp activities that promoted creativity and engaging learning experiences for participants.",
        location: "Mahasarakham University",
        folder: "Kon Pun Kru 5th camp" // ชื่อโฟลเดอร์สำหรับ getImagesByFolder
      }
    ]
  },
  {
    id: "eng-camp",
    categoryTitle: "English Outreach Camps",
    items: [
      {
        title: "En66 English Camp",
        tag: "Lead MC & Facilitator",
        description: "My classmates and I volunteered to organize an English camp for elementary school students. In this camp, we taught basic English through fun activities and games to help students improve their English skills and confidence in using the language. In both camps, my role was to be the MC who led students in dancing and singing English songs. The purpose of this activity was to motivate students to feel more interested in learning English and to create a fun atmosphere. It also served as an ice-breaking activity before the students started learning in each station. Through this role, I developed my confidence, communication skills, and the ability to engage students in an enjoyable learning environment.",
        location: "Ban Khwao Yai & Ban Nongkan Nonngam Chokchai schools, Mahasarakham",
        folder: "EN 66 English camp"
      }
    ]
  },
  {
    id: "kru-eng-club",
    categoryTitle: "Kru Eng Club",
    items: [
      {
        title: "Head of Recreation Team (1/2025)",
        tag: "Leadership Role",
        description: "Kru Eng Club is a club for English major students that organizes English camps for schools. It gives us the opportunity to practice teaching, classroom management, and other skills by working with real students in real situations. ",
        location: "Somdetpittayakom, Ban Na Po, & Ban Nong Krung Noi Schools",
        folder: "Kru Eng  Club"
      }
    ]
  },
  {
    id: "voluntary",
    categoryTitle: "Voluntary & Renovation Camps",
    description: "Voluntary camps were activities where I helped renovate and improve school environments. We worked together to clean and develop classrooms so that teachers and students could teach and learn more effectively. This experience also helped me develop teamwork and a strong sense of community service.",
    items: [
      {
        title: "Kru Eng Term Fun Pun Roi Yim 2nd",
      
        description: "I participated in this camp, where I was responsible for painting the school fence to help improve the school environment. This activity helped me develop teamwork skills and learn how to use my free time in a meaningful and beneficial way.",
        location: "Jongkolkittikhajorn Wittaya School, Sakon Nakhon",
        folder: "Kru Eng term fun pun roi yim  2nd" // แยกโฟลเดอร์รูปแคมป์ 2
      },
      {
        title: "Kru Eng Term Fun Pun Roi Yim 3rd",
     
        description: "In this camp, I was responsible for painting the school fence as part of the development and improvement work to make the school environment more pleasant and welcoming. I also worked collaboratively with others, supporting one another to successfully complete the tasks.",
        location: "Bungkhla Wittayakhom School, Kalasin",
        folder: "Kru Eng Term Fun Pun Roi Yim 3rd camp" // แยกโฟลเดอร์รูปแคมป์ 3
      },
      {
        title: "Kru Eng Term Fun Pun Roi Yim 4th",
    
        description: "In the final Kru Eng Term Fun Pun Roi Yim 4th camp , I served as the head of the kitchen team, responsible for managing meals for camp participants and controlling the food budget. This role helped me develop skills in time management, leadership, communication, and teamwork. In addition, I improved my problem-solving skills because I had to make important decisions related to my team’s responsibilities to ensure that everything ran smoothly.",
        location: "Ban Non Bo school",
        folder: "Kru Eng Term Fun Pun Roi Yim 4th camp" // แยกโฟลเดอร์รูปแคมป์ 4
      }
    ]
  }
];

const Camps = () => {
  const allImages = import.meta.glob('../assets/**/*.{png,jpg,jpeg,JPG,PNG}', { eager: true });

  const getImagesByFolder = (folderName) => {
    return Object.keys(allImages)
      .filter((path) => path.includes(`/${folderName}/`))
      .map((path) => allImages[path].default || allImages[path]);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#0b0712] font-display transition-colors pb-24 text-slate-900 dark:text-white">

      {/* --- Hero Section --- */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-slate-900 mb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-[#0b0712]" />
        <div className="relative z-10 text-center space-y-6 px-6">
          <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white text-xs font-black uppercase tracking-[0.3em]">
            Field Experience
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter italic">
            CAM<span className="text-purple-500">PS.</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-xl font-medium opacity-80">
            A journey of volunteerism, teaching, and leadership across various school communities.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-12 -mt--20  relative z-20 ">
        {campCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-20">

            {/* Category Header */}
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="size-14 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-xl shadow-purple-500/20">
                  {catIdx === 0 && <HiOutlineAcademicCap size={28} />}
                  {catIdx === 1 && <HiOutlineGlobeAlt size={28} />}
                  {catIdx === 2 && <HiOutlineUserGroup size={28} />}
                  {catIdx === 3 && <HiOutlineHeart size={28} />}
                </div>
                <h2 className="text-4xl font-black tracking-tight">{category.categoryTitle}</h2>
              </div>

              {/* แสดง Description ของ Category (ถ้ามี) */}
              {category.description && (
                <p className="text-slate-500 dark:text-slate-400 text-2xl leading-relaxed border-l-4 border-purple-200 dark:border-purple-900 pl-6 ml-7">
                  {category.description}
                </p>
              )}
            </div>

            {/* Activities Layout Logic */}
            <div className={category.id === 'voluntary' ? "grid grid-cols-1 md:grid-cols-3 gap-8" : "space-y-24"}>
              {category.items.map((camp, idx) => (
                category.id === 'voluntary' ? (
                  // --- VOLUNTARY GRID UI ---
                  <div key={idx} className="group bg-white dark:bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="h-60 relative">
                      <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{ delay: 3000 + (idx * 500) }}
                        className="h-full w-full"
                      >
                        {getImagesByFolder(camp.folder).map((img, i) => (
                          <SwiperSlide key={i}>
                            <img src={img} className="w-full h-full object-cover" alt={camp.title} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="absolute top-4 right-4 z-10 size-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-purple-600 shadow-lg">
                        {camp.icon}
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                     
                      <h4 className="text-2xl font-black leading-tight">{camp.title}</h4>
                      <div className="flex items-start gap-2 text-slate-400 text-lg">
                        <FaMapMarkerAlt className="mt-1 text-purple-500 shrink-0" />
                        <span>{camp.location}</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">{camp.description}</p>
                    </div>
                  </div>
                ) : (
                  // --- STANDARD ALTERNATING UI ---
                  <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    <div className="w-full lg:w-1/2 group">
                      <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay, EffectFade]}
                          effect="fade"
                          loop={true}
                          pagination={{ clickable: true }}
                          navigation={{ nextEl: `.next-${catIdx}-${idx}`, prevEl: `.prev-${catIdx}-${idx}` }}
                          className="h-[400px] md:h-[500px]"
                        >
                          {getImagesByFolder(camp.folder).map((img, i) => (
                            <SwiperSlide key={i}>
                              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={camp.title} />
                            </SwiperSlide>
                          ))}
                          <div className={`next-${catIdx}-${idx} absolute right-6 top-1/2 -translate-y-1/2 z-10 size-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-all`}><FaChevronRight /></div>
                          <div className={`prev-${catIdx}-${idx} absolute left-6 top-1/2 -translate-y-1/2 z-10 size-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-all`}><FaChevronLeft /></div>
                        </Swiper>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="inline-flex items-center gap-2 text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-xl text-lg font-black uppercase tracking-widest">
                        <FaMapMarkerAlt /> {camp.location}
                      </div>
                      <h3 className="text-4xl font-black leading-tight group-hover:text-purple-600 transition-colors">{camp.title}</h3>
                      <div className="relative">
                        <FaQuoteLeft className="absolute -top-6 -left-8 text-slate-100 dark:text-slate-800/50 text-7xl -z-10" />
                        <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">{camp.description}</p>
                      </div>
                      <span className="inline-block px-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-lg font-bold">{camp.tag}</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Camps;