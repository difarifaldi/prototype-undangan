import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import b3 from "../assets/img/foto1.jpg";
import bg from "../assets/img/bg.png";
import leaf from "../assets/img/leaf.png";

const Hero = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2027-06-12T00:00:00");
    const now = new Date();
    const difference = weddingDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center  bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
      {/* Daun */}
      <Motion.img src={leaf} alt="Daun Kiri" className="w-52 absolute top-0 left-0" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0 }} />

      <Motion.img
        src={leaf}
        alt="Daun Kanan"
        className="w-52 absolute top-0 right-0"
        initial={{ opacity: 0, x: 100, scaleX: -1 }}
        whileInView={{ opacity: 1, x: 0, scaleX: -1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Judul */}
      <Motion.h1 className="text-sm font-bold text-blue-900" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.4 }}>
        THE WEDDING OF
      </Motion.h1>

      {/* Foto */}
      <Motion.div
        className="w-2/5 h-auto rounded-full border-4 border-gray-600 overflow-hidden mt-4 mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img src={b3} alt="Profile" className="w-full h-full object-cover" />
      </Motion.div>

      {/* Nama */}
      <Motion.p className="text-4xl font-playball mt-4 text-blue-950" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.9 }}>
        Difa & Nazwa
      </Motion.p>

      {/* Deskripsi */}
      <Motion.p className="text-sm text-gray-500 mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 1.1 }}>
        Kami berharap Anda menjadi bagian dari hari istimewa kami!
      </Motion.p>

      {/* Countdown */}
      <Motion.div className="grid grid-cols-4 px-12 gap-2 mt-8 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, delay: 1.4 }}>
        {["Hari", "Jam", "Menit", "Detik"].map((label, i) => {
          const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
          return (
            <div key={label} className="bg-white p-2 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          );
        })}
      </Motion.div>

      {/* Tanggal */}
      <Motion.p className="text-sm font-bold mt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 1.7 }}>
        Sabtu, 12 Juni 2027
      </Motion.p>

      <div className="w-full rotate-180 -mb-[10px]">
        <svg className="w-full block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#172554"
            d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,160C480,139,549,149,617,154.7C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,64C1097.1,53,1166,75,1234,80C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
