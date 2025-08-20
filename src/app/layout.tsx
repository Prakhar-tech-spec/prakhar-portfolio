import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Lexend, Felipa } from 'next/font/google'
import { CursorFollower } from '@/components/cursor-follower';

export const metadata: Metadata = {
  title: 'We Brand You',
  description: 'Your Growth, Made Simple',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

const felipa = Felipa({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-felipa',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${lexend.variable} ${felipa.variable} font-body antialiased`}>
        <CursorFollower />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
