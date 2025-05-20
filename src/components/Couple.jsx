import b3 from "../assets/img/foto3.jpg";
import b4 from "../assets/img/foto4.jpg";
import bg from "../assets/img/bg.png";
import { motion as Motion } from "framer-motion";
import dividing from "../assets/img/asset.png";

const Couple = () => {
  return (
    <section className="max-w-2xl mx-auto  bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full ">
        <svg className="w-full block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#172554"
            d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,160C480,139,549,149,617,154.7C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,64C1097.1,53,1166,75,1234,80C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>
      <div className="text-center px-6">
        {/* Bismillah */}
        <Motion.p className="text-xl font-arabic text-gray-800 mb-4" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </Motion.p>

        {/* Salam pembuka */}
        <Motion.p className="text-3xl font-tangerine font-bold text-gray-900" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
          Assalamu'alaikum Wr. Wb
        </Motion.p>
        <Motion.p className="text-sm text-gray-700 mt-2 leading-relaxed max-w-md mx-auto" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
          Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
        </Motion.p>

        {/* Mempelai pria */}
        <Motion.div
          className="w-32 h-48 rounded-full border-4 border-gray-600 overflow-hidden mt-6 mx-auto"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <img src={b3} alt="Pria" className="w-full h-full object-cover" />
        </Motion.div>
        <Motion.p className="text-2xl font-playball mt-4 text-gray-800" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: false }}>
          Muhammad Difa Rifaldi
        </Motion.p>
        <Motion.p className="text-xs text-gray-400 max-w-[200px] mx-auto mt-2 leading-snug" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} viewport={{ once: false }}>
          Putra Pertama Bapak Satria Fanni & Ibu Dede Triana
        </Motion.p>

        {/* Simbol & */}
        <Motion.p className="font-great_vibes font-bold text-4xl my-8 text-gray-600" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }} viewport={{ once: false }}>
          &
        </Motion.p>

        {/* Mempelai wanita */}
        <Motion.div
          className="w-32 h-48 rounded-full border-4 border-gray-600 overflow-hidden mx-auto"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: false }}
        >
          <img src={b4} alt="Wanita" className="w-full h-full object-cover" />
        </Motion.div>
        <Motion.p className="text-2xl font-playball mt-4 text-gray-800" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.6 }} viewport={{ once: false }}>
          Nazwa Ria Shabrina
        </Motion.p>
        <Motion.p className="text-xs text-gray-400 max-w-[200px] mx-auto mt-2 leading-snug" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.8 }} viewport={{ once: false }}>
          Putri Ketiga Bapak Enup Sanupri & Ibu Khadijah
        </Motion.p>
      </div>
      <Motion.img src={dividing} alt="Daun Kiri" className="w-full my-6" initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2 }} viewport={{ once: false }} />
    </section>
  );
};

export default Couple;
