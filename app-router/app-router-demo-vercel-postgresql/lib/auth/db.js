// import sql from "better-sqlite3";
// import path from "path";
// import fs from "node:fs";
import { sql } from "@vercel/postgres";

import { DUMMY_DATA } from "./dummydata.js"; //for node only initialization

export async function deleteTables() {
  try {
    // Construct the query string dynamically and execute it
    await sql`DROP TABLE IF EXISTS sessions CASCADE`;
    await sql`DROP TABLE IF EXISTS users CASCADE`;
    await sql`DROP TABLE IF EXISTS trainings CASCADE`;

    console.log("Table deleted successfully.");
  } catch (error) {
    console.error("Error deleting table:", error);
  }
}

export async function initializeDb() {
  //initialize tables if necessary

  await sql`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );`;

  await sql`CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );`;

  await sql`CREATE TABLE IF NOT EXISTS trainings (
    id SERIAL PRIMARY KEY,
    title TEXT,
    image TEXT,
    description TEXT
  );`;

  const result = await sql`SELECT COUNT(*) as count FROM trainings`;

  const [{ count }] = result.rows;
  const countValue = parseInt(count, 10); // Convert to number

  if (countValue === 0) {
    for (const { title, image, description } of DUMMY_DATA) {
      await sql`
        INSERT INTO trainings (title, image, description) VALUES (${title}, ${image}, ${description})
      `;
    }

    console.log('Data inserted successfully.');
  }
  else {
    console.log('Trainings table is not empty.');
  }
}
