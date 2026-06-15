import { useState } from "react";
import iconflower from "../assets/iconflower.png";
import phoneImg from "../assets/phoneImg.png";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 font-mono overflow-hidden scroll-m-8"
    >
      <div className="max-w-6xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-2"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={iconflower} alt="flower" className="w-12 h-8" />
            <h2
              className="text-3xl md:text-5xl font-bold bg-linear-to-r
            from-pink-400 to-rose-400 bg-clip-text text-transparent"
            >
              Contact Me
            </h2>
            <img src={iconflower} alt="flower" className="w-12 h-8" />
          </div>
          <p className="text-gray-300">Get in touch with me</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-100 lg:h-120 w-full"
          >
            <img
              src={phoneImg}
              alt="Contact"
              className="w-full
              drop-shadow-[0_0_40px_rgba(225,0,128,0.8)]"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="lg:w-1/2 w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-3 bg-white/5
                border border-white/10 rounded-xl text-white 
                placeholder-gray-400 focus:border-pink-500
                focus:outline-none transition"
                required
              />
              {/* EMAIL */}
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-3 bg-white/5
                border border-white/10 rounded-xl text-white 
                placeholder-gray-400 focus:border-pink-500
                focus:outline-none transition"
                required
              />
              {/* MESSAGE */}
              <textarea
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3 bg-white/5
                border border-white/10 rounded-xl text-white 
                placeholder-gray-400 focus:border-pink-500
                focus:outline-none transition"
                required
              />
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                type="submit"
                className="w-full py-3 bg-linear-to-r 
                from-pink-500 to-rose-500 rounded-xl
                text-white font-bold hover:shadow-lg 
                transition-all flex items-center gap-2 justify-center"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-sm">kirill6376@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-sm">+370 613 55 555</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-sm">Lithuania</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
