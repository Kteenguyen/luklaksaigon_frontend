"use client";
import { useParams } from 'next/navigation';
import ArticleDetail from "../../../components/ArticleDetail";
import { blogData } from "../../../data/mockData";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const article = blogData.find(a => a.slug === slug);
  const relatedArticles = blogData.filter(a => a.slug !== slug);

  return (
    <ArticleDetail 
      article={article} 
      relatedArticles={relatedArticles} 
      parentPath="/blog" 
      parentName="Blog" 
    />
  );
}
