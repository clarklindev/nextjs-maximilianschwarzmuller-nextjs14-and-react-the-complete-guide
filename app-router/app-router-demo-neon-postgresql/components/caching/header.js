import Link from "next/link";
import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes["main-header"]}>
      <div id="logo">
        <Link href="/">NextCaching</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/caching/messages">Messages</Link>
          </li>
          <li>
            <Link href="/caching/messages/new">New Message</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
