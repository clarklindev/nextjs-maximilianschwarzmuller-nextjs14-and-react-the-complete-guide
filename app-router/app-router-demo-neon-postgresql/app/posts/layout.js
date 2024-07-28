import Header from "@/components/posts/header";
import classes from "./layout.module.css";
import { initializeDatabase } from "@/lib/posts/db";

export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default async function RootLayout({ children }) {
  await initializeDatabase();

  return (
    <>
      <Header />
      <main className={classes.posts}>{children}</main>
    </>
  );
}
