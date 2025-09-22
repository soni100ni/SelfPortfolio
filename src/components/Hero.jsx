import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Hero fade-in
    tl.to(heroRef.current, { opacity: 1, duration: 1.5 });

    // Animate title, subtitle, and buttons
    tl.to(titleRef.current, { y: 0, opacity: 1, scale: 1 }, "<0.2");
    tl.to(subtitleRef.current, { y: 0, opacity: 1, scale: 1 }, "<0.1");
    tl.to(buttonRef.current, { scale: 1, opacity: 1, duration: 0.8 }, "<0.1");
    tl.to(resumeRef.current, { scale: 1, opacity: 1, duration: 0.8 }, "<0.1");
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 
      bg-gradient-to-br from-gray-900 via-slate-950 to-black text-white opacity-0 overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse mix-blend-soft-light"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse mix-blend-soft-light"></div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 opacity-0 translate-y-12 scale-95"
      >
        Hi, I'm{" "}
        <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 animate-gradient-x">
          Nitish Soni
        </span>{" "}
        👋
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed opacity-0 translate-y-12 scale-95"
      >
        A passionate <strong>Full Stack Developer</strong> specializing in
        building modern web applications with <strong>React</strong>,{" "}
        <strong>Java</strong>, and <strong>Spring Boot</strong>.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        <a
          ref={buttonRef}
          href="#projects"
          className="px-8 py-3 font-semibold text-lg bg-blue-600 text-white rounded-full shadow-xl 
          transform transition-transform duration-300 hover:scale-110 hover:bg-blue-700 hover:shadow-[0_0_20px_#3b82f6] 
          opacity-0 scale-90"
        >
          View My Work
        </a>

        <a
          ref={resumeRef}
          href="/Nitish_Soni_Resume.pdf" // Place your resume file in /public folder
          download
          className="px-8 py-3 font-semibold text-lg border-2 border-blue-500 text-blue-400 rounded-full 
          shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white 
          hover:shadow-[0_0_20px_#3b82f6] opacity-0 scale-90"
        >
          Download Resume
        </a>
      </div>

      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradient-x {
            0%,100% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
