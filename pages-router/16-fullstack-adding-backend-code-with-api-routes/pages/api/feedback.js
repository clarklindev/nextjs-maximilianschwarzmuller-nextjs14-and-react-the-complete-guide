import fs from 'fs';
import path from 'path';

function handler(req, res){
  if(req.method === 'POST'){
    const emailText = req.body.email;
    const feedbackText = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email:enteredEmail, 
      feedback:enteredFeedback
    };
    
    //read data/feedback.json
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);//add new data
    
    //store in file data/feedback.json write with 'blocking' (synchronously)
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({message: 'success', feedback: newFeedback});

  }
  else{
    res.status(200).json({message: "testing testing 123"});
  }
}
export default handler;