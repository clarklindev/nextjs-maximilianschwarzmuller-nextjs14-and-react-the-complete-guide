"use client";

import { useFormState } from "react-dom";

import FormSubmit from "@/components/posts/form-submit";
import classes from "./post-form.module.css";

export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className={classes["form-control"]}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className={classes["form-control"]}>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className={classes["form-control"]}>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className={classes["form-actions"]}>
          <FormSubmit label="create post" />
        </p>

        {state.errors && (
          <ul className={classes["form-errors"]}>
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
