import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Code, Users, Search, Target, Scaling, Lock, Zap, GitBranch, Brain, Layers, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'soc-background');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full pt-20 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden animate-fade-in-up">
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

        <section className="py-24 bg-background transition-colors duration-300 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">What We Do</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        We provide end-to-end cybersecurity services covering technology, applications, and people.
                    </p>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                        <Lock className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-2 font-headline">Secure Architecture & Implementation</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                      We design and deploy security solutions that protect your environment from day one on-prem, cloud, and hybrid.
                  </p>
                </div>
                
                <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-2 font-headline">Offensive Security, Risk & Compliance</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                      We test your defenses using real-world attack techniques to uncover gaps before attackers do.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                        <GitBranch className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-2 font-headline">Application Security & DevSecOps</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                      We embed security into your software delivery pipelines so vulnerabilities are identified and fixed early.
                  </p>
                </div>

                <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                        <Brain className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground pt-2 font-headline">Security Awareness, Training & Simulation</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                      We reduce human risk and build internal cybersecurity capability through targeted training and simulations.
                  </p>
                </div>
              </div>
            </div>
        </section>
        
        <section id="why-us" className="w-full py-16 md:py-24 animate-fade-in-up">
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

        <section className="py-24 bg-secondary/50 transition-colors duration-300 border-t border-border animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Our Approach</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A streamlined, expert-driven path to total security.
                    </p>
                </div>
                
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="bg-card p-8 rounded-2xl border border-border text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                            <div className="w-14 h-14 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/30">1</div>
                            <div className="flex justify-center mb-4 text-primary"><Search size={36} /></div>
                            <h4 className="font-bold text-xl text-foreground mb-3 font-headline">Assess & Align</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              We begin by analyzing your environment, understanding your goals, and identifying security or operational gaps that need to be addressed.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-2xl border border-border text-center hover:-translate-y-2 transition-transform duration-300 delay-100 shadow-sm">
                             <div className="w-14 h-14 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/30">2</div>
                            <div className="flex justify-center mb-4 text-primary"><Layers size={36} /></div>
                            <h4 className="font-bold text-xl text-foreground mb-3 font-headline">Assemble & Execute</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              For each engagement, we build a custom team of vetted cybersecurity and IT professionals, selected specifically for the project’s needs ensuring the right expertise every time.
                            </p>
                        </div>

                        <div className="bg-card p-8 rounded-2xl border border-border text-center hover:-translate-y-2 transition-transform duration-300 delay-200 shadow-sm">
                             <div className="w-14 h-14 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/30">3</div>
                            <div className="flex justify-center mb-4 text-primary"><TrendingUp size={36} /></div>
                            <h4 className="font-bold text-xl text-foreground mb-3 font-headline">Support & Scale</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              We offer post-implementation support, training, and continuous improvement to keep your systems secure and aligned with your business growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="cta" className="w-full py-16 md:py-24 bg-background animate-fade-in-up">
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
