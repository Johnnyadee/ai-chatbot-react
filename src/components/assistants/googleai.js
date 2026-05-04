import { GoogleGenAI } from "@google/genai";

const googleai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY });

export class Assistant {
  #chat;
  constructor(model = "gemini-3-flash-preview") {
    this.#chat = googleai.chats.create({
      model: model,
      history: [],
    });
  }

  async chat(content) {
    try {
      const result = await this.#chat.sendMessage({ message: content });
      return result.text;
    } catch (error) {
      console.error("Error in Assistant chat:", error);
      throw error;
    }
  }
}
