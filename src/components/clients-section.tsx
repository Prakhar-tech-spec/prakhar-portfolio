import { Asterisk, Bot, Heart, Sparkles } from 'lucide-react';

const clients = [
  { name: 'Logoipsum 1', icon: <Asterisk className="h-8 w-8 text-muted-foreground" /> },
  { name: 'Logoipsum 2', icon: <Sparkles className="h-8 w-8 text-muted-foreground" /> },
  { name: 'Logoipsum 3', icon: <Heart className="h-8 w-8 text-muted-foreground" /> },
  { name: 'Logoipsum 4', icon: <Bot className="h-8 w-8 text-muted-foreground" /> },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-12 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className='flex-shrink-0'>
                <h3 className="font-headline text-xl font-semibold">My recent Client</h3>
                <p className="text-muted-foreground">Collaborations That Brought Ideas to Life</p>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center gap-2">
                {client.icon}
                <span className="text-lg font-semibold text-muted-foreground">{client.name}</span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
