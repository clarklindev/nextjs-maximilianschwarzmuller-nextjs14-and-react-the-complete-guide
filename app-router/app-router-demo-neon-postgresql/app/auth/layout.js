import { createTables, populateTables } from "@/lib/auth/db";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default async function RootLayout({ children }) {

    //calling directly (because its server-side)
    await createTables();

    //add data to tables
    await populateTables();

  return <>{children}</>;
}
