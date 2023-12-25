import { Metadata } from "next"
import AboutUsSection from "../components/homePage/abouUsSection/AboutUsSection"
import BestSellersSection from "../components/homePage/bestSellersSection/BestSellersSection"
import BrandSection from "../components/homePage/brendSection/BrandSection"
import DoctorOrderSection from "../components/homePage/doctorOrderSection/DoctorOrderSection"
import GetNerdyWithUsSection from "../components/homePage/getNerdyWithUsSection/GetNerdyWithUsSection"
import HeroSection from "../components/homePage/heroSection/HeroSection"
import SkinNerdAcademySection from "../components/homePage/skinNerdAcademySection/SkinNerdAcademySection"
import Users from "./Users"

export const metadata: Metadata = {
   title: "PillowTalkDerm",
   description: "PillowTalkDerm shop",
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
         <Users />
      </main>
   )
}
