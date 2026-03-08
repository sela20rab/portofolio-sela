import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Palette, Layers, Code, FileText } from "lucide-react";

import gp from "../assets/images/gp.png";
import uiux from "../assets/images/uiux.png";
import wa from "../assets/images/wa.png";
import admin from "../assets/images/admin.png";

export default function Service() {
  // Cursor glow
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Typing animation (one time)
  const titleText = "Crafting Digital ";
  const titleGradient = "Experiences";
  const paragraphText =
    "Helping brands thrive in the digital world with creative design and robust development.";

  const [typedTitle, setTypedTitle] = useState("");
  const [typedGradient, setTypedGradient] = useState("");
  const [typedPara, setTypedPara] = useState("");

  // Typing for normal part of title
  useEffect(() => {
    let timer;
    if (typedTitle.length < titleText.length) {
      timer = setTimeout(() => setTypedTitle(titleText.slice(0, typedTitle.length + 1)), 40);
    }
    return () => clearTimeout(timer);
  }, [typedTitle]);

  // Typing for gradient part of title
  useEffect(() => {
    let timer;
    if (typedTitle.length === titleText.length && typedGradient.length < titleGradient.length) {
      timer = setTimeout(() => setTypedGradient(titleGradient.slice(0, typedGradient.length + 1)), 50);
    }
    return () => clearTimeout(timer);
  }, [typedGradient, typedTitle]);

  // Typing for paragraph
  useEffect(() => {
    let timer;
    if (typedGradient.length === titleGradient.length && typedPara.length < paragraphText.length) {
      timer = setTimeout(() => setTypedPara(paragraphText.slice(0, typedPara.length + 1)), 20);
    }
    return () => clearTimeout(timer);
  }, [typedPara, typedGradient]);

  // Floating animation for service cards
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
        <div className="w-[80px] h-[80px] rounded-full bg-purple-500 opacity-2 blur-2xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
        <Navbar />

        {/* HEADER */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">
            MY EXPERTISE
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-black">{typedTitle}</span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {typedGradient}
            </span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">{typedPara}</p>
        </div>

        {/* SERVICE GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {[
            { icon: Palette, title: "Graphic Design", desc: "Creating visual concepts such as logos and branding materials.", img: gp, color: "blue" },
            { icon: Layers, title: "UI/UX Design", desc: "Designing intuitive and visually appealing user interfaces.", img: uiux, color: "purple" },
            { icon: Code, title: "Web Application", desc: "Building responsive and scalable web applications.", img: wa, color: "teal" },
            { icon: FileText, title: "Admin", desc: "Developing backend administration panels and dashboards.", img: admin, color: "pink" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={floating}
              animate="animate"
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-6`}
                   style={{ backgroundColor: item.color === 'blue' ? '#DBEAFE' :
                                item.color === 'purple' ? '#EDE9FE' :
                                item.color === 'teal' ? '#CCFBF1' :
                                '#FBCFE8' }}>
                <item.icon size={26} style={{ color: item.color === 'blue' ? '#3B82F6' :
                                              item.color === 'purple' ? '#8B5CF6' :
                                              item.color === 'teal' ? '#14B8A6' :
                                              '#EC4899' }} />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-black">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>

              <div className="rounded-xl overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover hover:scale-105 transition duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm mt-24 mb-10">
          © 2026 Portfolio. All rights reserved.
        </div>
      </div>
    </div>
  );
}