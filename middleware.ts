import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   publicRoutes: [
      "/api/reviewsVerified",
      "/api/uploadthing",
      "/products/(.*)",
      "/api/products",
      "/api/reviews",
      "/api/dislike",
      "/api/blog",
      "/api/cart",
      "/api/user",
      "/api/like",
      "/",
   ],
})

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
