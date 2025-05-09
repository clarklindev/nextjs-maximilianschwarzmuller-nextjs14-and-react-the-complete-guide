import Link from "next/link";
import { notFound } from "next/navigation";
import { DUMMY_DATA } from "@/lib/news/dummydata";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_DATA.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
