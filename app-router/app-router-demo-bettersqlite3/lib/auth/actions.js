"use server";
import { createAuthSession, destroySession } from "@/lib/auth/auth";
import { hashUserPassword, verifyPassword } from "@/lib/auth/hash";
import { createUser, getUserByEmail } from "@/lib/auth/user";
import { redirect } from "next/navigation";

//SIGNUP
export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  //validate data
  let errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email";
  }
  if (password.trim().length < 8) {
    errors.password = "password needs to be atleast 8 characters";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  //check if user already exists
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    return { errors: { email: "user already exists" } };
  }

  //store in db
  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);
    //create auth session
    await createAuthSession(id);
    //no errors -> successfully created user
    redirect("/auth/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return { errors: { email: "invalid login details" } };
    }
    throw error; //default error handling;
  }
}

//LOGIN
export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  //look for existing user with email
  const existingUser = getUserByEmail(email);
  if (!existingUser) {
    return {
      errors: {
        email: "could not authenticate user, please check your credentials",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "could not authenticate user, please check your credentials",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/auth/training");
}

//helper server action to call appropriate server action depending on mode
export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export async function logout() {
  await destroySession();
  redirect("/auth");
}
