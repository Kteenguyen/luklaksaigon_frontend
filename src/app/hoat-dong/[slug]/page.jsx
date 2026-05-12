import ArticleDetail from "../../../components/ArticleDetail";
import { hoatDongData } from "../../../data/mockData";

export function generateStaticParams() {
  return hoatDongData.map((post) => ({
    slug: post.slug,
  }));
}

export default function HoatDongDetail({ params }) {
  const { slug } = params;
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
