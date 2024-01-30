import { prisma } from "@/lib/prisma"
import Card from "./components/card/Card"
import { ProductType } from "@/types"
import Results from "./components/Results"
import Tips from "./components/tips/Tips"
import Description from "./components/description/Description"
import Comments from "./components/comments/Comments"
import Form from "./components/comments/components/review/components/reviewForm/components/form/Form"
import ViewPortMotionDiv from "@/motion/ViewPortMotionDiv"
import CardMotion from "./components/cardMotion/CardMotion"

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
               <Form />
               <ViewPortMotionDiv>
                  <Card product={products[0]} />
               </ViewPortMotionDiv>

               {products[0].productDescription.length > 0 && (
                  <ViewPortMotionDiv>
                     <div className="mt-5 lg:mt-10">
                        <Results />
                     </div>
                  </ViewPortMotionDiv>
               )}

               {products[0].tips.length > 0 && (
                  <ViewPortMotionDiv>
                     <div className="mt-5 lg:mt-10">
                        <Tips tips={products[0].tips} />
                     </div>
                  </ViewPortMotionDiv>
               )}

               {products[0].productDescription.length > 0 && (
                  <ViewPortMotionDiv>
                     <div className="mt-5 lg:mt-10">
                        <Description
                           description={products[0].productDescription}
                           title={products[0].title}
                           pair={products[0].pair}
                        />
                     </div>
                  </ViewPortMotionDiv>
               )}

               <ViewPortMotionDiv>
                  <div className="mt-5 lg:mt-10">
                     <Comments product={products[0]} />
                  </div>
               </ViewPortMotionDiv>
            </>
         )}
         <CardMotion product={products[0]} />
      </>
   )
}

export default Product
