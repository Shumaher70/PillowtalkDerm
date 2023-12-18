import { ProductType } from "@/types"

import Awards from "./components/Awards"
import HowToUse from "./components/HowToUse"
import Different from "./components/Different"
import Refills from "./components/Refills"

const CardAccordion = ({ product }: { product: ProductType }) => {
   const different = product.different ?? ""
   const howToUse = product.howToUse ?? ""
   const refills = product.refills ?? ""
   const awards = product.awards ?? ""

   return (
      <div className="box-p bg-secondary container-rounded flex w-full flex-col">
         {different.length > 0 && <Different different={different} />}
         {howToUse.length > 0 && <HowToUse howToUse={howToUse} />}
         {refills.length > 0 && <Refills refills={refills} />}
         {awards.length > 0 && <Awards awards={awards} />}
      </div>
   )
}

export default CardAccordion
