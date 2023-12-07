import { Metadata } from 'next';
import HeroSection from './components/homePage/heroSection/HeroSection';
import BrandSection from './components/homePage/brendSection/BrandSection';
import DoctorOrderSection from './components/homePage/doctorOrderSection/DoctorOrderSection';
import AboutUsSection from './components/homePage/abouUsSection/AboutUsSection';
import SkinNerdAcademySection from './components/homePage/skinNerdAcademySection/SkinNerdAcademySection';
import BestSellersSection from './components/homePage/bestSellersSection/BestSellersSection';
import GetNerdyWithUsSection from './components/homePage/getNerdyWithUsSection/GetNerdyWithUsSection';

export const metadata: Metadata = {
   title: 'PillowTalkDerm',
   description: 'PillowTalkDerm shop',
};

export default function Home() {
   return (
      <main>
         <HeroSection />
         <BestSellersSection />
         <BrandSection />
         <DoctorOrderSection />
         <AboutUsSection />
         <SkinNerdAcademySection />
         <GetNerdyWithUsSection />
      </main>
   );
}
