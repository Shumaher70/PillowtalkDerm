import './globals.css';

import Navbar from './components/navbar/Navbar';

import localFont from 'next/font/local';

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
            <Navbar />
            {children}
         </body>
      </html>
   );
}
