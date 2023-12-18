import { prisma } from "@/lib/prisma"
import Card from "./components/card/Card"
import { ProductType } from "@/types"

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
      },
   })

   return (
      <>
         {products.length > 0 && (
            <>
               <Card product={products[0]} />
            </>
         )}
      </>
   )
}

export default Product
