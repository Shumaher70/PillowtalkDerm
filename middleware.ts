import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   publicRoutes: [
      "/api/reviewsVerified",
      "/api/uploadthing",
      "/products/(.*)",
      "/api/products",
      "/api/reviews",
      "/api/blog",
      "/api/cart",
      "/api/user",
      "/",
   ],
})

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
