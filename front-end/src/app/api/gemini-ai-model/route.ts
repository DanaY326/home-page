import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-001",
  tools: [
    {
      codeExecution: {},
    },
  ],
});

export async function POST(req: Request): Promise<Response> {
  //Get the prompt from the request body
  const data = await req.json();
  const prompt = data.text.input || "Explain how AI works";

  //Use the Gemini AI model to generate content from the prompt.
  const result = await model.generateContent(prompt);

  return new Response(
    JSON.stringify({
      summary: result.response.text(),
    }),
  );
}