import { config } from 'dotenv';
config();

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: "You are a helpful assistant." }]
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
