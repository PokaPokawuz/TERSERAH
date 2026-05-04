import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden 
      bg-gradient-to-b from-[#020617] via-[#020c1b] to-[#000814]"
    >
      <ThreeScene />

      {/* 🌌 AURORA COLORFUL (SOFT) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* glow besar */}
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-400/20 blur-[160px] rounded-full" />

        {/* warna tambahan */}
        <div className="absolute top-[20%] right-[10%] w-[320px] h-[320px] bg-purple-500/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-pink-500/15 blur-[140px] rounded-full" />
        <div className="absolute top-[50%] left-[30%] w-[260px] h-[260px] bg-emerald-400/12 blur-[130px] rounded-full" />
        <div className="absolute top-[35%] right-[30%] w-[240px] h-[240px] bg-yellow-400/12 blur-[130px] rounded-full" />

        {/* strip aurora */}
        <div className="absolute top-[30%] left-[25%] w-[280px] h-[70px] bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent blur-[80px] opacity-40 rotate-[-12deg]" />
        <div className="absolute top-[60%] right-[20%] w-[260px] h-[70px] bg-gradient-to-r from-purple-400 via-pink-400 to-transparent blur-[80px] opacity-40 rotate-[15deg]" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[320px] h-[80px] bg-gradient-to-r from-cyan-300 via-sky-300 to-transparent blur-[90px] opacity-35 rotate-[5deg]" />

        {/* center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-300/10 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* 🖼️ FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border border-white/10"
            />
          </motion.div>

          {/* ✨ TEXT */}
          <motion.div className="w-full text-center md:text-left">

            {/* LABEL */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <span className="text-lg text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text">
                ✩ˊ˗
              </span>

              <span className="text-sm tracking-[0.25em] uppercase text-blue-400/80">
                Bringing ideas to life
              </span>
            </div>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Muhammad Fathir Dinata
              </span>
            </motion.h1>

            {/* DESC */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            >
              Designing and building modern web experiences with passion, precision, and continuous growth.
            </motion.p>

            {/* BUTTON */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center md:justify-start gap-6">
              {[Github, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-400 transition"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon className="h-5 w-5 text-gray-300 hover:text-blue-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-blue-400" />
      </motion.button>
    </section>
  );
}