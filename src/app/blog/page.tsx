import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, categories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function BlogPage({ searchParams }: { searchParams: { category?: string } }) {
  const currentCategory = searchParams.category;
  const filteredPosts = currentCategory
    ? blogPosts.filter((post) => post.categorySlug === currentCategory)
    : blogPosts;
  
  const heroImage = PlaceHolderImages.find(p => p.id === 'blog-hero');

  return (
    <div>
      <section className="relative w-full py-20 md:py-28">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container relative px-4 md:px-6 z-10 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl font-headline">
              TrustNet Blog
            </h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              Insights and analysis from the forefront of cybersecurity.
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Link href="/blog" scroll={false}>
            <Button variant={!currentCategory ? 'default' : 'outline'}>All Posts</Button>
          </Link>
          {categories.map((category) => (
            <Link key={category.slug} href={`/blog?category=${category.slug}`} scroll={false}>
              <Button variant={currentCategory === category.slug ? 'default' : 'outline'}>
                {category.name}
              </Button>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => {
            const postImage = PlaceHolderImages.find(p => p.id === post.image);
            return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="h-full overflow-hidden hover:shadow-accent/20 hover:shadow-lg transition-all duration-300 group">
                {postImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={postImage.imageUrl}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={postImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-headline">{post.title}</CardTitle>
                  <div className="flex justify-between items-center pt-2">
                     <Badge variant="secondary">{post.category}</Badge>
                     <p className="text-sm text-muted-foreground">{post.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
}
