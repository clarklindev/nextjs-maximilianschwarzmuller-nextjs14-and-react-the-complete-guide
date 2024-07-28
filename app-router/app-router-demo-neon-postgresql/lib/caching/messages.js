// import sql from "better-sqlite3";
import { cache } from "react";
import { unstable_cache as nextCache } from "next/cache";
// import path from "path";

// Assuming .db is in the /data directory relative to the root of your application
// const dbPath = path.join(process.cwd(), "data", "messages.db");
// const db = sql(dbPath);

import { neon } from "@neondatabase/serverless"; 
const sql = neon(process.env.DATABASE_URL);


export async function addMessage(message) {
  await sql`INSERT INTO caching_messages (text) VALUES (${message})`;
}

//non-cached
// export function getMessages() {
//   console.log('Fetching messages from db');
//   return db.prepare('SELECT * FROM messages').all();
// }

//cached with cache()
export const getMessages = nextCache(
  cache(async function getMessages() {
    console.log("Fetching caching_messages table");
    const result = await sql`SELECT * FROM caching_messages`;
    return result;
  }),

  //cached keys (lesson 190)
  ["caching_messages"],

  //third argument (lesson 191)
  {
    tags: ["msg"],
  }
);
