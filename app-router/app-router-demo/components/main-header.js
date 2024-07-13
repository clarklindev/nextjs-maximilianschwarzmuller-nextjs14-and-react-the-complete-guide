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
            <Link href="/archive">Archive</Link>
            <Link href="/archive-load-data">data-fetch Archive</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
            <Link href="/news-load-data">data-fetch News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
