import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-6 left-0 right-0 mx-auto z-50
        w-[90%] max-w-6xl
        flex justify-between items-center
        px-8 py-5
        rounded-2xl transition-all duration-500
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-xl"
            : "bg-white/40 backdrop-blur-md"
        }
      `}
    >
      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-lg font-bold cursor-pointer"
      >
        Portofolio-Sela
      </h1>

      {/* MENU */}
      <div className="hidden md:flex gap-8 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600 transition"
          }
        >
          Service
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600 transition"
          }
        >
          About Me
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-600 transition"
          }
        >
          Project
        </NavLink>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/letstalk")}
        className="px-6 py-2 bg-black text-white rounded-2xl hover:scale-105 transition"
      >
        Let’s Talk
      </button>
    </motion.nav>
  );
}