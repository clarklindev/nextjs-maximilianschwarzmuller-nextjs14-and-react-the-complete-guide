import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/foodies">
            3. nextjs essentials - practicing routing (foodies app with S3
            storage)
          </Link>
        </li>
        <li>
          <Link href="/news/home">
            4-5. deep dive - routing and rendering / data fetching
          </Link>
        </li>
        <li>
          <Link href="/posts">6. deep dive - mutating data</Link>
        </li>
      </ul>
    </main>
  );
}
