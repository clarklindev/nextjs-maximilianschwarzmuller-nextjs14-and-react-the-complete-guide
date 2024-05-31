import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}){
  const newsYear = params.year; //accessing the dynamic route app/archive/@archive/[year] value

  const news = getNewsForYear(newsYear);
  return <NewsList news={news}/>
}