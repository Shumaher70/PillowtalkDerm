import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   publicRoutes: [
      "/",
      "/api/blog",
      "/api/cart",
      "/api/products",
      "/api/reviews",
      "/api/user",
      "/products/(.*)",
   ],
})

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
