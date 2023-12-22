import { Providers } from "@/redux/provider"
import LoginMenu from "../LoginMenu"
import Overflow from "../Overflow"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import SlideInfo from "../components/slideInfo/SlideInfo"
import "../globals.css"

import localFont from "next/font/local"

export const schnyderMlightFont = localFont({
   src: "../../public/fonts/SchnyderMLight.woff2",
   weight: "100",
   variable: "--font-schnyderMlightFont",
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <Providers>
            <body>
               <Overflow />
               <SlideInfo />
               <LoginMenu />
               <Navbar />
               {children}
               <Footer />
            </body>
         </Providers>
      </html>
   )
}
