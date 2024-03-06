import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   publicRoutes: [
      "/blogs/news/ingredients-glossary",
      "/blogs/news/tagged/(.*)",
      "/pages/(.*)",
      "/api/reviewsVerified",
      "/api/productsFilter",
      "/api/reviewsFilter",
      "/api/uploadthing",
      "/blogs/news/(.*)",
      "/products/(.*)",
      "/api/products",
      "/api/checkout",
      "/api/reviews",
      "/api/dislike",
      "/blogs/news",
      "/our-story",
      "/api/blog",
      "/api/order",
      "/api/cart",
      "/api/user",
      "/api/like",
      "/shop",
      "/",
   ],
})

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
