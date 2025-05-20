import { FaLocationDot } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";

import bg from "../assets/img/bg.png";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Schedule = () => {
  return (
    <section className="max-w-2xl mx-auto   bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
      

      {/* Akad Nikah */}
      <Motion.div className="text-center  bg-transparent rounded-xl shadow-lg p-6 mx-12 border-2 border-blue-200 min-h-[180px]" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} custom={0}>
        <p className="font-tangerine text-amber-500 text-5xl font-bold mb-4">Akad Nikah</p>
        <div className="space-y-3 text-sm text-gray-700 font-lato">
          <p className="font-semibold">Sabtu, 12 Juni 2027</p>
          <p className="italic text-gray-400">Pukul 13.00 WIB</p>
          <p className="italic text-gray-400">Alamat: Masjid As Sofia</p>
        </div>
      </Motion.div>

      {/* Resepsi */}
      <Motion.div className="text-center mt-8  bg-transparent rounded-xl shadow-lg p-6 mx-12 border-2 border-blue-200 min-h-[180px]" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} custom={0.2}>
        <p className="font-tangerine text-amber-500 text-5xl font-bold mb-4">Resepsi</p>
        <div className="space-y-3 text-sm text-gray-700 font-lato">
          <p className="font-semibold">Sabtu, 12 Juni 2027</p>
          <p className="italic text-gray-400">Pukul 15.00 WIB</p>
          <p className="italic text-gray-400">Alamat: Kebun Raya Bogor</p>
        </div>
      </Motion.div>

      {/* Tombol */}
      <Motion.div className="flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} custom={0.4}>
        <a href="https://maps.app.goo.gl/py1iNHp7ycDnvBmUA" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 px-4 py-1.5 my-5 bg-blue-900 text-white text-sm font-medium rounded-full shadow hover:bg-blue-800 transition">
            <FaLocationDot />
            Lihat Lokasi
          </button>
        </a>
      </Motion.div>
      <div className="w-full -mb-[10px]">
        <svg className="w-full block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#172554"
            d="M0,256L21.8,240C43.6,224,87,192,131,186.7C174.5,181,218,203,262,208C305.5,213,349,203,393,165.3C436.4,128,480,64,524,58.7C567.3,53,611,107,655,128C698.2,149,742,139,785,154.7C829.1,171,873,213,916,245.3C960,277,1004,299,1047,293.3C1090.9,288,1135,256,1178,234.7C1221.8,213,1265,203,1309,208C1352.7,213,1396,235,1418,245.3L1440,256L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Schedule;
