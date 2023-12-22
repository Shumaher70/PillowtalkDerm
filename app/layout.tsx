import "./globals.css"

import localFont from "next/font/local"
import { ClerkProvider } from "@clerk/nextjs"

export const schnyderMlightFont = localFont({
   src: "../public/fonts/SchnyderMLight.woff2",
   weight: "100",
   variable: "--font-schnyderMlightFont",
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body>{children}</body>
         </html>
      </ClerkProvider>
   )
}
