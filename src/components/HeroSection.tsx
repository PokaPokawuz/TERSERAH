import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const socials = [
    {
      icon: Github,
      href: 'https://github.com/PokaPokawuz',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/tir.ajaa?igsh=ZG5ueWYwY2Y3bXMx',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
      px-8 md:px-16 lg:px-24 xl:px-32
      py-16 md:py-20
      bg-gradient-to-b from-[#020617] via-[#020c1b] to-[#000814]"
    >
      <ThreeScene />

      {/* 🌌 AURORA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-500/20 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/20 blur-[160px] rounded-full" />

        <div className="absolute top-[20%] right-[10%] w-[320px] h-[320px] bg-purple-500/15 blur-[140px] rounded-full" />

        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-pink-500/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* GRID */}
        <div
          className="
          flex flex-col-reverse
          lg:grid lg:grid-cols-2
          gap-8 md:gap-10
          items-center justify-items-center
          "
        >

          {/* ✨ TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md
            flex flex-col items-center lg:items-start
            text-center lg:text-left"
          >

            {/* LABEL */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text">
                ✩ˊ˗
              </span>

              <span className="text-xs tracking-[0.25em] uppercase text-blue-400/80">
                Bringing ideas to life
              </span>
            </div>

            {/* 🧑‍💻 NAME */}
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold leading-tight tracking-tight mb-5">
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Muhammad Fathir Dinata
              </span>
            </h1>

            {/* 📝 DESC */}
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed max-w-md">
              Designing and building modern web experiences
              with passion and precision.
            </p>

            {/* 🔘 BUTTON + SOCIAL */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">

              {/* BUTTON */}
              <button
                onClick={() => {
                  const element = document.querySelector('#projects');

                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
                className="px-6 py-3 rounded-full
                bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400
                text-white text-sm font-medium
                shadow-md shadow-blue-500/20
                hover:scale-105 hover:shadow-blue-400/30
                transition-all duration-300"
              >
                View Projects
              </button>

              {/* SOCIAL ICON */}
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full
                  border border-white/10
                  bg-white/5 backdrop-blur
                  hover:border-blue-400 hover:scale-110
                  transition duration-300"
                >
                  <social.icon className="h-5 w-5 text-gray-300 hover:text-blue-400" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 🖼️ FOTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-2 lg:mt-10"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >

              {/* ✨ GLOW */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 blur-[40px] opacity-65"></div>

              {/* IMAGE */}
              <div className="relative p-[4px] rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300">

                <img
                  src="/fak.jpeg"
                  alt="Profile"
                  className="
                  w-56 h-56
                  md:w-[300px] md:h-[300px]
                  lg:w-[340px] lg:h-[340px]
                  object-cover rounded-full
                  border-4 border-[#020617]
                  shadow-[0_0_35px_rgba(56,189,248,0.20)]
                  "
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ⬇️ SCROLL */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2
        p-2.5 rounded-full
        border border-white/10
        bg-white/5 backdrop-blur
        hover:border-blue-400 transition"
      >
        <ArrowDown className="h-4 w-4 text-blue-400" />
      </button>
    </section>
  );
}