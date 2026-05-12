import ArticleDetail from "../../../components/ArticleDetail";
import { blogData } from "../../../data/mockData";

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({ params }) {
  const { slug } = params;
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
