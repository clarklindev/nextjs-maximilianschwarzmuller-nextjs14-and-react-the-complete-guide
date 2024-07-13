import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news.js";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList urlprefix="/news-load-data/" news={news} />
    </>
  );
}
