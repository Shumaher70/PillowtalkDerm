import { IoIosHome } from "react-icons/io"

import Link from "next/link"
import Success from "./Success"
import { Suspense } from "react"

const Page = async (query: { searchParams: { userid: string } }) => {
   const { searchParams } = query
   const { userid } = searchParams

   return (
      <main className="container-p h-full !pt-[30px]">
         <div className="mb-5 flex flex-col items-center justify-between gap-2 md:flex-row">
            <h1 className="text-section ">My orders</h1>
            <Link
               className="flex-center flex cursor-pointer gap-1 rounded-full bg-pink-600 px-4 py-2 text-[16px] uppercase text-white"
               href="/"
            >
               to home {<IoIosHome className="text-white" />}
            </Link>
         </div>
         <Success userId={userid} />
      </main>
   )
}

export default Page
