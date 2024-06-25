import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/featured-posts";

function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started",
      title: "getting started",
      image: "getting-started-nextjs.png",
      excerpt: "nextjs is the react framework for production",
      date: "2022-02-10",
    },
    {
      slug: "part1",
      title: "part1",
      image: "getting-started-nextjs.png",
      excerpt: "nextjs is the react framework for production",
      date: "2022-02-10",
    },
    {
      slug: "part2",
      title: "part2",
      image: "getting-started-nextjs.png",
      excerpt: "nextjs is the react framework for production",
      date: "2022-02-10",
    },
    {
      slug: "part3",
      title: "part3",
      image: "getting-started-nextjs.png",
      excerpt: "nextjs is the react framework for production",
      date: "2022-02-10",
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
