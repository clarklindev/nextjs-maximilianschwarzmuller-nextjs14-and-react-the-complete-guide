import Link from "next/link";
// import { useSession } from "next-auth/client"; //next-auth @3

import { useSession, signOut } from "next-auth/react"; //next-auth @4

import Logo from "./logo";
import styles from "./main-navigation.module.css";

function MainNavigation() {
  // const [session, loading] = useSession(); v3
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      {/* <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link> */}
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

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
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
