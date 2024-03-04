import ViewportMotionDiv from "@/motion/ViewPortMotionDiv"
import { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
   title: "Terms & Conditions | PillowtalkDerm",
   description:
      "Read the Dr. Idriss by Dr. Shereene Idriss terms & conditions of sale.",
}

const page = () => {
   return (
      <main className="bg-secondary container-p">
         <ViewportMotionDiv>
            <div className="container-rounded mt-[50px] flex w-full flex-col gap-5 bg-white p-[15px] lg:flex-row lg:justify-between lg:gap-10 lg:p-[30px]">
               <div className="flex flex-col gap-3 font-medium">
                  <h1 className="text-title !leading-[45px]">
                     Terms & Conditions
                  </h1>
                  <p className="text-[16px] md:text-[18px]">
                     Effective November 3, 2022
                  </p>
               </div>

               <div className="flex max-w-[800px] flex-col gap-4 font-medium md:text-[18px]">
                  <p>Please read these terms and conditions carefully.</p>

                  <br />

                  <p>
                     Dr. Idriss LLC (“Dr. Idriss”) reserves the right to make
                     changes to these terms and conditions. Each time you use
                     the Dr. Idriss’ website and related services (collectively,
                     the “Website”), you should visit and review the current
                     terms and conditions that apply to your use of the Website.
                     If you are dissatisfied with the Website or these terms and
                     conditions, you agree that your sole and exclusive remedy
                     is to discontinue using the Website. By browsing, visiting,
                     accessing, and/or using the Website, you accept and agree
                     to the following terms and conditions, as well as any
                     applicable laws, statutes, ordinances, and regulations:
                  </p>
                  <br />

                  <ul className="ml-10 list-decimal">
                     <li>
                        You hereby acknowledge that all design, text, graphics,
                        logos, button icons, images, audio and video clips, the
                        selection and arrangement thereof, and all software on
                        the Website is Copyright (c) Dr. Idriss LLC., ALL RIGHTS
                        RESERVED. The compilation (meaning the collection,
                        arrangement and assembly) of all content on the Website
                        is the exclusive property of Dr. Idriss and protected by
                        U.S. and international copyright laws. All software used
                        on the Website is the property of Dr. Idriss or its
                        software suppliers and is protected by U.S. and
                        international copyright laws. Permission is granted to
                        electronically copy and to print in hard copy portions
                        of the Website for the sole purpose of placing an order
                        with Dr. Idriss, engaging with the Community or using
                        the Website as a shopping resource. Any other use of
                        materials on the Website - including reproduction for
                        purposes other than those permitted above, modification,
                        distribution, republishing, transmission, display or
                        performance - without the prior written permission of
                        Dr. Idriss is strictly prohibited.
                     </li>
                     <li>
                        The Website and all technology underlying the same are
                        expressly owned, and/or licensed by, and operated by Dr.
                        Idriss. Unless otherwise noted, the Content is owned by
                        Dr. Idriss or is licensed by Dr. Idriss from third
                        parties.
                     </li>
                     <li>
                        I understand that Dr. Idriss will take available
                        reasonable measures to maintain the security of the
                        Website and to protect information processed through the
                        Website in accordance with Dr. Idriss Privacy Policy as
                        the same may be amended from time to time. While Dr.
                        Idriss strives to protect your information, we cannot
                        ensure or warrant the security of any content you
                        transmit to us, and you do so at your own risk. In the
                        event of a data breach that impacts the Website, you
                        agree that Dr. Idriss is not liable for any losses,
                        damages and/or costs you may incur as a result of such
                        data breach.
                     </li>
                     <li>
                        Dr. Idriss does not make any representations or
                        warranties, whether express or implied in law, as to the
                        sequence, accuracy, completeness or reliability of
                        information, opinions, information, data and/or other
                        Content contained on the Website (including but not
                        limited to any information which may be provided by any
                        third party or data or content providers). Dr. Idriss
                        reserves the right at any time to change or discontinue
                        without notice, any aspect or feature of the Website.
                     </li>
                     <li>
                        You shall indemnify and hold harmless, Dr. Idriss and
                        its officers, directors, employees, agents,
                        representatives, third – party content providers,
                        designers, contractors, distributors, merchants,
                        sponsors, licensors, successors and assigns, or the like
                        (collectively, the “Indemnified Parties” ) from: (i) any
                        breach of these terms and conditions by you, including
                        any use of Content other than as expressly authorized in
                        these terms and conditions; and (ii) your use of the
                        Website, including your use of any products obtained
                        through the Website. You shall also indemnify and hold
                        harmless the Indemnified Parties from and against any
                        claims brought by third parties arising out of your use
                        of the Website.
                     </li>
                     <li>
                        The website is provided “as is” and “as available” Dr.
                        Idriss disclaims all representations and warranties,
                        express, implied, or statutory, not expressly set out in
                        these terms, including the implied warranties of
                        merchantability, fitness for a particular purpose and
                        non – infringement. In addition, Dr. Idriss makes no
                        representation, warranty, or guarantee regarding the
                        reliability, timeliness, quality, suitability, or
                        availability of the website or any services or products
                        requested through the use of the website, or that the
                        use of the website will be uninterrupted or error –
                        free. You agree that the entire risk arising out of your
                        use of the website, and any service or good requested in
                        connection therewith, remains solely with you, to the
                        maximum extent permitted under applicable law. Under no
                        circumstances shall Dr. Idriss be liable for any direct,
                        indirect, incidental, special or consequential damages
                        that result from your use of or inability to use the
                        website. The foregoing disclaimers and limitation of
                        liability shall apply in any action, whether in
                        contract, tort or any other claim, even if an authorized
                        representative of Dr. Idriss has been advised of or
                        should have knowledge of the possibility of such
                        damages. Dr. Idriss shall not be liable for any damages,
                        liability or losses arising out of your use of or
                        reliance on the website or your inability to access or
                        use the website.
                     </li>
                     <li>
                        Modifications to the Service and Prices of our products
                        are subject to change without notice. Dr. Idriss
                        reserves the right at any time to modify or discontinue
                        the Service (or any part or content thereof) without
                        notice at any time. Dr. Idriss shall not be liable to
                        you or to any third-party for any modification, price
                        change, suspension, or discontinuance of the Service.
                     </li>
                     <li>
                        Dr. Idriss reserves the right, but is not obligated, to
                        limit the sales of its’ products or Services to any
                        person, geographic region or jurisdiction. Dr. Idriss
                        may exercise this right on a case-by-case basis. Dr.
                        Idriss reserves the right to limit the quantities of any
                        products or services that it offers. All descriptions of
                        products or product pricing are subject to change at
                        anytime without notice, at the sole discretion of Dr.
                        Idriss. Dr. Idriss reserves the right to discontinue any
                        product at any time. Any offer for any product or
                        service made on this site is void where prohibited.
                     </li>
                     <li>
                        Dr. Idriss reserves the right to refuse any order placed
                        on the Website. Dr. Idriss may, in its sole discretion
                        limit or cancel quantities purchase per person, per
                        household or per order. These restrictions may include
                        orders placed by or under the same customer accounts,
                        the same credit card, and/or orders that use the same
                        billing and/or shipping address. In the event that Dr.
                        Idriss makes a change to or cancels an order, Dr. Idriss
                        may attempt to notify you by contacting the e-mail
                        and/or billing address/phone number provided at the time
                        the order was made. Dr. Idriss reserves the right to
                        limit or prohibit orders that, in its sole judgment,
                        appear to be placed by dealers, resellers or
                        distributors.
                     </li>
                     <li>
                        Third-party links on the Website may direct customers to
                        third-party websites that are not affiliated with Dr.
                        Idriss. Dr. Idriss is not responsible for examining or
                        evaluating the content or accuracy and Dr. Idriss does
                        not warrant and will not have any liability of
                        responsibility for any third-party materials or
                        websites, or for any other materials, products, or
                        services of third-parties.
                     </li>
                     <li>
                        The Website uses Google Analytics, a web analytics
                        service provided by Google, Inc. (“Google”). Google
                        Analytics uses “cookies”, which are text files placed on
                        your computer to help the Website analyze how users use
                        the Website. The information generated by the cookie
                        about your use of the site (including your IP address)
                        will be transmitted to and stored by Google on servers
                        in the Unites States. Google will us this information
                        for the purpose of evaluation your use of the site,
                        compiling reports on site activity for website
                        operators, and providing other services relating to
                        website activity and internet usage. Google may also
                        transfer this information to third parties where
                        required to do so by law, or where such third parties
                        process the information on Google’s behalf. Google will
                        not associate your IP address with any other data held
                        by Google. You may refuse the use of cookies by
                        selecting the appropriate settings on your browser,
                        however, please note that if you do this you may not be
                        able to use the full functionality of this site. By
                        using this site, you consent to the processing of data
                        about you by Google in the manner and for the purposes
                        set out above.
                     </li>
                     <li>
                        The Website may only be used for lawful purposes.
                        Activities including, but not limited to, tampering with
                        the Website, misrepresenting the identity of a user, or
                        conducting fraudulent activities on the Website are
                        prohibited.
                     </li>
                     <li>
                        These terms and conditions shall be governed by and
                        construed in accordance with the laws of the State of
                        New York without giving effect to any conflict of laws
                        principles. You hereby consent to the exclusive
                        jurisdiction of the courts located in the State of New
                        York in respect of any disputes arising in connection
                        with the website or these terms and conditions.
                     </li>
                     <li>
                        Reference to any product, recording, event, process,
                        publication, service, or offering of any third party by
                        name, trade name, trademark, service mark, company name
                        or otherwise does not constitute or imply the
                        endorsement or recommendation of the same by Dr. Idriss.
                        Any views expressed by third parties on the Website is
                        solely the views of such third party and Dr. Idriss
                        assumes no responsibility for the accuracy or veracity
                        of any statement made by such third party.
                     </li>
                     <li>
                        These Terms and Conditions and Dr. Idriss’ Privacy
                        Policy constitute the entire agreement between you and
                        Dr. Idriss as it relates to the access to and use of the
                        Website. These Terms and Conditions and the Privacy
                        Policy supersede all prior or contemporaneous
                        agreements, negotiations, representations, and
                        proposals, written or oral between Dr. Idriss and you
                        with respect to the use of the Website.
                     </li>
                     <li>
                        Users of the Website are prohibited from violating or
                        attempting to violate the security of the Website,
                        including, without limitation, (a) accessing data not
                        intended for such user or logging onto a server or an
                        account which the user is not authorized to access; (b)
                        using the Website for unintended purposes or trying to
                        change the behavior of the Website; (c) attempting to
                        probe, scan or test the vulnerability of a system or
                        network or breach security or authentication measures
                        without proper authorization; (d) attempting to
                        interfere with service to any user, host or network,
                        including without limitation via means of submitting a
                        virus to the website, overloading, “flooding,”
                        “spamming,” “mailbombing” or “crashing;” ; (f) forging
                        any TCP/IP packet header or any part of the header
                        information in any e – mail or newsgroup posting (if
                        applicable); or (g) forging communications on behalf of
                        the Website (impersonating the Website) or to the
                        Website (impersonating as a legitimate user). Sending
                        unsolicited and unauthorized e -mail on behalf of the
                        Website, including promotions and/or advertising of
                        services, is expressly prohibited.
                     </li>
                  </ul>

                  <p>17. Giveaway: Skin Nerd Jackpot Game</p>

                  <p>
                     The Skin Nerd Jackpot (the “game”) starts at 12:00 AM on
                     July 26, 2023, and ends on July 27th, 2023, at 11:59 PM
                     (EST - Eastern Standard Time) (the Entry Period) and shall
                     be subject to these Official Rules, and by participating,
                     all participants agree to be bound by the terms and
                     conditions herein. Certain restrictions may apply.
                  </p>

                  <h3 className="text-[30px]">TO PLAY</h3>

                  <p>
                     Scratch off card and uncover a prize to redeem via email:
                     <Link href="mailto:hello@dridriss.com">
                        hello@dridriss.com
                     </Link>{" "}
                     with subject line {`'PTD Nerd Jackpot'`}
                  </p>

                  <h3 className="text-[30px]">SPONSOR</h3>

                  <div>
                     <p>Dr. Idriss LLC.,</p>
                     <p>80 w. 40th st. 2nd FL. New York, NY 10018</p>
                  </div>

                  <h3 className="text-[30px]">ELIGIBILITY</h3>

                  <p>
                     The Game is open to legal residents of the 50 United States
                     and the District of Columbia, 18 years of age or older as
                     of the date of entry. The officers, directors, employees,
                     contractors and the immediate families and those living in
                     the same household of any of the above, are not eligible.
                     All Federal, state and local rules and regulations apply.
                     Void where prohibited or restricted by law.
                  </p>

                  <h3 className="text-[30px]">PRIZE(S)</h3>

                  <p>
                     Winners must redeem by August 11th, 2023. If winning game
                     pieces are not found or claimed by August 11th, 2023 the
                     prize(s) will not be awarded.* Approximate retail value of
                     all prizes to be awarded is USD $4,800. Chance of winning
                     is approximately 1 in 100.
                  </p>

                  <p>{`All prizes are awarded "as is" with no guarantee, either express or implied. If by reason of a printing, typographical, administrative, or other error, more prizes are claimed than the number set forth in these official rules, all persons making purportedly valid claims will be included in a random drawing to award the advertised number of prizes available in the prize category in question. No more than the advertised number of prizes will be awarded.`}</p>

                  <p>
                     All decisions are final. All Federal, state and local tax
                     liabilities are the responsibility of the winners.
                  </p>

                  <h3 className="text-[30px]">GENERAL</h3>

                  <p>{`Participants release and waive any claims they may have against Promotion Entities for any and all injuries, claims, damages, losses, costs, or expenses of any kind (including without limitation attorney's fees) resulting from acceptance, use, or misuse of any prize or parts thereof, or participation in this Game.`}</p>

                  <p>{`If for any reason, this Game is not capable of running as planned in the Sponsor's sole opinion, Sponsor reserves the right, at its sole discretion, to cancel, terminate, modify, or suspend this Game or any portion thereof.`}</p>

                  <p>{`The Sponsor and any and each of their respective affiliates, subsidiaries, parent corporations and advertising and promotional agencies, and all of their officers, directors, shareholders, employees and agents (collectively with the Promotion Entities, the "Releases") are not responsible for: any incorrect or inaccurate entry information; human errors; technical malfunctions; failures, omissions, interruptions, deletions or defects of any telephone network, computer online systems, computer equipment, servers, providers, or software, including without limitation any injury or damage to participant's or any other person's computer relating to or resulting from participation in the Contest; inability to access the Entry Site; theft, tampering, destruction, or unauthorized access to, or alteration of, entries; data that is processed late or incorrectly or is incomplete or lost due to telephone, computer or electronic malfunction or traffic congestion on telephone lines or the Internet or any web site (including the Entry Site) or for any other reason whatsoever; printing or other errors; any entries which are late, lost, incomplete, misdirected, stolen, mutilated, illegible, or any combination thereof. Incomplete entries will be disqualified.`}</p>

                  <p>
                     By participating in the Game, entrants affirm that they
                     have read and accepted these Official Rules. The Game shall
                     be governed by and construed in accordance with the laws of
                     the United States. By entering the Contest, entrants hereby
                     submit to the jurisdiction and venue of the federal and
                     state courts of the United States and waive the right to
                     have disputes arising out of the subject matter hereof
                     adjudicated in any other forum. Any entry information
                     collected from the Game shall be used only in a manner
                     consistent with the consent given by entrants at the time
                     of the entry, with these Official Rules and with the Dr.
                     Idriss Privacy Policy.
                  </p>

                  <p>Effective Date: June 1, 2022</p>

                  <h3>MOBILE TERMS OF SERVICE</h3>

                  <p>{`The Dr. Idriss LLC mobile message service (the "Service") is operated by Dr. Idriss LLC (“Dr. Idriss”, “we”, or “us”). Your use of the Service constitutes your agreement to these terms and conditions (“Mobile Terms”). We may modify or cancel the Service or any of its features without notice. To the extent permitted by applicable law, we may also modify these Mobile Terms at any time and your continued use of the Service following the effective date of any such changes shall constitute your acceptance of such changes.`}</p>

                  <p>{`By consenting to Dr. Idriss LLC’s SMS/text messaging service, you agree to receive recurring SMS/text messages from and on behalf of Dr. Idriss LLC through your wireless provider to the mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call list. Text messages may be sent using an automatic telephone dialing system or other technology. Service-related messages may include updates (e.g., order updates, account alerts, etc.). Promotional messages may include promotions, specials, and other marketing offers (e.g., cart reminders).`}</p>
                  <br />
                  <p>
                     You understand that you do not have to sign up for this
                     program in order to make any purchases, and your consent is
                     not a condition of any purchase with Dr. Idriss LLC. Your
                     participation in this program is completely voluntary. We
                     do not charge for the Service, but you are responsible for
                     all charges and fees associated with text messaging imposed
                     by your wireless provider. Message frequency varies.
                     Message and data rates may apply. Check your mobile plan
                     and contact your wireless provider for details. You are
                     solely responsible for all charges related to SMS/text
                     messages, including charges from your wireless provider.
                  </p>

                  <br />

                  <p>
                     {`You may opt-out of the Service at any time. Text the single
                     keyword command STOP to +18333521646 or click the
                     unsubscribe link (where available) in any text message to
                     cancel. You'll receive a one-time opt-out confirmation text
                     message. No further messages will be sent to your mobile
                     device, unless initiated by you. If you have subscribed to
                     other Dr. Idriss LLC mobile message programs and wish to
                     cancel, except where applicable law requires otherwise, you
                     will need to opt out separately from those programs by
                     following the instructions provided in their respective
                     mobile terms.`}
                  </p>

                  <br />

                  <p>
                     For Service support or assistance, text HELP to
                     +18333521646 or email{" "}
                     <Link href="mailto:hello@dridriss.com">
                        hello@dridriss.com.
                     </Link>
                  </p>

                  <br />

                  <p>
                     We may change any short code or telephone number we use to
                     operate the Service at any time and will notify you of
                     these changes. You acknowledge that any messages, including
                     any STOP or HELP requests, you send to a short code or
                     telephone number we have changed may not be received and we
                     will not be responsible for honoring requests made in such
                     messages.
                  </p>

                  <br />

                  <p>
                     The wireless carriers supported by the Service are not
                     liable for delayed or undelivered messages. You agree to
                     provide us with a valid mobile number. If you get a new
                     mobile number, you will need to sign up for the program
                     with your new number.
                  </p>

                  <br />

                  <p>
                     To the extent permitted by applicable law, you agree that
                     we will not be liable for failed, delayed, or misdirected
                     delivery of any information sent through the Service, any
                     errors in such information, and/or any action you may or
                     may not take in reliance on the information or Service.
                  </p>

                  <p>
                     We respect your right to privacy. To see how we collect and
                     use your personal information, please see our{" "}
                     <Link
                        className="underline hover:no-underline"
                        href="/pages/privacy-policy"
                     >
                        Privacy Notice.
                     </Link>
                  </p>

                  <br />

                  <p>Effective Date: November 3, 2022</p>
               </div>
            </div>
         </ViewportMotionDiv>
      </main>
   )
}

export default page
