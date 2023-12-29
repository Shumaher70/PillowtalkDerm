import { Providers } from "@/redux/provider"
import LoginMenu from "../LoginMenu"
import Overflow from "../Overflow"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import SlideInfo from "../components/slideInfo/SlideInfo"
import "../globals.css"

import localFont from "next/font/local"
import Form from "./products/[title]/components/comments/components/review/components/reviewForm/components/form/Form"

export const schnyderMlightFont = localFont({
   src: "../../public/fonts/SchnyderMLight.woff2",
   weight: "100",
   variable: "--font-schnyderMlightFont",
})

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <Overflow />
         <SlideInfo />
         <Form />
         <LoginMenu />
         <Navbar />
         {children}
         <Footer />
      </>
   )
}
