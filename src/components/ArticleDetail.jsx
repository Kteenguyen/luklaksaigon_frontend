"use client";
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, List, X } from 'lucide-react';
import HomeContactForm from "./HomeContactForm";
import Footer from "./Footer";

export default function ArticleDetail({ article, relatedArticles, parentPath, parentName }) {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const generateSlug = (text) => {
    return text.toString().toLowerCase()
      .replace(/đ/g, 'd')
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/\s+/g, '-') // replace spaces with -
      .replace(/[^\w\-]+/g, '') // remove non-word chars
      .replace(/\-\-+/g, '-') // replace multiple - with single -
      .replace(/^-+/, '') // trim - from start
      .replace(/-+$/, ''); // trim - from end
  };

  // Generate headings list dynamically
  const headings = useMemo(() => {
    const list = [];
    if (article && article.content) {
      const lines = article.content.split('\n');
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('## ')) {
          const text = trimmed.replace(/^##\s+/, "").trim();
          list.push({ id: generateSlug(text), text, level: 2 });
        } else if (trimmed.startsWith('### ')) {
          const text = trimmed.replace(/^###\s+/, "").trim();
          list.push({ id: generateSlug(text), text, level: 3 });
        }
      });
    }
    return list;
  }, [article]);

  const structuredHeadings = useMemo(() => {
    const list = [];
    let currentParent = null;
    headings.forEach(h => {
      if (h.level === 2) {
        currentParent = { ...h, children: [] };
        list.push(currentParent);
      } else if (h.level === 3) {
        if (currentParent) {
          currentParent.children.push(h);
        } else {
          list.push({ ...h, children: [] });
        }
      }
    });
    return list;
  }, [headings]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const triggerLine = 150; // pixels from the top of the viewport
      let currentActiveId = '';

      for (let i = 0; i < headings.length; i++) {
        const el = document.getElementById(headings[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            currentActiveId = headings[i].id;
          } else {
            break;
          }
        }
      }

      if (!currentActiveId && headings.length > 0) {
        currentActiveId = headings[0].id;
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to establish the initial active heading
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id); // Update active state instantly in the TOC list

      // Perform smooth scrolling using Lenis or standard browser scroll
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -100, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }

      setTocOpen(false); // Close the sidebar
    }
  };


  const parseMarkdown = (content) => {
    if (!content) return null;
    const blocks = content.split('\n\n');
    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        const text = trimmed.replace(/^##\s+/, "").trim();
        return (
          <h2
            key={index}
            id={generateSlug(text)}
            className="text-2xl md:text-3.5xl font-serif text-secondary mt-12 mb-6 font-medium leading-tight scroll-mt-28"
          >
            {text}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        const text = trimmed.replace(/^###\s+/, "").trim();
        return (
          <h3
            key={index}
            id={generateSlug(text)}
            className="text-xl md:text-2xl font-serif text-secondary mt-8 mb-4 font-medium leading-tight scroll-mt-28"
          >
            {text}
          </h3>
        );
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').filter(line => line.trim().startsWith('- '));
        return (
          <ul key={index} className="list-disc pl-6 my-6 flex flex-col gap-2 text-secondary/70 font-light leading-relaxed font-sans text-base md:text-lg">
            {items.map((item, idx) => (
              <li key={idx}>{item.replace(/^- /, "").trim()}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="text-secondary/70 font-light leading-relaxed mb-6 font-serif text-base md:text-lg text-justify whitespace-pre-line">
          {trimmed}
        </p>
      );
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-secondary">
        <h1 className="text-3xl font-serif">Không tìm thấy bài viết</h1>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen flex flex-col justify-between relative">

      {/* Table of Contents Floating Button */}
      {headings.length > 0 && (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTocOpen(true)}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-secondary/10 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
            aria-label="Table of contents"
          >
            <List className="w-5 h-5" />
          </motion.button>
        </div>
      )}

      {/* Floating TOC for mobile */}
      {headings.length > 0 && (
        <div className="fixed left-4 bottom-6 z-50 md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setTocOpen(true)}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-secondary/10 flex items-center justify-center text-secondary hover:text-primary cursor-pointer"
            aria-label="Table of contents"
          >
            <List className="w-4 h-4" />
          </motion.button>
        </div>
      )}

      {/* TOC Slide-out Panel Overlay & Sidebar */}
      <AnimatePresence>
        {tocOpen && headings.length > 0 && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              onClick={() => setTocOpen(false)}
              className="fixed inset-0 bg-secondary/20 backdrop-blur-sm z-[999] cursor-pointer"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%', transition: { type: 'tween', duration: 0.2, ease: 'easeOut' } }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-[290px] md:w-[340px] bg-[#FAF7F2] shadow-2xl border-r border-secondary/5 z-[1000] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-primary text-[10px] tracking-[0.25em] uppercase font-bold">Mục lục</span>
                  <button
                    onClick={() => setTocOpen(false)}
                    className="w-8 h-8 rounded-full border border-secondary/15 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-2xl font-serif text-secondary mb-8 font-light uppercase tracking-tight">Nội Dung Bài Viết</h3>

                <nav className="flex flex-col gap-5 overflow-y-auto max-h-[60vh] pr-2">
                  {structuredHeadings.map((parent, idx) => {
                    const isParentActive = activeId === parent.id;
                    const isChildActive = parent.children.some(c => c.id === activeId);
                    const isExpanded = isParentActive || isChildActive;

                    return (
                      <div key={idx} className="flex flex-col">
                        <button
                          onClick={() => scrollToHeading(parent.id)}
                          className={`text-left transition-all duration-300 cursor-pointer text-sm md:text-base font-serif ${isParentActive
                              ? 'text-primary font-medium translate-x-1'
                              : 'text-secondary/60 hover:text-secondary hover:translate-x-0.5'
                            }`}
                        >
                          {parent.text}
                        </button>

                        {/* Nested Sub-headings Accordion */}
                        <AnimatePresence initial={false}>
                          {isExpanded && parent.children.length > 0 && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="pl-4 flex flex-col gap-2.5 overflow-hidden border-l border-primary/20 ml-2 mt-2"
                            >
                              {parent.children.map((child, cIdx) => {
                                const isSelfActive = activeId === child.id;
                                return (
                                  <button
                                    key={cIdx}
                                    onClick={() => scrollToHeading(child.id)}
                                    className={`text-left text-xs md:text-sm transition-all duration-300 cursor-pointer ${isSelfActive
                                        ? 'text-primary font-medium translate-x-1'
                                        : 'text-secondary/50 hover:text-secondary hover:translate-x-0.5'
                                      }`}
                                  >
                                    {child.text}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Brand Footnote */}
              <div className="pt-6 border-t border-secondary/5">
                <span className="text-[9px] tracking-[0.2em] uppercase text-secondary/40 font-bold block">Luklak Saigon</span>
                <span className="text-[8px] text-secondary/30 mt-1 block">Design & Build Studio</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Article Header */}
      <section className="pt-32 md:pt-40 pb-16 px-8 md:px-16 max-w-4xl mx-auto w-full">
        <Link href={parentPath} className="flex items-center gap-2 text-secondary/50 hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-medium mb-12 w-max">
          <ArrowLeft className="w-3 h-3" /> Quay lại {parentName}
        </Link>

        <div className="flex items-center gap-4 mb-6 text-xs uppercase tracking-widest text-secondary/60">
          <span className="text-primary font-medium">{article.category}</span>
          <span>|</span>
          <span>{article.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-secondary mb-12 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 border-t border-secondary/10 pt-6">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/50 font-serif italic">
            {article.author.charAt(0)}
          </div>
          <div>
            <span className="block text-secondary text-sm font-medium">{article.author}</span>
            <span className="block text-secondary/50 text-xs">Biên tập viên</span>
          </div>
        </div>
      </section>

      {/* Article Cover */}
      <section className="px-4 md:px-8 max-w-[100rem] mx-auto w-full mb-16 md:mb-24">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden">
          <img
            src={article.coverImg.src || article.coverImg}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="px-8 md:px-16 max-w-3xl mx-auto w-full mb-32">
        <div className="prose prose-lg md:prose-xl prose-stone max-w-none">
          <div className="text-secondary/70 font-light leading-relaxed font-serif text-lg md:text-xl">
            {parseMarkdown(article.content)}
          </div>
        </div>

        {/* Share & Tags mock */}
        <div className="mt-16 pt-8 border-t border-secondary/10 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-2">
            <span className="bg-secondary/5 text-secondary/60 text-xs px-3 py-1 rounded-sm uppercase tracking-widest">{article.category}</span>
            <span className="bg-secondary/5 text-secondary/60 text-xs px-3 py-1 rounded-sm uppercase tracking-widest">Kiến trúc</span>
          </div>
          <div className="text-secondary/50 text-sm uppercase tracking-widest flex gap-4">
            <span className="cursor-pointer hover:text-primary transition-colors">Facebook</span>
            <span className="cursor-pointer hover:text-primary transition-colors">LinkedIn</span>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-secondary/5 py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="flex justify-between items-end mb-16 border-b border-secondary/10 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary">Bài viết <span className="text-primary italic">Liên quan</span></h2>
            <Link href={parentPath} className="text-primary uppercase text-xs tracking-widest font-medium hover:text-secondary transition-colors hidden md:block">
              Xem tất cả
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.slice(0, 3).map((item, index) => (
              <Link href={`${parentPath}/${item.slug}`} key={index} className="group cursor-pointer flex flex-col h-full">
                <div className="w-full aspect-[4/3] rounded-sm overflow-hidden mb-6">
                  <img src={item.coverImg.src || item.coverImg} alt={item.title} className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4 text-[10px] uppercase tracking-widest text-secondary/50">
                  <span className="text-primary">{item.category}</span>
                  <span>|</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-serif font-light text-secondary mb-4 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>

                <div className="mt-auto flex items-center gap-2 text-primary uppercase text-[10px] tracking-widest font-medium pt-4">
                  Đọc tiếp <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="relative z-40 bg-secondary">
        <HomeContactForm />
        <Footer />
      </div>
    </main>
  );
}

