import Image from "next/image";
import { notFound } from "next/navigation";

import classes from "./page.module.css";
import { getMeal } from "@/lib/foodies/meals";

export default async function MealDetailsPage({ params }) {
  console.log("params.slug: ", params.slug);

  const meal = await getMeal(params.slug);
  console.log("meal: ", meal);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>"); //fix line breaks

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          {/* <Image src={meal.image} alt={meal.title} fill/> */}
          <Image
            src={`https://${process.env.FOODIES_MEALS_BUCKET}${process.env.FOODIES_MEALS_SUBDOMAIN}${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
