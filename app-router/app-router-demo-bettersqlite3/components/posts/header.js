import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo-posts.png";
import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.mainheader}>
      <Link href="/">
        {/* <img src={logo.src} alt="Mobile phone with posts feed on it" /> */}
        <Image
          src={logo}
          width={100}
          height={100}
          priority
          alt="Mobile phone with posts feed on it"
        />
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
