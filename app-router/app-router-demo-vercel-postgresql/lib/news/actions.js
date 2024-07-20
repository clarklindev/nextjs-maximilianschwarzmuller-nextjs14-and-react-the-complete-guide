import sql from "better-sqlite3";
import path from "path";

// Assuming news.db is in the /data directory relative to the root of your application
const dbPath = path.join(process.cwd(), "data", "news.db");

const db = sql(dbPath);

export function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  // await new Promise((resolve) => setTimeout(resolve, 2000)); //SIMULATE SLOW CONNECTION
  return news;
}

export function getNewsItem(slug) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
}

export function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

export function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}
