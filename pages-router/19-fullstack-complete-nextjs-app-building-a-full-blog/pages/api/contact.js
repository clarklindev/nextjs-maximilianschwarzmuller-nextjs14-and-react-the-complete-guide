// /api/contact

function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({message: 'invalid input'});
      return;
    }

    //store in database
    const newMessage = {
      email, name, message
    }

    console.log(newMessage);

    res.status(201).json({message: 'successfully stored message!', message: newMessage});
  }
}

export default handler;
