import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news-sql";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList urlprefix="/news-load-data/" news={latestNews} />
    </>
  );
}
