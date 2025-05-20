import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import brilogo from "../assets/img/bri.png";
import mandirilogo from "../assets/img/mandiri.webp";
import { FaCopy } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.5 },
  transition: { duration: 0.8, delay },
});

const dataCard = [
  {
    id: 1,
    image: brilogo,
    name: "Nazwa Ria Shabrina",
    rekening_no: "1234 123 90",
  },
  {
    id: 2,
    image: mandirilogo,
    name: "Muhammad Difa Rifaldi",
    rekening_no: "987 4232 12",
  },
];

const Wallet = () => {
  const [copiedRekening, setCopiedRekening] = useState(null);

  const handleCopy = (noRekening) => {
    navigator.clipboard.writeText(noRekening).then(() => {
      setCopiedRekening(noRekening);
      setTimeout(() => setCopiedRekening(null), 700);
    });
  };

  const [showBankCard, setShowBankCard] = useState(null);

  return (
    <section className="max-w-2xl mx-auto">
      <div className="bg-blue-950 text-white text-center">
        {/* SVG Awan Atas */}

        {/* Live Streaming */}
        <div className="px-8 text-center">
          <Motion.p className="text-6xl font-tangerine leading-snug" {...fadeInUp(0)}>
            Live Streaming
          </Motion.p>
          <Motion.p className="text-xs leading-relaxed mt-2 max-w-[300px] mx-auto" {...fadeInUp(0.2)}>
            Kami mengundang Bapak/Ibu/Saudara/i untuk menyaksikan Pernikahan kami secara Virtual yang disiarkan langsung melalui Sosial Media di bawah ini
          </Motion.p>
          <Motion.p className="text-xs leading-relaxed mt-2 font-bold" {...fadeInUp(0.3)}>
            Minggu, 31 Agustus 2025
          </Motion.p>
          <Motion.p className="text-xs leading-relaxed mt-2 font-bold" {...fadeInUp(0.4)}>
            Pukul 09.00 WIB
          </Motion.p>
          <Motion.div className="flex justify-center" {...fadeInUp(0.5)}>
            <a href="https://www.instagram.com/difa_rifaldi/" target="_blank" rel="noopener noreferrer">
              <Motion.button className="flex items-center gap-2 px-4 py-1.5 mt-5 bg-white text-black text-sm font-medium rounded-full shadow transition-all duration-300">
                <FaInstagram />
                Tonton Live
              </Motion.button>
            </a>
          </Motion.div>
        </div>

        {/* Amplop Digital */}
        <div className="px-8  text-center">
          <Motion.p className="text-6xl font-tangerine leading-snug" {...fadeInUp(0)}>
            Amplop Digital
          </Motion.p>
          <Motion.p className="text-xs leading-relaxed mt-2 max-w-[300px] mx-auto" {...fadeInUp(0.2)}>
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. <br /> Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </Motion.p>
          <Motion.div className="flex justify-center" {...fadeInUp(0.4)}>
            <Motion.button className="flex items-center gap-2 px-4 py-1.5 mt-5 bg-white text-black text-sm font-medium rounded-full shadow transition-all duration-300" onClick={() => setShowBankCard((prev) => !prev)}>
              <GoGift />
              {showBankCard ? "Tutup Hadiah" : "Kirim Hadiah"}
            </Motion.button>
          </Motion.div>

          <AnimatePresence>
            {showBankCard && (
              <Motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                {/* Amplop Digital Card List */}
                {dataCard.map((card, index) => (
                  <Motion.div key={card.id} className="mt-4 text-left mx-auto bg-white rounded-xl shadow-lg py-6 px-4 border-2 border-slate-200 max-w-72" {...fadeInUp(0.6 + index * 0.1)}>
                    <div className="flex justify-end">
                      <img src={card.image} className="w-1/3" alt={`Logo ${card.name}`} />
                    </div>

                    <div className="space-y-2 text-sm text-gray-700 font-lato mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400">{card.rekening_no}</p>
                      </div>
                      <p className="text-gray-400">{card.name}</p>
                    </div>
                    <div className="flex justify-end">
                      <button onClick={() => handleCopy(card.rekening_no)} className="text-xs">
                        <div className="bg-gray-400 text-white py-1 px-2 flex items-center rounded-sm">
                          {copiedRekening === card.rekening_no ? (
                            <>
                              Berhasil Disalin <FaThumbsUp className="ml-1" />
                            </>
                          ) : (
                            <>
                              <FaCopy className="mr-1" />
                              Salin
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SVG Awan Bawah */}
      </div>
    </section>
  );
};

export default Wallet;
