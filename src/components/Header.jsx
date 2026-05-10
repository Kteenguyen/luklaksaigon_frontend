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
  const [activeMenuAccordion, setActiveMenuAccordion] = useState(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest <= 50);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-700 w-full ${isAtTop || menuOpen
          ? 'h-28 px-8 md:px-16 bg-gradient-to-b from-secondary/80 via-secondary/40 to-transparent'
          : 'h-20 px-6 md:px-12 bg-secondary/95 backdrop-blur-md shadow-xl border-b border-surface/10'
          }`}
      >
        {/* LOGO */}
        <a href="/" className="cursor-pointer z-50 flex-shrink-0">
          <img src={logoSrc} alt="LukLak Design & Build" className="h-10 md:h-14 w-auto object-contain drop-shadow-lg" />
        </a>

        {/* DESKTOP NAVIGATION (Center) */}
        <AnimatePresence>
          {(isAtTop || menuOpen) && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center gap-x-7 lg:gap-x-9 flex-1 px-4 relative"
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
                    className="flex items-center gap-2 text-[11px] lg:text-[12px] font-sans tracking-[0.2em] font-medium text-surface hover:text-primary transition-colors uppercase"
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
        <div className="flex items-center justify-end flex-shrink-0 gap-8 z-50 text-surface">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={{ opacity: (!isAtTop || menuOpen) ? 1 : 0 }}
              style={{ pointerEvents: (!isAtTop || menuOpen) ? 'auto' : 'none' }}
              className={`text-[10px] tracking-[0.15em] font-medium uppercase hidden lg:block transition-colors ${menuOpen && isAtTop ? 'text-surface hover:text-primary' : 'text-surface hover:text-primary'}`}
            >
              {menuOpen ? 'Đóng' : 'Menu'}
            </motion.span>
            <motion.span
              className={`text-[10px] tracking-[0.15em] font-medium uppercase lg:hidden transition-colors text-surface hover:text-primary`}
            >
              {menuOpen ? 'Đóng' : 'Menu'}
            </motion.span>
          </div>

          <button className={`transition-colors text-surface hover:text-primary`}>
            <Search size={22} strokeWidth={1.2} />
          </button>
        </div>
      </header>

      {/* Global Dark Overlay when Menu is Open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 bg-secondary/80 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      {/* Mobile Only Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden flex flex-col items-center pt-8 pb-12 overflow-y-auto max-h-[calc(100vh-5rem)] [&::-webkit-scrollbar]:hidden"
          >
            <nav className="flex flex-col gap-8 w-full px-8">
              {navItems.map((item, i) => (
                <div key={item.name} className="flex flex-col items-center">
                  <div className="flex items-center cursor-pointer group" onClick={() => {
                    if (item.dropdown) {
                      setActiveMenuAccordion(activeMenuAccordion === item.name ? null : item.name);
                    } else {
                      setMenuOpen(false);
                    }
                  }}>
                    <motion.a
                      href={item.dropdown ? '#' : item.path}
                      className="text-xl font-serif font-light text-surface group-hover:text-primary transition-colors duration-300 uppercase tracking-widest text-center"
                      onClick={(e) => {
                        if (item.dropdown) e.preventDefault();
                      }}
                    >
                      {item.name}
                    </motion.a>
                  </div>

                  {/* Accordion Sub-items for Mobile */}
                  <AnimatePresence>
                    {item.dropdown && activeMenuAccordion === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden w-full flex flex-col items-center"
                      >
                        <div className="flex flex-col gap-4 pt-6 pb-2 text-center">
                          {item.dropdown.map((sub, idx) => (
                            <a key={idx} href="#" onClick={() => setMenuOpen(false)} className="text-[10px] tracking-[0.2em] uppercase text-surface/60 hover:text-primary transition-colors">
                              {sub}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Mobile Contact Footer inside Menu */}
            <div className="mt-12 pt-8 border-t border-surface/10 flex flex-col gap-4 text-center text-[9px] tracking-[0.2em] uppercase text-surface/50 w-3/4">
              <a href="mailto:info@luklaksg.vn" className="hover:text-primary transition-colors">info@luklaksg.vn</a>
              <div className="flex justify-center gap-6 mt-2">
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
