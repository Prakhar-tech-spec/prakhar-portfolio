
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function CareersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-28">
        <section className="container py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Join Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always looking for passionate and talented individuals to join our growing team. Explore the opportunities below to see how you can make an impact with us.
          </p>
        </section>
        <section className="container pb-20">
            <div className="max-w-3xl mx-auto">
                <div className="border rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold font-headline">No Open Positions Currently</h2>
                    <p className="text-muted-foreground mt-2">
                        We don't have any open positions right now, but we're always on the lookout for great talent. If you're passionate about what we do, feel free to send us your resume and a cover letter to <a href="mailto:careers@corelk.com" className="text-primary hover:underline">careers@corelk.com</a>. We'll keep your information on file for future opportunities.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
