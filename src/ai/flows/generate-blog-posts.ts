'use server';

/**
 * @fileOverview Flow for generating multiple blog posts from a single prompt.
 *
 * - generateBlogPosts - A function that generates multiple blog posts.
 * - GenerateBlogPostsInput - The input type for the generateBlogPosts function.
 * - GenerateBlogPostsOutput - The return type for the generateBlogPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostsInputSchema = z.object({
  topic: z.string().describe('The topic for the blog posts.'),
  numberOfPosts: z.number().int().min(1).max(5).default(3).describe('The number of blog posts to generate.'),
});
export type GenerateBlogPostsInput = z.infer<typeof GenerateBlogPostsInputSchema>;

const BlogPostSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The full content of the blog post.'),
});

const GenerateBlogPostsOutputSchema = z.array(BlogPostSchema);
export type GenerateBlogPostsOutput = z.infer<typeof GenerateBlogPostsOutputSchema>;

export async function generateBlogPosts(input: GenerateBlogPostsInput): Promise<GenerateBlogPostsOutput> {
  return generateBlogPostsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostsPrompt',
  input: {schema: GenerateBlogPostsInputSchema},
  output: {schema: GenerateBlogPostsOutputSchema},
  prompt: `You are an expert blog post generator.

  Generate {{{numberOfPosts}}} blog posts about the topic: {{{topic}}}.

  Each blog post should have a title and content.

  Return the blog posts as a JSON array of objects with "title" and "content" keys. Make sure each content is well formatted.
  `,
});

const generateBlogPostsFlow = ai.defineFlow(
  {
    name: 'generateBlogPostsFlow',
    inputSchema: GenerateBlogPostsInputSchema,
    outputSchema: GenerateBlogPostsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
