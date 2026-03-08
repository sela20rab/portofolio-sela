import { motion } from "framer-motion";
import Navbar from "./Navbar";
import profile from "../assets/selab.png";
import { Briefcase, GraduationCap, Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import uat from "../assets/documents/uat.png";
import lap from "../assets/documents/lap.png";

export default function HomePage() {
  const navigate = useNavigate();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const moveCursor = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);

  /* ================= AUTO TYPING ================= */

  const line1 = "I’m ";
  const line2 = "Sela Pebriana,";
  const line3 = "UI/UX ";
  const line4 = "Designer";
  
  const paragraph =
    "Designing intuitive user interfaces and user experiences through user flows, wireframes, and interactive prototypes in Figma.";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [textP, setTextP] = useState("");

  useEffect(() => {
    let timeout;

    if (text1.length < line1.length) {
      timeout = setTimeout(() => {
        setText1(line1.slice(0, text1.length + 1));
      }, 40);
    } else if (text2.length < line2.length) {
      timeout = setTimeout(() => {
        setText2(line2.slice(0, text2.length + 1));
      }, 40);
    } else if (text3.length < line3.length) {
      timeout = setTimeout(() => {
        setText3(line3.slice(0, text3.length + 1));
      }, 40);
    } else if (text4.length < line4.length) {
      timeout = setTimeout(() => {
        setText4(line4.slice(0, text4.length + 1));
      }, 40);
    } else if (textP.length < paragraph.length) {
      timeout = setTimeout(() => {
        setTextP(paragraph.slice(0, textP.length + 1));
      }, 20);
    }

    return () => clearTimeout(timeout);
  }, [text1, text2, text3, text4, textP]);

  /* ================= ANIMATION VARIANTS ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#dceaf7] to-[#c7dff5] overflow-x-hidden relative">
<motion.div
  className="fixed top-0 left-0 pointer-events-none z-[9999]"
  animate={{
    x: cursorPosition.x - 100,
    y: cursorPosition.y - 100,
  }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
  }}
>
  <div className="w-[80px] h-[80px] rounded-full bg-blue-700 opacity-1 blur-2xl"></div>
</motion.div>

      {/* Decorative Blur Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-[140px] opacity-30" />

<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 relative z-10">        <Navbar />

        {/* ================= HERO ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
className="mt-14 bg-white/40 backdrop-blur-xl rounded-[40px] shadow-2xl p-6 md:p-10 lg:p-16"        >
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="inline-block border-2 border-purple-300 px-6 py-2 text-purple-500 font-semibold tracking-widest text-sm hover:bg-purple-100 transition">
                HELLO THERE
              </div>

              {/* TIDAK MENGUBAH STYLE SAMA SEKALI */}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">                {text1}
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {text2}
                </span>
                <br />
                {text3}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {text4}
                </span>
              </h1>

<p className="text-gray-600 max-w-lg text-base md:text-lg">                {textP}
              </p>

<div className="flex flex-col sm:flex-row gap-4 pt-4">                <button
                  onClick={() => navigate("/project")}
                  className="px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300"
                >
                  View Portfolio →
                </button>

                <button
                  onClick={() => navigate("/certification")}
                  className="px-8 py-3 bg-black text-white rounded-full hover:scale-110 hover:shadow-xl transition duration-300"
                >
                  All Certification
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={floating}
              animate="animate"
              className="relative flex justify-center items-center"
            >
<div className="absolute w-[220px] h-[260px] sm:w-[260px] sm:h-[320px] md:w-80 md:h-96 bg-orange-500 rounded-[229px] rotate-6 shadow-2xl" />              <img
  src={profile}
  alt="profile"
  className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] rounded-[30px] shadow-2xl hover:scale-105 transition duration-500"
