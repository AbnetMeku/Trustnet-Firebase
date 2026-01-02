import Link from "next/link";
import { Bot, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-card border-t text-muted-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">Trustnet Solutions</span>
            </Link>
            <p className="text-sm">
              Fortifying your digital frontier with cutting-edge cybersecurity solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Architecture</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Offensive Security</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">DevSecOps</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Awareness & Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold uppercase tracking-wider text-foreground">Connect</h3>
             <div className="flex mt-4 space-x-2">
                <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                </Button>
             </div>
             <div className="mt-4">
               <p className="text-xs">&copy; {new Date().getFullYear()} Trustnet Solutions. <br/>All rights reserved.</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
