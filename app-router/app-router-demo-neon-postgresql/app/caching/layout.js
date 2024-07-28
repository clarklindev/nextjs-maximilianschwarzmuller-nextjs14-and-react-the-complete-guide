import Header from "@/components/caching/header";
import "./globals.css";
import classes from "./layout.module.css";
import { createTables } from "@/lib/caching/db";

export const metadata = {
  title: "Next.js Caching",
  description: "Learn how Next.js caching works",
};

export default async function RootLayout({ children }) {

  await createTables();

  return (
    <html className={classes.html} lang="en">
      <body className={classes.body}>
        <Header />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  );
}
