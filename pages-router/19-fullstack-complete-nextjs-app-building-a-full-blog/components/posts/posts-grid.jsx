import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post}/>;
      })}
    </ul>
  );
}

export default PostsGrid;
