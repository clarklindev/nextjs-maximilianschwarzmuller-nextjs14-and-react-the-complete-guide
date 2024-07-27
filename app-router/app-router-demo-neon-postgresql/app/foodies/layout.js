import "./globals.css";
import MainHeader from "@/components/foodies/main-header/main-header";
import { createTables, populateTables } from "@/lib/foodies/db";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default async function RootLayout({ children }) {
  
  await createTables();

  //add data to tables
  await populateTables();

  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
