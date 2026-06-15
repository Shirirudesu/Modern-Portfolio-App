import { useState } from "react";
import iconflower from "../assets/iconflower.png";
import { Download, ExternalLink, Eye, X } from "lucide-react";
import diploma from "../assets/diploma.pdf";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "FullStack Developer",
      issuer: "Genius.Space",
      date: "2026",
      skills: ["React Js", "Hooks", "Express.js"],
      credentialId: "44e277ac-e6cc",
      verifyUrl:
        "https://genius.space/crt-verify/?verify=44e277ac-e6cc-42bf-9891-995c52e7c30a",
      fileUrl: diploma,
      fileName: "FullStack-Developer-Diploma.pdf",
    },
    {
      id: 2,
      title: "TEST",
      issuer: "META",
      date: "2024",
      skills: ["React", "Hooks", "Context API"],
      credentialId: "TEST-12345",
      verifyUrl: null,
      fileUrl: null,
      fileName: null,
    },
    {
      id: 3,
      title: "TEST",
      issuer: "META",
      date: "2026",
      skills: ["React", "Hooks", "Context API"],
      credentialId: "TEST-12345",
      verifyUrl: null,
      fileUrl: null,
      fileName: null,
    },
  ];
  return (
    <section id="certificates" className="py-20 px-6 overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src={iconflower}
            alt="flower"
            className="md:w-20 md:h-14 w-18 h-12 drop-shadow-[0_0_10px_rgba(255,0,128,0.8)]"
          />
          <h2
            className="text-3xl lg:text-5xl font-bold bg-linear-to-r
                from-pink-400 to-rose-400 font-mono
                bg-clip-text text-transparent"
          >
            Certificates
          </h2>
          <img
            src={iconflower}
            alt="flower"
            className="md:w-20 md:h-14 w-18 h-12 drop-shadow-[0_0_10px_rgba(255,0,128,0.8)]"
          />
        </div>
        <p className="text-gray-300 mt-4 font-mono">
          Professional Achievements & Certificates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="800"
            className="bg-white/5 backdrop-blur-sm
            rounded-2xl overflow-hidden border border-white/10
             hover:border-pink-500/50 transition-all duration-300
            hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedCertificate(cert)}
          >
            <div className="p-6 font-mono">
              <div
                className="flex justify-between
                    items-start mb-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <span className="text-2xl font-bold text-pink-400">
                  {cert.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                     bg-pink-500/20 text-pink-300 border border-pink-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div
                className="text-sm text-pink-400
                flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80
          backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="bg-gray-800/95 rounded-2xl max-w-2xl
            w-full p-6 border border-pink-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="float-right text-gray-400
                hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="clear-both">
              <div className="flex items-center gap-2 mb-4">
                <img src={iconflower} alt="flower" className="w-8 h-6" />
                <h3 className="text-2xl font-bold text-white">
                  {selectedCertificate.title}
                </h3>
              </div>
              <p className="text-pink-400 mb-4">
                {selectedCertificate.issuer} - {selectedCertificate.title}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCertificate.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-pink-500/20
                     text-pink-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="text-gray-300 mb-6 flex flex-wrap items-center gap-2">
                <span>Credential ID:</span>
                <span className="text-pink-400 font-mono">
                  {selectedCertificate.credentialId}
                </span>
                {selectedCertificate.verifyUrl && (
                  <a
                    href={selectedCertificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {selectedCertificate.fileUrl ? (
                <a
                  href={selectedCertificate.fileUrl}
                  download={
                    selectedCertificate.fileName ||
                    `${selectedCertificate.title}.pdf`
                  }
                  className="w-full py-3 bg-linear-to-r from-pink-500
                   to-rose-500 rounded-xl text-white font-bold
                    hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Certificate
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-3 bg-gray-700 rounded-xl
                 text-gray-400 font-bold pointer-events-none
                 cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Certificate not available for download
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
