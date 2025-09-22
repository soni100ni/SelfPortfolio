import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import { SKILLS } from "../data/skillsData";

export default function Skills() {
  const scrollerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const totalWidth = scrollerRef.current.scrollWidth / 2;
    animRef.current = gsap.to(scrollerRef.current, {
      x: `-${totalWidth}`,
      ease: "linear",
      duration: 60,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(animRef.current, { timeScale: 0, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to(animRef.current, { timeScale: 1, duration: 0.5 });
  };



  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-10 left-5 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center text-lg">
          A curated list of technologies I use to build modern applications.
        </p>

        <div
          className="overflow-hidden relative 
            after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-[80px] after:bg-gradient-to-r after:from-gray-900 after:z-20 
            before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-[80px] before:bg-gradient-to-l before:from-gray-900 before:z-20"
        >
          <div
            ref={scrollerRef}
            className="flex gap-8 whitespace-nowrap"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...SKILLS, ...SKILLS].map((s, i) => {
              const Icon = s.Icon;
              return (
                <Tilt
                  key={i}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={400}
                  className="min-w-[150px]"
                >
                  <div
                    className="skill-card flex flex-col items-center justify-center p-6 
                    bg-gray-800/60 backdrop-blur-xl rounded-2xl 
                    text-center shadow-lg border border-gray-700
                    transition duration-300 transform-gpu 
                    hover:-translate-y-2 hover:shadow-blue-500/40 hover:border-blue-400"
                  >
                    <Icon
                      className="text-5xl mb-3 drop-shadow-md transition-transform duration-300"
                      style={{ color: s.color }}
                    />
                    <span className="text-gray-200 font-semibold text-base hover:text-blue-400 transition-colors duration-300">
                      {s.name}
                    </span>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
