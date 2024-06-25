import styles from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';

function FeaturedPosts(props){
  const {posts} = props;

  return <section className={styles.latest}>
    <h2>Featured posts</h2>
    <PostsGrid posts={posts}/>
  </section>
}

export default FeaturedPosts;