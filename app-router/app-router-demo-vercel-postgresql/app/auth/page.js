import AuthForm from "@/components/auth/auth-form";
import { getDb } from "@/lib/auth/db";

export default async function Home({ searchParams }) {
  const formMode = searchParams.mode || "login";

  //getting from API
  const response = await fetch("http://localhost:3000/api/auth/initdb", {
    method:'post'
  });

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  const data = await response.json();
  console.log('answer: ', data);


  //calling directly (because its server-side)
  // if (typeof window === 'undefined') {
  //   try {
  //     getDb();
  //     console.log('Database initialized successfully.');
  //   } catch (error) {
  //     console.error('Failed to initialize the database:', error.message);
  //   }
  // }

  return <AuthForm mode={formMode} />;
}
