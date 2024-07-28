import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

export async function createUser(email, password) {
  console.log('FUNCTION createUser');
  try{
    const result = await sql`INSERT INTO auth_users (email, password) VALUES (${email}, ${password}) RETURNING id, email, password`;
    console.log('createUser: ', result);
    return result[0];
  }
  catch(error){
    console.error('Error creating user:', error);
    throw error;
  }
}

//returns {id, email, hashed-password}
export async function getUserByEmail(email) {
  try{
    const result = await sql`SELECT * FROM auth_users WHERE email = ${email}`;
    console.log('getUserByEmail: ', result);
    //check if rows are returned
    if (result.length === 0) {
      console.log('No user found with email:', email);
      return null; // or return an empty object if you prefer
    }
    // Since email is unique, there should be only one user or none
    const user = result[0]; // Get the first user object
    console.log('getUserByEmail: ', user);
    return user;
  }
  catch(error){
    console.error('Error fetching user by email:', error);
    throw error;
  }
}
