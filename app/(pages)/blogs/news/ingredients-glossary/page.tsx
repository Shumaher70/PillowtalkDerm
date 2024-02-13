"use client"

import { schnyderMlightFont } from "@/app/layout"
import IngredientGlossaryFilter from "./components/IngredientGlossaryFilter"

const page = () => {
   return (
      <main className="container-px bg-secondary">
         <section className="section-pt">
            <div className="w-full">
               <h1
                  className={`text-section leading-[45px] ${schnyderMlightFont.className}`}
               >
                  Ingredients Glossary
               </h1>
               <h5 className="mt-3 max-w-[600px] text-[16px] font-medium md:mt-5 lg:text-[18px]">
                  We list all of the ingredients used in Dr. Idriss products by
                  their common names, which is how Dr. Shereene Idriss usually
                  refers to them in conversation. We also list the INCI
                  (International Nomenclature of Cosmetic Ingredients) name in
                  parenthesis if it differs from the common name.
               </h5>
            </div>
         </section>

         <section className="mt-5">
            <IngredientGlossaryFilter />
         </section>
      </main>
   )
}

export default page
