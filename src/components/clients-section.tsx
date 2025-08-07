
const stats = [
  { value: "500%", label: "ROI Increased" },
  { value: "300%", label: "Conversion Rate" },
  { value: "10k+", label: "New Leads" },
  { value: "2.5M+", label: "Impressions" },
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
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
