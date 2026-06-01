import NewsTemplate from "../../components/NewsTemplate";
import { hoatDongData } from "../../data/mockData";

export default function HoatDongPage() {
  // We take the first item as the featured article, and the rest as regular articles.
  const featured = hoatDongData[0];
  const articles = hoatDongData.slice(1);

  // Map the centralized mockData to the props expected by NewsTemplate
  const mappedFeatured = {
    title: featured.title,
    excerpt: featured.excerpt,
    date: featured.date,
    img: featured.coverImg,
    slug: featured.slug,
    parentPath: '/hoat-dong'
  };

  const mappedArticles = articles.map(article => ({
    title: article.title,
    excerpt: article.excerpt,
    date: article.date,
    category: article.category,
    img: article.coverImg,
    slug: article.slug,
    parentPath: '/hoat-dong'
  }));

  return (
    <NewsTemplate
      title="Hoạt động Công ty"
      subtitle="Cập nhật những tin tức nội bộ, sự kiện nổi bật và tiến độ các dự án trọng điểm đang được Luklak triển khai."
      featuredArticle={mappedFeatured}
      articles={mappedArticles}
    />
  );
}
