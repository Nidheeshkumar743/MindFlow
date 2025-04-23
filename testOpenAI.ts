import OpenAI from "openai";
import "dotenv/config"; // Ensure dotenv is loaded

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function testOpenAI() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: "What is Java?" }],
      max_tokens: 100,
    });

    console.log("OpenAI Response:", response.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI API Error:", error);
  }
}

testOpenAI();
