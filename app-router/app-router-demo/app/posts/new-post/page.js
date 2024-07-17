import { createPost } from "@/lib/posts/actions";
import PostForm from "@/components/posts/post-form";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
