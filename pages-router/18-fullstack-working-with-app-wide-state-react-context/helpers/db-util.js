import {MongoClient} from 'mongodb';

export async function connectDatabase(){
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@nextjs.qcg4anj.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=nextjs`);
  return client;                                                                                                     
}

export async function insertDocument(client, collection, document){
  const db = client.db();
  const result = await db.collection(collection).insertOne(document); //collection is like a db table
  return result;
}

export async function getAllDocuments(client, collection, sort, filter={}){
  const db = client.db();

  const documents = await db.collection(collection).find(filter).sort(sort).toArray();
  return documents;
}