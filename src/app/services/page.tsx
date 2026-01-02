"use client"
import Image from 'next/image';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layout, Shield, Activity, Lock, Cloud, Zap, Crosshair, FileCheck, GitBranch, Code, Box, Users, MailWarning, Terminal, Icon } from 'lucide-react';
import type { Service } from '@/lib/types';

const serviceIcons: { [key: string]: React.ElementType } = {
  Layout,
  Shield,
  Activity,
  Lock,
  Cloud,
  Zap,
  Crosshair,
  FileCheck,
  GitBranch,
  Code,
  Box,
  Users,
  MailWarning,
  Terminal,
};

const serviceCategories = [
    "Secure Architecture",
    "Offensive Security",
    "DevSecOps",
    "Training & Simulation"
];

export default function ServicesPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'services-hero');

    return (
        <div className="animate-fade-in-up">
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
                            Our Cybersecurity Services
                        </h1>
                        <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
                            A complete suite of services to protect your digital assets.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24">
                <div className="container px-4 md:px-6 space-y-16">
                    {serviceCategories.map((category) => {
                        const filteredServices = services.filter(s => s.category === category);
                        return (
                            <div key={category}>
                                <h2 className="text-3xl font-bold tracking-tight mb-8 font-headline text-primary">{category}</h2>
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {filteredServices.map((service: Service) => {
                                        const Icon = serviceIcons[service.iconName] || Shield;
                                        return (
                                            <Card key={service.id} className="flex flex-col rounded-2xl hover:border-primary/50 transition-all hover:scale-[1.02] duration-300 group">
                                                <CardHeader className="flex-row items-start gap-4 pb-4">
                                                    <div className="bg-primary/10 p-3 rounded-full">
                                                        <Icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                                                        <p className="text-sm font-semibold text-primary pt-1">{service.price}</p>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="flex-grow">
                                                    <p className="text-muted-foreground text-sm">{service.description}</p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

             <section className="w-full py-12 md:py-24 bg-secondary">
                <div className="container flex flex-col items-center gap-4 px-4 text-center md:gap-8 md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Secure Your Business?</h2>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                           Let's discuss how Trustnet Solutions can tailor a security strategy that fits your unique needs.
                        </p>
                    </div>
                    <Link href="/contact">
                        <Button size="lg" className="shadow-primary-glow transition-transform hover:scale-105">
                            Get a Free Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
