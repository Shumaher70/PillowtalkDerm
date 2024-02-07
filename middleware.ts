import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   publicRoutes: [
      "/blogs/news/tagged/(.*)",
      "/api/reviewsVerified",
      "/api/productsFilter",
      "/api/reviewsFilter",
      "/api/uploadthing",
      "/blogs/news/(.*)",
      "/products/(.*)",
      "/api/products",
      "/api/reviews",
      "/api/dislike",
      "/blogs/news",
      "/api/blog",
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
