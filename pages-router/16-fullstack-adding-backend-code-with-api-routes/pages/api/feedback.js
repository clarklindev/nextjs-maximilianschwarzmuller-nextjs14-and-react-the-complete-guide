import fs from 'fs';
import path from 'path';

function buildFeedbackPath(){
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractFeedback(filePath){
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res){
  if(req.method === 'POST'){
    const emailText = req.body.email;
    const feedbackText = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email: emailText, 
      feedback: feedbackText
    };
    
    //read data/feedback.json
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);//add new data
    
    //store in file data/feedback.json write with 'blocking' (synchronously)
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({message: 'success', feedback: newFeedback});

  }
  if(req.method === 'GET'){
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({feedback: data});
  }
}
export default handler;