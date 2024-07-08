import { hashPassword } from "../../../helpers/auth";
import { connectDatabase } from "../../../helpers/db-util";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  //validation
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim() === "" ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "invalid input - password should be atleast 7 characters",
    });
    return;
  }

  let client;

  try {
    client = await connectDatabase(process.env.mongodb_database);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }

  const db = client.db();

  //check if user already exists
  const existingUser = await db.collection("users").findOne({ email: email });

  console.log("existing user...", existingUser);

  if (existingUser) {
    //user already exists
    res.status(422).json({ message: "user already exists" });
    client.close();
    return;
  }

  //hashed password
  const hashedPassword = await hashPassword(password);

  //store in db
  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "created user!" });
  client.close();
}

export default handler;
