import { Suspense } from "react";

import Posts from "@/components/posts/posts";
import { getPosts } from "@/lib/posts/actions";
import classes from "./page.module.css";
import { initializeDatabase } from "@/lib/posts/db";

async function LatestPosts() {
  await initializeDatabase();
  const latestPosts = await getPosts();
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>{`Here's what you might've missed.`}</p>
      <section className={classes.latestposts}>
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
