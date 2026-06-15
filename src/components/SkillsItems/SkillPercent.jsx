import { useEffect, useState } from "react";

const symbols = ["@", "#", "$", "%", "&"];
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const digit = () => Math.floor(Math.random() * 10);

const makeGlitch = () => {
  return `${digit()}${rand(symbols)}${digit()}`;
};

const SkillPercent = ({ active, value = 60, skillName }) => {
  const [display, setDisplay] = useState("???");

  useEffect(() => {
    if (!active) return;
    if (skillName !== "Vue.js") {
      setDisplay(`${value}%`);
      return;
    }

    let mounted = true;
    const run = () => {
      if (!mounted) return;

      let step = 0;
      const sequence = [
        () => makeGlitch(),
        () => `${value}`.replace(/\d/, rand(symbols)),
        () => `${value}%`,
      ];

      const interval = setInterval(() => {
        setDisplay(sequence[step % sequence.length]());

        step++;

        if (step > 8) {
          clearInterval(interval);

          setDisplay(`${value}%`);

          setTimeout(() => {
            setDisplay("???");

            setTimeout(run, 800);
          }, 1200);
        }
      }, 150);
    };

    run();

    return () => {
      mounted = false;
    };
  }, [active, value, skillName]);

  return (
    <span className="text-pink-400 font-bold min-w-[60px] inline-block">
      {display}
    </span>
  );
};

export default SkillPercent;
