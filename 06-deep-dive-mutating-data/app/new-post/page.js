import { redirect } from 'next/navigation';

import PostForm from '@/components/post-form';
import { storePost } from '@/lib/posts';

export default function NewPostPage() {

  async function createPost(prevState, formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    //validation goes here...
    let errors =[];
    if(!title || title.trim().length===0){
      errors.push('title is required');
    }

    if(errors.length > 0){
      return {errors};
    }

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    });

    redirect('/feed');
  }
  
  return <PostForm action={createPost}/>
}
