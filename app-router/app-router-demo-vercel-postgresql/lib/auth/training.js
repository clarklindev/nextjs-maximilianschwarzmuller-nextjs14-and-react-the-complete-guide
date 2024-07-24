import { sql } from "@vercel/postgres";

export async function getTrainings() {
  const result = await sql`SELECT * FROM trainings`;
  return result;
}
