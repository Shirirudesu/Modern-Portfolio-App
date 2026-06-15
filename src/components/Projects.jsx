import { useState } from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import iconflower from "../assets/iconflower.png";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Pet Adoption App",
      tech: ["JavaScript", "React Native", "Firebase"],
      image: proj1,
      desc: "Mobile pet adoption app built with React Native (Expo). Users can add, browse pets, view details, mark favorites, contact with the owner and authenticate via Google using Clerk. Data is stored in Firebase Firestore.",
      githubUrl: "https://github.com/Shirirudesu/Pet-Adopt-App",
      demoUrl: null,
    },
    {
      id: 2,
      title: "Task Manager",
      tech: ["JavaScript", "Express.js", "Swagger"],
      image: proj2,
      desc: "Basic Express Server with Registration and Login + Task Routes",
      githubUrl: "https://github.com/Shirirudesu/task-manager",
      demoUrl: "https://hub.docker.com/r/dezmond0/task_manager",
    },
    {
      id: 3,
      title: "Bakery landing",
      tech: ["HTML", "SCSS", "JavaScript"],
      image: proj3,
      desc: "Mobile pet adoption app built with React Native (Expo). Users can add, browse pets, view details, mark favorites, contact with the owner and authenticate via Google using Clerk. Data is stored in Firebase Firestore.",
      githubUrl: "https://github.com/Shirirudesu/Bakery-Landing",
      demoUrl: null,
    },
    {
      id: 1,
      title: "Pet Adoption App",
      tech: ["JavaScript", "React Native", "Firebase"],
      image: proj1,
      desc: "Mobile pet adoption app built with React Native (Expo). Users can add, browse pets, view details, mark favorites, contact with the owner and authenticate via Google using Clerk. Data is stored in Firebase Firestore.",
      githubUrl: "https://github.com/Shirirudesu/Pet-Adopt-App",
      demoUrl: null,
    },
    {
      id: 5,
      title: "Task Manager",
      tech: ["JavaScript", "Express.js", "Swagger"],
      image: proj2,
      desc: "Basic Express Server with Registration and Login + Task Routes",
      githubUrl: "https://github.com/Shirirudesu/task-manager",
      demoUrl: "https://hub.docker.com/r/dezmond0/task_manager",
    },
    {
      id: 6,
      title: "Bakery landing",
      tech: ["HTML", "SCSS", "JavaScript"],
      image: proj3,
      desc: "Mobile pet adoption app built with React Native (Expo). Users can add, browse pets, view details, mark favorites, contact with the owner and authenticate via Google using Clerk. Data is stored in Firebase Firestore.",
      githubUrl: "https://github.com/Shirirudesu/Bakery-Landing",
      demoUrl: null,
    },
  ];
  return (
    <section id="projects" className="py-20 px-6 font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={iconflower} alt="Flower" className="w-12 h-8" />
            <h2
              className="text-4xl md:text-5xl font-extrabold bg-linear-to-r
            from-pink-400 to-rose-400 bg-clip-text text-transparent"
            >
              Projects
            </h2>
            <img src={iconflower} alt="Flower" className="w-12 h-8" />
          </div>
          <p className="text-gray-300">My Latest Projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="group ☐ bg-white/5 backdrop-blur-sm rounded-2xl
              overflow-hidden border border-white/10
            hover:border-pink-500/50 transition-all duration-300
              hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 
                transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full
                    bg-pink-500/20 text-pink-300 border border-pink-500/30"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-pink-400 hover:text-pink-300
                    flex items-center gap-1 inline-flex"
                  >
                    {" "}
                    View Project
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-sm text-gray-500 cursor-not-allowed">
                    No Code Available
                  </span>
                )}
              </div>
            </div>
          ))}
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
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2x1 font-bold text-white mb-2">
                {selected.title}
              </h3>
              <p className="text-pink-400 mb-4">{selected.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-pink-500/20
                     text-pink-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {selected.githubUrl ? (
                  <a
                    href={selected.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-pink-500 rounded-lg text-white 
                    font-semibold hover:bg-pink-600 transition flex 
                    items-center justify-center gap-2 text-center"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 py-2 bg-gray-700 text-gray-400 rounded-lg 
                    font-semibold pointer-events-none cursor-not-allowed flex 
                    items-center justify-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    No Code
                  </button>
                )}

                {selected.demoUrl ? (
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-rose-500 rounded-lg text-white 
                    font-semibold hover:bg-rose-600 transition flex 
                    items-center justify-center gap-2 text-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 py-2 bg-gray-700/50 text-gray-400/60 rounded-lg 
                    font-semibold pointer-events-none cursor-not-allowed flex 
                    items-center justify-center gap-2 border border-white/5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    No live demo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
