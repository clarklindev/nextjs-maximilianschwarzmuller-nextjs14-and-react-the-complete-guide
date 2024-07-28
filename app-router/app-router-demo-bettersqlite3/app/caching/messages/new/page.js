import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

import { addMessage } from "@/lib/caching/messages";
import classes from "./page.module.css";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);

    //OPTION1 - revalidatePath()
    // revalidatePath("/messages");  //any cached data on page with be thrown

    //OPTION2 - revalidateTag()
    revalidateTag("msg");
    redirect("/caching/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className={classes["form-control"]}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className={classes["form-actions"]}>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
