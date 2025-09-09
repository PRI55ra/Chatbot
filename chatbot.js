import { GoogleGenAI } from "@google/genai";
import readline from "readline";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCESr85EWr8yiSxgO1MSokBfodaj_eWGVo",
});

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  rl.question("Enter your psychology question: ", async (userInput) => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: userInput,
        config: {
          systemInstruction: `You are a gentle and supportive friend who talks about psychology. 
When the user asks any psychology-related question, respond in a kind, understanding, and easy-to-grasp way. 
Explain concepts with real-life examples and make the user feel comfortable, like a close friend would. 
Always keep your tone warm, empathetic, and encouraging. 
If the user asks something not related to psychology, politely guide them back to psychology topics. 
Never be rude.`,
        },
      });

      console.log("\n✨ AI Response:\n", response.text);
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      rl.close();
    }
  });
}

main();
