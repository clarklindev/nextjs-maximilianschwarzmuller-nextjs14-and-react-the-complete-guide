import { neon } from "@neondatabase/serverless";
import dotenv from 'dotenv';

// Load .env file
dotenv.config();

// Check if DATABASE_URL is loaded
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined. Please set it as an environment variable.");
  process.exit(1);
}

export async function deleteTables() {
  const sql = neon(process.env.DATABASE_URL);
  try {
    
    //AUTH
    await sql`DROP TABLE IF EXISTS auth_sessions CASCADE`;
    await sql`DROP TABLE IF EXISTS auth_users CASCADE`;
    await sql`DROP TABLE IF EXISTS trainings CASCADE`;

    //FOOD
    await sql`DROP TABLE IF EXISTS meals CASCADE`;
    
    //NEWS
    await sql`DROP TABLE IF EXISTS news CASCADE`;

    //POSTS
    await sql`DROP TABLE IF EXISTS posts_users CASCADE`;
    await sql`DROP TABLE IF EXISTS posts CASCADE`;
    await sql`DROP TABLE IF EXISTS posts_likes CASCADE`;

    //CACHING
    await sql`DROP TABLE IF EXISTS caching_messages CASCADE`;

    console.log("Table deleted successfully.");
  } catch (error) {
    console.error("Error deleting table:", error);
  }
}

deleteTables().catch(err => {
  console.error('Failed to delete tables:', err);
  process.exit(1);
});
