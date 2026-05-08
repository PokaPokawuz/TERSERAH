import { motion } from 'framer-motion';
import {
  FlaskConical,
  Globe,
  Sigma,
  Atom,
  FlaskRound,
  Dna,
} from 'lucide-react';

const academics = [
  {
    title: 'Science',
    icon: <FlaskConical className="w-7 h-7 text-cyan-300" />,
    gradient: 'from-blue-500 via-sky-400 to-cyan-300',
    glow: 'shadow-[0_0_70px_rgba(56,189,248,0.25)]',
    data: [
      { name: 'Mathematics', level: 85, icon: <Sigma size={16} /> },
      { name: 'Physics', level: 80, icon: <Atom size={16} /> },
      { name: 'Chemistry', level: 78, icon: <FlaskRound size={16} /> },
      { name: 'Biology', level: 82, icon: <Dna size={16} /> },
    ],
  },
  {
    title: 'Languages',
    icon: <Globe className="w-7 h-7 text-blue-300" />,
    gradient: 'from-cyan-400 via-sky-400 to-blue-500',
    glow: 'shadow-[0_0_70px_rgba(59,130,246,0.25)]',
    data: [
      { name: 'Bahasa Indonesia', level: 88, icon: '🇮🇩' },
      { name: 'English', level: 75, icon: '🇺🇸' },
      { name: 'Arabic', level: 80, icon: '🇸🇦' },
    ],
  },
];

function SkillBar({ skill, gradient }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>

          <span className="text-gray-200">
            {skill.name}
          </span>
        </div>

        <span className="text-gray-400">
          {skill.level}%
        </span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${gradient} relative`}
        >
          <div className="absolute inset-0 bg-white/30 blur-sm opacity-40 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden
      bg-gradient-to-b from-[#020617] via-[#020c1b] to-[#000814]"
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute top-[-120px] left-[-120px]
          w-[320px] h-[320px]
          bg-blue-500/15 blur-[140px] rounded-full"
        />

        <div
          className="absolute bottom-[-120px] right-[-120px]
          w-[320px] h-[320px]
          bg-cyan-400/15 blur-[140px] rounded-full"
        />

        <div
          className="absolute top-[20%] right-[10%]
          w-[260px] h-[260px]
          bg-sky-500/10 blur-[120px] rounded-full"
        />

      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold tracking-[0.25em]
            uppercase text-blue-400/80 mb-3"
          >
            Academics
          </p>

          <h2
            className="text-3xl md:text-5xl font-bold mb-5
            bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
            bg-clip-text text-transparent"
          >
            Academic Strengths
          </h2>

          {/* ✨ LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[3px] mx-auto rounded-full
            bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0
              bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base
            text-gray-400 max-w-2xl mx-auto
            leading-relaxed mt-6"
          >
            Developing a strong academic foundation in science while enhancing
            communication skills through multiple languages, supporting both
            analytical thinking and global interaction in learning and real-world applications.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {academics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative group h-full"
            >

              {/* GLOW */}
              <div
                className={`absolute inset-0 rounded-3xl
                bg-gradient-to-r ${item.gradient}
                opacity-15 blur-2xl
                group-hover:opacity-30 transition`}
              />

              {/* CARD */}
              <div
                className="relative p-7 rounded-3xl
                backdrop-blur-xl
                bg-white/[0.03]
                border border-white/10
                overflow-hidden h-full"
              >

                <div
                  className={`absolute inset-0 opacity-0
                  group-hover:opacity-100 transition duration-500
                  ${item.glow}`}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div className="text-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                      className="flex justify-center"
                    >
                      {item.icon}
                    </motion.div>

                    <h3
                      className="font-semibold text-2xl
                      text-white mt-3"
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* SKILLS */}
                  <div className="space-y-5">
                    {item.data.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        gradient={item.gradient}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}