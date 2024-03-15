import ViewportMotionDiv from "@/app/components/motion/ViewPortMotionDiv"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: "Shipping & Returns | PillowtalkDerm - Dr. Idriss ",
   description:
      "Shop PillowtalkDerm by Dr. Shereene Idriss. Free shipping on orders $135+.",
}

const page = () => {
   return (
      <main className="bg-secondary container-p">
         <ViewportMotionDiv>
            <div className="container-rounded mt-[50px] flex w-full flex-col gap-5 bg-white p-[15px] lg:flex-row lg:justify-between lg:gap-10 lg:p-[30px]">
               <div className="">
                  <h1 className="text-title font-medium !leading-[45px]">
                     Shipping & Returns
                  </h1>
               </div>

               <div className="flex max-w-[800px] flex-col gap-2 font-medium md:text-[18px]">
                  <h4 className="text-[20px] md:text-[32px]">
                     Shipping Rates & Methods
                  </h4>
                  <p>
                     Dr. Idriss offers standard shipping to all U.S. states and
                     territories, as well as P.O. and APO boxes. We do not offer
                     expedited or international shipping at this time.
                  </p>
                  <p>
                     For orders over $135, standard shipping is free. For orders
                     under $135, standard shipping is $7.95.
                  </p>
                  <p>
                     Orders are processed Mondays - Fridays, with the exception
                     of federal holidays. Orders will arrive approximately 7 to
                     10 business days from date of purchase. Alaska, Hawaii,
                     Puerto Rico, and APO boxes may experience longer transit
                     times. Once your order has shipped, you will receive an
                     email from {""}
                     <a className="underline" href="mailto:hello@dridriss.com">
                        hello@dridriss.com
                     </a>
                     {""}
                     with tracking information.
                  </p>
                  <h4>
                     <strong>RETURNS AND EXCHANGES</strong>
                  </h4>
                  pReturns and exchanges are accepted within 30 days of
                  purchase. Please note that we are unable to refund shipping
                  charges. To request a return or exchange, email{" "}
                  <a className="underline" href="mailto:hello@dridriss.com">
                     hello@dridriss.com
                  </a>{" "}
                  with your name, order number, item(s) that you wish to return
                  or exchange, and the reason for requesting a return or
                  exchange.
               </div>
            </div>
         </ViewportMotionDiv>
      </main>
   )
}

export default page
