import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/foodies">
            1. practicing routing (foodies app with S3 storage)
          </Link>
        </li>
      </ul>
    </main>
  );
}
