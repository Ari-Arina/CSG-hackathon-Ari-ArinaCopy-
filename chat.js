import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const response = await client.responses.create({
    model: "gpt-3.5-turbo",  
    input: "Hello!"
});

console.log(response.output_text);