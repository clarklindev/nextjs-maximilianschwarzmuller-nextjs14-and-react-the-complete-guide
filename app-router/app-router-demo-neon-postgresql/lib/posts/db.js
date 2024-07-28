// import sql from "better-sqlite3";
// import path from "path";
// Assuming .db is in the /data directory relative to the root of your application
// const dbPath = path.join(process.cwd(), "data", "posts.db");
// const db = sql(dbPath);

import { DUMMY_DATA } from "@/lib/posts/dummydata";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

async function createTables(){
  try{
    await sql`
      CREATE TABLE IF NOT EXISTS posts_users (
        id SERIAL PRIMARY KEY, 
        first_name TEXT, 
        last_name TEXT,
        email TEXT
      )
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY, 
        image_url TEXT NOT NULL,
        title TEXT NOT NULL, 
        content TEXT NOT NULL, 
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        user_id INTEGER, 
        FOREIGN KEY(user_id) REFERENCES posts_users(id) ON DELETE CASCADE
      )
    `;
   
    await sql`
      CREATE TABLE IF NOT EXISTS posts_likes (
        user_id INTEGER, 
        post_id INTEGER, 
        PRIMARY KEY(user_id, post_id),
        FOREIGN KEY(user_id) REFERENCES posts_users(id) ON DELETE CASCADE, 
        FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
      )
    `;
    console.log('FUNCTION createTables() success: tables created')
  }
  catch(error){
    console.error("FUNCTION createTables() fail: ", error);
  }
}

async function populateTables(){
  // Creating two dummy users if they don't exist already
  const result = await sql`SELECT COUNT(*) AS count FROM posts_users`;
  const [{ count }] = result;
  const countValue = parseInt(count, 10); // Convert to number

  if (countValue === 0) {
    try{
      for( const {first_name, last_name, email} of DUMMY_DATA){
        await sql`INSERT INTO posts_users (first_name, last_name, email) VALUES (${first_name}, ${last_name}, ${email})`;
      }
      console.log('FUNCTION populateTables() success: posts_users table populated')
    }
    catch(error){
      console.error("FUNCTION populateTables() fail: ", error);
    }
  }
}

export async function initializeDatabase() {
  await createTables();
  await populateTables();
}