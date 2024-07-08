import { useRef, useContext } from "react";

import classes from "./newsletter-registration.module.css";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const newsletterRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  async function registrationHandler(event) {
    console.log("register email");
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    const enteredEmail = newsletterRef.current.value;

    let response;

    try {
      notificationCtx.showNotification({
        title: "Signup",
        message: "registering for newsletter",
        status: "pending",
      });
      //do email validation...
      response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "something went wrong");
      }
      newsletterRef.current.value = "";
      notificationCtx.showNotification({
        title: "Success",
        message: "successfully registered for newsletter",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error",
        message: "signup error",
        status: "error",
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={newsletterRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
