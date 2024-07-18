import { getAllNews } from "@/lib/news/news-sql";
import NewsList from "@/components/news/news-list";

async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList urlprefix="/news/news-load-data/" news={news} />
    </>
  );
}

export default NewsPage;
