import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import logoSrc from '../assets/logo/PNG/Logo_Light_1 copy.png';

const navItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Về chúng tôi', path: '/about' },
  {
    name: 'Dự án',
    path: '/projects',
    dropdown: ['Biệt thự', 'Căn hộ', 'Nhà phố', 'Thương mại']
  },
  { name: 'Thi công', path: '/construction' },
  { name: 'Đăng ký tư vấn', path: '/consultation' },
  { 
    name: 'Phong cách thiết kế', 
    path: '/design-styles',
    dropdown: ['Hiện đại', 'Tân cổ điển', 'Tropical', 'Indochine', 'Japandi']
  },
  { name: 'FAQs', path: '/faqs' },
  { 
    name: 'Tin tức', 
    path: '/news',
    dropdown: ['Tin tức nội thất', 'Xu hướng thiết kế', 'Kiến thức xây dựng']
  },
];


export default function Header() {
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest <= 50);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-700 w-full ${isAtTop || menuOpen ? 'h-28 px-8 md:px-16' : 'h-20 px-6 md:px-12'
          }`}
      >
        {/* LOGO */}
        <a href="/" className="cursor-pointer z-50 flex-shrink-0">
          <img src={logoSrc} alt="LukLak Design & Build" className="h-10 md:h-14 w-auto object-contain drop-shadow-lg" />
        </a>

        {/* DESKTOP NAVIGATION (Center) */}
        <AnimatePresence>
          {isAtTop && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex items-center justify-center gap-x-7 lg:gap-x-9 flex-1 px-4 relative"
            >
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group py-6"
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <a
                    href={item.path}
                    className="flex items-center gap-2 text-[11px] lg:text-[12px] font-sans tracking-[0.2em] font-medium text-white transition-colors uppercase mix-blend-difference"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={12} className="opacity-100" />}
                  </a>

                  {/* Desktop Dropdown - Premium Panel */}
                  <AnimatePresence>
                    {item.dropdown && hoveredNav === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-8 px-10 flex flex-col items-center gap-6 min-w-[280px] bg-secondary border border-surface/10 rounded-sm shadow-2xl"
                      >
                        {item.dropdown.map((sub, idx) => (
                          <motion.a
                            key={idx}
                            href="#"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                            className="text-[10px] lg:text-[11px] font-sans tracking-[0.2em] text-text-muted hover:text-primary uppercase transition-colors whitespace-nowrap"
                          >
                            {sub}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

            </motion.nav>
          )}
        </AnimatePresence>

        {/* RIGHT ACTION: MENU text + Search */}
        <div className="flex items-center justify-end flex-shrink-0 gap-8 z-50 mix-blend-difference">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={{ opacity: (!isAtTop || menuOpen) ? 1 : 0 }}
              style={{ pointerEvents: (!isAtTop || menuOpen) ? 'auto' : 'none' }}
              className="text-[10px] tracking-[0.15em] font-medium text-white uppercase hidden md:block hover:text-gray-300 transition-colors"
            >
              Menu
            </motion.span>
            <motion.span
              className="text-[10px] tracking-[0.15em] font-medium text-white uppercase md:hidden hover:text-gray-300 transition-colors"
            >
              Menu
            </motion.span>
          </div>

          <button className="text-white hover:text-gray-300 transition-colors">
            <Search size={22} strokeWidth={1.2} />
          </button>
        </div>
      </header>

      {/* Cinematic Slide-Down Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-secondary flex flex-col justify-center items-center overflow-hidden"
          >
            {/* The overlay is full screen so mix-blend-difference from header text works, but wait. If overlay is bg-secondary (dark), text inside overlay should just be normal. */}
            <nav className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-8 text-center mt-12 overflow-y-auto max-h-screen py-24">
              {navItems.map((item, i) => (
                <div key={item.name} className="flex flex-col items-center gap-4">
                  <div className="overflow-hidden">
                    <motion.a
                      href={item.path}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setMenuOpen(false)}
                      className="block text-3xl md:text-5xl font-serif text-background hover:text-primary transition-colors duration-500 font-light"
                    >
                      {item.name}
                    </motion.a>
                  </div>
                  {/* Mobile Dropdown items shown directly but smaller */}
                  {item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.05) }}
                      className="flex flex-col gap-2 items-center"
                    >
                      {item.dropdown.map((sub, idx) => (
                        <a key={idx} href="#" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-text-muted hover:text-white transition-colors">
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-8 flex space-x-8 text-[10px] tracking-[0.3em] uppercase text-text-muted"
            >
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
