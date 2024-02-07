import Link from "next/link"

const Pages = () => {
   const array = ["1"]
   return (
      <div className="flex-center flex w-full">
         {array.map((item) => {
            return (
               <Link
                  key={item}
                  href={"/"}
                  className="rounded-full bg-purple-700 px-4 py-2 text-white"
               >
                  1
               </Link>
            )
         })}
      </div>
   )
}

export default Pages
