import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   publicRoutes: [
      "/api/reviewsVerified",
      "/api/productsFilter",
      "/api/reviewsFilter",
      "/api/uploadthing",
      "/blogs/news/(.*)",
      "/products/(.*)",
      "/api/products",
      "/api/reviews",
      "/api/dislike",
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
