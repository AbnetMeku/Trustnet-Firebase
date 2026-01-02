import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { ArrowRight, Shield, Code, Users, Search, Target, Scaling } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const serviceIcons: { [key: string]: React.ElementType } = {
  Architecture: Shield,
  Offensive: Target,
  DevSecOps: Code,
  Awareness: Users,
};

const valuePropIcons: { [key: string]: React.ElementType } = {
    'Tailored Solutions': Target,
    'End-to-End Model': Scaling,
    'Transparent Collaboration': Users,
}

const approachIcons: { [key: string]: React.ElementType } = {
    'Assess & Align': Search,
    'Assemble & Execute': Code,
    'Support & Scale': Scaling,
}

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'soc-background');

  return (
    <div className="flex flex-col min-h-screen animate-fade-in-up">
      <main className="flex-1">
        <section className="relative w-full pt-20 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center opacity-10"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background"></div>
          
          <div className="container relative px-4 md:px-6 z-10 text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 animate-pulse">
                <Shield className="h-4 w-4" />
                Your Trusted Partner
              </div>
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Securing Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">Digital Future</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
                We deliver practical, risk-driven cybersecurity solutions that protect your business and accelerate your growth. No templates, just tailored defense.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="/services">
                  <Button size="lg" className="shadow-primary-glow transition-transform hover:scale-105">
                    View Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="transition-transform hover:scale-105 bg-background/50">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.slice(0, 4).map((service) => {
                const Icon = serviceIcons[service.title] || Shield;
                return (
                  <div key={service.title} className="group relative rounded-2xl p-6 flex flex-col items-start gap-4 bg-secondary/50 border border-border transition-all duration-300 hover:border-primary/50 hover:bg-secondary">
                    <div className="p-3 rounded-full bg-slate-800 border border-slate-700 text-slate-400 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                        <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <section id="why-us" className="w-full py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">The Trustnet Advantage</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Why leading enterprises choose us as their security partner.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center gap-4">
                        <Target className="h-10 w-10 text-primary mb-2"/>
                        <h3 className="text-xl font-bold font-headline">Tailored Solutions</h3>
                        <p className="text-muted-foreground">We don't sell templates. We build custom security programs that align with your specific risks and business objectives.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <Scaling className="h-10 w-10 text-primary mb-2"/>
                        <h3 className="text-xl font-bold font-headline">End-to-End Model</h3>
                        <p className="text-muted-foreground">From architecture design to incident response, we provide a single, unified partner for your entire security lifecycle.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <Users className="h-10 w-10 text-primary mb-2"/>
                        <h3 className="text-xl font-bold font-headline">Transparent Collaboration</h3>
                        <p className="text-muted-foreground">Our experts integrate with your team, providing clear communication and acting as an extension of your internal staff.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="approach" className="w-full py-16 md:py-24 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our 3-Step Strategy</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">A proven methodology for achieving security excellence.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl mb-4">1</div>
                            <h3 className="text-xl font-bold font-headline">Assess & Align</h3>
                            <p className="text-muted-foreground">We start by analyzing your current security posture, identifying critical gaps, and aligning our strategy with your business goals.</p>
                        </div>
                         <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl mb-4">2</div>
                            <h3 className="text-xl font-bold font-headline">Assemble & Execute</h3>
                            <p className="text-muted-foreground">A custom team of vetted experts is assembled to execute the plan, implementing robust security controls and processes.</p>
                        </div>
                         <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl mb-4">3</div>
                            <h3 className="text-xl font-bold font-headline">Support & Scale</h3>
                            <p className="text-muted-foreground">We provide ongoing support, monitoring, and guidance to ensure your security posture evolves and scales with your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="cta" className="w-full py-16 md:py-24 bg-background">
          <div className="container relative grid items-center justify-center gap-4 px-4 text-center md:px-6 overflow-hidden">
             <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[150px] opacity-50"></div>
            <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full filter blur-[150px] opacity-50"></div>
            <div className="space-y-4 relative">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Ready to secure your business?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Take the first step towards a more secure future. Get a complimentary assessment of your current security posture from our experts.
              </p>
            </div>
            <div className="mt-6">
               <Link href="/contact">
                  <Button size="lg" className="shadow-primary-glow transition-transform hover:scale-105">
                     Get a Free Assessment
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
