import { FaNode, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import React from "react";

const TechStackBar = () => {
  const techStack = [
    { name: "React Js", icon: FaReact, color: "#61DAFB" },
    { name: "Node ", icon: FaNode, color: "#339933" },
    { name: "Vue Js", icon: FaVuejs, color: "#4FC08D" },
    { name: "Next Js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  ];
  return (
    <div
      className="relative z-10 w-full overflow-hidden bg-linear-to-br 
    from-gray-900 to-pink-700 backdrop-blur-sm border-y border-white/10
     py-4 md:py-5 lg:py-6 -mt-12 md:-mt-14 lg:-mt-15"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
        <div
          className="flex flex-wrap justify-center items-center 
            gap-4 sm:gap-6 md:gap-8 lg:gap-12"
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <React.Fragment key={index}>
                <div
                  className="flex items-center gap-3 md:gap-4 lg:gap-8
                  group cursor-pointer relative"
                >
                  <div
                    className="absolute inset-0 
                    rounded-full bg-white/20 blur-xl group-hover:blur-2xl
                    transition-all opacity-0 group-hover:opacity-100"
                  ></div>
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8
                    xl:w-10 xl:h-10 transition-all duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />

                  <span
                    className="text-[11px] sm:text-xs
                    md:text-sm font-mono text-gray-300 group-hover:text-white 
                    transition-colors whitespace-nowrap"
                  >
                    {tech.name}
                  </span>
                </div>
                {index < techStack.length - 1 && (
                  <div className="w-px h-4 sm:h-5 md:h-6 bg-white/20 ml-1 sm:ml-2" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackBar;
