import styles from "./Assistant.module.css";

function Assistant() {
  return (
    <div className={styles.Assistant}>
      <span>Assistant</span>
      <select>
        <option value="googleai">Google AI</option>
        <option value="openai">OpenAI</option>
        <option value="deepseekai">DeepSeek AI</option>
        <option value="anthropicai">Anthropic AI</option>
        <option value="xai">X AI</option>
      </select>
    </div>
  );
}
export default Assistant