import { getServerSession } from "next-auth";
import AuthForm from "../components/auth/auth-form";
import { authOptions } from "./api/auth/[...nextauth]";

function AuthPage() {
  return <AuthForm />;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: true, //whether permanently always redirect to /
      },
    };
  }

  return {
    props: {},
  };
}

export default AuthPage;
