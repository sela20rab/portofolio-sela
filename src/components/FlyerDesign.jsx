import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

/* Import gambar */
import img1 from "../assets/flyer/1.png";
import img2 from "../assets/flyer/2.png";
import img3 from "../assets/flyer/3.png";
import img4 from "../assets/flyer/4.png";
import img5 from "../assets/flyer/5.png";
import img6 from "../assets/flyer/6.png";

export default function FlyerDesign() {
  const navigate = useNavigate();
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <Navbar />

        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold">Flyer Design Projects</h1>

        <p className="text-gray-500 text-sm mt-2">
          {images.length} File Design Ditemukan
        </p>

        {/* ================= MOCKUP FLYER ================= */}
        <div className="mt-12 flex justify-center">
          {/* CONTAINER FLYER */}
          <div className="bg-black rounded-3xl p-5 shadow-2xl w-full max-w-[450px] md:max-w-[595px] flex justify-center">
            {/* LAYAR FLYER */}
            <div className="bg-white rounded-2xl w-full h-auto overflow-y-auto p-4">
              <div className="flex flex-col gap-6">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full h-auto object-contain rounded-xl shadow-md"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}