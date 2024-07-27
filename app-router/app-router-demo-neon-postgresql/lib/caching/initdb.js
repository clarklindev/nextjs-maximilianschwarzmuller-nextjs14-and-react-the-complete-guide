const sql = require("better-sqlite3");
import path from "path";

// Assuming .db is in the /data directory relative to the root of your application
const dbPath = path.join(process.cwd(), "data", "messages.db");
const db = sql(dbPath);

function initDb() {
  db.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY, 
        text TEXT
      )`);
}

initDb();
