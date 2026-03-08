import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= IMPORT GAMBAR ================= */
import s1 from "../assets/social/s1.png";
import s2 from "../assets/social/s2.png";
import s3 from "../assets/social/s3.png";
import s4 from "../assets/social/s4.png";
import s5 from "../assets/social/s5.png";
import s6 from "../assets/social/s6.png";

import f1 from "../assets/social/f1.png";
import f2 from "../assets/social/f2.png";
import f3 from "../assets/social/f3.png";
import f4 from "../assets/social/f4.png";
import f5 from "../assets/social/f5.png";
import f6 from "../assets/social/f6.png";

import m1 from "../assets/social/m1.png";
import m2 from "../assets/social/m2.png";
import m3 from "../assets/social/m3.png";
import m4 from "../assets/social/m4.png";
import m5 from "../assets/social/m5.png";
import m6 from "../assets/social/m6.png";

export default function SocialPost() {

  const themes = [
    {
      name: "Skincare Beasel",
      images: [s1, s2, s3, s4, s5, s6],
      desc: "Desain social media feed Beasel Skincare dirancang dengan konsep visual yang cerah, bersih, dan modern untuk merepresentasikan produk perawatan kulit yang alami serta berkualitas. Setiap konten menyampaikan informasi penting seperti manfaat produk, kandungan utama skincare, paket perawatan, hingga cara penggunaan yang mudah dipahami oleh audiens. Penggunaan warna biru langit, ilustrasi awan, serta komposisi produk yang menonjol memberikan kesan fresh, natural, dan terpercaya. Selain itu, terdapat juga konten edukatif serta visual transformasi sebelum dan sesudah penggunaan produk yang bertujuan memperkuat pesan bahwa Beasel mampu membantu merawat dan menjaga kesehatan kulit secara efektif.",
    },
    {
      name: "Food Brand EatSel",
      images: [f1, f2, f3, f4, f5, f6],
      desc: "Desain social media feed EatSel mengangkat konsep makanan sehat yang praktis namun tetap lezat dan menarik secara visual. Komposisi desain didominasi oleh warna hangat seperti oranye dan kuning yang menciptakan kesan energik, segar, dan menggugah selera. Konten yang ditampilkan mencakup pengenalan brand, solusi bagi masyarakat yang ingin menjalani pola makan sehat tanpa proses yang rumit, pilihan menu makanan sehat, serta berbagai keunggulan produk seperti rendah minyak, fresh daily, dan cocok untuk diet maupun gaya hidup sehat. Tata letak visual dibuat dinamis dengan perpaduan foto makanan, model, serta elemen grafis modern sehingga pesan brand dapat tersampaikan dengan jelas dan menarik.",
    },
    {
      name: "Mental Health Awareness",
      images: [m1, m2, m3, m4, m5, m6],
      desc: "Desain social media feed Mental Health Awareness dibuat dengan pendekatan visual yang emosional, edukatif, dan informatif untuk meningkatkan kesadaran masyarakat mengenai pentingnya kesehatan mental. Penggunaan warna gradasi ungu dan pink memberikan nuansa empati, ketenangan, serta refleksi terhadap isu psikologis yang sering dialami oleh banyak orang. Konten dalam feed ini menyampaikan berbagai informasi seperti pengertian mental health, tanda-tanda kondisi mental yang tidak stabil, langkah sederhana untuk menjaga kesehatan mental, hingga pesan motivasi bahwa proses pemulihan membutuhkan waktu, dukungan, dan penerimaan diri. Elemen visual seperti ekspresi karakter manusia, ilustrasi emosi, serta tipografi yang kuat membantu memperkuat pesan edukatif agar lebih mudah dipahami dan relatable bagi audiens.",
    },
  ];

  const [indices, setIndices] = useState([0, 0, 0]);
  const [openIndex, setOpenIndex] = useState(null);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((index, i) =>
          index === themes[i].images.length - 1 ? 0 : index + 1
        )
      );
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-20 space-y-28 px-4 md:px-6">

      {themes.map((theme, themeIndex) => (
        <motion.div
          key={themeIndex}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold mb-8">{theme.name}</h3>

              {/* MOCKUP */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-black rounded-3xl p-4 shadow-2xl w-full max-w-[400px] md:max-w-[450px]"
              >
                <div className="bg-white rounded-2xl w-full h-auto relative overflow-hidden aspect-[1080/1350]">
                  {theme.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
                      style={{ opacity: imgIndex === indices[themeIndex] ? 1 : 0 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center">
              <div className="relative mb-8">
                <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                <p className="text-gray-700 text-[15px] leading-relaxed text-justify bg-white/70 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 max-w-full">
                  {theme.desc}
                </p>
              </div>

              <button
                onClick={() => setOpenIndex(openIndex === themeIndex ? null : themeIndex)}
                className={`px-8 py-3 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  openIndex === themeIndex
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {openIndex === themeIndex ? "Tutup Design" : "Lihat Design"}
              </button>
            </div>
          </div>

          {/* ================= EXPAND DESIGN ================= */}
          {openIndex === themeIndex && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {theme.images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl shadow-xl w-full hover:scale-105 transition duration-300 aspect-[1080/1350] object-cover"
                />
              ))}
            </div>
          )}

        </motion.div>
      ))}

    </div>
  );
}