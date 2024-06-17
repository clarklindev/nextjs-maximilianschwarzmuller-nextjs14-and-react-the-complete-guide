import {useRef} from 'react';

function HomePage() {

  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitHandler(event){
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    // console.log(enteredEmail, enteredFeedback);
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">your email address</label>
          <input ref={emailRef} type="email" id="email"/>
        </div>
        <div>
          <label htmlFor="feedback">your feedback</label>
          <textarea ref={feedbackRef} rows="5" id="feedback"/>
        </div>
        <button>send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
