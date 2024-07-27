import classes from "./messages.module.css";

export default function Messages({ messages }) {
  return (
    <ul className={classes.messages}>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
