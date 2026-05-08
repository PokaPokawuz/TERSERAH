import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [text, setText] = useState("");
  const fullText = "Preparing your experience...";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  /* 🌌 RANDOM STARS */
  const stars = [...Array(20)].map(() => {
    let top;

    do {
      top = Math.random() * 100;
    } while (top > 40 && top < 60);

    return {
      left: Math.random() * 100 + "%",
      top: top + "%",
    };
  });

  return (
    <div
      className="fixed inset-0 z-[9999]
      overflow-hidden flex items-center justify-center
      bg-gradient-to-b from-[#020617] via-[#020c1b] to-[#000814]"
    >

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute top-[-120px] left-[-120px]
          w-[420px] h-[420px]
          bg-blue-500/20 blur-[160px] rounded-full"
        />

        <div
          className="absolute bottom-[-120px] right-[-120px]
          w-[420px] h-[420px]
          bg-cyan-400/20 blur-[160px] rounded-full"
        />

        <div
          className="absolute top-[20%] right-[10%]
          w-[300px] h-[300px]
          bg-sky-500/10 blur-[140px] rounded-full"
        />
      </div>

      {/* ✨ FLOATING STARS */}
      <div className="absolute inset-0">
        {stars.map((pos, i) => (
          <motion.img
            key={i}
            src="/bintang kecil.gif"
            alt="star"
            className="absolute w-10 h-10 opacity-70"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: ["0%", "-50%"],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🌠 CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center">

        {/* ✨ SYMBOL */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="text-3xl mb-3
          bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
          bg-clip-text text-transparent"
        >
          ⋆✴︎˚｡⋆
        </motion.div>

        {/* 🪐 TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: [0, 1, 0.9, 1],
            scale: [0.95, 1.03, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="text-3xl md:text-5xl font-bold tracking-wide text-center
          bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300
          bg-clip-text text-transparent
          drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]"
        >
          Entering Another Dimension
        </motion.h1>

        {/* 📝 SUBTEXT */}
        <p
          className="mt-4 text-sm md:text-base
          text-gray-400 tracking-[0.2em]
          uppercase"
        >
          {text}
          <span className="animate-pulse text-cyan-300">|</span>
        </p>

        {/* ✨ LOADING LINE */}
        <div
          className="relative mt-8 w-52 h-[3px]
          rounded-full overflow-hidden bg-white/10"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0
            bg-gradient-to-r
            from-transparent
            via-cyan-300
            to-transparent"
          />
        </div>

      </div>
    </div>
  );
}