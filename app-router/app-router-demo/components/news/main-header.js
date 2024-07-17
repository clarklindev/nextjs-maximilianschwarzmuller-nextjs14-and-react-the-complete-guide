import Link from "next/link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news/archive">Archive</Link>
            <Link href="/news/archive-load-data">data-fetch Archive</Link>
          </li>
          <li>
            <Link href="/news/news">News</Link>
            <Link href="/news/news-load-data">data-fetch News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
