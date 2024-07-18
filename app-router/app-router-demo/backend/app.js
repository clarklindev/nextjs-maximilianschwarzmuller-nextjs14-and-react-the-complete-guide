import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";
import path from "path";

// Assuming .db is in the /data directory relative to the root of your application
const dbPath = path.join(process.cwd(), "data", "news.db");
const db = sqlite(dbPath);

const app = express();

app.use(cors());

app.get("/news", (req, res) => {
  const news = db.prepare("SELECT * FROM news").all();
  res.json(news);
});

app.get("/messages", (req, res) => {
  const requestSource = req.headers["x-id"];
  console.log(
    `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`
  );
  res.json([
    { id: 1, text: "Hello World" },
    { id: 2, text: "Another message from the separate backend" },
  ]);
});

app.listen(8080);
