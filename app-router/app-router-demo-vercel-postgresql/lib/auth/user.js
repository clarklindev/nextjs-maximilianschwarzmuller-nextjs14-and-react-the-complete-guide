import { sql } from "@vercel/postgres";

export async function createUser(email, password) {
  try{
    const result = await sql` INSERT INTO users (email, password) VALUES (${email}, ${password})`;
    console.log('createUser: ', result);
    return result.lastInsertRowid;
  }
  catch(error){
    console.error('Error creating user:', error);
    throw error;
  }
}

//returns {id, email, hashed-password}
export async function getUserByEmail(email) {
  try{
    const result = await sql`SELECT * FROM users WHERE email = ${email}`;
    console.log('getUserByEmail: ', result);
    return result;
  }
  catch(error){
    console.error('Error fetching user by email:', error);
    throw error;
  }
}
