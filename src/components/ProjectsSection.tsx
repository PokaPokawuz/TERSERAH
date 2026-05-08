import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Puzzle } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern and responsive portfolio website built to showcase my projects, skills, and learning journey in web development.',
    tags: ['React', 'Tailwind CSS'],
    status: 'Completed',
    progress: 100,
    icon: Globe,
    gradient:
      'linear-gradient(135deg, rgba(59,130,246,0.7), rgba(34,211,238,0.7))',
    badgeClass: 'bg-blue-500/10 text-cyan-300',
    progressClass: 'bg-cyan-400',
    glowClass:
      'shadow-[0_0_60px_rgba(56,189,248,0.35),0_0_90px_rgba(34,211,238,0.25)]',
  },

  {
    title: 'Web Development Practice Project',
    description:
      'A learning project where I practice building web applications and improve my understanding of frontend and backend development.',
    tags: ['Next.js', 'TypeScript'],
    status: 'In Progress',
    progress: 60,
    icon: BookOpen,
    gradient:
      'linear-gradient(135deg, rgba(14,165,233,0.7), rgba(59,130,246,0.7))',
    badgeClass: 'bg-sky-500/10 text-sky-300',
    progressClass: 'bg-sky-400',
    glowClass:
      'shadow-[0_0_60px_rgba(14,165,233,0.35),0_0_90px_rgba(59,130,246,0.25)]',
  },

  {
    title: 'Future Innovation Project',
    description:
      'A planned project aimed at exploring new technologies and enhancing problem-solving skills through real-world applications.',
    tags: ['Planned'],
    status: 'Planned',
    progress: 20,
    icon: Puzzle,
    gradient:
      'linear-gradient(135deg, rgba(34,211,238,0.7), rgba(59,130,246,0.7))',
    badgeClass: 'bg-cyan-500/10 text-cyan-300',
    progressClass: 'bg-blue-400',
    glowClass:
      'shadow-[0_0_60px_rgba(34,211,238,0.35),0_0_90px_rgba(59,130,246,0.25)]',
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);

  useEffect(() => {
    const interval = setInterval(next, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="
      relative py-24 overflow-hidden
      bg-gradient-to-b
      from-[#020617]
      via-[#020c1b]
      to-[#000814]
      "
    >

      {/* 🌌 AURORA */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
          absolute top-[-120px] left-[-120px]
          w-[320px] h-[320px]
          bg-blue-500/15 blur-[140px]
          rounded-full
          "
        />

        <div
          className="
          absolute bottom-[-120px] right-[-120px]
          w-[320px] h-[320px]
          bg-cyan-400/15 blur-[140px]
          rounded-full
          "
        />

        <div
          className="
          absolute top-[20%] right-[10%]
          w-[240px] h-[240px]
          bg-sky-400/10 blur-[120px]
          rounded-full
          "
        />

        <div
          className="
          absolute bottom-[20%] left-[10%]
          w-[240px] h-[240px]
          bg-blue-400/10 blur-[120px]
          rounded-full
          "
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center relative z-10">

        {/* HEADER */}
        <div className="mb-20">

          <p
            className="
            text-sm font-semibold
            tracking-[0.25em]
            uppercase
            text-blue-400
            mb-3
            "
          >
            Projects
          </p>

          <h2
            className="
            text-4xl md:text-5xl
            font-bold mb-5
            bg-gradient-to-r
            from-blue-400
            via-sky-400
            to-cyan-300
            bg-clip-text text-transparent
            "
          >
            Featured Projects
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.6 }}
            className="
            h-[3px] mx-auto rounded-full mb-6
            bg-gradient-to-r
            from-blue-500
            via-sky-400
            to-cyan-300
            "
          />

          <p
            className="
            text-gray-400
            max-w-2xl mx-auto
            leading-relaxed
            "
          >
            A curated selection of projects showcasing my journey in
            building modern, scalable, and user-focused web applications.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center h-[420px]">

          {PROJECTS.map((project, index) => {
            const position =
              (index - activeIndex + PROJECTS.length) %
              PROJECTS.length;

            let scale = 0.7;
            let opacity = 0.3;
            let translateX = 0;
            let zIndex = 0;
            let rotateY = 0;

            if (position === 0) {
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else if (position === 1) {
              scale = 0.85;
              opacity = 0.55;
              translateX = 260;
              rotateY = -10;
            } else if (position === PROJECTS.length - 1) {
              scale = 0.85;
              opacity = 0.55;
              translateX = -260;
              rotateY = 10;
            }

            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity,
                  scale,
                  x: translateX,
                  rotateY,
                  y: 0,
                  zIndex,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="
                absolute w-[300px]
                will-change-transform
                "
              >

                <div
                  className={`
                  relative overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-6
                  transition-all duration-500
                  ${
                    position === 0
                      ? project.glowClass
                      : 'opacity-60 scale-95'
                  }
                  `}
                >

                  {/* IMAGE */}
                  <div
                    className="
                    aspect-[4/3]
                    rounded-2xl
                    mb-5
                    flex items-center justify-center
                    "
                    style={{
                      background: project.gradient,
                    }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  {/* STATUS */}
                  <div className="flex justify-center mb-3">
                    <span
                      className={`
                      text-xs px-3 py-1
                      rounded-full font-medium
                      ${project.badgeClass}
                      `}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    text-lg font-semibold
                    mb-2 text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className="
                    text-sm text-gray-400
                    mb-4 leading-relaxed
                    "
                  >
                    {project.description}
                  </p>

                  {/* PROGRESS */}
                  <div
                    className="
                    w-full h-1.5
                    bg-white/10
                    rounded-full overflow-hidden
                    mb-4
                    "
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${project.progress}%`,
                      }}
                      transition={{ duration: 1 }}
                      className={`
                      h-full
                      ${project.progressClass}
                      `}
                    />
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                        text-xs px-2 py-1
                        rounded-md
                        bg-white/10
                        text-gray-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}