import {MongoClient} from 'mongodb';

async function handler(req, res){
  if(req.method === "POST"){
    const email = req.body.email;
    
    
    if(!email || !email.includes('@')){
      return res.status(422, {message: 'invalid email'});
    }

    const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.zj9aoqq.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0`);
    const db = client.db();
    await db.collection('newsletter').insertOne({email}) //collection is like a db table

    client.close();

    return res.status(201).json({
      message: 'signedup',
      props:{
        email:email
      }   
    });
  }
}

export default handler;