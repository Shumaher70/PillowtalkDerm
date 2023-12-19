import { prisma } from "@/lib/prisma"
import Card from "./components/card/Card"
import { ProductType } from "@/types"
import Results from "./components/Results"
import Tips from "./components/tips/Tips"
import Description from "./components/description/Description"

const Product = async ({ params }: { params: { title: string } }) => {
   const { title } = params

   const updateTitleQuery = title
      .split("")
      .map((item) => item.replace("-", " "))
      .join("")
      .toLowerCase()
      .split(" ")
      .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
      .join(" ")

   const products: ProductType[] = await prisma.product.findMany({
      where: {
         title: updateTitleQuery,
      },
      include: {
         reviews: true,
         carts: true,
         productDescription: true,
      },
   })

   return (
      <>
         {products.length > 0 && (
            <>
               <Card product={products[0]} />
               <div className="mt-5 lg:mt-10">
                  <Results />
               </div>
               <div className="mt-5 lg:mt-10">
                  <Tips tips={products[0].tips} />
               </div>
               <div className="mt-5 lg:mt-10">
                  <Description
                     description={products[0].productDescription}
                     title={products[0].title}
                     pair={products[0].pair}
                  />
               </div>
            </>
         )}
      </>
   )
}

export default Product
