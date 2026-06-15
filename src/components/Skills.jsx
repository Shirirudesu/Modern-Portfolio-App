import iconflower from "../assets/iconflower.png";
import skillsImg from "../assets/educationImg.png";
import SkillGlitch from "./SkillsItems/SkillGlitch";
import SkillPercent from "./SkillsItems/SkillPercent";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [nodeValue, setNodeValue] = useState(90);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    let mounted = true;
    const run = () => {
      if (!mounted) return;

      const values = [0, 15, 40, 70, 25, 100, 55, 90];

      let step = 0;
      const interval = setInterval(() => {
        setNodeValue(values[step]);

        step++;
        if (step >= values.length) {
          clearInterval(interval);

          setNodeValue(90);

          setTimeout(run, 1500);
        }
      }, 600);
    };

    run();
    return () => {
      mounted = false;
    };
  }, [active]);

  const leftSkills = [
    { name: "React.js", level: 90 },
    { name: "Vue.js", level: 60 },
    { name: "Next.js", level: 50 },
  ];
  const rightSkills = [
    { name: "Node.js", level: 90 },
    { name: "MongoDB", level: 90 },
    { name: "Github", level: 85 },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-6 font-mono overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={iconflower} alt="Flower" className="w-12 h-8" />
            <h2
              className="text-3xl md:text-5xl font-extrabold bg-linear-to-r
            from-pink-400 to-rose-400 bg-clip-text text-transparent"
            >
              My Skills
            </h2>
            <img src={iconflower} alt="Flower" className="w-12 h-8" />
          </div>
          <p className="text-gray-300">Technologies I work with</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left skills part */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:w-1/3 w-full space-y-6"
          >
            {leftSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
                className="bg-white/5 backdrop-blur-sm
                rounded-2xl p-5 border border-white/10
              hover:border-pink-500/50 transition hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-bold text-lg min-w-[120px] inline-block">
                    {skill.name === "Vue.js" ? (
                      <SkillGlitch active={active} text="Vue.js" />
                    ) : (
                      skill.name
                    )}
                  </span>
                  <SkillPercent
                    active={active}
                    value={skill.level}
                    skillName={skill.name}
                  />
                </div>
                <div
                  className="w-full h-2 bg-white/10 rounded-full
                  overflow-hidden"
                >
                  <div
                    className="h-full bg-linear-to-r from-pink-500 to-rose-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {/* Image */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:h-80 lg:w-60 w-full"
          >
            <img
              src={skillsImg}
              alt="Skills"
              className="w-full object-contain
              drop-shadow-[0_0_20px_rgba(255,0,128,0.8)]"
            />
          </div>
          {/* Right skills side */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="lg:w-1/3 w-full space-y-6"
          >
            {rightSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
                className="bg-white/5 backdrop-blur-sm
                rounded-2xl p-5 border border-white/10
              hover:border-pink-500/50 transition hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-bold text-lg">
                    {skill.name === "Node.js" ? (
                      <SkillGlitch active={active} text="Node.js" />
                    ) : (
                      skill.name
                    )}
                  </span>
                  <span className="text-pink-400 font-bold">
                    {skill.name === "Node.js"
                      ? `${nodeValue}%`
                      : `${skill.level}%`}
                  </span>
                </div>
                <div
                  className="w-full h-2 bg-white/10 rounded-full
                  overflow-hidden"
                >
                  <div
                    className="h-full bg-linear-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-700"
                    style={{
                      width: `${
                        skill.name === "Node.js" ? nodeValue : skill.level
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
