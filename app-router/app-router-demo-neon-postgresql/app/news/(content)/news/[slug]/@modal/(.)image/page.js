"use client";

import { DUMMY_DATA } from "@/lib/news/dummydata";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_DATA.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );
  const router = useRouter();

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
