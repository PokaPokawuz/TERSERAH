import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Laptop, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const stats = [
    { icon: Globe, value: 'Always', label: 'Learning' },
    { icon: Laptop, value: 'Daily', label: 'Practice' },
  ];

  const accordionData = [
    {
      title: "My Learning Journey",
      content:
        "I am currently learning web development step by step, starting from the basics and gradually building small projects to improve my skills. Even though I am still at the learning stage, I stay consistent and motivated to keep growing.",
    },
    {
      title: "My Vision",
      content:
        "My goal is to become a skilled developer by learning consistently and building meaningful projects. I believe that growth comes from practice and real experience, so I continue improving step by step.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-[#020617] via-[#020c1b] to-[#000814]"
    >
      {/* 🌌 AURORA BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/15 blur-[140px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[240px] h-[240px] bg-sky-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[240px] h-[240px] bg-blue-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase 
            text-blue-400 mb-3"
          >
            About
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mb-5
            bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
            bg-clip-text text-transparent"
          >
            Get To Know Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.6 }}
            className="h-[3px] mx-auto rounded-full 
            bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="p-8 rounded-3xl
              backdrop-blur-2xl bg-white/5
              border border-white/10
              shadow-[0_0_30px_rgba(56,189,248,0.12)]
              hover:shadow-[0_0_45px_rgba(56,189,248,0.2)]
              transition-all duration-500"
            >
              <h3
                className="text-2xl md:text-3xl font-bold
                bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
                bg-clip-text text-transparent"
              >
                Hi, I'm M. Fathir Dinata
              </h3>

              <p className="mt-5 leading-relaxed text-gray-300">
                I am a student at MAN 1 Banda Aceh who is passionate about web
                development, especially in creating modern and interactive user
                interfaces. I enjoy learning new technologies and turning simple
                ideas into real projects.
              </p>

              {/* BADGE */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl
                bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400
                text-white text-xs font-semibold shadow-lg"
              >
                Junior Developer
              </div>

              <p className="mt-6 text-sm italic text-gray-400">
                "Small steps every day lead to big results."
              </p>
            </div>

            {/* ✨ DECOR */}
            <motion.div
              className="mt-6 text-center text-3xl font-bold
              bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
              bg-clip-text text-transparent tracking-widest"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
              }}
            >
              ✦ ⋆ ✦ ⋆ ✦
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3
              className="text-2xl font-bold
              bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
              bg-clip-text text-transparent"
            >
              Building My Future
            </h3>

            {/* ACCORDION */}
            <div className="space-y-4">
              {accordionData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="rounded-2xl overflow-hidden
                    bg-white/5 backdrop-blur-2xl
                    border border-white/10"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between p-5"
                    >
                      <span className="font-medium text-white">
                        {item.title}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                      >
                        <ChevronDown className="text-blue-400" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-5 pb-5 text-sm text-gray-400 leading-relaxed"
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="p-5 rounded-2xl text-center
                  bg-white/5 backdrop-blur-2xl
                  border border-white/10
                  shadow-[0_0_20px_rgba(56,189,248,0.1)]
                  hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]
                  transition-all duration-300"
                >
                  <stat.icon className="h-6 w-6 text-blue-400 mx-auto mb-3" />

                  <p className="text-xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}