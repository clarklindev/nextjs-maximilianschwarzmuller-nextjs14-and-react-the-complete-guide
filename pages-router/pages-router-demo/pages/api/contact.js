// /api/contact

import { connectDatabase } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    //store in database
    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);
    let client;

    try {
      client = await connectDatabase("my-blog");
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.id;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing message failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "successfully stored message!", message: newMessage });
  }
}

export default handler;
