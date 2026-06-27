import { useState } from "react";
import styles from "./App.module.css";
import Chat from "./components/chat/Chat";
import Loader from "./components/loader/Loader";
import Controls from "./components/controls/Controls";
// import { Assistant as AssistantClass } from "./assistants/xai";
import Assistant from "./components/Assistant/Assistant";

// import { Assistant } from "./components/assistants/googleai";
// import { Assistant } from "./components/assistants/openai";
let assistant;
function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  function updateLastMessageContent(content) {
    setMessages((prevMessages) =>
      prevMessages.map((msg, index) => {
        if (index === prevMessages.length - 1) {
          return { ...msg, content: msg.content + content };
        }
        return msg;
      }),
    );
  }

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ role: "user", content });
    setIsLoading(true);

    try {
      const result = await assistant.chatStream(content);
      let isFirstChunk = false;

      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          addMessage({ role: "assistant", content: "" });
          setIsLoading(false);
          setIsStreaming(true);
        }
        updateLastMessageContent(chunk);
      }
      setIsStreaming(false);
    } catch (error) {
      addMessage({ role: "system", content: error?.message ?? "Something went wrong" });
      setIsStreaming(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleAssistantChange(newAssistant) {
    assistant = newAssistant;
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
      {isLoading && <Loader />}
      <Controls isDisabled={isLoading || isStreaming} onSend={handleContentSend} />
      <Assistant onAssistantChange={handleAssistantChange} />
    </div>
  );
}

export default App;
