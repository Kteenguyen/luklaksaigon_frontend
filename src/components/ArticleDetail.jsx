"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Contact from "./Contact";

export default function ArticleDetail({ article, relatedArticles, parentPath, parentName }) {
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-secondary">
        <h1 className="text-3xl font-serif">Không tìm thấy bài viết</h1>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen flex flex-col justify-between">
      
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
          <p className="text-secondary/70 font-light leading-relaxed whitespace-pre-line font-serif text-xl">
            {article.content}
          </p>
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
        <Contact />
      </div>
    </main>
  );
}
