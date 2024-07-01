import { MongoClient } from "mongodb";

export async function connectDatabase(database) {
  if (!database) {
    throw new Error("'database' required for connectDatabase() function");
  }

  const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.mongodb_clustername}.qcg4anj.mongodb.net/${database}?retryWrites=true&w=majority&appName=nextjs`;

  const client = await MongoClient.connect(connectionString);

  return client;
}
