import Head from "next/head";

import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";
import LayoutBlog from "@/components/layout/layout-blog";

function BlogPage(props) {
  return (
    <>
      <Head>
        <title>Swagfingers blog</title>
        <meta
          name="description"
          content="i post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}

BlogPage.getLayout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default BlogPage;
