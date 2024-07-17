import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news/news-sql";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList urlprefix="/news/news-load-data/" news={latestNews} />
    </>
  );
}
