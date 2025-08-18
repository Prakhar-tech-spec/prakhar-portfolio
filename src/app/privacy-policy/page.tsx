import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-28">
        <section className="container py-20">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              We Brand You ("us", "we", or "our") operates the We Brand You website (the "Service").
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Types of Data Collected</h2>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Cookies and Usage Data.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
