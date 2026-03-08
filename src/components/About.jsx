import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import profile from "../assets/selablu.jpeg";

import {
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Instagram,
} from "lucide-react";

import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiCanva,
  SiCoreldraw,
  SiAdobephotoshop,
  SiXampp,
} from "react-icons/si";



export default function About() {
  // Cursor glow
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Typing effect for heading and paragraph
  const headingText1 = "I’m a ";
  const headingGradient1 = "Digital Creator";
  const headingText2 = " based in ";
  const headingGradient2 = "UI/UX";
  const paragraphText =
    "I navigate the intersection of technical precision and creative expression. As a Technical Writer, UI/UX Designer, and Front-end Developer, I transform complex problems into intuitive experiences.";

  const [typedH1, setTypedH1] = useState("");
  const [typedGrad1, setTypedGrad1] = useState("");
  const [typedH2, setTypedH2] = useState("");
  const [typedGrad2, setTypedGrad2] = useState("");
  const [typedPara, setTypedPara] = useState("");

  // Typing logic (same as sebelumnya)
  useEffect(() => {
    let timer;
    if (typedH1.length < headingText1.length) {
      timer = setTimeout(
        () => setTypedH1(headingText1.slice(0, typedH1.length + 1)),
        40
      );
    }
    return () => clearTimeout(timer);
  }, [typedH1]);

  useEffect(() => {
    let timer;
    if (typedH1.length === headingText1.length && typedGrad1.length < headingGradient1.length) {
      timer = setTimeout(
        () => setTypedGrad1(headingGradient1.slice(0, typedGrad1.length + 1)),
        50
      );
    }
    return () => clearTimeout(timer);
  }, [typedGrad1, typedH1]);

  useEffect(() => {
    let timer;
    if (typedGrad1.length === headingGradient1.length && typedH2.length < headingText2.length) {
      timer = setTimeout(
        () => setTypedH2(headingText2.slice(0, typedH2.length + 1)),
        40
      );
    }
    return () => clearTimeout(timer);
  }, [typedH2, typedGrad1]);

  useEffect(() => {
    let timer;
    if (typedH2.length === headingText2.length && typedGrad2.length < headingGradient2.length) {
      timer = setTimeout(
        () => setTypedGrad2(headingGradient2.slice(0, typedGrad2.length + 1)),
        50
      );
    }
    return () => clearTimeout(timer);
  }, [typedGrad2, typedH2]);

  useEffect(() => {
    let timer;
    if (typedGrad2.length === headingGradient2.length && typedPara.length < paragraphText.length) {
      timer = setTimeout(
        () => setTypedPara(paragraphText.slice(0, typedPara.length + 1)),
        20
      );
    }
    return () => clearTimeout(timer);
  }, [typedPara, typedGrad2]);

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#dceaf7] to-[#c7dff5] overflow-x-hidden relative">

      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: cursorPosition.x - 100, y: cursorPosition.y - 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="w-[80px] h-[80px] rounded-full bg-pink-500 opacity-2 blur-2xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
        <Navbar />

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-16 items-center pt-24">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              AVAILABLE FOR WORK
            </div>

            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-black">{typedH1}</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{typedGrad1}</span>
              <br />
              <span className="text-black">{typedH2}</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{typedGrad2}</span>
            </h1>

            <p className="text-gray-600 mt-6 text-lg max-w-xl leading-relaxed">{typedPara}</p>

            {/* Education */}
            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <div className="flex gap-8 items-start">
                <p className="text-lg font-semibold">2021–2025</p>
                <div>
                  <p className="text-xl font-semibold">Informatics Engineering</p>
                  <p className="text-gray-500">Politeknik TEDC Bandung</p>
                </div>
              </div>
              <div className="flex gap-6 mt-4 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-500" /> Ciwaruga, Bandung Barat
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-500" /> Available for Freelance
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://drive.google.com/drive/folders/1yXDM8V86fFJRZNc7SrnzoETmS7jgDWxC?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-full shadow-xl hover:scale-105 transition"
              >
                Lihat CV ↓
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
<div className="flex justify-center relative">
  {/* Gradient Glow Background */}
  <motion.div
    className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 filter blur-3xl opacity-60"
    variants={floating}
    animate="animate"
  />
  {/* Floating Profile Image */}
  <motion.img
    src={profile}
    alt="profile"
    className="relative w-[360px] h-[360px] object-cover rounded-full border-[10px] border-transparent shadow-2xl"
    variants={floating}
    animate="animate"
    whileHover={{ scale: 1.05, rotate: 3 }}
    transition={{ type: "spring", stiffness: 120, damping: 10 }}
  />
</div>
        </div>

        {/* TECHNICAL PROFICIENCY */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Technical Proficiency</h2>
          <p className="text-gray-500 mt-3">A showcase of my technical expertise and creative tools.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* DESIGN TOOLS */}
          <motion.div variants={floating} animate="animate" className="bg-white rounded-3xl shadow-sm p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-500"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-pink-100 p-3 rounded-xl text-pink-500">🎨</div>
              <h3 className="text-xl font-semibold">Design Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Tool icon={<FaFigma size={32} className="text-[#A259FF]" />} name="Figma" />
              <Tool icon={<SiCanva size={32} className="text-[#00C4CC]" />} name="Canva" />
              <Tool icon={<SiCoreldraw size={32} className="text-[#3BB54A]" />} name="CorelDraw" />
              <Tool icon={<SiAdobephotoshop size={32} className="text-[#31A8FF]" />} name="Photoshop" />
            </div>
          </motion.div>

          {/* DEVELOPMENT */}
          <motion.div variants={floating} animate="animate" className="bg-white rounded-3xl shadow-sm p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-500">💻</div>
              <h3 className="text-xl font-semibold">Development</h3>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center">
              <Dev icon={<FaHtml5 size={28} className="text-orange-500" />} name="HTML5" />
              <Dev icon={<FaCss3Alt size={28} className="text-blue-500" />} name="CSS3" />
              <Dev icon={<FaJs size={28} className="text-yellow-400" />} name="JavaScript" />
              <Dev icon={<FaReact size={28} className="text-cyan-400" />} name="React JS" />
              <Dev icon={<FaPhp size={28} className="text-indigo-500" />} name="PHP" />
              <Dev icon={<FaJava size={28} className="text-red-500" />} name="Java" />
              <Dev icon={<SiXampp size={28} className="text-orange-600" />} name="Xampp" />
              <Dev icon={<FaMicrosoft size={28} className="text-[#D83B01]" />} name="Microsoft Office" />
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-32 rounded-[40px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-10 py-20 text-center relative overflow-hidden">
          <div className="absolute -left-20 bottom-0 w-96 h-96 bg-purple-600/40 blur-[120px] rounded-full"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full"></div>

          <h2 className="text-5xl font-bold relative">
            Let’s Create Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amazing Together?
            </span>
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto relative">
            I'm currently accepting new projects.
          </p>

          <div className="flex justify-center gap-8 mt-12 relative">
            <Circle bg="bg-green-500" href="https://wa.me/6281572393990" icon={<MessageCircle />} />
            <Circle bg="bg-blue-500" href="mailto:selapebriana30@gmail.com" icon={<Mail />} />
            <Circle bg="bg-pink-500" href="https://www.instagram.com/selapebriana20" icon={<Instagram />} />
          </div>

          <p className="text-gray-400 text-sm mt-14 relative">
            © 2026 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */
function Tool({ icon, name }) {
  return (
    <motion.div
      className="bg-[#f7f9fc] rounded-2xl p-6 text-center hover:shadow-md transition"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <div className="flex justify-center mb-3">{icon}</div>
      <p className="font-medium text-gray-700">{name}</p>
    </motion.div>
  );
}

function Dev({ icon, name }) {
  return (
    <motion.div
      className="flex flex-col items-center mb-2"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-sm text-gray-600 font-medium">{name}</p>
    </motion.div>
  );
}
function Circle({ bg, icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bg} w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition`}
    >
      {icon}
    </a>
  );
}