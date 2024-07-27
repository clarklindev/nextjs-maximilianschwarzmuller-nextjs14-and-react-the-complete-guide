import { DUMMY_DATA } from "@/lib/foodies/dummydata";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS meals (
      id SERIAL PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
    )
  `
}

export async function populateTables() {
  const result = await sql`SELECT COUNT(*) as count FROM meals`;
  console.log('populateTables result: ', result);
  const [{ count }] = result;
  const countValue = parseInt(count, 10); // Convert to number
  if (countValue === 0) {
    for (const meal of DUMMY_DATA) {
      const {slug, title, image, summary, instructions, creator, creator_email} = meal;

      await sql`
        INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (
          ${slug},
          ${title},
          ${image},
          ${summary},
          ${instructions},
          ${creator},
          ${creator_email}
        );
      `;
    }
  }
}