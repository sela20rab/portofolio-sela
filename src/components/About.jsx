import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import profile from "../assets/selablu.jpeg";

// Images
import adobe from "../assets/adobe.png";
import figma from "../assets/figma.png";
import canva from "../assets/canva.png";
import corel from "../assets/corel.png";

import {
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Instagram,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";

import {
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
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 filter blur-3xl opacity-60"
              variants={floating}
              animate="animate"
            />
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
              <Tool icon={<img src={figma} alt="Figma" className="w-8 h-8 mx-auto" />} name="Figma" />
              <Tool icon={<img src={canva} alt="Canva" className="w-8 h-8 mx-auto" />} name="Canva" />
              <Tool icon={<img src={corel} alt="CorelDraw" className="w-8 h-8 mx-auto" />} name="CorelDraw" />
              <Tool icon={<img src={adobe} alt="Adobe Photoshop" className="w-8 h-8 mx-auto" />} name="Adobe Photoshop" />
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