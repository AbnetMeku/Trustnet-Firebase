'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing new leads.
 *
 * - summarizeLeads - A function that triggers the lead summarization process.
 * - SummarizeLeadsInput - The input type for the summarizeLeads function (currently empty).
 * - SummarizeLeadsOutput - The return type for the summarizeLeads function, containing the summary.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeLeadsInputSchema = z.object({});
export type SummarizeLeadsInput = z.infer<typeof SummarizeLeadsInputSchema>;

const SummarizeLeadsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the new leads, including trends and pain points.'),
});
export type SummarizeLeadsOutput = z.infer<typeof SummarizeLeadsOutputSchema>;

export async function summarizeLeads(input: SummarizeLeadsInput): Promise<SummarizeLeadsOutput> {
  return summarizeLeadsFlow(input);
}

const summarizeLeadsPrompt = ai.definePrompt({
  name: 'summarizeLeadsPrompt',
  input: {schema: SummarizeLeadsInputSchema},
  output: {schema: SummarizeLeadsOutputSchema},
  prompt: `You are an expert marketing analyst tasked with summarizing new leads for a business. Analyze the following leads (provided in JSON format) to identify key trends and pain points. Provide a concise summary of these trends and pain points. 

Leads: {{{leads}}}
`,
});

const summarizeLeadsFlow = ai.defineFlow(
  {
    name: 'summarizeLeadsFlow',
    inputSchema: SummarizeLeadsInputSchema,
    outputSchema: SummarizeLeadsOutputSchema,
  },
  async input => {
    // Fetch leads from the database or other source
    const leads = await getNewLeads();

    if (!leads || leads.length === 0) {
      return {summary: 'No new leads to summarize.'};
    }

    const {
      output,
    } = await summarizeLeadsPrompt({
      ...input,
      leads: JSON.stringify(leads),
    });
    return output!;
  }
);

async function getNewLeads(): Promise<any[]> {
  // TODO: Implement fetching leads from the database.
  // Replace this with actual data fetching logic.
  return [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'Need help with cybersecurity for my small business.',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      message: 'Interested in learning more about your threat detection services.',
    },
  ];
}
