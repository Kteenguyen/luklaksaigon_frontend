import NewsTemplate from "../../components/NewsTemplate";
import { blogData } from "../../data/mockData";

export default function BlogPage() {
  if (!blogData || blogData.length === 0) return null;

  const featured = blogData[0];
  const articles = blogData.slice(1);

  const mappedFeatured = {
    title: featured.title,
    excerpt: featured.excerpt,
    date: featured.date,
    img: featured.coverImg,
    slug: featured.slug,
    parentPath: '/blog'
  };

  const mappedArticles = articles.map(article => ({
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    category: article.category,
    img: article.coverImg,
    slug: article.slug,
    parentPath: '/blog'
  }));

  return (
    <NewsTemplate
      title="Tạp chí Kiến trúc"
      subtitle="Góc nhìn chuyên sâu, xu hướng thiết kế mới nhất và những câu chuyện truyền cảm hứng từ các chuyên gia của Luklak."
      featuredArticle={mappedFeatured}
      articles={mappedArticles}
    />
  );
}
