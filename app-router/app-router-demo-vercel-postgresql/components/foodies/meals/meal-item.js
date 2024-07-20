import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/* <Image src={image} alt={title} fill /> */}
          <Image
            src={`https://clarklindev-nextjs-react-the-complete-guide-03-3-foodies.s3.ap-southeast-1.amazonaws.com${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/foodies/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
