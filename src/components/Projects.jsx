import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Palette, Monitor, Code2, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const navigate = useNavigate();

  // ================= Cursor Glow =================
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  

  // ================= Typing Effect =================
  const headingText = "My Creative ";
  const headingGradient = "Playground";
  const paragraphText =
    "Exploring the intersection of design and technology across various disciplines. Curating digital experiences that matter.";

  const [typedH1, setTypedH1] = useState("");
  const [typedGrad, setTypedGrad] = useState("");
  const [typedPara, setTypedPara] = useState("");

  useEffect(() => {
    if (typedH1.length < headingText.length) {
      const timer = setTimeout(
        () => setTypedH1(headingText.slice(0, typedH1.length + 1)),
        50
      );
      return () => clearTimeout(timer);
    }
  }, [typedH1]);

  useEffect(() => {
    if (typedH1.length === headingText.length && typedGrad.length < headingGradient.length) {
      const timer = setTimeout(
        () => setTypedGrad(headingGradient.slice(0, typedGrad.length + 1)),
        60
      );
      return () => clearTimeout(timer);
    }
  }, [typedGrad, typedH1]);

  useEffect(() => {
    if (typedGrad.length === headingGradient.length && typedPara.length < paragraphText.length) {
      const timer = setTimeout(
        () => setTypedPara(paragraphText.slice(0, typedPara.length + 1)),
        20
      );
      return () => clearTimeout(timer);
    }
  }, [typedPara, typedGrad]);

  // ================= Floating Anim =================
  const floating = {
    animate: { y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#dceaf7] to-[#c7dff5] overflow-x-hidden relative">
      {/* Animated Grid Background */}
<div className="absolute inset-0 opacity-[0.07]">
  <div
    className="
    w-full
    h-full
    bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
    bg-[size:60px_60px]
    "
  />
</div>
      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: cursor.x - 50, y: cursor.y - 50 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-pink-600 to-purple-500 opacity-3 blur-2xl" />
      </motion.div>
      {/* Parallax Glow */}
<motion.div
  className="absolute w-[500px] h-[500px] bg-purple-400/30 blur-[120px] rounded-full"
  animate={{
    x: cursor.x * 0.1,
    y: cursor.y * 0.1,
  }}
  transition={{ type: "spring", stiffness: 50 }}
/>

<motion.div
  className="absolute w-[500px] h-[500px] bg-pink-400/30 blur-[120px] rounded-full"
  animate={{
    x: cursor.x * -0.08,
    y: cursor.y * -0.08,
  }}
  transition={{ type: "spring", stiffness: 50 }}
/>

      {/* Decorative Floating Circles */}
<motion.div
  className="absolute top-10 left-10 w-48 h-48 bg-purple-400/30 rounded-full blur-3xl"
  variants={floating}
  animate="animate"
/>

<motion.div
  className="absolute bottom-20 right-20 w-60 h-60 bg-pink-400/30 rounded-full blur-3xl"
  variants={floating}
  animate="animate"
/>

{/* Orbital Icons */}
<motion.div
  className="absolute left-20 top-1/3 text-purple-400 opacity-40"
  animate={{
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Palette size={42} />
</motion.div>

<motion.div
  className="absolute right-32 top-1/2 text-blue-400 opacity-40"
  animate={{
    y: [0, 25, 0],
    rotate: [0, -10, 10, 0],
  }}
  transition={{
    duration: 9,
    repeat: Infinity,
  }}
>
  <Code2 size={42} />
</motion.div>

<motion.div
  className="absolute left-1/2 bottom-24 text-pink-400 opacity-40"
  animate={{
    y: [0, -18, 0],
    rotate: [0, 15, -15, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
>
  <Monitor size={42} />
</motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-32 relative z-10">
        <Navbar />

        {/* Hero Light */}
<div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-pink-400/20 blur-[120px] rounded-full"></div>

<div className="absolute bottom-20 right-1/3 w-[400px] h-[400px] bg-purple-400/20 blur-[120px] rounded-full"></div>

        {/* ================= HERO ================= */}
        <div className="pt-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              AVAILABLE FOR HIRE
            </div>

            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-black">{typedH1}</span>
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">{typedGrad}</span>
            </h1>

            <p className="text-gray-500 mt-6 text-lg max-w-xl">{typedPara}</p>
          </div>

          {/* Stats */}
          <div className="flex justify-end gap-16 text-right">
            <div>
              <h2 className="text-4xl font-bold">2+</h2>
              <p className="text-gray-500 text-sm mt-1">Years Exp.</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">20+</h2>
              <p className="text-gray-500 text-sm mt-1">Projects</p>
            </div>
          </div>
        </div>

        {/* ================= CATEGORY BUTTONS ================= */}
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
  className="relative flex flex-wrap justify-center gap-16 mt-24"
>

  {/* Graphic Design */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -120 },
      visible: { opacity: 1, y: 0 }
    }}
    className="flex flex-col items-center"
  >
    <div className="w-[2px] h-16 bg-gray-400"></div>

    <Filter
      label="Graphic Design"
      icon={<Palette size={18} className="text-orange-500" />}
      onClick={() => navigate("/projects/graphic-design")}
    />
  </motion.div>

  {/* UI UX */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -120 },
      visible: { opacity: 1, y: 0 }
    }}
    className="flex flex-col items-center"
  >
    <div className="w-[2px] h-20 bg-gray-400"></div>

    <Filter
      label="UI / UX"
      icon={<Monitor size={18} className="text-orange-500" />}
      onClick={() => navigate("/projects/uiux")}
    />
  </motion.div>

  {/* Web App */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -120 },
      visible: { opacity: 1, y: 0 }
    }}
    className="flex flex-col items-center"
  >
    <div className="w-[2px] h-16 bg-gray-400"></div>

    <Filter
      label="Web Application"
      icon={<Code2 size={18} className="text-orange-500" />}
      onClick={() => navigate("/projects/web-app")}
    />
  </motion.div>

  {/* Admin */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: -120 },
      visible: { opacity: 1, y: 0 }
    }}
    className="flex flex-col items-center"
  >
    <div className="w-[2px] h-20 bg-gray-400"></div>

    <Filter
      label="Admin"
      icon={<Settings size={18} className="text-orange-500" />}
      onClick={() => navigate("/projects/admin")}
    />
  </motion.div>

</motion.div>

        {/* FOOTER */}
        <div className="text-center text-gray-400 text-sm mt-24">
          © 2026 Detailed Portfolio. All rights reserved.
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENT ================= */
function Filter({ label, icon, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="
      relative
      flex items-center gap-3
      px-8 py-4
      rounded-2xl
      text-sm font-semibold
      bg-white/70 backdrop-blur-md
      border border-white/40
      shadow-xl
      hover:shadow-2xl
      transition
      group
      "
    >

      {/* Glow Effect */}
      <div className="
      absolute inset-0
      rounded-2xl
      bg-gradient-to-r
      from-blue-400
      via-purple-400
      to-pink-400
      opacity-0
      group-hover:opacity-20
      blur-xl
      transition
      "></div>

      <span className="relative">{icon}</span>

      <span className="relative text-gray-800">
        {label}
      </span>

    </motion.button>
  );
}