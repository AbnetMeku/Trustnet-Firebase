import Link from "next/link";
import { Bot, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold font-headline">TrustNet Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Fortifying your digital frontier with cutting-edge cybersecurity solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold uppercase tracking-wider">Connect</h3>
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
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TrustNet Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
