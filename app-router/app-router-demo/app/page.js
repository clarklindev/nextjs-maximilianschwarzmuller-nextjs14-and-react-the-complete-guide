import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/foodies">
            3. nextjs essentials - practicing routing (foodies app with S3
            storage)
          </Link>
        </li>
        <li>
          <Link href="/home">
            4-5 deep dive - routing and rendering / data fetching
          </Link>
        </li>
      </ul>
    </main>
  );
}
