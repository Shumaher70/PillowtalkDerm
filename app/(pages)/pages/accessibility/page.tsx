import ViewportMotionDiv from "@/app/components/motion/ViewPortMotionDiv"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
   title: "Accessibility | PillowTalkDerm",
   description:
      "Read the Dr. Idriss by Dr. Shereene Idriss accessibility policy.",
}

const page = () => {
   return (
      <main className="bg-secondary container-p">
         <ViewportMotionDiv>
            <div className="container-rounded mt-[50px] flex w-full flex-col gap-5 bg-white p-[15px] lg:flex-row lg:justify-between lg:gap-10 lg:p-[30px]">
               <div className="flex flex-col gap-3 font-medium">
                  <h1 className="text-title !leading-[45px]">Accessibility</h1>
               </div>

               <div className="flex max-w-[800px] flex-col gap-4 font-medium md:text-[18px]">
                  <h3 className="text-[30px]">Our Policy & Commitment</h3>

                  <p>{`Dr. Idriss is committed to accessibility, diversity and inclusion and to ensuring that all its customers have an accessible user experience.  As part of these efforts, Dr. Idriss is committed to ensuring that our website and online services are accessible for all and to following the World Wide Web Consortium’s Web Content Accessibility Guidelines 2.1 at Levels A and AA (“WCAG”).`}</p>

                  <br />

                  <h3 className="text-[30px]">Contact</h3>

                  <p>
                     Please be aware that our efforts are ongoing. If, at any
                     time, you are having difficulty accessing our website,
                     would like further information about our accessibility
                     efforts, or have any accessibility questions or feedback,
                     please contact us at{" "}
                     <Link
                        className="underline hover:no-underline"
                        href="mailto:hello@dridriss.com"
                     >
                        hello@dridriss.com.
                     </Link>{" "}
                     If you do encounter an accessibility issue, please be sure
                     to specify the Web page/URL in your email, and we will make
                     all reasonable efforts to address your concerns.
                  </p>
               </div>
            </div>
         </ViewportMotionDiv>
      </main>
   )
}

export default page
