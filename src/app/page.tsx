import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { personalizeWelcomeMessage } from '@/ai/flows/personalize-welcome-message';

export default async function Home() {
  // A personalized message can be generated here, but we will use a fallback for now.
  const { message } = { message: 'Welcome to Corelk Digital Agency' };
  
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-24 md:pt-28">
        <HeroSection personalizedMessage={message} />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <div className="flex justify-center py-8">
        <div className="bg-secondary text-muted-foreground px-6 py-3 rounded-full text-sm">
          Made with 💕 by SoftServe Studios
        </div>
      </div>
      <Footer />
    </div>
  );
}
