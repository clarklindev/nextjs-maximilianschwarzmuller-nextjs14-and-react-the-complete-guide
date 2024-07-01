// import { useSession } from "next-auth/client"; //next-auth v3
import { useSession } from "next-auth/react"; // next-auth v4
import { useRouter } from "next/router";

import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // const [session, loading] = useSession(); //next-auth v3
  const { data: session, status } = useSession(); //v4 returns an object

  const router = useRouter();

  if (status === `unauthenticated`) {
    router.push(`/auth`);
  }

  if (status === "loading") {
    return <p className={classes.profile}>loading...</p>;
  }
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
