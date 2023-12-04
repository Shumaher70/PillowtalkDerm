import { Metadata } from 'next';
import HeroSection from './components/heroSection/HeroSection';
import BestSellers from './components/bestSellers/BestSellers';

export const metadata: Metadata = {
   title: 'PillowTalkDerm',
   description: 'PillowTalkDerm shop',
};

export default function Home() {
   return (
      <main>
         <HeroSection />
         <BestSellers />
      </main>
   );
}
