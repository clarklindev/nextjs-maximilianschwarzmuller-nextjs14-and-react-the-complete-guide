'use server';
import { hashUserPassword } from '@/lib/hash';
import {createUser} from '@/lib/user';

export async function signup(prevState, formData){
  const email = formData.get('email');
  const password = formData.get('password');

  //validate data
  let errors = {}
  if(!email.include('@')){
    errors.email = "Please enter a valid email";
  }
  if(password.trim().length < 8){
    errors.password = "password needs to be atleast 8 characters";
  }

  if(Object.keys(errors).length > 0){
    return {
      errors
    }
  }
  
  //store in db
  const hashedPassword = hashUserPassword(password);
  try{
    createUser(email, hashedPassword);
  } catch(error){
    if(error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
      return {errors: { email: 'invalid login details'}};
    }
    throw error; //default error handling;
  }

  //no errors -> successfully created user
  redirect('/training');
}