import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'ACADEMICS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      navItems.forEach((item) => {
        const el = document.querySelector(item.href);

        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]
        bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300"
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`w-full max-w-6xl px-6 h-16 flex items-center justify-between rounded-2xl transition-all duration-500
          ${
            scrolled
              ? `
              backdrop-blur-2xl
              bg-[#020617]/80
              border border-blue-500/10
              shadow-[0_10px_40px_rgba(2,6,23,0.8)]
              `
              : 'bg-transparent'
          }`}
        >

          {/* LOGO */}
          <motion.div
            onClick={() => scrollTo('#home')}
            className="cursor-pointer text-lg md:text-xl font-bold
            bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300
            bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            POKA
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    {item.label}
                  </button>

                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full
                      bg-gradient-to-r from-blue-600 to-cyan-500
                      shadow-[0_0_20px_rgba(59,130,246,0.5)]
                      -z-10"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-4 right-4 z-40 p-6 rounded-2xl
            backdrop-blur-2xl
            bg-[#020617]/90
            border border-blue-500/10
            shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-lg font-medium text-gray-400
                  hover:text-cyan-400 transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}