import { getPostBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} | Trustnet Solutions Blog`,
    description: post.excerpt,
  };
}


export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.image);

  return (
    <article className="py-12 md:py-20 animate-fade-in-up">
      <div className="container max-w-4xl mx-auto px-4">
        <header className="mb-8">
          <div className="text-center mb-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-center mb-4 text-primary">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
            <span>&bull;</span>
            <time dateTime={post.date} className="font-mono">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
        </header>

        {postImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={postImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={postImage.imageHint}
              priority
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
      
        <Card className="mt-12 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl">
            <p className="font-semibold text-lg">Share this article</p>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" aria-label="Share on Twitter" className="rounded-full transition-transform hover:scale-110">
                    <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Share on LinkedIn" className="rounded-full transition-transform hover:scale-110">
                    <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Copy link" className="rounded-full transition-transform hover:scale-110">
                    <LinkIcon className="h-4 w-4" />
                </Button>
            </div>
        </Card>
      </div>
    </article>
  );
}
