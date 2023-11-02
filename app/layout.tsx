import type { Metadata } from 'next';

import './globals.css';

import Navbar from './components/navbar/Navbar';

import localFont from 'next/font/local';

export const neueHaasUnicaFont = localFont({
   src: [
      {
         path: '../public/fonts/NeueHaasUnica-Bold.woff2',
         weight: '700',
      },
      {
         path: '../public/fonts/NeueHaasUnica-BoldItalic.woff2',
         weight: '700',
      },
      {
         path: '../public/fonts/NeueHaasUnica-Medium.woff2',
         weight: '500',
      },
      {
         path: '../public/fonts/NeueHaasUnica-MediumItalic.woff2',
         weight: '500',
      },
      {
         path: '../public/fonts/NeueHaasUnica-Regular.woff2',
         weight: '400',
      },
      {
         path: '../public/fonts/NeueHaasUnica-Light.woff2',
         weight: '300',
      },
      {
         path: '../public/fonts/NeueHaasUnica-LightItalic.woff2',
         weight: '300',
      },
      {
         path: '../public/fonts/NeueHaasUnica-Thin.woff2',
         weight: '100',
      },
      {
         path: '../public/fonts/NeueHaasUnica-ThinItalic.woff2',
         weight: '100',
      },
   ],
   variable: '--font-neueHaasUnica',
});

export const schnyderMlightFont = localFont({
   src: '../public/fonts/SchnyderMLight.woff2',
   weight: '100',
   variable: '--font-schnyderMlightFont',
});

export const metadata: Metadata = {
   title: 'PillowTalkDerm',
   description: 'PillowTalkDerm shop',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${neueHaasUnicaFont.className} font-sans`}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
