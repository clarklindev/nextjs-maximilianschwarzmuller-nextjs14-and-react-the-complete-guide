import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "invalid email" });
    }

    let client;

    try {
      client = await connectDatabase("events");
    } catch (error) {
      return res.status(500).json({ message: "connecting failed" });
    }

    try {
      await insertDocument(client, "newsletter", { email });
      client.close();
    } catch (error) {
      return res.status(500).json({ message: "inserting data failed" });
    }

    return res.status(201).json({
      message: "signedup",
      props: {
        email: email,
      },
    });
  }
}

export default handler;
