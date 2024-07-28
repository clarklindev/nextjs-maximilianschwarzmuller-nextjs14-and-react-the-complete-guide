import { getAllNews } from "@/lib/news/actions";
import NewsList from "@/components/news/news-list";
import { initializeDatabase } from "@/lib/news/db";

async function NewsPage() {
  await initializeDatabase();
  const news = await getAllNews();
  
  return (
    <>
      <h1>News Page</h1>
      <NewsList urlprefix="/news/news-load-data/" news={news} />
    </>
  );
}

export default NewsPage;
