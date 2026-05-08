import { motion } from 'framer-motion';
import { Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/PokaPokawuz',
      label: 'GitHub',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/tir.ajaa?igsh=ZG5ueWYwY2Y3bXMx%27',
      label: 'Instagram',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer
      className="relative overflow-hidden py-16
      bg-gradient-to-b from-[#020617] via-[#020c1b] to-[#000814]"
    >

      {/* 🌌 AURORA */}
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
          w-[240px] h-[240px]
          bg-sky-400/10 blur-[120px] rounded-full"
        />

        <div
          className="absolute bottom-[20%] left-[10%]
          w-[240px] h-[240px]
          bg-blue-400/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* GLASS CARD */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          px-6 md:px-10 py-10
          shadow-[0_0_40px_rgba(56,189,248,0.08)]
          "
        >

          {/* ✨ LINE */}
          <motion.div
            variants={itemVariants}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1 }}
            className="
            h-[2px] rounded-full mb-8
            bg-gradient-to-r
            from-blue-500
            via-sky-400
            to-cyan-300
            "
          />

          <div
            className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-8
            "
          >

            {/* TEXT */}
            <motion.div
              variants={itemVariants}
              className="
              text-sm text-gray-400
              text-center md:text-left
              "
            >
              © {currentYear}{' '}

              <span
                className="
                font-semibold
                bg-gradient-to-r
                from-blue-400
                via-sky-400
                to-cyan-300
                bg-clip-text text-transparent
                "
              >
                Muhammad Fathir Dinata
              </span>

              {' '}— All rights reserved.
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                  group relative
                  p-3 rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:border-cyan-400
                  "
                >

                  {/* GLOW */}
                  <div
                    className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    via-sky-400
                    to-cyan-300
                    blur-xl opacity-0
                    group-hover:opacity-40
                    transition duration-500
                    -z-10
                    "
                  />

                  <social.icon
                    className="
                    h-5 w-5
                    text-gray-300
                    group-hover:text-cyan-300
                    transition duration-300
                    "
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM TEXT */}
          <motion.p
            variants={itemVariants}
            className="
            mt-6 text-center
            text-xs text-gray-500
            "
          >
            Designed & built with modern web technologies
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}