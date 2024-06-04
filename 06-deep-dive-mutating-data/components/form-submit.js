"use client";
import { useFormStatus } from "react-dom";

export default function FormSubmit({ label }) {
  const status = useFormStatus();

  if(status.pending){
    return <p>creating post..</p>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button disabled={status.pending}>{label}</button>
    </>
  );
}