"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { chat, ChatInput, ChatOutput } from '@/ai/flows/gemini-powered-advisor';


type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
        const chatInput: ChatInput = { message: input, conversationHistory: chatHistory };
        const response: ChatOutput = await chat(chatInput);

        const assistantMessage: Message = { role: 'assistant', content: response.response };
        setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
        console.error('Chat error:', error);
        const errorMessage: Message = { role: 'assistant', content: 'Sorry, I am having trouble connecting. Please try again later.' };
        setMessages((prev) => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };
  
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-[calc(100vw-3rem)] max-w-md"
            >
              <Card className="flex flex-col h-[70vh] max-h-[700px] shadow-2xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Bot className="h-8 w-8 text-primary" />
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-card" />
                    </div>
                    <div>
                      <CardTitle className="font-headline">TrustNetBot</CardTitle>
                      <CardDescription>Your AI Cybersecurity Advisor</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 overflow-hidden p-0">
                  <ScrollArea className="h-full" ref={scrollAreaRef}>
                    <div className="p-6 space-y-4">
                        <AnimatePresence initial={false}>
                            {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}
                            >
                                {message.role === 'assistant' && (
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                                </Avatar>
                                )}
                                <div
                                className={cn(
                                    'rounded-lg px-4 py-2 max-w-[80%]',
                                    message.role === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-secondary'
                                )}
                                >
                                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                </div>
                                {message.role === 'user' && (
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                                </Avatar>
                                )}
                            </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-start gap-3 justify-start"
                                >
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                                </Avatar>
                                <div className="rounded-lg px-4 py-2 bg-secondary flex items-center">
                                    <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
                                </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter>
                  <form onSubmit={handleChatSubmit} className="flex w-full items-center space-x-2">
                    <Input
                      id="message"
                      placeholder="Ask about cybersecurity..."
                      className="flex-1"
                      autoComplete="off"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{ open: { opacity: 0, scale: 0 }, closed: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.2 }}
        >
            <Button
              size="icon"
              className="w-16 h-16 rounded-full shadow-lg"
              onClick={() => setIsOpen(true)}
              aria-label="Open Chat"
            >
              <Bot className="h-8 w-8" />
            </Button>
        </motion.div>
      </div>
    </>
  );
}
