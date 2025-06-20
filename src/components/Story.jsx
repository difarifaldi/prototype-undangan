import { FaLocationDot } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";
import st1 from "../assets/img/foto11.png";
import st2 from "../assets/img/st2.jpg";
import st3 from "../assets/img/g4.jpg";
import st4 from "../assets/img/st4.jpg";
import st7 from "../assets/img/g10.jpg";
import st8 from "../assets/img/st8.png";
import bg from "../assets/img/bg.png";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const storyItems = [
  {
    title: "Awal Bertemu",
    img: st2,
    desc: "Detik pertama pertemuan yang menyulam benang-benang takdir, membuka lembaran baru yang penuh harapan dan kehangatan.",
  },
  {
    title: "Masa Sulit",
    img: st3,
    desc: "Saat badai datang mengguncang, justru itulah yang menguatkan tali kasih dan meneguhkan rasa untuk terus bertahan bersama.",
  },
  {
    title: "Perjuangan",
    img: st4,
    desc: "Langkah demi langkah penuh liku, melewati tantangan dengan tekad dan cinta yang tak pernah pudar, mengukir kisah yang tak terlupakan.",
  },
  {
    title: "Pengikatan Jiwa",
    img: st7,
    desc: "Sebuah ikatan suci yang mengikat dua jiwa, menyatu dalam cinta yang tulus, menjadi satu dalam setiap nafas dan doa.",
  },
  {
    title: "Hari Bahagia",
    img: st8,
    desc: "Hari yang dinanti, saat cinta dituangkan dalam janji suci, menyulam harapan untuk masa depan yang penuh berkah dan kebahagiaan abadi.",
  },
];

const Story = () => {
  return (
    <section className="max-w-2xl mx-auto bg-cover bg-center " style={{ backgroundImage: `url(${bg})` }}>
      <Motion.p className="font-playball pt-12 text-blue-950 text-4xl text-center" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} custom={0}>
        Kisah Cinta
      </Motion.p>

      <Motion.img src={st1} alt="Foto Kisah" className="w-4/5 mx-auto mt-4 mb-16" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} custom={0} />

      {storyItems.map((item, index) => {
        const isEven = index % 2 === 1;

        return (
          <div key={index} className="relative mb-4 mx-4">
            {/* Baris judul + angka */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center my-2">
              {/* Judul kiri atau kosong */}
              <div className={`${isEven ? "" : "text-right"} text-base font-bold text-blue-950`}>{!isEven && item.title}</div>

              {/* Angka di tengah */}
              <div className="flex justify-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-950 text-white font-bold text-sm mx-2">{index + 1}</div>
              </div>

              {/* Judul kanan atau kosong */}
              <div className={`${isEven ? "text-left" : ""} text-base font-bold text-blue-950`}>{isEven && item.title}</div>
            </div>

            {/* Konten gambar + teks selang seling */}
            <Motion.div className={`flex flex-row items-center gap-4 mt-4 ${isEven ? "flex-row-reverse" : ""}`} initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} custom={0}>
              <img src={item.img} alt="Foto Kisah" className="w-1/2 h-40 rounded-md object-cover" />
              <p className="text-gray-500 text-sm text-justify w-1/2">{item.desc}</p>
            </Motion.div>
          </div>
        );
      })}

      <div className="w-full rotate-180 mb-[-1px]">
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

export default Story;
