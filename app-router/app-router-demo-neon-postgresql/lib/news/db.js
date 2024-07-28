import { DUMMY_DATA } from "@/lib/news/dummydata";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

async function createTables(){
  try{
    await sql`CREATE TABLE IF NOT EXISTS news (id SERIAL PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TIMESTAMPTZ, image TEXT)`;
    console.log('FUNCTION createTables() success: table created')
  }
  catch(error){
    console.error("FUNCTION createTables() fail: ", error);
  }
  
}

async function populateTables(){
  console.log("FUNCTION populateTables()");
  const result = await sql`SELECT COUNT(*) as count FROM news`;
  console.log('FUNCTION populateTables() result: ', result);
  const [{ count }] = result;

  const countValue = parseInt(count, 10); // Convert to number
  if (countValue === 0) {

    try{
      for( const {slug, title, content, date, image } of DUMMY_DATA){
        await sql`INSERT INTO news (slug, title, content, date, image) VALUES (${slug}, ${title}, ${content}, ${date}, ${image})`;
      }
      console.log('FUNCTION populateTables() success: table populated')
    }
    catch(error){
      console.error("FUNCTION populateTables() fail: ", error);
    }
  }
  else{
    console.log('using existing news table');
  }
}

let initialized = false;

export async function initializeDatabase() {
  if (!initialized) {
    await createTables();
    await populateTables();
    initialized = true;
  }
}