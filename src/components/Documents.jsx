import Navbar from "./Navbar";
import uat from "../assets/documents/uat.png";
import lap from "../assets/documents/lap.png";
import user from "../assets/documents/user.png";
import srs from "../assets/documents/srs.png";

export default function Documents() {

  function DocumentCard({ image, title, link }) {
    return (
      <div
        onClick={() => window.open(link, "_blank")}
        className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
      >
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">
            Click to view complete documentation in Google Drive.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fb] to-[#e3ecf7] pt-32">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">
          Technical Writing Documents
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <DocumentCard
            image={uat}
            title="Dokumen UAT"
            link="https://drive.google.com/drive/folders/1b9zqUsnkNdcYhXmVGutd2M1o37bVvmVJ"
          />

          <DocumentCard
            image={lap}
            title="Dokumen Laporan"
            link="https://drive.google.com/drive/folders/18C9U-ZMyWGkxcG98JxG3GK2D_EUSPc_A"
          />

          <DocumentCard
            image={user}
            title="Dokumen User Manual"
            link="https://drive.google.com/drive/folders/1cv9Y-QSHUCg3eLfge1as9IX7olJ3vue3"
          />

          <DocumentCard
            image={srs}
            title="Dokumen SRS"
            link="https://drive.google.com/drive/folders/1f3YBg4qts1bhCnCxq85CvphGz17p-Yv4"
          />

        </div>
      </div>
    </div>
  );
}