
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React, { useEffect, Suspense, useState } from "react";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

function ContactFormComponent() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get('service');
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: serviceQuery ? `I'm interested in learning more about your ${serviceQuery} service.` : "",
    },
  });

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      form.setValue("message", `I'm interested in learning more about your ${service} service.`);
    }
  }, [searchParams, form]);
  
  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionStatus("submitting");

    // IMPORTANT: Replace with your own Formspree endpoint URL
    // Go to https://formspree.io/ to create one.
    const formspreeEndpoint = "https://formspree.io/f/your_form_id";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        form.reset();
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
      </CardHeader>
      <CardContent>
        {submissionStatus === 'success' && (
          <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700">
            <CheckCircle className="h-4 w-4 !text-green-500" />
            <AlertTitle className="text-green-800 dark:text-green-300">Success!</AlertTitle>
            <AlertDescription className="text-green-700 dark:text-green-400">
              Your message has been sent successfully. We'll be in touch soon.
            </AlertDescription>
          </Alert>
        )}
        {submissionStatus === 'error' && (
           <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Submission Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later or contact us directly via email.
            </AlertDescription>
          </Alert>
        )}
        {(submissionStatus === 'idle' || submissionStatus === 'submitting') && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="How can we help you?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full shadow-primary-glow" disabled={submissionStatus === 'submitting'}>
                {submissionStatus === 'submitting' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : "Submit"}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}


export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

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
              Get in Touch
            </h1>
            <p className="max-w-[600px] mx-auto text-foreground/80 md:text-xl">
              Have questions about our services? We're here to help.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-headline">Contact Information</h2>
            <p className="text-muted-foreground mb-8">
              Reach out to us via phone, email, or our contact form. Our team is ready to assist you with your cybersecurity needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:contact@trustnethub.io" className="hover:text-primary transition-colors">contact@trustnethub.io</a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span>123 Cyber Street, Tech City, 12345</span>
              </div>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactFormComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

    