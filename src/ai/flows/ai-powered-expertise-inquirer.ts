'use server';
/**
 * @fileOverview An AI-powered conversational tool that responds to visitor questions
 * about Rajesh Sampat's professional background, expertise, and services by analyzing the site's content.
 *
 * - inquireAboutExpertise - A function that handles the inquiry process.
 * - ExpertiseInquirerInput - The input type for the inquireAboutExpertise function.
 * - ExpertiseInquirerOutput - The return type for the inquireAboutExpertise function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExpertiseInquirerInputSchema = z.object({
  query: z.string().describe("The user's question about Rajesh Sampat's professional background, expertise, or services."),
  siteContent: z.string().describe("The comprehensive text content of Rajesh Sampat's professional profile website."),
});
export type ExpertiseInquirerInput = z.infer<typeof ExpertiseInquirerInputSchema>;

const ExpertiseInquirerOutputSchema = z.object({
  answer: z.string().describe("The AI's answer to the user's question, based on the provided site content."),
});
export type ExpertiseInquirerOutput = z.infer<typeof ExpertiseInquirerOutputSchema>;

const expertiseInquirerPrompt = ai.definePrompt({
  name: 'expertiseInquirerPrompt',
  input: {schema: ExpertiseInquirerInputSchema},
  output: {schema: ExpertiseInquirerOutputSchema},
  prompt: `You are an AI assistant designed to provide information about Rajesh Sampat's professional background, expertise, and services.
Your goal is to answer user questions accurately and concisely, solely based on the provided "SITE CONTENT".
Do not use outside knowledge. If the answer is not available in the provided content, state that you cannot find the information within the given context.

SITE CONTENT:
{{{siteContent}}}

USER QUESTION:
{{{query}}}

AI ANSWER:`,
});

const expertiseInquirerFlow = ai.defineFlow(
  {
    name: 'expertiseInquirerFlow',
    inputSchema: ExpertiseInquirerInputSchema,
    outputSchema: ExpertiseInquirerOutputSchema,
  },
  async (input) => {
    const {output} = await expertiseInquirerPrompt(input);
    if (!output) {
      throw new Error("AI did not return an answer.");
    }
    return output;
  }
);

export async function inquireAboutExpertise(input: ExpertiseInquirerInput): Promise<ExpertiseInquirerOutput> {
  return expertiseInquirerFlow(input);
}
