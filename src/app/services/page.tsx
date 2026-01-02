"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { services } from '@/lib/data';
import type { Service } from '@/lib/types';
import * as Icons from 'lucide-react';

const IconRenderer = ({ name, className }: { name: string, className?: string }) => {
  const LucideIcon = (Icons as any)[name as keyof typeof Icons] || Icons.Shield;
  return <LucideIcon className={className} />;
};


export default function ServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(services.map(s => s.category || 'General')))];

    const filteredServices = selectedCategory === 'All' 
        ? services 
        : services.filter(s => (s.category || 'General') === selectedCategory);

    return (
        <div className="min-h-screen bg-background py-20 transition-colors duration-300 animate-fade-in-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-headline">Our Expertise</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto md:text-xl">
                        We provide a comprehensive suite of cybersecurity services designed to protect your organization from every angle.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                selectedCategory === cat
                                ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20'
                                : 'bg-card border-border text-foreground hover:border-primary'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service: Service) => (
                            <div key={service.id} className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group shadow-sm flex flex-col relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                                
                                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-110 shadow-sm relative z-10 border border-border/50">
                                    <IconRenderer name={service.iconName} className="w-8 h-8" />
                                </div>
                                
                                <div className="mb-2 text-xs font-bold text-primary uppercase tracking-wide relative z-10 font-mono">
                                    {service.category || 'General'}
                                </div>
                                
                                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors font-headline">
                                    {service.title}
                                </h3>
                                
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow relative z-10">
                                    {service.description}
                                </p>
                                
                                <div className="flex items-center justify-between pt-6 border-t border-border/50 mt-auto relative z-10">
                                    <span className="text-foreground font-mono text-sm font-bold">{service.price}</span>
                                    <Link 
                                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                                        className="text-foreground text-sm hover:text-primary transition-colors flex items-center gap-1 font-semibold group-active:scale-95"
                                    >
                                        Learn More <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <Icons.Filter className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                            <p className="text-muted-foreground text-lg">No services found in this category.</p>
                        </div>
                    )}
                </div>

                <div className="mt-20 p-10 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 dark:from-black dark:via-card dark:to-black rounded-3xl border border-border text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Icons.Lock size={200} />
                    </div>
                    <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 font-headline">Need a Custom Security Solution?</h3>
                    <p className="text-gray-400 mb-8 relative z-10 max-w-2xl mx-auto md:text-lg">
                        Our team can tailor a security package specifically for your enterprise needs. Contact us for a bespoke risk assessment.
                    </p>
                    
                    <Link 
                        href={`/contact?service=Custom%20Solution`}
                        className="relative z-10 inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg shadow-white/10"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </div>
    );
}
    