/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7311d4", // สีม่วงโลโก้ของคุณ
      },
      fontFamily: {
      // เปลี่ยนจาก 'Inter' เป็นชื่อฟอนต์ที่คุณใช้ในหน้าโปรไฟล์
      'display': ['Kanit', 'Inter', 'sans-serif'], 
    },
    },
  },

  plugins: [],
}