import logo from "@/assets/logo-posts.png";
import Link from "next/link";
import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.mainheader}>
      <Link href="/">
        <img src={logo.src} alt="Mobile phone with posts feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/posts/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
