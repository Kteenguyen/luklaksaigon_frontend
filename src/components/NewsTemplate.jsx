"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HomeCTA from "./HomeCTA";
import Footer from "./Footer";

export default function NewsTemplate({
  title,
  subtitle,
  featuredArticle,
  articles
}) {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between" data-theme="light">

      {/* Page Header */}
      <section className="pt-40 pb-16 px-8 md:px-16 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Luklak Journal
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">
          {title}
        </h1>
        <p className="text-secondary/60 font-light text-lg">
          {subtitle}
        </p>
      </section>

      {/* Featured Article */}
      <section className="px-8 md:px-16 mb-24 max-w-[100rem] mx-auto w-full">
        <Link href={`${featuredArticle.parentPath}/${featuredArticle.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer w-full relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden flex items-end"
          >
            <div className="absolute inset-0 z-0">
              <img src={featuredArticle.img.src || featuredArticle.img} alt={featuredArticle.title} className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-1000" />
            </div>

            <div className="relative z-10 p-8 md:p-16 max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary px-3 py-1 text-xs uppercase tracking-widest text-secondary font-medium rounded-sm">Mới nhất</span>
                <span className="text-white/80 font-light text-sm">{featuredArticle.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6 group-hover:text-primary transition-colors">{featuredArticle.title}</h2>
              <p className="text-white/70 font-light text-lg hidden md:block max-w-2xl">{featuredArticle.excerpt}</p>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="px-8 md:px-16 pb-24 max-w-[100rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <Link href={`${article.parentPath}/${article.slug}`} key={index}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="w-full aspect-[4/3] rounded-sm overflow-hidden mb-6">
                  <img src={article.img.src || article.img} alt={article.title} className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-widest text-secondary/50">
                  <span className="text-primary">{article.category}</span>
                  <span>|</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-light text-secondary mb-4 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-secondary/60 font-light leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>

                <div className="mt-auto flex items-center gap-2 text-primary uppercase text-xs tracking-widest font-medium">
                  Đọc tiếp <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Pagination / Load More (Mock) */}
        <div className="mt-20 flex justify-center">
          <button className="border border-secondary/20 text-secondary uppercase tracking-widest text-xs font-medium py-4 px-10 rounded-sm hover:bg-secondary hover:text-white transition-colors">
            Xem thêm bài viết
          </button>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="relative z-40 bg-secondary">
        <HomeCTA />
        <Footer />
      </div>
    </main>
  );
}
