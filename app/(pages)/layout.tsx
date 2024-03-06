import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

export default function RootLayout({
   children,
   users,
}: {
   children: React.ReactNode
   users: React.ReactNode
}) {
   return (
      <>
         <Navbar />
         {children}
         {users}
         <Footer />
      </>
   )
}
