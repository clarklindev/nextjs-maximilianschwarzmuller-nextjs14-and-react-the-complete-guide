// import sql from "better-sqlite3";
// import path from "path";
// Assuming news.db is in the /data directory relative to the root of your application
// const dbPath = path.join(process.cwd(), "data", "news.db");
// const db = sql(dbPath);

import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

export async function getAllNews() {
  try {
    const result = await sql`SELECT * FROM news`;
    return result;

  } catch (error) {
    console.error('Error executing query:', error);
  }

}

export async function getNewsItem(slug) {
  const result = await sql`SELECT * FROM news WHERE slug = ${slug}`;
  const newsItem = result.length > 0 ? result[0] : null;
  return newsItem;
}

export async function getLatestNews() {
  const latestNews = await sql`SELECT * FROM news ORDER BY date DESC LIMIT 3`;
  return latestNews;
}

export async function getAvailableNewsYears() {
  try {
    const result = await sql`SELECT DISTINCT EXTRACT(YEAR FROM date) AS year FROM news`;
    const years = result.map((row) => row.year);
    return years;
  } catch (error) {
    console.error('Error executing query:', error);
    return [];
  }
}

export async function getAvailableNewsMonths(year) {
  try {
      const result = await sql`SELECT DISTINCT EXTRACT(MONTH FROM date) as month FROM news WHERE EXTRACT(YEAR from date) = ${year}`;
      const months = result.map((row) => row.month);
      return months;
  } catch (error) {
      console.error('Error executing query:', error);
      return [];
  }
}

export async function getNewsForYear(year) {
  try {
      const news = await sql`
          SELECT * 
          FROM news 
          WHERE EXTRACT(YEAR from date) = ${year} 
          ORDER BY date DESC
      `;
      return news;
  } catch (error) {
      console.error('Error executing query:', error);
      return [];
  }
}

export async function getNewsForYearAndMonth(year, month) {
  try {
      const news = await sql`
          SELECT * 
          FROM news 
          WHERE EXTRACT(YEAR from date) = ${year} 
            AND EXTRACT(MONTH FROM date) = ${month} 
          ORDER BY date DESC
      `;
      return news;
  } catch (error) {
      console.error('Error executing query:', error);
      return [];
  }
}