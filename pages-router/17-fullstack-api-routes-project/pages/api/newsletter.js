import {connectDatabase, insertDocument} from '../../helpers/db-util';

async function handler(req, res){
  if(req.method === "POST"){
    const email = req.body.email;
    
    
    if(!email || !email.includes('@')){
      return res.status(422, {message: 'invalid email'});
    }

    let client;

    try{
      client = await connectDatabase();
    }
    catch(error){
      res.status(500).json({message: "connecting failed"});
      return;
    }

    try{
      await insertDocument(client, "newsletter", {email});
      client.close();
    }
    catch(error){
      res.status(500).json({message: "inserting data failed"});
      return;
    }

    return res.status(201).json({
      message: 'signedup',
      props:{
        email:email
      }   
    });
  }
}

export default handler;