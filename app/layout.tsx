import { Poppins } from 'next/font/google';
import Header from './includes/header';
import Footer from './includes/footer';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Header />
        <main className='w-full max-w-7xl mx-auto'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}