import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Lexend, Dancing_Script } from 'next/font/google'
import { CursorFollower } from '@/components/cursor-follower';

export const metadata: Metadata = {
  title: 'Corelk Digital Agency',
  description: 'Crafting Seamless Digital Experiences',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${lexend.variable} ${dancingScript.variable} font-body antialiased`}>
        <CursorFollower />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
