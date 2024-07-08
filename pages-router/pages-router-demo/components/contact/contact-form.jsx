import { useState, useEffect } from 'react';

import Notification from '../ui/notification';
import styles from './contact-form.module.css';

async function sendContactData(contactDetails){
  const response = await fetch('/api/contact', {
    method: 'POST', 
    body: JSON.stringify(contactDetails),
    headers:{
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || 'something went wrong');
  }
}

function ContactForm(){
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); //'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(()=>{
    if(requestStatus === 'success' || requestStatus === 'error'){
      const timer = setTimeout(()=>{
        setRequestStatus(null);
        setRequestError(null);
      },3000);

      return () => clearTimeout(timer);
    }


  }, [requestStatus]);

  async function sendMessageHandler(event){
      event.preventDefault();

      //optional -> add client-side validation

      //set status to pending
      setRequestStatus('pending');

      try{
        await sendContactData({
          email: enteredEmail, 
          name: enteredName,
          message: enteredMessage
        });
        setRequestStatus('success');

        //clear form when success
        setEnteredEmail('');
        setEnteredMessage('');
        setEnteredName('');
      }
      catch(error){
        setRequestError(error.message);
        setRequestStatus('error');
      }
      
  }

  let notification;
  if(requestStatus === 'pending'){
    notification = {
      status: 'pending',
      title: 'sending message...',
      message: 'your message is on its way!'
    }
  }
  if(requestStatus === 'success'){
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'message sent successfully'
    }
  }
  if(requestStatus === 'error'){
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError
    }
  }


  return <section className={styles.contact}>
    <h1>How can i help?</h1>
    
    <form className={styles.form} onSubmit={sendMessageHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="email">your email</label>
          <input type="email" id="email" required value={enteredEmail} onChange={event=> setEnteredEmail(event.target.value)}/>
        </div>
        <div className={styles.control}>
          <label htmlFor="name">your name</label>
          <input type="text" id="name" required value={enteredName} onChange={event=> setEnteredName(event.target.value)}/>
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="message">your message</label>
        <textarea id="message" rows="5" required value={enteredMessage} onChange={event=> setEnteredMessage(event.target.value)}></textarea>  
      </div>
      <div className={styles.actions}>
        <button>send message</button>
      </div>
    </form>
    {
      notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>
    }
  </section>
}

export default ContactForm;