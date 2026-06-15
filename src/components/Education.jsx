import { Award, Calendar, X } from "lucide-react";
import educationImg from "../assets/educationImg.png";
import iconflower from "../assets/iconflower.png";
import { useState } from "react";

const Education = () => {
  const [selected, setSelected] = useState(null);

  const education = [
    {
      id: 1,
      degree: "Bachelor's Degree",
      institution: "Panevezio Kolegija",
      year: "2022 - 2025",
      grade: "3.48 GPA",
      desc: 'Final thesis topic: Development of the "Book 24" e-shop',
      cources: ["React", "PHP", "Laravel"],
    },
    {
      id: 2,
      degree: "Bachelor's Degree",
      institution: "Panevezio Kolegija",
      year: "2022 - 2025",
      grade: "Average: 8.74/10",
      desc: "consectetur adipisicing elit. Neque consequuntur",
      cources: ["React", "PHP", "Laravel"],
    },
    {
      id: 3,
      degree: "Bachelor's Degree",
      institution: "Panevezio Kolegija",
      year: "2022 - 2025",
      grade: "3.48 GPA",
      desc: "consectetur adipisicing elit. Neque consequuntur",
      cources: ["React", "PHP", "Laravel"],
    },
  ];
  return (
    <section id="education" className="py-20 px-6 font-mono overflow-hidden">
      <div
        className="max-w-6x1 mx-auto flex flex-col lg:flex-row
        items-center gap-12"
      >
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={educationImg}
          alt="Education"
          className="lg:w-110 lg:h-130 w-full rounded-2xl
        object-contain drop-shadow-[0_0_40px_rgba(255,0,128,0.8)]"
        />
        <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <img src={iconflower} alt="Flower" className="w-12 h-8" />
            <h2
              className="text-3xl lg:text-5xl font-bold bg-linear-to-r
            from-pink-400 to-rose-400 bg-clip-text text-transparent"
            >
              Education
            </h2>
            <img src={iconflower} alt="Flower" className="w-12 h-8 " />
          </div>
          <p className="text-gray-300 mb-8">My Academic Journey</p>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="600"
                className="bg-white/5 backdrop-blur-sm
                rounded-2xl p-5 border border-white/10 transition-all
              hover:border-pink-500/50 hover:-translate-y-1
                cursor-pointer"
                onClick={() => setSelected(edu)}
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-pink-400 text-sm mb-2">{edu.institution}</p>
                <div className="flex gap-4 text-sm">
                  <span
                    className="flex items-center gap-1
                 text-gray-400"
                  >
                    <Calendar className="w-3 h-3" />
                    {edu.year}
                  </span>
                  <span
                    className="flex items-center gap-1
                 text-gray-400"
                  >
                    <Award className="w-3 h-3" />
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80
          backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="bg-gray-800/95 rounded-2xl max-w-2xl
            w-full p-6 border border-pink-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="float-right text-gray-400
                hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="clear-both">
              <div className="flex items-center gap-2 mb-4">
                <img src={iconflower} alt="flower" className="w-8 h-6" />
                <h3 className="text-2xl font-bold text-white">
                  {selected.degree}
                </h3>
              </div>
              <p className="text-pink-400 mb-4">
                {selected.institution} — {selected.year}
              </p>
              <p className="text-pink-300 mb-4">{selected.desc}</p>
              <div className="flex flex-wrap gap-2">
                {selected.cources.map((cource, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-pink-500/20
                     text-pink-300 rounded-full"
                  >
                    {cource}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
