import Navbar from "./Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= ADMIN ================= */
import adminImg from "../assets/admin/admin.jpg";

/* ================= WEB APP ================= */
import penggajianImg from "../assets/webapp/penggajian.png";
import penggajianVideo from "../assets/webapp/penggajian.mp4";

import ecomImg from "../assets/webapp/ecom.png";
import ecomVideo from "../assets/webapp/ecom.mp4";


import tokoImg from "../assets/webapp/toko.png";
import tokoVideo from "../assets/webapp/toko.mp4";
/* ================= FLYER ================= */
import img1 from "../assets/flyer/1.png";
import img2 from "../assets/flyer/2.png";
import img3 from "../assets/flyer/3.png";
import img4 from "../assets/flyer/4.png";
import img5 from "../assets/flyer/5.png";
import img6 from "../assets/flyer/6.png";

/* ================= UIUX MOBILE ================= */
import seaseyImg from "../assets/uiux/mobile/seasey.png";
import seaseyVideo from "../assets/uiux/mobile/seasey.mp4";

import rsImg from "../assets/uiux/mobile/rs.png";
import rsVideo from "../assets/uiux/mobile/rs.mp4";

import sbImg from "../assets/uiux/mobile/sb.png";
import sbVideo from "../assets/uiux/mobile/sb.mp4";

import naImg from "../assets/uiux/mobile/na.png";
import naVideo from "../assets/uiux/mobile/na.mp4";


/* ================= UIUX WEB ================= */
import pilatesImg from "../assets/uiux/web/pilates.png";
import pilatesVideo from "../assets/uiux/web/pilates.mp4";

import fashionImg from "../assets/uiux/web/fashion.png";
import fashionVideo from "../assets/uiux/web/fashion.mp4";

import tourImg from "../assets/uiux/web/to.png";
import tourVideo from "../assets/uiux/web/to.mp4";

/* ================= SOCIAL ================= */
import SocialPost from "./SocialPost";

