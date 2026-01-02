import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { ArrowRight, BrainCircuit, ShieldCheck, Siren } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const serviceIcons: { [key: string]: React.ElementType } = {
  'Penetration Testing': ShieldCheck,
  'Threat Intelligence': BrainCircuit,
  'Incident Response': Siren,
};

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-48 overflow-hidden">
          <div className="absolute inset-0">
            {heroImage && (
              <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                  priority
              />
            )}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
            {/* Glow Orbs */}
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-[150px] opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full filter blur-[150px] opacity-50 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container relative px-4 md:px-6 z-10">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-x-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in-up">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none font-headline">
                    Trustnet Solutions: Fortifying Your Digital Frontier
                  </h1>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl">
                    Cutting-edge cybersecurity solutions tailored for the modern enterprise. Proactive defense, expert insights, and rapid response.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/services">
                    <Button size="lg" className="shadow-primary-glow transition-transform hover:scale-105">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="transition-transform hover:scale-105">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Expertise You Can Rely On</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a comprehensive suite of cybersecurity services to protect your assets and ensure business continuity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {services.slice(0, 3).map((service) => {
                const Icon = serviceIcons[service.title] || ShieldCheck;
                return (
                  <Card key={service.title} className="rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <CardHeader className="gap-4">
                      <Icon className="h-10 w-10 text-primary" />
                      <CardTitle className="font-headline">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/services">
                <Button variant="link">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">From the Trustnet Solutions Blog</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed with the latest insights, trends, and analysis from our cybersecurity experts.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-8">
              {featuredPosts.map((post) => {
                 const postImage = PlaceHolderImages.find(p => p.id === post.image);
                 return (
                  <Link href={`/blog/${post.slug}`} key={post.slug}>
                    <Card className="h-full overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 group">
                      {postImage && (
                         <Image
                            src={postImage.imageUrl}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover"
                            data-ai-hint={postImage.imageHint}
                         />
                      )}
                      <CardHeader>
                        <CardTitle className="text-lg font-headline text-left">{post.title}</CardTitle>
                        <div className="flex pt-2">
                           <Badge variant="outline">{post.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-left">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                 )
              })}
            </div>
            <div className="flex justify-center mt-8">
               <Link href="/blog">
                  <Button>
                     Read More Posts
                     <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
               </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
