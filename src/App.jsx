import { useState } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";
import Controls from "./components/controls/Controls";
import { Assistant } from "./components/assistants/googleai";
// import { Assistant } from "./components/assistants/openai";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ role: "user", content });
    try {
      const result = await assistant.chat(content, messages);
      addMessage({ role: "assistant", content: result });
    } catch (error) {
      addMessage({ role: "system", content: "Sorry, something went wrong." + error });
    }
  }
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="chat-bot.png" alt="Chat Bot" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;
