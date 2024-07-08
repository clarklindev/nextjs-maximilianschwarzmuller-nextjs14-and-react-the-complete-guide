import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Layout from "@/components/layout/layout-blog";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>all my posts</title>
        <meta name="description" content="a list of all posts" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

AllPostsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default AllPostsPage;
