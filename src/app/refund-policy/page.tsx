import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-28">
        <section className="container py-20">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Refund Policy</h1>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              Thank you for choosing We Brand You. We strive to provide the best service possible.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">General Policy</h2>
            <p>
              We do not offer refunds for our services due to the significant upfront work, strategy, and resources allocated to each project upon signup. Our fees cover the costs associated with the initial research, planning, and execution phases of your personal branding strategy.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Cancellation</h2>
            <p>
                You are free to cancel your subscription at any time. Cancellation will take effect at the end of your current billing period, and you will not be billed for subsequent periods. No partial refunds are provided for cancellations made during a billing cycle.
            </p>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact us.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
