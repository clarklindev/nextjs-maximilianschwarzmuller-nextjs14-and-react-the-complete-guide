import sql from "better-sqlite3";
import { cache } from "react";
import { unstable_cache as nextCache } from "next/cache";
import path from "path";

// Assuming .db is in the /data directory relative to the root of your application
const dbPath = path.join(process.cwd(), "data", "messages.db");
const db = sql(dbPath);

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

//non-cached
// export function getMessages() {
//   console.log('Fetching messages from db');
//   return db.prepare('SELECT * FROM messages').all();
// }

//cached with cache()
export const getMessages = nextCache(
  cache(function getMessages() {
    console.log("Fetching messages from db");
    return db.prepare("SELECT * FROM messages").all();
  }),

  //cached keys (lesson 190)
  ["messages"],

  //third argument (lesson 191)
  {
    tags: ["msg"],
  }
);
