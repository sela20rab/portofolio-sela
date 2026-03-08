import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

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
        ${scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-xl"
          : "bg-white/40 backdrop-blur-md"}
      `}
    >
      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-lg font-bold cursor-pointer"
      >
        Portofolio-Sela
      </h1>

      {/* MENU LINKS (DESKTOP) */}
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

      {/* RIGHT SIDE: BUTTON + HAMBURGER */}
      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => navigate("/letstalk")}
          className="px-6 py-2 bg-black text-white rounded-2xl hover:scale-105 transition"
        >
          Let’s Talk
        </button>

        {/* HAMBURGER ICON (MOBILE) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition"
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-xl flex flex-col py-4"
            >
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100 transition rounded-lg"
              >
                Home
              </NavLink>
              <NavLink
                to="/service"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100 transition rounded-lg"
              >
                Service
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100 transition rounded-lg"
              >
                About Me
              </NavLink>
              <NavLink
                to="/project"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 hover:bg-gray-100 transition rounded-lg"
              >
                Project
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}