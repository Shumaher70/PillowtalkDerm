import CartInCarousel from "@/app/components/navbar/components/cart/components/carouselCart/CartInCarousel"
import { prisma } from "@/lib/prisma"
import { ProductType } from "@/types"

const Pair = async ({ pair }: { pair: string[] }) => {
   const product: ProductType[] = await prisma.product.findMany({
      include: {
         reviews: true,
         carts: true,
      },
   })
   let pairArr: ProductType[] = []

   product.forEach((product) =>
      pair.forEach((pair) => {
         if (
            pair
               .split("")
               .map((chart) => chart.replace(" ", "-").toLowerCase())
               .join("") ===
            product.title
               .split("")
               .map((chart) => chart.replace(" ", "-").toLowerCase())
               .join("")
         ) {
            pairArr.push(product)
         }
      })
   )

   if (product)
      return (
         <div className="box-p bg-secondary container-rounded flex w-full flex-col gap-3">
            {pairArr.map((pair) => (
               <CartInCarousel
                  key={pair.id}
                  image={pair.images[0]}
                  title={pair.title}
                  reviews={pair.reviews}
                  soldOut={pair.soldOut}
                  stars
                  readme="More details"
                  button
                  price={pair.price}
                  pair={pair.pair}
                  sold={pair.sold}
                  id={pair.id}
               />
            ))}
         </div>
      )
}

export default Pair
