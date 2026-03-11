import React, { useState } from 'react';

const CourseTable = () => {
  // State สำหรับเก็บว่า 'ปี' ไหน และ 'เทอม' ไหนที่เปิดอยู่
  const [openYear, setOpenYear] = useState(3);

  const academicData = [
    {
      year: 3,
      label: "Third-Year Courses",
      semesters: [
        {
          term: "Semester 2",
          gpa: "3.52", // เกรดเฉลี่ยปัจจุบันยังเป็น 0.00 เนื่องจากผลการเรียนยังไม่ออก
          courses: [
            { code: "0560301", name: "Practicum 3", credits: 2, grade: "รอ" },
            { code: "0564325", name: "Oral English 3", credits: 3, grade: "รอ" },
            { code: "0564342", name: "English Composition 2", credits: 3, grade: "รอ" },
            { code: "0564352", name: "English and American Cultural Background", credits: 2, grade: "รอ" },
            { code: "0564364", name: "Classroom Management for EFL", credits: 3, grade: "รอ" },
            { code: "0564454", name: "Introduction to Prose and Poetry", credits: 2, grade: "รอ" },
            { code: "0564455", name: "Principles and Methods of Translation", credits: 3, grade: "รอ" }
          ]
        },
        {
          term: "Semester 1",
          gpa: "3.52", //
          courses: [
            { code: "0044008", name: "Life and Peace", credits: 2, grade: "B" }, //
            { code: "0510301", name: "School Improvement", credits: 3, grade: "A" }, //
            { code: "0540301", name: "Research in Education", credits: 3, grade: "A" }, //
            { code: "0550302", name: "Learner Developing Activities", credits: 3, grade: "A" }, //
            { code: "0564334", name: "English Reading 3", credits: 3, grade: "A" }, //
            { code: "0564362", name: "Teaching English as a Foreign Language 2", credits: 3, grade: "B+" }, //
            { code: "0564367", name: "Research in EFL Classroom", credits: 3, grade: "B" } //
          ]
        }
      ]
    },
    {
      year: 2,
      label: "Second-Year Courses",
      semesters: [
        {
          term: "Semester 2",
          gpa: "3.48", //
          courses: [
            { code: "0042006", name: "Consumption of Pharmaceutical and Health Products", credits: 2, grade: "A" }, //
            { code: "0042009", name: "Personality for Social Relations", credits: 2, grade: "A" }, //
            { code: "0045003", name: "Wisdom for Life Quality", credits: 2, grade: "B+" }, //
            { code: "0045004", name: "Introduction to ASEAN", credits: 2, grade: "B+" }, //
            { code: "0540201", name: "Measurement and Evaluation in Education", credits: 2, grade: "B+" }, //
            { code: "0560203", name: "Curriculum Design and Development", credits: 3, grade: "A" }, //
            { code: "0564224", name: "Oral English 2", credits: 3, grade: "B+" }, //
            { code: "0564351", name: "Language for Classroom Management", credits: 3, grade: "B+" }, //
            { code: "0564361", name: "Teaching English as a Foreign Language 1", credits: 3, grade: "B" } //
          ]
        },
        {
          term: "Semester 1",
          gpa: "3.44", //
          courses: [
            { code: "0042008", name: "Life Skills", credits: 2, grade: "B+" }, //
            { code: "0043003", name: "Smart Investment", credits: 2, grade: "B+" }, //
            { code: "0045010", name: "Local Wisdom Based Food and Beverages", credits: 2, grade: "A" }, //
            { code: "0560201", name: "Practicum 2", credits: 2, grade: "A" }, //
            { code: "0560202", name: "Learning and Teaching", credits: 3, grade: "B" }, //
            { code: "0564233", name: "English Reading 2", credits: 3, grade: "A" }, //
            { code: "0564241", name: "English Composition 1", credits: 3, grade: "B+" }, //
            { code: "0564261", name: "Foundation of English Grammar", credits: 2, grade: "B+" } //
          ]
        }
      ]
    },
    {
      year: 1,
      label: "First-Year Courses",
      semesters: [
        {
          term: "Semester 2",
          gpa: "3.37", //
          courses: [
            { code: "0041002", name: "Communicative English", credits: 2, grade: "A" }, //
            { code: "0041003", name: "English for Humanities and Social Sciences Purposes", credits: 2, grade: "A" }, //
            { code: "0041022", name: "Digital Literacy and Life for Transformation", credits: 2, grade: "A" }, //
            { code: "0045002", name: "Music and Isan Performing Arts", credits: 2, grade: "B" }, //
            { code: "0520101", name: "Psychology for Teachers", credits: 3, grade: "C+" }, //
            { code: "0560101", name: "Practicum 1", credits: 2, grade: "A" }, //
            { code: "0564112", name: "English Listening 2", credits: 3, grade: "B+" }, //
            { code: "0564132", name: "English Reading 1", credits: 3, grade: "A" }, //
            { code: "0564162", name: "Phonology for Teachers", credits: 3, grade: "C+" } //
          ]
        },
        {
          term: "Semester 1",
          gpa: "3.31", //
          courses: [
            { code: "0041001", name: "Preparatory English", credits: 2, grade: "A" }, //
            { code: "0042003", name: "Holistic Health Care and Promotion", credits: 2, grade: "C+" }, //
            { code: "0043001", name: "Design Thinking", credits: 2, grade: "A" }, //
            { code: "0044004", name: "Laws and Everyday Rights", credits: 2, grade: "C" }, //
            { code: "0530101", name: "Information Technology Innovation and Educational Communication", credits: 3, grade: "A" }, //
            { code: "0564111", name: "English Listening 1", credits: 3, grade: "B+" }, //
            { code: "0564123", name: "Oral English 1", credits: 3, grade: "B" }, //
            { code: "0564161", name: "Phonetics and Pronunciation for Teachers", credits: 2, grade: "C+" }, //
            { code: "0564163", name: "Vocabulary Development", credits: 2, grade: "A" } //
          ]
        }
      ]
    }
  ];

  const getGradeStyle = (grade) => {
    if (grade === 'A') return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    if (grade.startsWith('B')) return 'bg-blue-50 text-blue-600 border-blue-100';
    return 'bg-slate-50 text-slate-600 border-slate-100';
  };

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto font-display">
      <div className="flex items-center justify-between px-4">
        <h3 className="text-4xl font-bold text-slate-800 dark:text-white">Transcripts</h3>
        <span className="text-md font-bold text-slate-400 uppercase tracking-[0.2em]">Detailed History</span>
      </div>

      <div className="space-y-4">
        {academicData.map((item) => (
          <div key={item.year} className="group">
            {/* Year Header */}
            <button
              onClick={() => setOpenYear(openYear === item.year ? null : item.year)}
              className={`w-full flex items-center justify-between p-5 rounded-[2rem] transition-all border ${openYear === item.year
                ? 'bg-white dark:bg-slate-800 border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5'
                : 'bg-slate-50 dark:bg-slate-900/50 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                }`}
            >
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-2xl flex items-center justify-center font-bold text-xl ${openYear === item.year ? 'bg-purple-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-400 shadow-sm'
                  }`}>
                  {item.year}
                </div>
                <div className="text-left">
                  <h4 className={`font-bold text-2xl leading-none ${openYear === item.year ? 'text-slate-800 dark:text-white' : 'text-slate-500'}`}>
                    {item.label}
                  </h4>
                  <p className="text-lg font-medium text-slate-400 mt-1.5 uppercase tracking-wider">
                    {item.semesters.length} Semesters Recorded
                  </p>
                </div>
              </div>

            </button>

            {/* Semester Container */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openYear === item.year ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
              <div className="space-y-6 px-2">
                {item.semesters.map((sem, sIdx) => (
                  <div key={sIdx} className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800 ml-6">
                    {/* Semester Marker */}
                    <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-purple-100 dark:bg-slate-800 border-2 border-purple-600"></div>

                    <div className="flex items-center justify-between mb-4">
                      <h5 className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-xl">
                        {sem.term} <span className="mx-2 text-slate-300">|</span> <span className="text-purple-600">GPA {sem.gpa}</span>
                      </h5>
                    </div>

                    <div className="bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                      <table className="w-full text-left">
                        <thead className="bg-slate-50/50 dark:bg-slate-900/50 ">
                          <tr>
                            <th className="px-6 py-3 text-lg font-bold text-slate-400 uppercase tracking-widest ">Course</th>
                            <th className="px-6 py-3 text-lg font-bold text-slate-400 uppercase tracking-widest text-center">Cr.</th>
                            <th className="px-6 py-3 text-lg font-bold text-slate-400 uppercase tracking-widest text-center">Grade</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                          {sem.courses.map((course, cIdx) => (
                            <tr key={cIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                              <td className="px-6 py-4">
                                <div className="text-xl font-bold text-purple-500 mb-0.5">{course.code}</div>
                                <div className="text-xl font-semibold text-slate-700 dark:text-slate-200">{course.name}</div>
                              </td>
                              <td className="px-6 py-4 text-lg text-center font-bold text-slate-400">
                                {course.credits.toFixed(1)}
                              </td>
                              <td className="px-6 py-4 text-center">
                                <span className={`inline-flex items-center justify-center min-w-[34px] h-[24px] text-xl font-bold rounded-md border ${getGradeStyle(course.grade)}`}>
                                  {course.grade}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTable;