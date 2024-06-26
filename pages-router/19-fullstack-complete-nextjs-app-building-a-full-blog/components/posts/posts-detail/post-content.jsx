import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "getting started",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: `# this is a first post`
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
