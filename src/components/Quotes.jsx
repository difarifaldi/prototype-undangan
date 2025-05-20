import { motion as Motion } from "framer-motion";

const Quotes = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="bg-blue-950 text-white text-center relative  ">
        {/* SVG Awan Atas */}

        {/* Konten Kutipan */}
        <div className="px-8 py-12">
          <Motion.p className="text-sm leading-relaxed" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 1 }}>
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang”
          </Motion.p>
          <Motion.p className="text-xl mt-4 leading-snug" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 1, delay: 0.4 }}>
            QS Ar-Rum 21
          </Motion.p>
        </div>
      </div>

      {/* SVG Awan Bawah */}
    </section>
  );
};

export default Quotes;
