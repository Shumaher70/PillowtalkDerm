"use client"

import { schnyderMlightFont } from "@/app/layout"
import FaqAccordion from "./FaqAccordion"
import { FaqAccordionDummy } from "./faqAccordionDummy"
import { Button, Element } from "react-scroll"

const select = [
   "products",
   "major fade",
   "the depuffer",
   "orders",
   "shipping & returns",
   "miscellaneous",
]

const FaqScroll = () => {
   return (
      <>
         <div className="container-px flex flex-col gap-5 overflow-x-scroll">
            <h1 className={`text-section ${schnyderMlightFont.className}`}>
               FAQ
            </h1>

            <div className="flex gap-2">
               {select.map((item, index) => {
                  return (
                     <Button
                        to={item}
                        spy={true}
                        smooth={true}
                        duration={250}
                        offset={-100}
                        key={index}
                        className="min-w-max rounded-full border-[1px] border-purple-700 px-[10px] py-[10px] text-[14px] uppercase text-purple-700 transition-all hover:bg-purple-700 hover:text-white md:px-[20px] md:py-[10px] md:text-[16px]"
                     >
                        {item}
                     </Button>
                  )
               })}
            </div>
         </div>

         <div className="container-px">
            <div className="container-rounded mx-0 mt-5 flex flex-col bg-white p-[15px] md:mt-10 lg:mx-[80px] lg:p-[30px]">
               <h1 className={`${schnyderMlightFont.className} text-title`}>
                  Products
               </h1>

               <div className="mt-5">
                  {FaqAccordionDummy.products.map(
                     ({ title, description }, index) => (
                        <FaqAccordion
                           key={index}
                           title={title}
                           description={description}
                           className={`${
                              index === FaqAccordionDummy.products.length - 1 &&
                              "border-y-[1px]"
                           } ${
                              index !== FaqAccordionDummy.products.length - 1 &&
                              "border-t-[1px]"
                           }`}
                        />
                     )
                  )}
               </div>
            </div>
         </div>

         <Element className="container-px" name="major fade">
            <div className="container-rounded mx-0 mt-10 flex flex-col bg-white p-[15px] md:mx-[80px] lg:p-[30px]">
               <h1 className={`${schnyderMlightFont.className} text-title`}>
                  Major Fade
               </h1>

               <div className="mt-5">
                  {FaqAccordionDummy["Major Fade"].map(
                     ({ title, description }, index) => (
                        <FaqAccordion
                           key={index}
                           title={title}
                           description={description}
                           className={`${
                              index ===
                                 FaqAccordionDummy["Major Fade"].length - 1 &&
                              "border-y-[1px]"
                           } ${
                              index !==
                                 FaqAccordionDummy["Major Fade"].length - 1 &&
                              "border-t-[1px]"
                           }`}
                        />
                     )
                  )}
               </div>
            </div>
         </Element>

         <Element className="container-px" name="the depuffer">
            <div className="container-rounded mx-0 mt-10 flex flex-col bg-white p-[15px] md:mx-[80px] lg:p-[30px]">
               <h1 className={`${schnyderMlightFont.className} text-title`}>
                  The Depuffer
               </h1>

               <div className="mt-5">
                  {FaqAccordionDummy["The Depuffer"].map(
                     ({ title, description }, index) => (
                        <FaqAccordion
                           key={index}
                           title={title}
                           description={description}
                           className={`${
                              index ===
                                 FaqAccordionDummy["The Depuffer"].length - 1 &&
                              "border-y-[1px]"
                           } ${
                              index !==
                                 FaqAccordionDummy["The Depuffer"].length - 1 &&
                              "border-t-[1px]"
                           }`}
                        />
                     )
                  )}
               </div>
            </div>
         </Element>

         <Element className="container-px" name="orders">
            <div className="container-rounded mx-0 mt-10 flex flex-col bg-white p-[15px] md:mx-[80px] lg:p-[30px]">
               <h1 className={`${schnyderMlightFont.className} text-title`}>
                  Orders
               </h1>

               <div className="mt-5">
                  {FaqAccordionDummy["Orders"].map(
                     ({ title, description }, index) => (
                        <FaqAccordion
                           key={index}
                           title={title}
                           description={description}
                           className={`${
                              index ===
                                 FaqAccordionDummy["Orders"].length - 1 &&
                              "border-y-[1px]"
                           } ${
                              index !==
                                 FaqAccordionDummy["Orders"].length - 1 &&
                              "border-t-[1px]"
                           }`}
                        />
                     )
                  )}
               </div>
            </div>
         </Element>

         <Element className="container-px" name="shipping & returns">
            <div className="container-rounded mx-0 mt-10 flex flex-col bg-white p-[15px] md:mx-[80px] lg:p-[30px]">
               <h1 className={`${schnyderMlightFont.className} text-title`}>
                  Shipping & Returns
               </h1>

               <div className="mt-5">
                  {FaqAccordionDummy["Shipping & Returns"].map(
                     ({ title, description }, index) => (
                        <FaqAccordion
                           key={index}
                           title={title}
                           description={description}
                           className={`${
                              index ===
                                 FaqAccordionDummy["Shipping & Returns"]
                                    .length -
                                    1 && "border-y-[1px]"
                           } ${
                              index !==
                                 FaqAccordionDummy["Shipping & Returns"]
                                    .length -
                                    1 && "border-t-[1px]"
                           }`}
                        />
                     )
                  )}
               </div>
            </div>
         </Element>

         <Element className="container-px" name="miscellaneous">
            <div className="container-rounded mx-0 mt-10 flex flex-col bg-white p-[15px] md:mx-[80px] lg:p-[30px]">
               <h1 className={`${schnyderMlightFont.className} text-title`}>
                  Miscellaneous
               </h1>

               <div className="mt-5">
                  {FaqAccordionDummy["Miscellaneous"].map(
                     ({ title, description }, index) => (
                        <FaqAccordion
                           key={index}
                           title={title}
                           description={description}
                           className={`${
                              index ===
                                 FaqAccordionDummy["Miscellaneous"].length -
                                    1 && "border-y-[1px]"
                           } ${
                              index !==
                                 FaqAccordionDummy["Miscellaneous"].length -
                                    1 && "border-t-[1px]"
                           }`}
                        />
                     )
                  )}
               </div>
            </div>
         </Element>
      </>
   )
}

export default FaqScroll
