import { useEffect, useState } from "react";
import styles from "./Assistant.module.css";
import { Assistant as XAIAssistant } from "../../assistants/xai";
import { Assistant as GoogleAIAssistant } from "../../assistants/googleai";
import { Assistant as OpenAIAssistant } from "../../assistants/openai";
import { Assistant as DeepSeekAIAssistant } from "../../assistants/deepseekai";

const assistantMap = {
  googleai: GoogleAIAssistant,
  openai: OpenAIAssistant,
  deepseekai: DeepSeekAIAssistant,
  xai: XAIAssistant,
};

export function Assistant({ onAssistantChange }) {
  const [value, setValue] = useState("googleai:gemini-3.5-flash");

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    const [assistant, model] = value.split(":");
    const AssistantClass = assistantMap[assistant];

    if (!AssistantClass) {
      throw new Error(`No assistant found for: ${assistant} or model: ${model}`);
    }
    onAssistantChange(new AssistantClass(model));
  }, [value]);

  return (
    <div className={styles.Assistant}>
      <span>Assistant</span>
      <select defaultValue={value} onChange={handleValueChange}>
        <optgroup label="Google AI">
          <option value="googleai:gemini-3.5-flash">Gemini 3.5 Flash</option>
          <option value="googleai:gemini-2.5-flash">Gemini 2.5 Flash</option>
        </optgroup>
        <option value="openai">OpenAI</option>
        <option value="deepseekai">DeepSeek AI</option>
        <option value="xai">X AI</option>
      </select>
    </div>
  );
}
export default Assistant;
