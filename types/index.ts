import { Cart, ProductDescription, Review } from "@prisma/client"

export type CartType = {
   id: string
   title: string
   image: string
   price: number
   reviews: Review[]
   totalPrice: number
   quantity: number
   soldOut: boolean
   sold: number
   pair: string[]
}

export type ProductType = {
   id: string
   images: string[]
   title: string
   subTitle: string | null
   price: number
   discount?: number | null
   different: string | null
   howToUse: string | null
   awards: string | null
   pair: string[]
   options?: number | null
   soldOut: boolean
   createdAt: Date
   updatedAt: Date
   video: string | null
   refills?: string | null
   reviews: Review[]
   carts: Cart[]
   productDescription: ProductDescription[]
   sold: number
   steps: string | null
   tips: string[]
}

export type BlogType = {
   id: string
   images: string[]
   title: string
   tags: string[]
}
