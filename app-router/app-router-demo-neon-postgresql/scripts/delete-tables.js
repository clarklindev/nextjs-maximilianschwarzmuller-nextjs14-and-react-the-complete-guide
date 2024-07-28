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
    // Construct the query string dynamically and execute it
    await sql`DROP TABLE IF EXISTS sessions CASCADE`;
    await sql`DROP TABLE IF EXISTS users CASCADE`;
    await sql`DROP TABLE IF EXISTS trainings CASCADE`;
    await sql`DROP TABLE IF EXISTS meals CASCADE`;
    await sql`DROP TABLE IF EXISTS news CASCADE`;

    console.log("Table deleted successfully.");
  } catch (error) {
    console.error("Error deleting table:", error);
  }
}

deleteTables().catch(err => {
  console.error('Failed to delete tables:', err);
  process.exit(1);
});
