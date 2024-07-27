// import sql from "better-sqlite3";
// import path from "path";
// import fs from "node:fs";
import { neon } from "@neondatabase/serverless"; 

import { DUMMY_DATA } from "./dummydata.js"; //for node only initialization

const sql = neon(process.env.DATABASE_URL);

export async function createTables() {
  //initialize tables if necessary

  await sql`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );`;

  await sql`CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    expires_at TIMESTAMPTZ NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );`;

  await sql`CREATE TABLE IF NOT EXISTS trainings (
    id SERIAL PRIMARY KEY,
    title TEXT,
    image TEXT,
    description TEXT
  );`;

}

export async function populateTables(){
  const result = await sql`SELECT COUNT(*) as count FROM trainings`;

  console.log('populateTables result: ', result);
  const [{ count }] = result;

  const countValue = parseInt(count, 10); // Convert to number
  if (countValue === 0) {
    for (const { title, image, description } of DUMMY_DATA) {
      await sql`
        INSERT INTO trainings (title, image, description) VALUES (${title}, ${image}, ${description});
      `;
    }
    console.log('Data inserted successfully.');
  }
  
  else {
    console.log('Trainings table is not empty.');
  }
}