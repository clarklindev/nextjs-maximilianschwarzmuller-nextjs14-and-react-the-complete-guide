export function handler(req, res){
  if(req.method === "POST"){
    const email = req.body.email;
    
    
    if(!email || !email.includes('@')){
      return res.status(422, {message: 'invalid email'});
    }

    console.log(email);

    return res.status(201).json({
      message: 'signedup',
      props:{
        email:email
      }   
    });
  }
}

export default handler;