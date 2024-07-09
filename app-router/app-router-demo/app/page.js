import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/foodies">1. practicing routing (foodies app)</Link>
        </li>
        <li>
          <Link href="/foodies">2. image storage using aws s3</Link>
        </li>
      </ul>
    </main>
  );
}
