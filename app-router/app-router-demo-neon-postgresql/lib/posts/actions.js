"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { uploadImage } from "@/lib/posts/cloudinary";


// import sql from "better-sqlite3";
// import path from "path";
// Assuming .db is in the /data directory relative to the root of your application
// const dbPath = path.join(process.cwd(), "data", "posts.db");
// const db = sql(dbPath);
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  //validation goes here...
  let errors = [];
  if (!title || title.trim().length === 0) {
    errors.push("title is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }

  //try upload image to cloudinary
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
    console.log('image uploaded...')
  } catch (error) {
    throw new Error("Image upload failed");
  }

  const data = {
    imageUrl: imageUrl,
    title: title,
    content: content,
    userId: 1,
  }; 

  console.log('data to store: ', data);

  await storePost(data);

  revalidatePath("/posts/", "layout");
  redirect("/posts/feed");
}

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 1);
  revalidatePath("/posts/", "layout");
}

export async function getPosts() {
  const result = await sql`
    SELECT 
      posts.id, 
      image_url AS image, 
      title, 
      content, 
      created_at AS "createdAt", 
      first_name AS "userFirstName", 
      last_name AS "userLastName", 
      COUNT(posts_likes.post_id) AS likes, 
      EXISTS(SELECT * FROM posts_likes WHERE posts_likes.post_id = posts.id and posts_likes.user_id = 1) AS "isLiked"
    FROM posts
    INNER JOIN posts_users ON posts.user_id = posts_users.id
    LEFT JOIN posts_likes ON posts.id = posts_likes.post_id
    GROUP BY 
      posts.id, 
      posts.image_url, 
      posts.title, 
      posts.content, 
      posts.created_at, 
      posts_users.first_name, 
      posts_users.last_name
    ORDER BY posts.created_at DESC
    `;

  console.log('getPosts() result: ', result);
  return result;
}

export async function storePost(post) {
  const {imageUrl, title, content, userId} = post;

  try{
    const result = await sql`INSERT INTO posts (image_url, title, content, user_id) 
      VALUES (${imageUrl}, ${title}, ${content}, ${userId}) 
      RETURNING id, image_url, title, content, user_id
    `;
    console.log('Insert result:', result);
  }
  catch(error){
    console.error('Error inserting data:', error);
  }
}

export async function updatePostLikeStatus(postId, userId) {
  const result = await sql`
    SELECT COUNT(*) AS count
    FROM posts_likes
    WHERE user_id = ${userId} AND post_id = ${postId}`;

  const [{ count }] = result;
  const countValue = parseInt(count, 10); // Convert to number

  if (countValue === 0) {
    const result = await sql`
      INSERT INTO posts_likes (user_id, post_id)
      VALUES (${userId}, ${postId}) RETURNING *`;
    return result;
  } else {
    const result = await sql`
      DELETE FROM posts_likes
      WHERE user_id = ${userId} AND post_id = ${postId}
      RETURNING *`;
    return result;
  }
}
