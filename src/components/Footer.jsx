import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="bg-blue-950 text-white text-center relative px-6 py-4 rounded-t-md">
        <p className="text-sm mb-2">Made by Difa Rifaldi to Nazwa Ria With ❤</p>
        <div className="flex justify-center gap-4 text-xl">
          <a href="https://wa.me/6281547161320" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/difa_rifaldi/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
