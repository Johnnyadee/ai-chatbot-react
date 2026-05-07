import { useState } from "react";
import styles from "./Controls.module.css";
export default function Controls({ onSend }) {
  const [content, setContent] = useState("");
  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }
  function handleEnterKey(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }
  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea
          className={styles.TextArea}
          name=""
          id=""
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleEnterKey}
          placeholder="Type your message..."></textarea>
      </div>
      <button className={styles.Button} onClick={handleSend}>
        <SendIcon />
      </button>
    </div>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368">
      <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
    </svg>
  );
}
