import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

export async function getTrainings() {
  const result = await sql`SELECT * FROM trainings`;
  return result;
}
