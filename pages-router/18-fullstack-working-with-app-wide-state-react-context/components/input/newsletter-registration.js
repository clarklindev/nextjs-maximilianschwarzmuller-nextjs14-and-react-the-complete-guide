import {useRef} from 'react';

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const newsletterRef = useRef();

  async function registrationHandler(event) {
    console.log('register email');
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    const enteredEmail = newsletterRef.current.value;
    
    const requestBody = {
      email: enteredEmail
    }

    //validation

    //do email validation...
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers:{
        'Content-Type':'application/json'
      }
    });

    const data = await response.json();
    console.log('response: ', data);
    newsletterRef.current.value = "";
    
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={newsletterRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
