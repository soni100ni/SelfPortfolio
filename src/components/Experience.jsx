import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { EXPERIENCE } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards with fade-up & scale effect
      gsap.from(".exp-card", {
        opacity: 0,
        y: 60,
        scale: 0.95,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });

      // Animate bullets
      gsap.from(".exp-bullet", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
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
    <section id="experience" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-purple-500 rounded-full opacity-20 animate-pulse mix-blend-soft-light"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 bg-blue-500 rounded-full opacity-20 animate-pulse mix-blend-soft-light"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-pink-500 rounded-full opacity-15 animate-pulse mix-blend-soft-light"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          My <span className="text-blue-500">Experience</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center">
          Timeline of my professional journey with key roles and achievements.
        </p>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

          {EXPERIENCE.map((exp, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.03}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              transitionSpeed={2000}
              className="exp-card"
            >
              <div className={`relative p-6 bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-xl cursor-pointer group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500`}>
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-50 transition-all duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition">
                        {exp.role}
                      </h3>
                      <p className="text-gray-300 mt-1">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400">{exp.time}</div>
                  </div>

                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="exp-bullet">{b}</li>
                    ))}
                  </ul>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
