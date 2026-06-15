import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "CERTIFICATES", link: "#certificates" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };
  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <nav
        className="flex items-center justify-center bg-linear-to-br
        from-pink-200 to-rose-300 backdrop-blur-lg rounded-2xl px-4
        lg:px-8 py-2 shadow-lg font-sans"
      >
        <div
          className="flex items-center justify-between w-full
            space-x-6 lg:space-x-8"
        >
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-mono font-extrabold text-pink-600">
              KI<span className="text-gray-900">RILL</span>
            </span>
          </a>
          {/* Navigation  */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative font-semibold font-mono tracking-wide"
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? `text-pink-800`
                      : `text-gray-800 hover:text-pink-600`
                  }`}
                >
                  {item.name}
                </span>
                {activeSection === item.name.toLowerCase() && (
                  <div
                    className="absolute -bottom-1 left-0 right-0
                 h-0.5 bg-linear-to-r from-pink-600 to-rose-800
                 rounded-full"
                  ></div>
                )}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="#contact"
              className="hidden lg:block px-6 py-2 font-semibold font-mono
                tracking-wide rounded-full bg-linear-to-r from-pink-400 to-pink-600
                text-pink-50 shadow-md hover:shadow-lg transition-shadow"
            >
              Hire Me
            </a>
          </div>
          <div className="flex lg:hidden items-center space-x-4 px-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 
            lg:hidden bg-white/95 backdrop-blur-lg rounded-xl
            shadow-lg border border-gray-200"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="block"
                >
                  <div
                    className={`py-3 px-4 rounded-lg text-center
                        ${
                          activeSection === item.name.toLowerCase()
                            ? "bg-pink-50"
                            : ""
                        }`}
                  >
                    <span
                      className={`font-medium ${
                        activeSection === item.name.toLowerCase()
                          ? "text-pink-700"
                          : "text-gray-800"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-center font-semibold
                rounded-lg bg-linear-to-r from-pink-600 to-rose-700
                text-white shadow-md"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
