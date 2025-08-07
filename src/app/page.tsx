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
      <main className="flex-1 pt-20">
        <HeroSection personalizedMessage={message} />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
