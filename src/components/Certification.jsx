import { useState } from "react";
import Navbar from "./Navbar";

import bpsdm from "../assets/certifications/bpsdm.jpg";
import its from "../assets/certifications/its-data-analytics.jpg";
import mos from "../assets/certifications/mos.jpg";
import toefl from "../assets/certifications/toefl.jpg";

export default function Certification() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Sertifikat Magang - BPSDM",
      image: bpsdm,
      description:
        "Sertifikat magang di Badan Pengembangan Sumber Daya Manusia dengan fokus pada pengolahan data dan administrasi digital.",
    },
    {
      title: "ITS - Information Technology Specialist (Data Analytics)",
      image: its,
      description:
        "Sertifikasi kompetensi di bidang Data Analytics meliputi pengolahan data, visualisasi, dan analisis menggunakan tools modern.",
    },
    {
      title: "MOS - Microsoft Office Specialist",
      image: mos,
      description:
        "Sertifikasi resmi Microsoft yang membuktikan keahlian dalam penggunaan Microsoft Office untuk kebutuhan profesional.",
    },
    {
      title: "TOEFL Certificate",
      image: toefl,
      description:
        "Sertifikat kemampuan Bahasa Inggris (TOEFL) sebagai bukti kompetensi komunikasi dalam konteks akademik dan profesional.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef4fb] to-[#dde9f8] pt-32">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">
          My Certifications
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(cert.image)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition hover:scale-[1.02]"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}