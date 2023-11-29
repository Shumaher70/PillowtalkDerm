'use client';

const Subscribe = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
         <p className="text-p text-bold">Stay up to date</p>
         <p className="text-p lg:whitespace-nowrap">
            Subscribe for nerdy news, exclusive access and more from Dr. Idriss!
         </p>

         <div className="flex py-5 w-full border-b-[1px] border-red-500">
            <input
               type="email"
               placeholder="Email*"
               className="bg-transparent w-full outline-none text-p placeholder:text-gray-700"
            />
            <button className="uppercase text-p font-bold ">Subscribe</button>
         </div>
      </form>
   );
};

export default Subscribe;
