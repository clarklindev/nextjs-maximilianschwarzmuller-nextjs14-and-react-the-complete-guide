import { Suspense } from "react";
import Link from "next/link";

import { 
  getNewsForYear, 
  getAvailableNewsYears, 
  getAvailableNewsMonths, 
  getNewsForYearAndMonth 
} from "@/lib/news";
import NewsList from "@/components/news-list";

async function FilterHeader({year, month}){
  const availableYears = await getAvailableNewsYears(); 
  let links = availableYears;  //-> YEARS
  //if year has already been selected -> show month links
  if (year && !month) {
    links = getAvailableNewsMonths(year); //-> MONTHS
  }
  //both selectedYear and selectedMonth -> show news with both these filters
  if(year && month){
    links = [];
  }
  
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {
            links.map((link) => {
              const href= year ? 
              `/archive/${year}/${link}` //here link is a month
              : `/archive/${link}`;         //here link is a year

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  )
}

async function FilteredNews({year, month}){
  let news;
  if(year && !month){
    news = await getNewsForYear(year); //news for a given year
  } else if(year && month){
    news = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = <p>no news for selected content</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  //using catchall route
  const filter = params.filter;

  const selectedYear = filter?.[0]; //gets 1st segment (array element 1)
  const selectedMonth = filter?.[1]; //gets 2nd segment (array element 2)

  return (
    <>
      <Suspense fallback={selectedMonth ? undefined : <p>loading filters...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth}/>
      </Suspense>
      <Suspense fallback={<p>loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth}/>
      </Suspense>
    </>
  );
}
