import AuthForm from "@/components/auth/auth-form";

import { createTables, populateTables } from "@/lib/auth/db";

async function Home({searchParams}) {

  const formMode = searchParams.mode || "login";

  //calling directly (because its server-side)
  await createTables();

  //add data to tables
  await populateTables();

  return <AuthForm mode={formMode} />;
}

export default Home;