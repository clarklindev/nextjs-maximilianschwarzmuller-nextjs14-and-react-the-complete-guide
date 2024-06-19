import fs from 'fs';
import path from 'path';

export function buildCommentPath(){
  return path.join(process.cwd(), 'data', 'comments.json');
}

export function extractComments(filePath){
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

//this endpoint is hit from /pages/events/[eventId] -> components/input/comments -> to this current page (pages/api/events/index.js)
function handler(req, res) {
  const eventId = req.query.eventId;  //pages/api/comments/[eventId]

  if(req.method === 'POST'){

    /*
    //structure of new comment (components/input/comments )

    const newComment = {
      email,
      name, 
      text
    };
    */
    const {email, name, text } = req.body; 

    //do server-side validation
    if(!email.includes('@') || !name || !text || name.trim() === '' || text.trim() === ''){
      res.status(422).json({
        message: 'invalid input'
      })
      return;
    }
    //-------------------------
    console.log(email, name, text);

    const newComment = {
      id: new Date().toISOString(),
      name, 
      email, 
      text
    };
    
    //read data/comments.json
    // const filePath = buildCommentPath();
    // const data = extractComments(filePath);
    // data.push(newComment);//add new data
    //store in file data/comments.json write with 'blocking' (synchronously)
    // fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({message: 'success', comment: newComment});

  }

  //return all coments
  if(req.method === 'GET'){
    const dummyList = [
      {id:'c1', name:"max", text:"bla bla"},
      {id:'c2', name:"manuel", text:"ble ble"},
    ];
    // const filePath = buildCommentPath();
    // const data = extractComments(filePath);

    res.status(200).json({comments: dummyList});
  }
}

export default handler;
