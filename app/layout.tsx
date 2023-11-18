import './globals.css';

import Navbar from './components/navbar/Navbar';

import localFont from 'next/font/local';
import QueryProvider from './QueryProvider';
import { Providers } from '@/redux/provider';

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
            <QueryProvider>
               <Providers>
                  <Navbar />
                  {children}
               </Providers>
            </QueryProvider>
         </body>
      </html>
   );
}
