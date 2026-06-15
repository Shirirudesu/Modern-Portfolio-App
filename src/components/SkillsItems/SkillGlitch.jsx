import { useEffect, useState } from "react";

const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const SkillGlitch = ({ active, text = "Vue.js", speed = 400 }) => {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (!active) return;

    let iteration = 0;

    const interval = setInterval(() => {
      const result = text
        .split("")
        .map((char, index) => {
          if (index < iteration) return char;
          return symbols[Math.floor(Math.random() * symbols.length)];
        })
        .join("");

      setOutput(result);

      iteration += 0.5;

      if (iteration >= text.length) {
        clearInterval(interval);
        setOutput(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [active, text, speed]);

  return <span className="text-white font-bold">{output}</span>;
};

export default SkillGlitch;
