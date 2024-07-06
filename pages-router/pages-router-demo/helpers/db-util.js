import { MongoClient } from "mongodb";

export async function connectDatabase(database) {
  if (!database) {
    throw new Error("'database' required for connectDatabase() function");
  }

  const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DOMAIN_AND_SUBDOMAIN}/${database}?retryWrites=true&w=majority&appName=${process.env.MONGO_APPNAME}`;
  const client = await MongoClient.connect(connectionString);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document); //collection is like a db table
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}
