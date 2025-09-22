import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { PROJECTS } from "../data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards
      gsap.from(".proj-card", {
        opacity: 0,
        y: 50,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        scale: 0.95,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate tech badges
      gsap.from(".tech-badge", {
        opacity: 0,
        y: 10,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-purple-500 rounded-full opacity-20 animate-pulse mix-blend-soft-light"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-blue-500 rounded-full opacity-20 animate-pulse mix-blend-soft-light"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500 rounded-full opacity-15 animate-pulse mix-blend-soft-light"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center">
          A few highlights. Full list on my GitHub.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={2500}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="proj-card"
            >
              <div className="relative p-6 bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-xl transition-transform duration-300 cursor-pointer group overflow-hidden">
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-50 transition-all duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition">
                        {p.title}
                      </h3>
                      <p className="text-gray-300 mt-2">{p.desc}</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      {p.tech.join(" • ")}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-badge px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaGithub /> Repo
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