export default function ProjectCategory() {

  const { category } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const flyerImages = [img1, img2, img3, img4, img5, img6];
  /* ================= ADMIN DATA ================= */

const adminData = {
  image: adminImg,
  description:
    "Admin mengelola data menggunakan Excel untuk pencatatan, monitoring, dan pengelolaan laporan secara terstruktur.",
  excelLink:
    "https://docs.google.com/spreadsheets/d/19ZHkVuzwVS6BSpSVr1DiBbwGAFN0ulOy/edit?usp=sharing&ouid=118173422628278514063&rtpof=true&sd=true",
};
useEffect(() => {
  if (category === "graphic-design") {
    setActiveTab("flyer");
  }

  if (category === "uiux") {
    setActiveTab("mobile");
  }

  if (category === "admin") {
    setActiveTab("admin");
  }

}, [category]);

  /* ================= AUTO SLIDER FLYER ================= */
  useEffect(() => {
    if (activeTab === "flyer") {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === flyerImages.length - 1 ? 0 : prev + 1
        );
      }, 800);

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  /* ================= AUTO OPEN ================= */
  useEffect(() => {
    if (category === "graphic-design") {
      setActiveTab("flyer");
    }

    if (category === "uiux") {
      setActiveTab("mobile");
    }
  }, [category]);

  const titles = {
    "graphic-design": "Graphic Design Projects",
    "uiux": "UI / UX Projects",
    "web-app": "Web Application Projects",
    "admin": "Admin Dashboard",
  };
/* ================= WEB APPLICATION DATA ================= */

const webAppProjects = [
  {
    title: "Seasey – Aplikasi Web E-Commerce Interaktif",
    tech: "HTML, CSS, dan JavaScript",
    desc: "Seasey merupakan platform belanja online berbasis web yang dirancang dengan fokus pada pengalaman pengguna dan tampilan antarmuka yang modern. Aplikasi ini menyediakan berbagai fitur seperti katalog produk interaktif, sistem wishlist, keranjang belanja, serta proses checkout yang terstruktur untuk mempermudah pengguna dalam melakukan transaksi. Project ini menunjukkan kemampuan dalam menggabungkan konsep UI/UX design dengan pengembangan front-end untuk menciptakan aplikasi web yang responsif, interaktif, dan mudah digunakan.",
    image: ecomImg,
    demo: ecomVideo,
  },
  {
    title: "Implementasi Aplikasi Web CRUD Wisata Indonesia",
    tech: "Laravel + React.js + Tailwind",
    desc: "Aplikasi manajemen data wisata Indonesia berbasis CRUD dengan sistem modern.",
    demo: "#",
  },
  {
    title: "Pengembangan Sistem Informasi Penggajian Berbasis Web",
    tech: "PHP & MySQL",
    desc: "Sistem pengelolaan data karyawan dan penggajian berbasis web.",
    image: penggajianImg,
    demo: penggajianVideo,
  },
  {
    title: "Pengembangan Sistem Informasi Toko UMKM Berbasis Web",
    tech: "Laravel, Bootstrap, MySQL",
    desc: "Platform manajemen produk, transaksi, dan laporan untuk UMKM.",
    image: tokoImg,
    demo: tokoVideo,
  },
  
  
];
  /* ================= UIUX DATA ================= */

  const mobileProjects = [
  {
    title: "Aplikasi E-commerce Fashion (Seasey)",
    image: seaseyImg,
    video: seaseyVideo,
    desc: "Prototype Seasey merupakan desain UI/UX aplikasi mobile e-commerce yang berfokus pada penjualan fashion wanita dengan gaya muslimah girly yang terinspirasi dari style “Sela”. Aplikasi ini dirancang dengan tampilan yang clean, modern, dan feminin menggunakan warna lembut seperti pastel untuk menciptakan pengalaman belanja yang nyaman dan menarik. Dalam prototype ini, pengguna dapat dengan mudah menelusuri koleksi produk, melihat detail pakaian, menambahkan ke wishlist atau keranjang, serta melakukan checkout dengan alur yang sederhana dan intuitif. Salah satu fitur utama yang menjadi keunggulan Seasey adalah Mix & Match Outfit, yaitu fitur yang memungkinkan pengguna memadukan beberapa item fashion secara digital sehingga dapat melihat kecocokan outfit sebelum membeli. Melalui desain ini, Seasey bertujuan memberikan pengalaman belanja fashion yang lebih interaktif, inspiratif, dan praktis bagi pengguna tanpa harus mencoba pakaian secara langsung di toko. ✨",
    figma: "https://www.figma.com/design/uzwDXfeZz6EDJbjL58ul7x/App-E-Commerce-Seasey?node-id=0-1&t=3IUDWOMUf8b6eGuv-1",
  },
  {
    title: "Aplikasi Rumah Sakit Ibu dan Anak",
    image: rsImg,
    video: rsVideo,
    desc: "Prototype UI/UX aplikasi mobile Rumah Sakit Ibu dan Anak dirancang untuk memudahkan pasien, khususnya ibu hamil dan orang tua, dalam mengakses layanan kesehatan secara lebih cepat dan praktis. Aplikasi ini memiliki tampilan yang bersih, ramah, dan mudah digunakan dengan warna yang menenangkan untuk memberikan rasa nyaman bagi pengguna. Melalui aplikasi ini, pengguna dapat melakukan pendaftaran pasien, melihat jadwal dokter, melakukan reservasi konsultasi, mengakses informasi kesehatan ibu dan anak, serta memantau riwayat pemeriksaan. Desain UI/UX difokuskan pada kemudahan navigasi dan akses informasi sehingga pengguna dapat memperoleh layanan kesehatan secara efisien tanpa harus datang langsung ke rumah sakit untuk proses administrasi awal.",
    figma: "https://www.figma.com/design/9TlKHcoDEKa4bITvMKSncc/RS-Ibu---Anak",
  },
  {
    title: "Aplikasi Penjualan Seblak (Seblak'sel)",
    image: sbImg,
    video: sbVideo,
    desc: "Prototype UI/UX aplikasi mobile penjualan seblak dirancang sebagai platform pemesanan makanan yang memudahkan pelanggan untuk memesan berbagai varian seblak secara praktis melalui smartphone. Desain aplikasi dibuat menarik dan sederhana dengan elemen visual yang menggugah selera untuk mencerminkan karakter makanan yang khas dan populer. Pengguna dapat melihat menu seblak, memilih tingkat kepedasan, menambahkan topping, serta melakukan pemesanan dan pembayaran secara mudah. Aplikasi ini juga menyediakan fitur keranjang belanja, riwayat pesanan, serta informasi promo sehingga memberikan pengalaman pemesanan makanan yang lebih cepat, nyaman, dan efisien bagi pelanggan.",
    figma: "https://www.figma.com/design/NoPJfm5eSjD9ze9uFnNQi3/Prototype-Aplikasi-Mobile-Penjualan-Seblak",
  },
  {
    title: " Aplikasi Nonton (NetAnime)",
    image: naImg,
    video: naVideo,
    desc: "Prototype UI/UX NetAnime merupakan desain aplikasi mobile platform streaming yang ditujukan bagi para pecinta anime untuk menonton berbagai judul anime secara mudah dan nyaman. Aplikasi ini dirancang dengan tampilan modern dan menarik yang menyesuaikan dengan karakter visual dunia anime. Pengguna dapat menjelajahi berbagai kategori anime, melihat detail informasi setiap judul, menambahkan anime ke daftar favorit, serta melanjutkan tontonan dengan fitur continue watching. Desain UI/UX difokuskan pada pengalaman menonton yang imersif dengan navigasi yang sederhana sehingga pengguna dapat menemukan dan menikmati anime favorit mereka dengan lebih cepat dan menyenangkan. 🎬✨",
    figma: "https://www.figma.com/design/4yLJpx3opNF6jF9s6CX6Ki/Aplikasi-Mobile-NetAnime",
  },
];

  const webProjects = [
  {
    title: "Aplikasi Web Pilates (Pilasel)",
    image: pilatesImg,
    video: pilatesVideo,
    desc: "Prototype UI/UX Pilasel merupakan desain aplikasi web yang menyediakan layanan informasi dan pemesanan kelas pilates secara online. Aplikasi ini dirancang dengan tampilan yang clean, modern, dan menenangkan untuk mencerminkan gaya hidup sehat dan aktivitas olahraga yang seimbang. Melalui platform ini, pengguna dapat melihat jadwal kelas, memilih instruktur, melakukan reservasi kelas, serta mengakses informasi mengenai manfaat pilates dan program latihan yang tersedia. Desain UI/UX difokuskan pada kemudahan navigasi, tampilan yang elegan, serta pengalaman pengguna yang nyaman sehingga pengguna dapat dengan mudah menemukan kelas yang sesuai dengan kebutuhan mereka.",
    figma: "https://www.figma.com/design/05iSN4Tw4xqYgK2xk2pglN/Web-Pilates",
  },
  {
    title: "Aplikasi Web E-Commerce Fashion (SEAHITS)",
    image: fashionImg,
    video: fashionVideo,
    desc: "Prototype UI/UX SEAHITS merupakan desain aplikasi web e-commerce yang berfokus pada penjualan produk fashion dengan tampilan modern, stylish, dan user-friendly. Aplikasi ini dirancang untuk memudahkan pengguna dalam menjelajahi berbagai koleksi fashion, melihat detail produk, serta melakukan pembelian secara online dengan alur yang sederhana dan efisien. Pengguna dapat mencari produk berdasarkan kategori, melihat rekomendasi fashion terbaru, menambahkan produk ke keranjang atau wishlist, serta melakukan proses checkout dengan mudah. Desain UI/UX menekankan pada visual produk yang menarik, layout yang rapi, serta pengalaman belanja online yang nyaman dan interaktif.",
    figma: "https://www.figma.com/design/PlFKp9rQ2UH5xesB7xPxaJ/Web-Penjualan",
  },
  {
    title: "Aplikasi Web Tour Guide Gunung (Jejak Pendaki)",
    image: tourImg,
    video: tourVideo,
    desc: "Prototype UI/UX Jejak Pendaki merupakan desain aplikasi web yang menyediakan layanan informasi dan pemesanan pemandu wisata untuk aktivitas pendakian gunung. Aplikasi ini dirancang untuk membantu para pendaki mendapatkan informasi lengkap mengenai jalur pendakian, tingkat kesulitan gunung, serta layanan tour guide yang tersedia. Pengguna dapat mencari destinasi gunung, melihat profil pemandu, melakukan pemesanan layanan guide, serta mendapatkan tips keselamatan pendakian. Desain UI/UX dibuat dengan tampilan yang informatif dan mudah digunakan sehingga pendaki dapat merencanakan perjalanan mereka dengan lebih aman, terorganisir, dan menyenangkan. 🏔️",
    figma: "https://www.figma.com/design/kgDnwzDVeVuNcTtOxysD8J/Web-Tour-Guide-Gunung",
  },
];
const renderColoredTitle = (category) => {
  const text = titles[category] || "Projects";
  const words = text.split(" ");

  return (
    <h1 className="text-5xl font-bold flex flex-wrap">
      {words.map((word, index) => {
        if (index === 0) return <span key={index} className="text-black mr-2">{word}</span>;
        if (index === 1) return <span key={index} className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 mr-2">{word}</span>;
        return <span key={index} className="text-blue-600">{word}</span>;
      })}
    </h1>
  );
};


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#dceaf7] to-[#c7dff5] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-32">

        <Navbar />

        {/* ================= HERO ================= */}
        <div className="pt-24">

          <button
            onClick={() => navigate("/project")}
            className="text-sm text-blue-500 mb-6"
          >
            ← Back to All Projects
          </button>

          {renderColoredTitle(category)}

          <p className="text-gray-500 mt-4">
            Explore selected works.
          </p>

          {/* ================= BUTTON TAB ================= */}

          {category === "graphic-design" && (
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => {
                  setActiveTab("flyer");
                  setShowAll(false);
                }}
                className={`px-6 py-3 rounded-full ${
                  activeTab === "flyer"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-200 text-blue-700"
                }`}
              >
                Flyer Design
              </button>

              <button
                onClick={() => setActiveTab("social")}
                className={`px-6 py-3 rounded-full ${
                  activeTab === "social"
                    ? "bg-purple-600 text-white"
                    : "bg-purple-200 text-purple-700"
                }`}
              >
                Social Media
              </button>
            </div>
          )}

          {category === "uiux" && (
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => {
                  setActiveTab("mobile");
                  setShowAll(false);
                }}
                className={`px-6 py-3 rounded-full ${
                  activeTab === "mobile"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-200 text-blue-700"
                }`}
              >
                Mobile App
              </button>

              <button
                onClick={() => setActiveTab("web")}
                className={`px-6 py-3 rounded-full ${
                  activeTab === "web"
                    ? "bg-purple-600 text-white"
                    : "bg-purple-200 text-purple-700"
                }`}
              >
                Website App
              </button>
            </div>
          )}


        </div>

        {/* ================= FLYER ================= */}

        {activeTab === "flyer" && (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="mt-16 flex flex-col items-center"
  >
            <p className="text-sm mb-4">
              Terdapat {flyerImages.length} File Design
            </p>

            <button
  onClick={() => setShowAll(!showAll)}
  className={`mb-6 px-6 py-2 text-white rounded-full transition-all duration-300 ${
    showAll
      ? "bg-red-500 hover:bg-red-600"
      : "bg-green-500 hover:bg-green-600"
  }`}
>
  {showAll ? "Tutup Design" : "Lihat Design"}
</button>

            {showAll ? (
              <div className="grid md:grid-cols-2 gap-10">
                {flyerImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-[595px] h-[842px] object-contain shadow-xl rounded-2xl"
                  />
                ))}
              </div>
            ) : (
              <div
                className="bg-black rounded-[40px] p-5 shadow-2xl"
                style={{ width: "595px", height: "800px" }}
              >
                <div className="bg-white rounded-[32px] w-full h-full relative overflow-hidden">
                  {flyerImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      className="absolute w-full h-full object-contain transition-opacity duration-700"
                      style={{
                        opacity: index === currentIndex ? 1 : 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        )}

       

       {/* ================= MOBILE ================= */}

{activeTab === "mobile" && (
  <div className="mt-20 space-y-24">

    {mobileProjects.map((project, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT - MOCKUP */}
        <div className="flex justify-center">
          <div
            className="bg-black rounded-[40px] p-4 shadow-2xl transform hover:scale-105 transition duration-500"
            style={{ width: "360px", height: "750px" }}
          >
            <div className="bg-white w-full h-full rounded-[32px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {project.title}
          </h2>

          <div className="relative mb-8">

            <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              {project.desc}
            </p>

          </div>

          <div className="flex gap-6">

            <button
              onClick={() => setVideoUrl(project.video)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
            >
              Lihat Prototype
            </button>

            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
            >
              Link Figma
            </a>

          </div>
        </div>

      </motion.div>

    ))}

  </div>
)}

{/* ================= UIUX WEB ================= */}

{activeTab === "web" && (
  <div className="mt-20 space-y-28">

    {webProjects.map((project, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT MOCKUP */}
        <div className="w-full max-w-[600px] bg-black rounded-3xl p-4 shadow-2xl mx-auto">

  <div className="bg-white rounded-2xl overflow-hidden h-[380px] relative">

    <motion.img
      src={project.image}
      alt={project.title}
      className="w-full"
      initial={{ y: 0 }}
      animate={{ y: -600 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />

  </div>

</div>

        {/* RIGHT TEXT */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            {project.title}
          </h2>

          <div className="relative mb-8">

            <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

            <p className="text-gray-700 text-[15px] leading-relaxed text-justify bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              {project.desc}
            </p>

          </div>

          <div className="flex gap-6">

            <button
              onClick={() => setVideoUrl(project.video)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
            >
              Lihat Prototype
            </button>

            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
            >
              Link Figma
            </a>

          </div>

        </div>

      </motion.div>

    ))}

  </div>
)}

{/* ================= ADMIN ================= */}

{activeTab === "admin" && (
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-20 flex justify-center"
  >
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-12 max-w-3xl text-center overflow-hidden"
    >

      {/* GRADIENT GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-10 blur-3xl"></div>

      <div className="relative z-10">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-6">
          Admin{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Data Management
          </span>
        </h2>

        {/* IMAGE */}
        <motion.img
          src={adminData.image}
          alt="Admin"
          className="w-full rounded-3xl mb-8 shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* DESCRIPTION */}
        <div className="relative mb-8">

          <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

          <p className="text-gray-700 text-[15px] leading-relaxed text-justify bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg">
            {adminData.description}
          </p>

        </div>

        {/* BUTTON */}
        <motion.a
          href={adminData.excelLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
        >
          Lihat File Excel
        </motion.a>

      </div>
    </motion.div>
  </motion.div>
)}

{/* ================= WEB APPLICATION ================= */}

{category === "web-app" && (

  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: 0.25 }
      }
    }}
    className="mt-24 grid md:grid-cols-2 gap-16"
  >

    {webAppProjects.map((project, index) => (

      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 80 },
          show: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >

        {/* ===== TITLE DI ATAS CARD ===== */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-black-500 bg-clip-text"
        >
          {project.title}
        </motion.h2>

        {/* ===== CARD ===== */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden w-full"
        >

          {/* GRADIENT GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition duration-500 blur-2xl"></div>

          <div className="relative z-10 flex flex-col h-full">

            {/* IMAGE */}
            {project.image && (
              <div className="overflow-hidden rounded-2xl mb-6">
                <motion.img
                  src={project.image}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            )}

            {/* DESCRIPTION */}
            <p className="text-gray-500 mb-6 leading-relaxed text-justify">
              {project.desc}
            </p>

            {/* TECH */}
            <div className="mb-6 text-center">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm group-hover:bg-blue-600 group-hover:text-white transition">
                {project.tech}
              </span>
            </div>

            {/* BUTTON */}
            {project.demo !== "#" ? (
              <motion.button
                onClick={() => setVideoUrl(project.demo)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-xl transition"
              >
                Lihat Demo
              </motion.button>
            ) : (
              <a
                href={project.demo}
                className="mt-auto px-6 py-3 bg-gray-400 text-white rounded-full"
              >
                Lihat Demo
              </a>
            )}

          </div>

        </motion.div>

      </motion.div>

    ))}

  </motion.div>

)}
  

        {/* ================= VIDEO POPUP ================= */}

        {videoUrl && (
          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-[900px] max-w-[95%] rounded-xl"
            />

            <button
              onClick={() => setVideoUrl(null)}
              className="absolute top-10 right-10 text-white text-4xl"
            >
              ✕
            </button>

          </div>
        )}

        {/* ================= SOCIAL ================= */}

        {activeTab === "social" && (

<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }}
  className="mt-16"
>

  <SocialPost />

</motion.div>

)}

        <div className="text-center text-gray-400 text-sm mt-20">
          © 2026 Detailed Portfolio. All rights reserved.
        </div>

      </div>
    </div>
  );
}