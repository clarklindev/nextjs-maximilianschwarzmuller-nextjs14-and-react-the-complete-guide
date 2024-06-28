import styles from './contact-form.module.css';

function ContactForm(){
  return <section className={styles.contact}>
    <h1>How can i help?</h1>
    
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="email">your email</label>
          <input type="email" id="email" required/>
        </div>
        <div className={styles.control}>
          <label htmlFor="name">your name</label>
          <input type="text" id="name" required/>
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="message">your message</label>
        <textarea id="message" rows="5"></textarea>  
      </div>
      <div className={styles.actions}>
        <button>send message</button>
      </div>
    </form>
    
  </section>
}

export default ContactForm;