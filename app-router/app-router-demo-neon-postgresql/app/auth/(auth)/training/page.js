import { redirect } from "next/navigation";

import { verifyAuth } from "@/lib/auth/auth";
import { getTrainings } from "@/lib/auth/training";
import classes from "./page.module.css";

export default async function TrainingPage() {
  const result = await verifyAuth();
  //if the user doesnt exist...redirect
  if (!result.user) {
    return redirect("/auth");
  }

  const trainingSessions = await getTrainings();
  const imageBasePath = process.env.AUTH_TRAINING_IMAGE_BASE_PATH;

  return (
    <main className={classes.main}>
      <h1>Find your favorite activity</h1>
      <ul className={classes["training-sessions"]}>
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img
              src={`${imageBasePath}${training.image}`}
              alt={training.title}
            />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
