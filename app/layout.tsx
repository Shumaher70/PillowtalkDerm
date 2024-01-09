import "./globals.css"

import localFont from "next/font/local"
import { ClerkProvider } from "@clerk/nextjs"
import { Providers } from "@/redux/provider"

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"

import { ourFileRouter } from "@/app/api/uploadthing/core"

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
         <Providers>
            <html lang="en">
               <NextSSRPlugin
                  routerConfig={extractRouterConfig(ourFileRouter)}
               />
               <body>{children}</body>
            </html>
         </Providers>
      </ClerkProvider>
   )
}
