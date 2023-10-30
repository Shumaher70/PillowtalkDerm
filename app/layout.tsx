import type { Metadata } from 'next';
import './globals.css';
import localFont from '@next/font/local';
import { neueHaasUnicaFont } from '@/public/fonts/variables';

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
            {children}
         </body>
      </html>
   );
}
