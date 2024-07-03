import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import UserProfile from "../components/profile/user-profile";

function ProfilePage(props) {
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  console.log("session: ", session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false, //whether permanently always redirect to / -> false because its only this time when user not logged-in
      },
    };
  }

  return {
    props: { session: JSON.parse(JSON.stringify(session)) }, //note: `value` is used instead of `session` (protected keyword)
  };
}

export default ProfilePage;
