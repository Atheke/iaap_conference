import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Footer from '../components/Footer/Footer';
import EventStructuredData from '@/components/EventStructuredData';
import { metadata } from './(pages)/Home/metadata';
import NotificationSection from '@/components/NotificationSection/NotificationSection';
import { notifications } from '@/components/NotificationSection/Notifications';
import AwardSection from '../components/AwardSection/AwardSection';
import { awards } from '../components/AwardSection/AwardSectionProps';
import Navbar from '../components/Navbar/Navbar';
export { metadata };

const Josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-Josefin',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <EventStructuredData />
      </head>
      <body
        className={cn(
          Josefin.className,
          'min-h-screen bg-background font-sans antialiased'
        )}
      >
        <main className="min-h-screen flex flex-col">
          <header className="flex w-full items-center justify-start sm:gap-52 py-5 container gap-36">
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
            						<Navbar />
          </header>
          <div className="flex-1 flex flex-col items-center px-0">
            {children}
          </div>
          <div>
            <NotificationSection notifications={notifications} />
          </div>
          <div>
            <AwardSection awards={awards} />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
