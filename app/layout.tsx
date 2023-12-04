import './globals.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import localFont from 'next/font/local';
import { Providers } from '@/redux/provider';
import SlideInfo from './components/slideInfo/SlideInfo';
import Overflow from './Overflow';

export const schnyderMlightFont = localFont({
   src: '../public/fonts/SchnyderMLight.woff2',
   weight: '100',
   variable: '--font-schnyderMlightFont',
});

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <Providers>
               <Overflow />
               <SlideInfo />
               <Navbar />
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   );
}
