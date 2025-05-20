import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const WishesForm = () => {
  const [ucapan, setUcapan] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [ucapanList, setUcapanList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ucapan.trim()) {
      setUcapanList([...ucapanList, ucapan]);
      setUcapan("");
      setShowModal(true);
    }
  };
  return (
    <section className="max-w-2xl mx-auto">
      <div className="bg-blue-950 text-white text-center relative  ">
        {/* SVG Awan Atas */}

        {/* Konten  */}
        <div className="px-8 text-center">
          <Motion.p className="text-4xl font-tangerine font-bold mb-6" viewport={{ once: false, amount: 0.5 }} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Ucapan dan Doa
          </Motion.p>

          <Motion.form onSubmit={handleSubmit} className="flex flex-col items-center gap-4" viewport={{ once: false, amount: 0.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <textarea className="w-full text-black max-w-md p-4 rounded shadow border focus:outline-none focus:ring" rows="4" placeholder="Tulis ucapan dan doa di sini..." value={ucapan} onChange={(e) => setUcapan(e.target.value)} />
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
              Kirim
            </button>
          </Motion.form>

          {/* Modal */}
          <AnimatePresence>
            {showModal && (
              <Motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" viewport={{ once: false, amount: 0.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Motion.div
                  className="bg-white rounded-lg p-6 max-w-md w-full text-left shadow-lg"
                  viewport={{ once: false, amount: 0.5 }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h2 className="text-xl font-bold mb-4 text-black">Ucapan Terkirim 🎉</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 max-h-60 overflow-auto">
                    {ucapanList.map((u, index) => (
                      <li key={index}>{u}</li>
                    ))}
                  </ul>
                  <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800" onClick={() => setShowModal(false)}>
                    Tutup
                  </button>
                </Motion.div>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SVG Awan Bawah */}
      </div>
    </section>
  );
};

export default WishesForm;
