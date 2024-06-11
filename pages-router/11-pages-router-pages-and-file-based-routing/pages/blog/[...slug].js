import {useRouter} from 'next/router';

function BlogPostsPage(){
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <h1>BlogPostsPage</h1>
}

export default BlogPostsPage;