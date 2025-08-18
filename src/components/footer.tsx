import { Facebook, Instagram, Linkedin } from "lucide-react";

const WeBrandYouLogo = () => (
    <div className="flex items-center gap-2 font-semibold">
      <span className="text-xl font-bold font-headline text-foreground">We Brand You</span>
    </div>
);

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/40">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-2">
                <WeBrandYouLogo />
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} We Brand You. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/arpan-dey-5369212a4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                </a>
            </div>
        </div>
    </footer>
  );
}
