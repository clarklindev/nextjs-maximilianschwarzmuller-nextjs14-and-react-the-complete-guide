import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import classes from "./auth-form.module.css";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something went wrong!");
  }

  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional: add validation

    if (isLogin) {
      try {
        //login user
        const result = await signIn(
          "credentials", //provider
          {
            redirect: false,
            email: enteredEmail,
            password: enteredPassword,
          }
        );

        console.log("sign-in result: ", result); //result is always a promise, content will differ depending on if its error or data

        if (!result.error) {
          console.log("redirecting...");
          //redirect
          router.replace("/profile");
        } else {
          console.error("Sign-in error:", result.error);
        }
      } catch (error) {
        console.error("Sign-in error:", error);
      }
    } else {
      //create user
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log("createUser result:", result);
      } catch (error) {
        console.error("Create user error:", error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
