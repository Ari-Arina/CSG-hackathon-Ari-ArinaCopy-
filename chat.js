import openai from "openai";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const response = await client.responses.create(
    {
        model: "gpt-5.1",
        input: "Hello!"
    }
);

console.log(response);