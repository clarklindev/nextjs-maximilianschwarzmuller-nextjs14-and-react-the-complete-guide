import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

//api: api/user/change-password

function handler(req, res) {
  //extract change password form details

  if (req.method !== "PATCH") {
    return;
  }
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  //validate if request is authenticated
  if (!session) {
    res.status(401).json({ message: "not authenticated" });
    return;
  }
}

export default handler;
