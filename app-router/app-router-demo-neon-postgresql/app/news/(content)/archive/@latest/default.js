import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news/actions-dummydata";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList urlprefix="/news/news/" news={latestNews} />
    </>
  );
}
