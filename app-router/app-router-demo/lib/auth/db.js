import sql from "better-sqlite3";
import path from "path";
import fs from "node:fs";

let db;
const dbPath = path.join(process.cwd(), "data", "training.db");

export async function getDb() {
  if (!db) {
    // Create the directory if it doesn't exist
    const dirPath = path.dirname(dbPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Assuming .db is in the /data directory relative to the root of your application
    db = sql(dbPath);
    initializeDb(db);
  }
  return db;
}

export async function deleteTable(table) {
  try {
    await sql`DROP TABLE IF EXISTS ${table};`;
    console.log('Table deleted successfully.');
  } catch (error) {
    console.error('Error deleting table:', error);
  }
}

export async function initializeDb() {
  //initialize tables if necessary
  
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

  //if the trainings table is empty...
  const hasTrainings =
    db.prepare("SELECT COUNT(*) as count FROM trainings").get().count > 0;

  if (!hasTrainings) {
    const stmt = db.prepare(`
      INSERT INTO trainings (title, image, description) VALUES (
        @title,
        @image,
        @description
      );
    `);

    for (const trainingmethod of DUMMY_DATA) {
      stmt.run(trainingmethod);
    }
  }
}