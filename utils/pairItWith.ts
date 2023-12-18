import { CartType, ProductType } from "@/types"

const pairItWith = (carts: CartType[], products: ProductType[]) => {
   const pairs = carts.map((item) => item.pair).flatMap((pair) => pair)

   let pairItWithArr: ProductType[] = []

   const sortPair = Array.from(new Set(pairs.map((obj) => obj)))

   for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < sortPair.length; j++) {
         if (products[i].title === sortPair[j]) {
            pairItWithArr.push(products[i])
         }
      }
   }

   pairItWithArr = pairItWithArr.filter(
      (obj) => !carts.some((item) => item.title.includes(obj.title))
   )

   return pairItWithArr
}

export default pairItWith
