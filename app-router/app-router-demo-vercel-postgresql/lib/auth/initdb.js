import sql from "better-sqlite3";
import path from "path";
import { DUMMY_DATA } from "@/lib/auth/dummydata";

// Assuming .db is in the /data directory relative to the root of your application
const dbPath = path.join(process.cwd(), "data", "training.db");
const db = sql(dbPath);

function initdb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT
    );
  `);

  db.exec(`CREATE TABLE IF NOT EXISTS sessions (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`);

  db.exec(`
    CREATE TABLE IF NOT EXISTS trainings (
      id INTEGER PRIMARY KEY,
      title TEXT,
      image TEXT,
      description TEXT
    );
  `);
}
initdb();

function initData() {
  const hasTrainings = db.prepare("SELECT COUNT(*) as count FROM trainings").get().count > 0;

  if (!hasTrainings) {
    const stmt = db.prepare(`
      INSERT INTO trainings VALUES (
        null,
        @title,
        @image,
        @description,
      )`
    );

    for (const trainingmethod of DUMMY_DATA) {
      stmt.run(trainingmethod);
    }
  }
}
initData();

//DO NOT CLOSE DB CONNECTION

export default db;
