import Image from "next/image"
import Link from "next/link"

const page = () => {
   return (
      <main className="container-p mt-[40px] !pb-[20px] md:mt-[20px]">
         <div className="h-full w-full py-[15px] lg:h-[80vh]">
            <div className="container-rounded bg-secondary flex h-full w-full flex-col overflow-hidden md:flex-row">
               <div className="relative w-full grow">
                  <div className="h-full min-h-[300px]">
                     <Image
                        src="/imagesContactUs/contactUs.webp"
                        alt="our-philosophy"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="container-rounded absolute right-0 top-0 h-full w-full object-cover md:static"
                     />
                  </div>
               </div>

               <div className="flex min-h-full w-full grow flex-col justify-between overflow-y-auto p-[15px] md:p-[24px]">
                  <h1 className="text-title pb-5 md:pb-10">Contact Us</h1>

                  <div className="flex flex-col gap-5 text-[16px] font-medium lg:gap-10  lg:text-[18px]">
                     <div>
                        <h3 className="uppercase">GENERAL</h3>
                        <p>
                           Check out our{" "}
                           <Link
                              className="underline hover:no-underline"
                              href="/pages/FAQ"
                           >
                              FAQ
                           </Link>{" "}
                           for help regarding orders or products. If you can’t
                           find an answer, email{" "}
                           <Link
                              className="underline hover:no-underline"
                              href="mailto:hello@dridriss.com"
                           >
                              hello@dridriss.com.
                           </Link>
                        </p>
                     </div>

                     <div>
                        <h3 className="uppercase">PRESS & PARTNERSHIPS</h3>
                        <p>
                           Press:{" "}
                           <Link
                              className="underline hover:no-underline"
                              href="mailto:idriss@ledecompany.com"
                           >
                              idriss@ledecompany.com
                           </Link>
                        </p>
                        <p>
                           Partnerships:{" "}
                           <Link
                              className="underline hover:no-underline"
                              href="hello@dridriss.com"
                           >
                              hello@dridriss.com.
                           </Link>
                        </p>
                     </div>

                     <div>
                        <h3 className="uppercase">
                           DR. SHEREENE IDRISS’ OFFICE
                        </h3>
                        <p>
                           Visit Idriss Dermatology for contact information and
                           her office address and hours.
                        </p>
                        <p>
                           Partnerships:{" "}
                           <Link
                              className="underline hover:no-underline"
                              href="hello@dridriss.com"
                           >
                              hello@dridriss.com.
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default page
