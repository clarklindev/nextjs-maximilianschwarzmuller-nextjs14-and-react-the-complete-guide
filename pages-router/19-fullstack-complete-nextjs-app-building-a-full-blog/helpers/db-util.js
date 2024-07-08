import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DOMAIN_AND_SUBDOMAIN}/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=${process.env.mongodb_clustername}`;

  const client = await MongoClient.connect(connectionString);
  return client;
}
