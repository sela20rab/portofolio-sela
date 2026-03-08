import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Mail, Send, User, Pencil } from "lucide-react";
import profile from "../assets/selablu.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function LetsTalk() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gli1uoi",
        "template_56ttag1",
        form,
        "cuA332dcIbUzydnWv"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#c7d6e6] via-[#cfd9e8] to-[#d6c9e8] relative overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[140px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-pink-300 rounded-full blur-[140px] opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 bg-white/40 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 sm:p-10 md:p-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

            {/* LEFT SIDE */}
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center md:text-left"
              >
                Say{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Hello
                </span>
                👋
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-base sm:text-lg max-w-md text-center md:text-left"
              >
                Got a project in mind or just want to chat about design? I’m
                currently available for new opportunities and collaborations.
              </motion.p>

              {/* Floating Profile */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mt-10 w-[250px] sm:w-[300px] md:w-[330px]"
              >
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-3xl"></div>
                <img
                  src={profile}
                  alt="profile"
                  className="relative rounded-3xl shadow-xl hover:scale-105 transition duration-500 w-full"
                />
              </motion.div>
            </div>

            {/* RIGHT SIDE FORM */}
            <motion.form
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white/50 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition duration-500 w-full"
            >
              <h2 className="text-2xl font-semibold mb-6 sm:mb-8 text-center md:text-left">
                Send a Message
              </h2>

              {/* NAME */}
              <div className="mb-4 sm:mb-6">
                <label className="text-sm text-gray-600">Your Name</label>
                <div className="flex items-center bg-white/70 rounded-xl mt-2 px-4 py-3 focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <User size={18} className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Sela Pebriana"
                    className="bg-transparent w-full outline-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="mb-4 sm:mb-6">
                <label className="text-sm text-gray-600">Email Address</label>
                <div className="flex items-center bg-white/70 rounded-xl mt-2 px-4 py-3 focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <Mail size={18} className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="bg-transparent w-full outline-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mb-6 sm:mb-8">
                <label className="text-sm text-gray-600">Your Message</label>
                <div className="flex items-start bg-white/70 rounded-xl mt-2 px-4 py-3 focus-within:ring-2 focus-within:ring-purple-400 transition">
                  <Pencil size={18} className="text-gray-400 mr-3 mt-1" />
                  <textarea
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="bg-transparent w-full outline-none resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-2xl text-white font-semibold shadow-lg flex items-center justify-center gap-2 transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={18} />}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        <div className="text-center mt-12 sm:mt-16 text-gray-500 text-sm">
          © 2026 Creative Portfolio. Crafted with Tailwind CSS.
        </div>
      </div>
    </div>
  );
}