import iconflower from "../assets/iconflower.png";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <img src={iconflower} alt="flower" className="w-12 h-8" />
            <p className="text-pink-100 font-mono text-2xl md:text-4xl font-bold">
              KIRILL SHEVCHENKO
            </p>
            <img src={iconflower} alt="flower" className="w-12 h-8" />
          </div>
          <p className="text-gray-400 text-xs font-mono">
            @ {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
