import { useEffect, useState } from "react";
import bgImage from "../assets/img/foto2.jpg";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const Main = ({ onOpen }) => {
  const [namaUndangan, setNamaUndangan] = useState("");

  useEffect(() => {
    //const path = window.location.pathname;

    //karena pakai hashrouter di main.jsx
    const path = window.location.hash;
    const parts = path.split("/");
    const lastSegment = parts[parts.length - 1]; // ambil "namanya"

    // Ganti %20 jadi spasi jika ada
    const decoded = decodeURIComponent(lastSegment);

    setNamaUndangan(decoded);
  }, []);
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* Bagian Gambar dengan Animasi */}
      <Motion.div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {/* Efek Gelombang Pertama (Transparan Putih) */}
        <Motion.svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <path
            fill="rgba(255, 255, 255, 0.7)"
            d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,160C480,139,549,149,617,154.7C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,64C1097.1,53,1166,75,1234,80C1302.9,85,1371,75,1406,69.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </Motion.svg>

        {/* Efek Gelombang Kedua (Putih) */}
        <Motion.svg className="absolute bottom-[-3px] w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <path
            fill="#ffffff"
            d="M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,90.7C480,85,549,107,617,122.3C685.7,138,754,160,823,160C891.4,160,960,138,1029,133.3C1097.1,128,1166,139,1234,144C1302.9,149,1371,149,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </Motion.svg>
      </Motion.div>

      {/* Konten kiri */}
      <div className="w-full max-w-md mx-auto px-4 text-left">
        {/* The Wedding Of */}
        <Motion.p className="text-xs text-amber-800 tracking-wider" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          THE WEDDING OF
        </Motion.p>

        {/* Nama pasangan */}
        <Motion.p className="text-4xl font-semibold mt-2 font-italiana text-blue-950" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
          Difa & Nazwa
        </Motion.p>

        {/* Deskripsi */}
        <Motion.p className="text-sm text-gray-600 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
          Kepada Yth. Bapak/Ibu/Saudara/i
        </Motion.p>

        {/* Nama undangan */}
        <Motion.p className="text-xl font-semibold text-amber-700 mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          {namaUndangan || "Nama Undangan"}
        </Motion.p>

        {/* Tombol */}
        <Motion.button
          onClick={onOpen}
          className="flex items-center gap-2 px-4 py-1.5 mt-5 bg-blue-900 text-white text-sm font-medium rounded-full shadow hover:bg-blue-800 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <FaEnvelopeOpenText />
          Buka Undangan
        </Motion.button>
      </div>
    </section>
  );
};

export default Main;
