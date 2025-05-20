import { useState, useRef, useEffect } from "react";
import Couple from "../components/Couple";
import Hero from "../components/Hero";
import Quotes from "../components/Quotes";
import Schedule from "../components/Schedule";
import Wallet from "../components/Wallet";
import Gallery from "../components/Gallery";
import Story from "../components/Story";
import WishesForm from "../components/WishesForm";
import Thank from "../components/Thank";
import Footer from "../components/Footer";
import lagu from "../assets/audio/lagu.mp3";
import { FaPlay, FaPause } from "react-icons/fa";

const Invitation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Autoplay bisa dibatasi browser, jadi kita pakai event listener untuk memastikan
    const audio = audioRef.current;
    if (audio) {
      const playHandler = () => {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
        window.removeEventListener("click", playHandler);
      };
      window.addEventListener("click", playHandler);
    }
  }, []);
  return (
    <>
      <Hero />
      <Quotes />
      <Couple />
      <Schedule />
      <Wallet />
      <Gallery />
      <Story />
      <WishesForm />
      <Thank />
      <Footer />

      {/* Audio element (hidden) */}
      <audio ref={audioRef} src={lagu} loop />

      {/* Container untuk tombol sticky kanan bawah */}
      <div className="sticky bottom-4">
        <div className="flex justify-end pr-4">
          <button onClick={toggleAudio} className={`bg-blue-400 text-white rounded-full p-2 shadow-lg hover:scale-105 transition duration-300 z-50 ${isPlaying ? "animate-bounceSmall animate" : ""}`} aria-label="Toggle Music">
            {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Invitation;
