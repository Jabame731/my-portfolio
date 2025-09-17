import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import siteConfig from '../../site.config';
import Nav from '@/components/molecules/Nav/Nav';

const monserat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.slogan,
  openGraph: {
    images: ['jt.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${monserat.className} antialiased`}>
        <Nav />
        <div className="drawer-content">{children}</div>
      </body>
    </html>
  );
}
