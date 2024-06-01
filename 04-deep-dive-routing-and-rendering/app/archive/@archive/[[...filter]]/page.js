import Link from "next/link";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";

import NewsList from "@/components/news-list";

export default function FilteredNewsPage({params}){
  //const newsYear = params.year; //accessing the dynamic route app/archive/@archive/[year] value
  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news}/>

  //using catchall route
  const filter = params.filter;
  console.log(filter);
  
  const links = getAvailableNewsYears();

  return (
  <header id="archive-header">
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <Link href={`/archive/${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
}