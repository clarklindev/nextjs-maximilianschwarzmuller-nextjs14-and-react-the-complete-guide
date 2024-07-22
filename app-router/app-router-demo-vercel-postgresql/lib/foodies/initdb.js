import sql from "better-sqlite3";
import path from "path";
import { DUMMY_DATA } from "@/lib/foodies/dummydata";

// Assuming .db is in the /data directory relative to the root of your application
const dbPath = path.join(process.cwd(), "data", "meals.db");
const db = sql(dbPath);

function initDb(){
  db.prepare(
    `
     CREATE TABLE IF NOT EXISTS meals (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         slug TEXT NOT NULL UNIQUE,
         title TEXT NOT NULL,
         image TEXT NOT NULL,
         summary TEXT NOT NULL,
         instructions TEXT NOT NULL,
         creator TEXT NOT NULL,
         creator_email TEXT NOT NULL
      )
  `
  ).run();
}
initDb();

function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of DUMMY_DATA) {
    stmt.run(meal);
  }
}

initData();
