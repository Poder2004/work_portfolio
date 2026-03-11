import React, { useState } from 'react'; // 1. เพิ่ม useState
import MethodCard from '../components/MethodCard';

// Import หน้าต่างๆ ที่เตรียมไว้
import CLT from "./CLT";
import CBI from "./CBI";
import TBL from "./TBL"; 
import CLIL from "./CLIL";  
import Listening from "./Listening"; 
import Speaking from "./Speaking"; 
import Reading from "./Reading"; 
import Writing from "./Writing";

const Teaching = () => {
    // 2. สร้าง State สำหรับเก็บหน้าที่ถูกเลือก
    const [selectedMethod, setSelectedMethod] = useState(null);

    const teachingMethods = [
        { title: "CLIL", description: "Content and Language Integrated Learning.", imageUrl: "https://associazionejump.it/wp-content/uploads/2022/04/CLIL.jpg" },
        { title: "TBLT", description: "Task-Based Learning.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnvzoKVCBkVxT_b357C_6DDTtILpbgwKkqHVkbOsjgo_zAGWhX2xmCGozxeitKpF2p3BmABuE0tiLv5cNtdPRECE1kQ4Jc9M2APC7IvIRMIqgmF_-5xPa4_T020RRt1tGGo4G-VpO4rkOvqjzTp0tWZuiZEz-lQQXGsWon7rTULPuC3FJirlmKaUyRhGSleIelqWDlp6LP0Ds5HW9zs4smh0dzbnN6Yq-KCmZkHH206MxllYOI8ZoxX-_qP-iECP-y30fbvYjxGO00" },
        { title: "CLT", description: "Communicative Language Teaching.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOdGKMrFTIX8lPfIz9nepz8QPXuIwkP7SE8WjLGBIOZ6Kz-f2NuP29NxrLvjcH0exe7ugj8Eg_Mehc-g9XTJ3DFr4sumzBawPYgqQVl44nXaKyWtWFHGIi6AmNiHJ3eHhx5oEkh1aqJCwXAkm01SdMhKdVhDp3ilGfN28WyEzEoNwe3UDanMg7JaRJmTnrXuCnlkXxYTNr4NhtM9LdNK_0J65Z0oayi1L-pyWlIUyMXUGJI-KnlurVTI1gIWp-N36pkuy7ShsRkf0C" },
        { title: "CBI", description: "Content-Based Instruction.", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhreJCzCGzZASHK8vcQRFrDlz9Vghr0NGl5NuY-okFJoZqm02VhNLVGel3qK9hEmMymoz-bL15g9Y2uqNG0JlaGa3QK21zkfLeVmdEHcVKPxXAj84egPtxUDLwBeuGDXzovhy9JT_QkevbLvgEXmXEn6QeMl9PcNfJP6OngS0Rnwt2FGbIOZHSqEHM5ww/s320-rw/20221217_021524_0000.png" },
        { title: "Listening", description: "Listening skills teaching.", imageUrl: "https://www.shichida.com.au/wp-content/uploads/2024/11/active-listening.png" },
        { title: "Speaking", description: "Speaking skills teaching.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbGOrH7rM8UT1WpsmKKOkw1wkxHqWeLypbZbFVwq8jXiR84Ki69qURk4pypKoJxs5tft2wSKx7sSfd9bdHKHiL5OZfs7tg8_IGSHu9IiHnxVFbdPeHfQJYSLTPplJBvGhfSsUtwaRjSns_pM__kNTJIhI-4eP84idveeduCPkD_w8D8_4NGIvbscrz96QyZR_z6MgUo_AuUAB1XrzjP6lO0RTJ1ueLdMuo4fb98ZSW_jMrgaTmwV4ZShpKlSxXc0KP2PziufLKGqg7" },
        { title: "Reading", description: "Reading skills teaching.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDazE_obR16HS0NOM5guTpW3cTgJFtElMo9DaAqQOdsvCw1u18zyi9iLJfU9bAwIEbGza9UBye9h0CZ3uEG24HFLI1qN6Eyc-slftuRybbCyZheLP1u3LXpBRIb01wUIgqNi6Q-p7_jx3_kkhXDVoyq2ndXzR1YFQuL-WlnW8znd2DTuv__KF-hoF6ITnaj3Tam4NOFvR9ItqsolXTrms5Lpy-KYjOJHQZj4rOAtNwZwiz_AsoccJD4YvAaaO_RM2yOi2gtM19lECcl" },
        { title: "Writing", description: "Writing skills teaching.", imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAugJBvS9rgGYNtsYvp8vds478CoCHw3Cj0Zv0X6Z0tWiHV5w1HZGLSQN77DqIlQq7MNE489e-Z71zNjq7iYcMyMARIoYl9WiTKH7uNkcSQwmHgWabD6VeeLVmG2t7_U8hgpZOZfiAZWdkwSJrJw1tlsw83Qsy9egcrCRYbCrICMU7FtJh676TMdpZEgwgIdM_1wUgPb8A7zAr5W-Yh44WzBQYDkEik3-_BYCX6NVghtIFinNbLU3g3bG35HcsiFtIsckvHmetz7plu" },
    ];

    // 3. ฟังก์ชันสำหรับเลือก Render หน้า Component
    const renderSelectedComponent = () => {
        switch (selectedMethod) {
            case "CLIL": return <CLIL onBack={() => setSelectedMethod(null)} />;
            case "TBL": return <TBL onBack={() => setSelectedMethod(null)} />;
            case "CLT": return <CLT onBack={() => setSelectedMethod(null)} />;
            case "CBI": return <CBI onBack={() => setSelectedMethod(null)} />;
            case "Listening": return <Listening onBack={() => setSelectedMethod(null)} />;
            case "Speaking": return <Speaking onBack={() => setSelectedMethod(null)} />;
            case "Reading": return <Reading onBack={() => setSelectedMethod(null)} />;
            case "Writing": return <Writing onBack={() => setSelectedMethod(null)} />;
            default: return null;
        }
    };

    // 4. ถ้ามีหน้าถูกเลือก ให้โชว์หน้านั้นเลย
    if (selectedMethod) {
        return <div className="min-h-screen bg-white dark:bg-slate-950">{renderSelectedComponent()}</div>;
    }

    return (
        <div className="min-h-screen bg-[#fbfaff] dark:bg-slate-950 font-display">
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                
                {/* Hero Section (เหมือนเดิมแต่เปลี่ยนสีเป็น Emerald ตามธีมใหม่) */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <h1 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                            Teaching <span className="text-emerald-600">EFL/ESL</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl leading-relaxed max-w-xl">
                            In teaching English as a Foreign Language (EFL) and English as a Second Language (ESL)...
                        </p>
                    </div>
                    {/* ส่วนรูปภาพ Hero เหมือนเดิม... */}
                </section>

                {/* Gallery Section */}
                <section>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="space-y-2">
                            <h2 className="text-slate-900 dark:text-white text-4xl font-black tracking-tight">Teaching Gallery</h2>
                            <p className="text-xl  text-slate-500 dark:text-slate-400 font-medium">Explore the pedagogical approaches I apply in my classroom</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teachingMethods.map((method, index) => (
                            <MethodCard
                                key={index}
                                title={method.title}
                                description={method.description}
                                imageUrl={method.imageUrl}
                                // 5. ส่งฟังก์ชันไปให้ Card เมื่อคลิก
                                onSeeMore={() => setSelectedMethod(method.title)} 
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Teaching;