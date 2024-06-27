import PostContent from "../../components/posts/posts-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props){
  return <article>
    <PostContent post={props.post}/>
  </article>
}

export function getStaticProps(context){
  const {params} = context;
  const {slug} = params;
  const postData = getPostData(slug);
  return {
    props:{
      post: postData
    },
    revalidate: 600 //every 10 minutes
  }
}

export function getStaticPaths(){
  const postFilenames = getPostsFiles();

  const slug = postFilenames.map(fileName=> fileName.replace(/\.md$/, '')); //removes file extension)

  return {
    paths: slug.map(slug=> ({params: {slug: slug}})),
    fallback: false
  }
}
export default PostDetailPage;


