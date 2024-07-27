import { DUMMY_DATA } from "@/lib/news/dummydata";
import NewsList from "@/components/news/news-list";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList urlprefix="/news/news/" news={DUMMY_DATA} />
    </>
  );
}
