import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Lexend } from 'next/font/google'
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${lexend.variable} font-body antialiased`}>
        <CursorFollower />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
