import Header from "@/components/posts/header";
import classes from "./layout.module.css";

export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.posts}>{children}</main>
    </>
  );
}
