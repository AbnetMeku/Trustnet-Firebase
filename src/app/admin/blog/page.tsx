"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { blogPosts, categories } from '@/lib/data';
import { MoreHorizontal, PlusCircle, Bot, Loader2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { generateBlogPosts, GenerateBlogPostsInput } from '@/ai/flows/generate-blog-posts';

export default function AdminBlogPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGeneratePosts = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsGenerating(true);
    const formData = new FormData(event.currentTarget);
    const topic = formData.get('topic') as string;

    if (!topic) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a topic to generate blog posts.",
      });
      setIsGenerating(false);
      return;
    }
    
    try {
      const input: GenerateBlogPostsInput = { topic, numberOfPosts: 2 };
      const generatedPosts = await generateBlogPosts(input);
      // In a real app, you'd add these to the database.
      // For now, we'll just log them and show a success message.
      console.log('Generated Posts:', generatedPosts);
      toast({
        title: "Success!",
        description: `${generatedPosts.length} blog posts about "${topic}" have been generated. Check the console.`,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate blog posts. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your articles and content.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="gap-1">
                  <Bot className="h-4 w-4" />
                  Generate with AI
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form onSubmit={handleGeneratePosts}>
                  <DialogHeader>
                    <DialogTitle>Generate Blog Posts</DialogTitle>
                    <DialogDescription>
                      Enter a topic and let AI create draft posts for you.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="topic" className="text-right">
                        Topic
                      </Label>
                      <Input id="topic" name="topic" className="col-span-3" placeholder="e.g., 'The future of quantum encryption'" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" disabled={isGenerating}>
                      {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      Generate Posts
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Button size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" />
              Add New
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.map((post) => (
              <TableRow key={post.slug}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{post.category}</Badge>
                </TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
