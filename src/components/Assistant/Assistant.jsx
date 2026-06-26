import { useEffect, useState } from "react";
import styles from "./Assistant.module.css";
import { Assistant as XAIAssistant } from "../../assistants/xai";
import { Assistant as GoogleAIAssistant } from "../../assistants/googleai";
import { Assistant as OpenAIAssistant } from "../../assistants/openai";
import { Assistant as AnthropicAIAssistant } from "../../assistants/anthropicai";
import { Assistant as DeepSeekAIAssistant } from "../../assistants/deepseekai";

const assistantMap = {
  googleai: GoogleAIAssistant,
  openai: OpenAIAssistant,
  deepseekai: DeepSeekAIAssistant,
  anthropicai: AnthropicAIAssistant,
  xai: XAIAssistant,
};

export function Assistant({ onAssistantChange }) {
  const [value, setValue] = useState("googleai");

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    const AssistantClass = assistantMap[value];

    if (!AssistantClass) {
      throw new Error(`No assistant class found for value: ${value}`);
    }
    onAssistantChange(new AssistantClass());
  }, [value]);

  return (
    <div className={styles.Assistant}>
      <span>Assistant</span>
      <select defaultValue={value} onChange={handleValueChange}>
        <option value="googleai">Google AI</option>
        <option value="openai">OpenAI</option>
        <option value="deepseekai">DeepSeek AI</option>
        <option value="anthropicai">Anthropic AI</option>
        <option value="xai">X AI</option>
      </select>
    </div>
  );
}
export default Assistant;
