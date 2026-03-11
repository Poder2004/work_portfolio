import React from 'react';
import ActivityCard from '../components/ActivityCard';
import { HiOutlineSparkles, HiOutlineViewGrid } from "react-icons/hi";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";

const Activities = () => {
  const otherEngagements = [
    {
      title: "Design Workshop",
      description: "Collaborative sessions focused on user-centered design principles, rapid prototyping, and iterative testing.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMZ1VTnqudvywVr3nPPaCELfwW3YsqBqkE3m_pvWgcBqzgYNeS21MlrDRhziuE2XEZ113MV707DLG5b-jKCnBvgE8SylUXPdYPhKrEBb5Bsk2nA4ZsNwFkUqvNrX0dDbWq_J5RyZwMGMMw3NWc3kkYhk9UmFWqXoJl0OPoxG7OTo4g8K-2Q8f6i0aOlIu01eTZAo7ruXYarA2Qt8rTwyim7gHqtwxN2P1eMAJDwLVEUalnfu_SjcWOkQ33nBUYcSsQjbHct26b5bud"
    },
    {
      title: "Tech Hackathon",
      description: "A 48-hour intensive challenge building innovative digital solutions for local environmental and social issues.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDdn-QnHCXlh7E-ARbU17jIUEKGtsK7vinHIiAafuo5NNfB3JcReIvMdWAToZVU5-PckFLHPxWXhQAQkVVFPz7TDY0zr1-YpX-ADhV3slAJ-C6_jyDo0f8DOxZ-wV7qZoUNNUn_VSxD9P-L2L1Y_6TSzOPYs6BpZ-N0hw-kvP7EWH8Tm0_lsPTZNo3kCYSF34cteZ5sYPPcZiOonNIqZvRb_9Oiqa3L5tJx9uLSpbCUwUfwPgOMBCVeuIDsCxpvM5K0WPyuhS9J2rG"
    },
    {
      title: "Community Outreach",
      description: "Volunteering for the 'Education for All' initiative, teaching basic literacy in neighboring school districts.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn4Ck3ANcVloE95iOf64UAaUgNqy6n5B46hqMzlRlUqAAyWGPehgHcwjxe4DwvlGFS_8ih01WfNJb8iXoJJwZNz5WsYTZCD56gVpvIvbNBNhB4nJjF6JRWNYfwJDtXomPhpXIGPaHzH_vBrmyfSYVQuiJ5mzBNeVKH_AKLgRUxui_jJX9fEE7OAXT8MuSHV94zMzhSDbxVm-NR0yefNpLmqxm9FlBtoJhUSSeOsQ2UYMWO74R6vWAOu2WQi9B3pUv498ThHybwYpjT"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f6] dark:bg-[#120d1a] font-display transition-colors">
      <main className="flex flex-col items-center">
        <div className="max-w-7xl w-full px-6 md:px-12 py-8">
          
          {/* --- Hero Section --- */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 shadow-2xl">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC35qohq-A9PvfyCLecFcYXGCl75uI2BSMOn9uiozMZtb_1GPMRxfmDFwGg0kW1hwiOrBmX52A-mii0GYPCYIF8ZJct-6E3Ym-A-TjqbUDaSCRn3Rdmd5vv99Hf6PtnoSBXe4D94di_9YdeqJ1VAJLxYG_7A9vOcBKRTXvBQPAbR0aFvHoO4Qd1r6n_3KRyUwNZ3NQpGM3p2umA4F1vMamXWTW-zdTnAkss2PNUodfRkPQkHOHoAV6n1OgzOMsO-gdQdY5PSYkITrTf')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/50 to-transparent" />
              
              {/* Hero Content */}
              <div className="relative z-10 flex min-h-[400px] md:min-h-[550px] flex-col gap-8 items-start justify-center p-10 md:p-20">
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-white text-6xl md:text-8xl font-black leading-none tracking-tighter">
                    Activities
                  </h1>
                  <p className="text-purple-100 text-lg md:text-xl font-medium leading-relaxed opacity-90">
                    A showcase of academic engagements, leadership roles, and transformative extracurricular journeys.
                  </p>
                </div>
                <button className="group flex items-center gap-3 px-10 py-5 bg-white text-purple-900 rounded-2xl text-lg font-black shadow-xl hover:bg-purple-50 transition-all active:scale-95">
                  Explore More <FaChevronDown className="text-sm animate-bounce" />
                </button>
              </div>
            </div>
          </section>

          {/* --- Featured Section: EN Orientation --- */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                <HiOutlineSparkles className="text-3xl text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">EN Orientation</h2>
            </div>

            <div className="group flex flex-col lg:flex-row items-stretch rounded-[2.5rem] bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all hover:border-purple-300">
              <div className="w-full lg:w-1/2 min-h-[350px] overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA52iAdRi7qFshLWu7EsM3ZdmNZL1756y9VXmrPgEgclJklh0YJL4Ate44N4Dmu0GYGDiUu0zM1p1YM6gOHjiBfHM2UGlyrbe4ZxSvNpjPQ31s3-xHn4MY7Zw1axdMWwDiN6oKV_7vhvC4R1We4yd8X1A0734AFl3kucShQKQRb_FaM2fIu5AY_vpC6z4aXsZ1WM0Y14ng-GUd3IuOrW6txHkETapBn9flbiSdoYWMCjqjMHiyAKXil_ad5J39AjMX9meE8FXU9PpNr" 
                  alt="Orientation" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex w-full lg:w-1/2 flex-col justify-center gap-8 p-10 md:p-16">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                    Inauguration Event
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                    Solemn Orientation Ceremony
                  </h3>
                  <div className="space-y-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                    <p>The formal beginning of an academic journey, centered on tradition, reflection, and the core values of our institution.</p>
                    <p>Fostering unity and leadership among the new cohort through shared experiences.</p>
                  </div>
                </div>
                <button className="flex items-center gap-3 w-fit px-8 py-4 bg-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/40 transition-all active:scale-95">
                  More Info <FaArrowRight />
                </button>
              </div>
            </div>
          </section>

          {/* --- Grid Section: Other Engagements --- */}
          <section className="pb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-purple-600">
                <HiOutlineViewGrid className="text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Other Engagements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {otherEngagements.map((item, index) => (
                <ActivityCard key={index} {...item} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Activities;