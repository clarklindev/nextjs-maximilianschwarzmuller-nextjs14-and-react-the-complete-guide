import Link from "next/link";
// import { useSession } from "next-auth/client"; //next-auth @3
import { useSession } from "next-auth/react"; //next-auth @4

import classes from "./main-navigation.module.css";

function MainNavigation() {
  // const [session, loading] = useSession(); v3
  const { data: session, status } = useSession();

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!session && status !== "loading" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