/>

              {[
  {
    text: "Skill UI/UX",
    bg: "bg-gradient-to-r from-pink-400 to-purple-500",
    glow: "rgba(236,72,153,0.8)",
  },
  {
    text: "Skill Admin",
    bg: "bg-gradient-to-r from-blue-400 to-indigo-500",
    glow: "rgba(59,130,246,0.8)",
  },
  {
    text: "Skill Web App",
    bg: "bg-gradient-to-r from-green-400 to-emerald-500",
    glow: "rgba(16,185,129,0.8)",
  },
  {
    text: "Skill Desain Graphis",
    bg: "bg-gradient-to-r from-orange-400 to-red-500",
    glow: "rgba(249,115,22,0.8)",
  },
].map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [1, 0.7, 1],
      boxShadow: [
        `0px 0px 0px ${item.glow}`,
        `0px 0px 25px ${item.glow}`,
        `0px 0px 0px ${item.glow}`,
      ],
    }}
    transition={{
      delay: i * 0.3,
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute text-white px-5 py-2 rounded-full shadow-md text-sm hover:scale-110 transition ${item.bg}`}
    style={{
      top:
        i === 0
          ? "-16px"
          : i === 1
          ? "64px"
          : i === 2
          ? "auto"
          : "auto",
      bottom: i === 2 ? "40px" : i === 3 ? "0px" : "auto",
      left: i === 0 || i === 2 ? "24px" : "auto",
      right: i === 1 ? "-24px" : i === 3 ? "8px" : "auto",
    }}
  >
    {item.text}
  </motion.div>
))}
            </motion.div>
          </div>
        </motion.div>


        {/* ================= WORK EXPERIENCE ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <Briefcase className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <div className="flex-1 h-[1px] bg-gray-300 ml-6"></div>
          </div>

          <p className="text-sm text-gray-500 mb-1">
            1 November 2025 - 1 Januari 2026
          </p>

          <h3 className="text-2xl font-semibold mb-8">
            Technical Writing Projects
          </h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {[{
              img: uat,
              title: "Dokumen UAT",
              desc: "User Acceptance Testing documentation for system validation.",
              link: "https://drive.google.com/drive/folders/1b9zqUsnkNdcYhXmVGutd2M1o37bVvmVJ",
            },
            {
              img: lap,
              title: "Dokumen Laporan",
              desc: "Project reporting and system documentation summary.",
              link: "https://drive.google.com/drive/folders/18C9U-ZMyWGkxcG98JxG3GK2D_EUSPc_A",
            }].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition duration-300"
                onClick={() => window.open(item.link, "_blank")}
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                  <span className="text-purple-500 text-sm font-medium">
                    View Document →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={() => navigate("/documents")}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:scale-110 hover:shadow-xl transition duration-300"
            >
              View All Documents
              <Folder size={18} />
            </button>
          </div>
        </motion.div>

        {/* ================= INTERNSHIP ================= */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="mt-24"
>
  <div className="flex items-center gap-4 mb-10">
    <GraduationCap className="text-pink-400" size={24} />
    <h2 className="text-2xl font-bold">Internship Experience</h2>
    <div className="flex-1 h-[1px] bg-gray-300 ml-6"></div>
  </div>

  <p className="text-sm text-gray-500 mb-1">
    20 Februari 2025 - 20 Mei 2025
  </p>

  <h3 className="text-2xl font-semibold mb-8">
    Arsiparis Data
  </h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Arsiparis Data Card */}
    <motion.a
      href="https://drive.google.com/file/d/1vW2IChkTc4Z-yCCFaxBxhf9kxmFdsXwc/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block bg-white rounded-3xl shadow-lg overflow-hidden relative w-full hover:shadow-2xl transition duration-300"
    >
      <span className="absolute top-4 right-4 text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        Arsiparis
      </span>

      <img
        src="/documents/data.jpg"
        alt="Arsiparis Data"
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h4 className="font-semibold text-lg mb-2">
          Arsiparis Data di SIDEBAR
        </h4>

        <p className="text-gray-500 text-sm mb-3">
          Pengelolaan dan pengarsipan data selama kegiatan PKL.
        </p>

        <span className="text-purple-500 text-sm font-medium">
          View Document →
        </span>
      </div>
    </motion.a>

  </div>
</motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-28 mb-20 bg-white/40 backdrop-blur-xl rounded-[50px] p-8 md:p-12 lg:p-20 text-center shadow-2xl hover:shadow-3xl transition"
        >
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">            Let’s build something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              amazing together.
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Open for new opportunities in Technical Writing and Arsiparis.
          </p>

          <button className="mt-10 px-10 py-4 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300">
            Get In Touch
          </button>
        </motion.div>

      </div>
    </div>
  );
}