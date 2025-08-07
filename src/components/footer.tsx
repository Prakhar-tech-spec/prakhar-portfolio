import { Github, Linkedin, Mountain, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/40">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-2">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold font-headline">Corelk</span>
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Corelk Digital Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-5 w-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                </a>
            </div>
        </div>
    </footer>
  );
}
