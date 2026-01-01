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
import { initializeFirebase } from '@/firebase';
import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';


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
  input: {schema: z.object({
    leads: z.string()
  })},
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
  async () => {
    const leads = await getNewLeads();

    if (!leads || leads.length === 0) {
      return {summary: 'No new leads to summarize.'};
    }

    const {
      output,
    } = await summarizeLeadsPrompt({
      leads: JSON.stringify(leads),
    });
    return output!;
  }
);

async function getNewLeads(): Promise<any[]> {
  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, 'contact_form_submissions');
    const q = query(submissionsCollection, orderBy('submissionDate', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return [];
    }

    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Error fetching new leads from Firestore:", error);
    // In a real application, you might want to handle this more gracefully
    return [];
  }
}
