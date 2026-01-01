// This is a Genkit flow file.

'use server';

/**
 * @fileOverview Implements a Genkit flow for the Gemini-powered cybersecurity expert chatbot.
 *
 * - `chat`: A function that handles the conversation with the cybersecurity expert chatbot.
 * - `ChatInput`: The input type for the `chat` function.
 * - `ChatOutput`: The return type for the `chat` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user message to send to the chatbot.'),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']).describe('The role of the message sender.'),
    content: z.string().describe('The content of the message.'),
  })).optional().describe('The conversation history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cybersecurityExpertChatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: ChatOutputSchema},
  prompt: `You are a cybersecurity expert chatbot named TrustNetBot. Your role is to provide helpful and informative answers to user questions related to cybersecurity.

Your primary goal is to assist users with their cybersecurity inquiries and showcase the expertise of TrustNet Hub.

Here's the conversation history so far:
{{#each conversationHistory}}
  {{#if (eq role \"user\")}}User:{{else}}Assistant:{{/if}} {{{content}}}
{{/each}}

User: {{{message}}}
Assistant: `,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
