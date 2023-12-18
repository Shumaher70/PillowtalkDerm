"use client"

const Subscribe = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
         <p className="text-p text-bold">Stay up to date</p>
         <p className="text-p ">
            Subscribe for nerdy news, exclusive access and more from Dr. Idriss!
         </p>

         <div className="flex w-full border-b-[1px] border-red-500 py-5">
            <input
               type="email"
               placeholder="Email*"
               className="text-p w-full bg-transparent outline-none placeholder:text-gray-700"
            />
            <button className="text-p font-bold uppercase ">Subscribe</button>
         </div>
      </form>
   )
}

export default Subscribe
