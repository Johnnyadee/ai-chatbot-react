import { useState } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";

function App() {
  const [messages, setMessages] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="chat-bot.png" alt="Chat Bot" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
}
const MESSAGES = [
  {
    role: "user",
    content: "What is React?",
  },
  {
    role: "assistant",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. React uses a virtual DOM to optimize rendering and improve performance.",
  },
  {
    role: "user",
    content: "lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur.",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur.",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio veritatis maiores, animi ratione et facere cum tempore excepturi placeat, in aliquam? Aliquid reprehenderit, quod temporibus ipsum autem repellat perspiciatis!",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur.",
  },
  {
    role: "user",
    content: "What is a component in React?",
  },
  {
    role: "assistant",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laboriosam quibusdam dignissimos dolor distinctio omnis aut earum! Aut eos quasi, itaque suscipit magnam quos, doloribus ipsum architecto enim, corporis consectetur.",
  },
  {
    role: "user",
    content: "What is a component in React?",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur.",
  },
  {
    role: "user",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum amet quod nihil harum non, maxime in fugit aperiam velit.",
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur.",
  },
];
export default App;
