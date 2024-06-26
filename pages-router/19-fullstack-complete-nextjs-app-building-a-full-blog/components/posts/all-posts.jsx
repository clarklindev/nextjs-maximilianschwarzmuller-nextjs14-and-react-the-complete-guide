import styles from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props){
return (
  <section className={styles.posts}>
    <h1>All posts</h1>
    <PostsGrid posts={props.posts}/>
  </section>
);

}

export default AllPosts;