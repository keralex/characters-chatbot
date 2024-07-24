import { type CoreMessage, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { Character } from '@/app/types/characters.types';

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
  const { messages, character }: { messages: CoreMessage[] , character: Character } = await req.json();
  console.log(character)
  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    system: character.prompt,
    messages,
  });

  return result.toAIStreamResponse();
}