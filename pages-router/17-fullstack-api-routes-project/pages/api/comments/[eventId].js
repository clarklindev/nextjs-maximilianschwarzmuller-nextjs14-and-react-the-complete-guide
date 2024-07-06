// import fs from "fs";
// import path from "path";

import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";

// export function buildCommentPath() {
//   return path.join(process.cwd(), "data", "comments.json");
// }

// export function extractComments(filePath) {
//   const fileData = fs.readFileSync(filePath);
//   const data = JSON.parse(fileData);
//   return data;
// }

//this endpoint is hit from /pages/events/[eventId] -> components/input/comments -> to this current page (pages/api/events/index.js)
async function handler(req, res) {
  const eventId = req.query.eventId; //pages/api/comments/[eventId]

  //connect to mongodb
  let client;

  try {
    client = await connectDatabase("events");
  } catch (error) {
    res.status(500).json({ message: "connecting to the database failed" });
    return;
  }

  if (req.method === "POST") {
    /*
    //structure of new comment (components/input/comments )

    const newComment = {
      email,
      name, 
      text
    };
    */
    const { email, name, text } = req.body;

    //do server-side validation
    if (
      !email.includes("@") ||
      !name ||
      !text ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({
        message: "invalid input",
      });
      client.close();

      return;
    }
    //-------------------------
    console.log(email, name, text);

    const newComment = {
      name,
      email,
      text,
      eventId,
    };

    //read data/comments.json
    // const filePath = buildCommentPath();
    // const data = extractComments(filePath);
    // data.push(newComment);//add new data
    //store in file data/comments.json write with 'blocking' (synchronously)
    // fs.writeFileSync(filePath, JSON.stringify(data));

    //write to db
    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "success", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "inserting comment failed" });
    }
  }

  //return all coments
  if (req.method === "GET") {
    //localStorage
    // const dummyList = [
    //   {id:'c1', name:"max", text:"bla bla"},
    //   {id:'c2', name:"manuel", text:"ble ble"},
    // ];
    // const filePath = buildCommentPath();
    // const data = extractComments(filePath);

    //mongodb
    let documents;
    try {
      documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "getting comments failed" });
    }
  }
  client.close();
}

export default handler;
