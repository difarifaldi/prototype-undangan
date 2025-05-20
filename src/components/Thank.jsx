import { motion as Motion } from "framer-motion";
import b3 from "../assets/img/g2.jpg";
import bg from "../assets/img/bg.png";

const Thank = () => {
  return (
    <section className="relative text-center  bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full ">
        <svg className="w-full block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#172554"
            d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,160C480,139,549,149,617,154.7C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,64C1097.1,53,1166,75,1234,80C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>
      <div className=" px-12 pb-12">
      {/* Foto */}
      <Motion.div
        className="w-2/5 h-auto rounded-full border-4 border-gray-600 overflow-hidden mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={b3} alt="Profile" className="w-full h-full object-cover" />
      </Motion.div>

      {/* Deskripsi */}
      <Motion.p className="text-sm text-gray-500 mt-4 px-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.4 }}>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
      </Motion.p>

      {/* Judul */}
      <Motion.h1 className="text-3xl mt-4 font-tangerine font-bold" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.5 }}>
        Wassalamu'alaikum Wr. Wb.
      </Motion.h1>

      {/* Nama */}
      <Motion.p className="text-4xl font-playball mt-4 text-blue-950" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.6 }}>
        Difa & Nazwa
      </Motion.p>
       </div>
    </section>
  );
};

export default Thank;
