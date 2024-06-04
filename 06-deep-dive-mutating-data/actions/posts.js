"use server";
import { redirect } from 'next/navigation';
import { storePost } from '@/lib/posts';
import { uploadImage } from '@/lib/cloudinary';

export async function createPost(prevState, formData) {
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

  //try upload image to cloudinary
  let imageUrl;
  try{
    imageUrl = await uploadImage(image);
  }
  catch(error){
    throw new Error('Image upload failed')
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1
  });

  redirect('/feed');
}