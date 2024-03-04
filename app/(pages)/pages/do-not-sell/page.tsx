import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: "Do Not Sell | PillowtalkDerm – Dr. Idriss",
   description:
      "Read the PillowtalkDerm by Dr. Shereene Idriss do not sell policy.",
}

const page = () => {
   return (
      <main className="bg-secondary container-p">
         <ViewportMotionDiv>
            <div className="container-rounded mt-[50px] flex w-full flex-col gap-5 bg-white p-[15px] lg:flex-row lg:justify-between lg:gap-10 lg:p-[30px]">
               <div className="flex flex-col gap-3 font-medium">
                  <h1 className="text-title !leading-[45px]">Do Not Sell</h1>
               </div>

               <div className="flex max-w-[800px] flex-col gap-4 font-medium md:text-[18px]">
                  <h3 className="text-[30px]">
                     Your rights under the California Consumer Privacy Act
                  </h3>

                  <p>
                     The California Consumer Privacy Act (CCPA) provides you
                     with rights regarding how your data or personal information
                     is treated. Under the legislation, California residents can
                     choose to opt out of the “sale” of their personal
                     information to third parties. Based on the CCPA definition,
                     “sale” refers to data collection for the purpose of
                     creating advertising and other communications. Learn more
                     about CCPA and your privacy rights.
                  </p>

                  <br />

                  <h3>HOW TO OPT OUT</h3>

                  <p>
                     By clicking on the link below, we will no longer collect or
                     sell your personal information. This applies to both
                     third-parties and the data we collect to help personalize
                     your experience on our website or through other
                     communications. For more information, view our privacy
                     policy.
                  </p>
               </div>
            </div>
         </ViewportMotionDiv>
      </main>
   )
}

export default page
