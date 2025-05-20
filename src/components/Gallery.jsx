import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import g11 from "../assets/img/g11.jpg";
import g2 from "../assets/img/g2.jpg";
import g8 from "../assets/img/g8.jpg";
import g9 from "../assets/img/g9.jpg";
import g1 from "../assets/img/g1.jpg";
import bg from "../assets/img/bg.png";

const images = [
  { src: g1, alt: "Foto 1", height: "h-52", direction: "left" },
  { src: g8, alt: "Foto 2", height: "h-56", direction: "right" },
  { src: g2, alt: "Foto 3", height: "h-40", direction: "left" },
  { src: g9, alt: "Foto 4", height: "h-36", direction: "right" },
  { src: g11, alt: "Foto 5", height: "h-36", direction: "left" },
];

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariant = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
});

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref} className="bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg})` }}>
       <div className="w-full ">
        <svg className="w-full block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#172554"
            d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,160C480,139,549,149,617,154.7C685.7,160,754,160,823,138.7C891.4,117,960,75,1029,64C1097.1,53,1166,75,1234,80C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L0,0Z"
          />
        </svg>
      </div>
      <div className="px-4 py-6">
        {/* Judul */}
        <Motion.p className="font-tangerine text-5xl text-center mb-4" variants={textVariant} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}>
          Galeri Foto
        </Motion.p>

        {/* Deskripsi */}
        <Motion.p className="font-sans text-sm text-justify mb-4 text-gray-600 px-3" variants={textVariant} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={1}>
          Tidak ada yang spesial dalam cerita kami. Tapi kami sangat spesial untuk satu sama lain. Dan Kami bersyukur, dipertemukan Allah diwaktu terbaik, Kini kami menanti hari istimewa kami.
        </Motion.p>

        {/* Galeri Gambar */}
        <div className="columns-2 gap-2 space-y-2">
          {images.map((img, index) => (
            <Motion.div key={index} className="break-inside-avoid rounded-md overflow-hidden relative group" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={imageVariant(img.direction)} custom={index}>
              <img src={img.src} alt={img.alt} className={`w-full ${img.height} object-cover`} />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
