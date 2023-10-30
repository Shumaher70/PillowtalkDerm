import type { Metadata } from 'next';
import './globals.css';
import { neueHaasUnicaFont } from '@/public/fonts/variables';
import Navbar from './components/navbar/Navbar';

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
