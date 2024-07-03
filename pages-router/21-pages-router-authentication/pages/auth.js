import { useSession } from "next-auth/react"; //v4
import { useRouter } from "next/router";

import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const { data: session, status } = useSession(); //v4 returns an object

  const router = useRouter();

  if (session) {
    //redirect if already authenticated
    router.replace("/");
  }

  if (status === "loading") {
    console.log("loading...");
    return <p>loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
