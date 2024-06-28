import { useState } from 'react';

import styles from './contact-form.module.css';

function ContactForm(){
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  
  function sendMessageHandler(event){
      event.preventDefault();

      //optional -> add client-side validation

      fetch('/api/contact', {
        method: 'POST', 
        body: JSON.stringify({
          email: enteredEmail, 
          name: enteredName,
          message: enteredMessage
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      })
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
    
  </section>
}

export default ContactForm;