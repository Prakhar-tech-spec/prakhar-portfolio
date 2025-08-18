import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-28">
        <section className="container py-20">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Terms of Use</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the We Brand You website (the "Service") operated by We Brand You ("us", "we", or "our").
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Agreement to Terms</h2>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of We Brand You and its licensors.
            </p>
             <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
