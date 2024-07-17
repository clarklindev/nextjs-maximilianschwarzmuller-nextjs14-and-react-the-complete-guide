import { DUMMY_NEWS } from "@/data/dummy-news";
import NewsList from "@/components/news/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList urlprefix="/news/news/" news={DUMMY_NEWS} />
    </>
  );
}
