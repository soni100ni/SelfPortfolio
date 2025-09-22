import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      {/* Optional top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.47,22,104.28,29.11,158,17.41C284.49,43.27,334.23,6.15,410,0c70.12-5.54,120.87,21.66,184,38.28,59.68,16.01,112.5,14.59,172,0,60.29-14.81,105.93-41.08,168-36.62,59.87,4.32,100.13,35.14,146,52.57,48.41,18.07,106.92,22.09,180,0V0Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          {/* mini logo */}
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            className="text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="rgb(96 165 250)" strokeWidth="2" />
            <path d="M8 12h8" stroke="rgb(96 165 250)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div>
            <div className="font-bold text-lg md:text-xl tracking-wide">Nitish Soni</div>
            <div className="text-gray-400 text-sm md:text-base">Full Stack Developer</div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <a
            href="https://github.com/soni100ni"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-500/50 text-white text-xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nitish-soni-45242b31b/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-white text-xl"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-400/50 text-white text-xl"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/100ni_4779/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-700 hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 text-white text-xl"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nitish82782soni@gmail.com"
            target="_blank"
            className="p-3 rounded-full bg-gray-700 hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/50 text-white text-xl"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm md:text-base">
        © {new Date().getFullYear()} Nitish Soni | All rights reserved.
      </div>
    </footer>
  );
}
