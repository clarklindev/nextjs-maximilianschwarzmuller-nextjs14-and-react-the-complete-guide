import AuthForm from "@/components/auth/auth-form";

import { initializeDb, deleteTables } from "@/lib/auth/db";

async function Home({searchParams}) {

  async function cleanup(){
    await deleteTables();
  }
  // cleanup();

  const formMode = searchParams.mode || "login";

  //calling directly (because its server-side)
  await initializeDb();

  return <AuthForm mode={formMode} />;
}

export default Home;