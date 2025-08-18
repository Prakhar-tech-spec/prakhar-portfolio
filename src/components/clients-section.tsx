import { AnimatedCarousel } from "./ui/logo-carousel";

const stats = [
  { value: "50M+", label: "Video Views" },
  { value: "50K+", label: "Social Followers Gained" },
  { value: "20K+", label: "YouTube Subscribers" },
  { value: "2K+", label: "Organic Leads Generated" },
];

const partnerLogos = [
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  "https://cdn.worldvectorlogo.com/logos/vercel.svg",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
  "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",
  "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  "https://cdn.worldvectorlogo.com/logos/storybook-1.svg",
  "https://cdn.worldvectorlogo.com/logos/sanity.svg",
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-12 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0 text-center md:text-left">
            <h3 className="font-headline text-xl font-semibold">Numbers Don’t Lie</h3>
            <p className="text-muted-foreground">Here are some of the results we've delivered.</p>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground bg-primary px-2 rounded-md inline-block">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <AnimatedCarousel
          title="Trusted by brands you know"
          logos={partnerLogos}
          autoPlay={true}
          autoPlayInterval={4000}
          itemsPerViewMobile={3}
          itemsPerViewDesktop={6}
          logoContainerWidth="w-40"
          logoContainerHeight="h-20"
          logoImageWidth="w-auto"
          logoImageHeight="h-10"
          padding="py-10"
        />
      </div>
    </section>
  );
}
