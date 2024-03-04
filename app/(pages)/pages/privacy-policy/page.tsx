import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
   title: "Privacy Policy | PillowtalkDerm - Dr. Idriss ",
   description:
      "Read the PillowtalkDerm by Dr. Shereene Idriss privacy policy.",
}

const page = () => {
   return (
      <main className="bg-secondary container-p">
         <ViewportMotionDiv>
            <div className="container-rounded mt-[50px] flex w-full flex-col gap-5 bg-white p-[15px] lg:flex-row lg:justify-between lg:gap-10 lg:p-[30px]">
               <div className="flex flex-col gap-3 font-medium">
                  <h1 className="text-title !leading-[45px]">Privacy Policy</h1>
                  <p className="text-[16px] md:text-[18px]">
                     Effective June 1, 2021
                  </p>
               </div>

               <div className="flex max-w-[800px] flex-col gap-4 font-medium md:text-[18px]">
                  <p>
                     Dr. Idriss LLC and its affiliates (“we” “us”) take your
                     privacy seriously and we want you to know how we collect,
                     use, share, and protect our customers’ personal
                     information.
                  </p>

                  <p>
                     Please read this policy carefully to understand our
                     policies and practices regarding your information and how
                     we will treat it. If you have questions or complaints
                     regarding our Policy, please contact us at{" "}
                     <Link
                        className="underline hover:no-underline"
                        href="mailto:hello@dridriss.com"
                     >
                        hello@dridriss.com
                     </Link>{" "}
                     or as provided in the “Contact Us” section in this Policy.
                     By accessing or using this Website, you agree to this
                     Privacy Policy. Please note that this policy may change
                     from time to time. All changes are effective immediately
                     when we post them and apply to all access to and use of the
                     Website thereafter. Your continued use of this Website
                     after we make changes is deemed to be acceptance of those
                     changes, so please check the policy periodically for
                     updates.
                  </p>

                  <br />

                  <h3 className="uppercase">
                     1- WHAT OUR PRIVACY POLICY COVERS:
                  </h3>

                  <p>
                     This privacy policy applies to the personal information Dr.
                     Idriss obtains in various contexts, both online and
                     offline, including when you access or use our websites,
                     native mobile applications or any other applications or
                     services that link to this privacy policy, communicate with
                     us (including email addresses), shop with our third-party
                     partners, engage with us on social media, or participate in
                     any of our programs or events We may provide different or
                     additional privacy notices in connection with certain
                     activities, programs, and offerings. We may also provide
                     additional “just-in-time” notices that may supplement or
                     clarify our privacy practices or provide you with
                     additional choices regarding your personal information.
                  </p>

                  <br />

                  <p>
                     Our website may include links to websites and/or
                     applications operated and maintained by third parties.
                     Please note that we have no control over the privacy
                     practices of websites or applications that we do not own.
                     We encourage you to review the privacy practices of those
                     third parties.
                  </p>

                  <br />

                  <h3 className="uppercase">2- WHAT INFORMATION WE COLLECT:</h3>

                  <p>
                     The types of personal information we obtain about you
                     depends on how you interact with us and our products and
                     services. When we use the term “personal information,” we
                     are referring to information that identifies, relates to,
                     describes, or can be associated with you. The following are
                     the categories and specific types of personal information
                     that we collect:
                  </p>

                  <br />

                  <h3 className="uppercase">BASIC PERSONAL INFORMATION</h3>

                  <p>
                     “Personal Information” is information through which you can
                     be personally identified. We only collect Personal
                     Information that you voluntarily provide to us, which may
                     include your name, postal address, email address, phone
                     number, account name, signature, username, social media
                     handle or other personally identifiable information you
                     submit to us, which may also include Protected Health
                     Information.
                  </p>
                  <br />

                  <div>
                     <h3>CONTACT US</h3>
                     <p>
                        Mailing Address: 80 West 40th St, 3rd floor, New York,
                        NY 10018
                     </p>
                     <p>Phone: (212) 612-1520</p>
                     <p>
                        Inquiries:{" "}
                        <Link href="mailto:hello@dridriss.com">
                           hello@dridriss.com
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </ViewportMotionDiv>
      </main>
   )
}

export default page
