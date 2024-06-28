import {MongoClient} from 'mongodb';

export async function connectDatabase(){
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@nextjs.qcg4anj.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=nextjs`);
  return client;                                                                                                     
}
