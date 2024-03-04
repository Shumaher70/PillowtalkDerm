import Navbar from "./components/navbar/Navbar"

import Image from "next/image"
import Link from "next/link"
import Footer from "./components/footer/Footer"

const NotFound = async () => {
   return (
      <main className="h-screen">
         <Navbar />

         <div className="container-p mt-[50px] h-full text-center text-white">
            <div className="container-rounded flex-center relative flex h-full overflow-hidden">
               <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/not-found.webp"
                  alt="page-not-found"
                  className="h-full w-full object-cover brightness-[.8]"
               />
               <div className="absolute">
                  <h1 className="text-section">404 page not found</h1>
                  <p>{`Skin is complex, skincare doesn't have to be`}</p>
                  <Link
                     href="/shop"
                     className="mt-4 inline-block rounded-full border-[1px] border-white px-[20px] py-[10px] uppercase transition-all duration-300 hover:border-[1px] hover:border-pink-600 hover:bg-pink-600"
                  >
                     continue shopping
                  </Link>
               </div>
            </div>
         </div>

         <Footer />
      </main>
   )
}

export default NotFound
