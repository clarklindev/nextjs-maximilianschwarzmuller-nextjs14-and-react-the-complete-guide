import { unstable_noStore } from "next/cache";

import Messages from "@/components/caching/messages";
import { getMessages } from "@/lib/caching/messages";

export default async function MessagesPage() {
  // const response = await fetch('http://localhost:8080/messages'
  // , {
  //   headers: {
  //     'X-ID': 'page',
  //   },
  // }
  // ,{
  //   next: {
  //     revalidate: 5 //revalidate if 5 seconds has lapsed since previous fetch
  //   }
  // }
  // );
  // const messages = await response.json();
  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
