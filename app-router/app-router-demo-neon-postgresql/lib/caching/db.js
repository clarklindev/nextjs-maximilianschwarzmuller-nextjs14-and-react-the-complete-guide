// const sql = require("better-sqlite3");
// import path from "path";

// Assuming .db is in the /data directory relative to the root of your application
// const dbPath = path.join(process.cwd(), "data", "messages.db");
// const db = sql(dbPath);

import { neon } from "@neondatabase/serverless"; 
const sql = neon(process.env.DATABASE_URL);

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS caching_messages (
      id SERIAL PRIMARY KEY, 
      text TEXT
    )
  `;
}
