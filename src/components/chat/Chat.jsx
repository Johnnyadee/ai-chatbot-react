import styles from "./Chat.module.css";
export default function Chat({ messages }) {
  const WELCOME_MESSAGE = {
    role: "assistant",
    content: "Hello how can I assist you right now?",
  };
  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div key={index} data-role={role} className={styles.Message}>
          {content}
        </div>
      ))}
    </div>
  );
}
