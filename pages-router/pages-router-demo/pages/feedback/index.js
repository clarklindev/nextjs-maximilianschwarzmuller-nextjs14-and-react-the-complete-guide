import { useState, useRef } from "react";

import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function FeedbackPage(props) {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const [feedbackItems, setFeedbackItems] = useState([]);
  const [feedbackData, setFeedbackData] = useState();

  async function loadFeedbackHandler(id) {
    const response = await fetch(`/api/feedback/${id}`);
    const data = await response.json();
    setFeedbackData(data.feedback);
  }

  async function loadAllFeedbackHandler() {
    const response = await fetch("/api/feedback");
    const data = await response.json();
    setFeedbackItems(data.feedback); //access feedback prop from response
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;
    // console.log(enteredEmail, enteredFeedback);

    const requestBody = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("response: ", data);
  }

  return (
    <>
      {feedbackData && <p>email: {feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h1>The Home Page</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">your email address</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="feedback">your feedback</label>
            <textarea ref={feedbackRef} rows="5" id="feedback" />
          </div>
          <button>send feedback</button>
        </form>
        <hr />
        <button onClick={loadAllFeedbackHandler}>load</button>

        <ul>
          {feedbackItems.map((item) => (
            <li key={item.id}>{item.feedback}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FeedbackPage;

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}
