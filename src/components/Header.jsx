import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [scroll, setScroll] = useState(0);

  // Animate logo & nav on page load
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    );

    if (navRef.current) {
      tl.fromTo(
        navRef.current.children,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        "-=0.5"
      );
    }

    // Update active section & scroll progress
    const sections = ["top", "skills", "experience", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      setScroll(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop) setActive(sec);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Skills", "Experience", "Projects", "Contact"];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-200"
        style={{ width: `${scroll}%` }}
      ></div>

      <header
        className={`fixed w-full top-0 left-0 z-50 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          scroll > 10
            ? "bg-gray-900/90 shadow-2xl"
            : "bg-gray-900/60 shadow-md"
        } `}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 md:py-3">
          {/* Animated Gradient Logo */}
          <h1
            ref={logoRef}
            className="text-3xl font-extrabold tracking-wider cursor-pointer select-none bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Nitish Soni
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav ref={navRef} className="flex space-x-8 font-medium text-lg">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative transition-all duration-300 ${
                    active === item.toLowerCase()
                      ? "text-blue-400 after:w-full"
                      : "text-gray-300"
                  } group hover:translate-y-[-2px] hover:text-blue-400 hover:drop-shadow-lg`}
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Hire Me Button (Desktop) */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-In Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col p-6 space-y-6 z-40`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-500 text-lg transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Hire Me Button (Mobile) */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-500/30 transition-all duration-300 text-center"
          >
            Hire Me
          </a>
        </div>

        {/* Gradient Animation */}
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
      </header>
    </>
  );
}
