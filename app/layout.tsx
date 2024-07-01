import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Footer from './../components/Footer/Footer';

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
        <link href="/favicon.ico" rel="icon" sizes="any" />
      </head>
      <body
        className={cn(
          Josefin.className,
          'min-h-screen bg-background font-sans antialiased'
        )}
      >
        <main className="min-h-screen flex flex-col items-center container">
          <header className="flex w-full items-center justify-start gap-52 py-5">
            <Link href="/">
              <div className="inline-flex items-center space-x-5">
                <Image
                  alt="nagaland university logo"
                  height={40}
                  src={'/NU-logo-transformed.png'}
                  width={40}
                />
                <h3 className="font-semibold">IAAP Conference</h3>
              </div>
            </Link>
            <nav className="hidden sm:block space-x-20">
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About Us</Link>
            </nav>
          </header>
          <div className="flex-1 flex flex-col items-center container px-0">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
