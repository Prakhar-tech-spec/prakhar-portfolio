'use server';

/**
 * @fileOverview A flow that personalizes the welcome message based on the visitor's location.
 *
 * - personalizeWelcomeMessage - A function that generates a personalized welcome message.
 * - PersonalizeWelcomeMessageInput - The input type for the personalizeWelcomeMessage function.
 * - PersonalizeWelcomeMessageOutput - The return type for the personalizeWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeWelcomeMessageInputSchema = z.object({
  location: z
    .string()
    .describe('The general location of the visitor (e.g. city, region, country).'),
});
export type PersonalizeWelcomeMessageInput = z.infer<
  typeof PersonalizeWelcomeMessageInputSchema
>;

const PersonalizeWelcomeMessageOutputSchema = z.object({
  message: z
    .string()
    .describe('A personalized welcome message that includes the location.'),
});
export type PersonalizeWelcomeMessageOutput = z.infer<
  typeof PersonalizeWelcomeMessageOutputSchema
>;

export async function personalizeWelcomeMessage(
  input: PersonalizeWelcomeMessageInput
): Promise<PersonalizeWelcomeMessageOutput> {
  return personalizeWelcomeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeWelcomeMessagePrompt',
  input: {schema: PersonalizeWelcomeMessageInputSchema},
  output: {schema: PersonalizeWelcomeMessageOutputSchema},
  prompt: `You are a website copywriter for Corelk Digital Agency.

  Generate a personalized welcome message for a visitor from {{location}}.
  The message should be friendly and inviting, making the visitor feel connected to the agency.
  Focus on how the agency can help businesses in their region succeed.
  The message should be no more than 50 words.
  Remember to make the message sound natural and engaging, not generic or robotic.
`,
});

const personalizeWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'personalizeWelcomeMessageFlow',
    inputSchema: PersonalizeWelcomeMessageInputSchema,
    outputSchema: PersonalizeWelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
