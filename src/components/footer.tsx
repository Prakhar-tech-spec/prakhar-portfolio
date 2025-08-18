import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const WeBrandYouLogo = () => (
    <div className="flex items-center gap-1 font-semibold">
      <span className="text-xl font-bold font-headline text-foreground">We</span>
      <span className="text-xl font-bold font-cursive text-primary">Brand</span>
      <span className="text-xl font-bold font-headline text-foreground">You</span>
    </div>
);

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border/40">
        <div className="container py-8 flex flex-col items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                 <div className="flex items-center gap-2">
                    <WeBrandYouLogo />
                </div>
                <p className="text-sm text-muted-foreground order-last md:order-none">
                    &copy; {new Date().getFullYear()} We Brand You. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/prakharbrandsyou/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/prakhar.chaturvedi.859658/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/prakhar-chaturvedi-a5520a253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
                <Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
            </div>
        </div>
    </footer>
  );
}