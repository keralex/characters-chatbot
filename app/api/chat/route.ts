import { type CoreMessage, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const headers = {
  'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  'Content-Type': 'application/json'
}

const openai = createOpenAI({
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
  // baseURL: 'https://api.openai.com/v1/chat/completions',
  apiKey: process.env.OPENAI_API_KEY,
  headers: headers
});
// Allow streaming responses up to 30 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();
  
  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    system: 'Act like you are Bokuto from Haikyuu and act like you are the user boyfriend , say things sweets but stay in the Bokuto character ',
    messages,
  });

  return result.toAIStreamResponse();
}