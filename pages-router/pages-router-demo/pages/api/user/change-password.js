import { getServerSession } from "next-auth/next";

import { authOptions } from "@/api/auth/[...nextauth]";
import { connectDatabase } from "@/helpers/db-util";
import { hashPassword, verifyPassword } from "@/helpers/auth";

//api: api/user/change-password

async function handler(req, res) {
  //extract change password form details

  if (req.method !== "PATCH") {
    return;
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "not authenticated" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectDatabase(process.env.mongodb_database);
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({ email: userEmail });
  if (!user) {
    res.status(404).json({ message: "user not found" });
    client.close();
  }

  const currentPassword = user.password; //the hashed password stored in db
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "invalid password" }); //403 - authenticated but not authorized, 422 user input incorrect
    client.close();

    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({ message: "password updated" });
}

export default handler;
