import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-Josefin',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'iaap conference',
  description: 'iaap conference, nagaland university website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          Josefin.className,
          'min-h-screen bg-background font-sans antialiased'
        )}
      >
        <main className="min-h-screen flex flex-col items-center container">
          <header className="flex w-full items-center justify-start gap-52 py-5">
            <div className="inline-flex items-center space-x-5">
              <Image
                src={'/NU-logo-transformed.png'}
                alt="nagaland university logo"
                width={40}
                height={40}
              />
              <h3 className="font-semibold">IAAP Conference</h3>
            </div>
            <nav className="hidden sm:block space-x-20">
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About Us</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
