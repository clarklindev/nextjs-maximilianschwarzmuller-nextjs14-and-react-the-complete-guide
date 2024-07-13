import Link from "next/link";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/news-list";

export default function FilteredNewsPage({ params }) {
  //using catchall route
  const filter = params.filter;

  const selectedYear = filter?.[0]; //gets 1st segment (array element 1)
  const selectedMonth = filter?.[1]; //gets 2nd segment (array element 2)

  let news;
  let links = getAvailableNewsYears(); //-> YEARS

  //if year has already been selected -> show month links
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear); //news for a given year
    links = getAvailableNewsMonths(selectedYear); //-> MONTHS
  }

  //both selectedYear and selectedMonth -> show news with both these filters
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>no news for selected content</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList urlprefix="/news/" news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}` //here link is a month
                : `/archive/${link}`; //here link is a year

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
