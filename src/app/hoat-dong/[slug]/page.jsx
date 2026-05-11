"use client";
import { useParams } from 'next/navigation';
import ArticleDetail from "../../../components/ArticleDetail";
import { hoatDongData } from "../../../data/mockData";

export default function HoatDongDetail() {
  const { slug } = useParams();
  const article = hoatDongData.find(a => a.slug === slug);
  const relatedArticles = hoatDongData.filter(a => a.slug !== slug);

  return (
    <ArticleDetail 
      article={article} 
      relatedArticles={relatedArticles} 
      parentPath="/hoat-dong" 
      parentName="Hoạt Động" 
    />
  );
}
