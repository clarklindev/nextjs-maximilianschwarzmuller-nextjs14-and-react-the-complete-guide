"use client";

import { useFormStatus } from "react-dom";

export default function FormSubmit({label}) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : label}
    </button>
  );
}
