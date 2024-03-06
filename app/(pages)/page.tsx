import { Metadata } from "next"
import AboutUsSection from "../components/homePage/abouUsSection/AboutUsSection"
import BestSellersSection from "../components/homePage/bestSellersSection/BestSellersSection"
import BrandSection from "../components/homePage/brendSection/BrandSection"
import DoctorOrderSection from "../components/homePage/doctorOrderSection/DoctorOrderSection"
import GetNerdyWithUsSection from "../components/homePage/getNerdyWithUsSection/GetNerdyWithUsSection"
import HeroSection from "../components/homePage/heroSection/HeroSection"
import SkinNerdAcademySection from "../components/homePage/skinNerdAcademySection/SkinNerdAcademySection"

export const metadata: Metadata = {
   title: "PillowTalkDerm",
   description:
      "Dr. Idriss is a collection of fact-based, science-backed skincare solutions by Dr. Shereene Idriss.",
}

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
   )
}
