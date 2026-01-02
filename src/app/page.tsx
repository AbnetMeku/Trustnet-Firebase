import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Zap, GitBranch, Brain, Layers, TrendingUp, Users, Search, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'cyber-tech-bg');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative w-full pt-20 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden animate-fade-in-up">
          {heroImage && (
             <div className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10">
                <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover object-center"
                data-ai-hint={heroImage.imageHint}
                priority
                />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background"></div>
          
          <div className="container relative px-4 md:px-6 z-10 text-center">
            <div className="flex flex-col items-center space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-wide mb-8 shadow-lg shadow-primary/10 animate-pulse">
                    <Shield size={20} />
                    <span className="text-sm md:text-base">Your Trusted Partner</span>
                </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-headline">
                Securing Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Digital Future</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mb-10 leading-relaxed">
                We design and implement practical, risk driven cybersecurity solutions that deliver measurable security improvements.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Link href="/services">
                  <Button size="lg" className="shadow-primary-glow transition-all hover:shadow-[0_0_30px_hsl(var(--primary-DEFAULT))] hover:scale-105">
                    View Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="transition-all hover:scale-105 bg-background/50">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE DO (Service Cards) */}
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

        {/* 3. WHY TRUSTNET */}
        <section className="py-24 bg-secondary/30 dark:bg-card transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Why Trustnet Solutions?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We don't just find vulnerabilities; we help you build a fortress.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-background dark:bg-secondary rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Settings className="w-10 h-10 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 font-headline">Tailored Solutions</h3>
                        <p className="text-muted-foreground text-sm">
                            We design and implement security solutions based on your environment, risk profile, and business needs not one size fits all templates.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-background dark:bg-secondary rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Layers className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 font-headline">End-to-End Service Model</h3>
                        <p className="text-muted-foreground text-sm">
                            From design and implementation to testing and training, we deliver complete cybersecurity services under one trusted partner.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto bg-background dark:bg-secondary rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Users className="w-10 h-10 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 font-headline">Transparent, Responsive Collaboration</h3>
                        <p className="text-muted-foreground text-sm">
                            We work as an extension of your team, providing clear communication, practical guidance, and responsive support throughout every engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* 4. OUR APPROACH (3 Steps) */}
        <section id="why-us" className="w-full py-16 md:py-24 animate-fade-in-up">
            <div className="container px-4 md:px-6">
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


        {/* Call to Action */}
        <section id="cta" className="w-full py-16 md:py-24 bg-secondary/50 text-center relative overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/10"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="container relative grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 font-headline">Ready to secure your business?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Join the partners who trust Trustnet Solutions with their most critical assets.
                </p>
                </div>
                <div className="mt-6">
                <Link href="/contact">
                    <Button size="lg" className="shadow-lg shadow-primary/25 transition-all hover:scale-105">
                        Get a Free Assessment
                    </Button>
                </Link>
                </div>
          </div>
        </section>
      </main>
    </div>
  );
}
