import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown';

function PostContent(props) {
  const {post} = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
