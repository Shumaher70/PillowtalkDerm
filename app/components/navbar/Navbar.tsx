import Burger from "./components/burger/Burger"
import SearchMobile from "./components/search/SearchMobile"
import Cart from "./components/cart/Cart"
import Info from "./components/info/Info"
import Login from "./components/login/Login"
import Logo from "./components/Logo"

import LoginMenu from "../LoginMenu"
import Overflow from "../Overflow"
import SlideInfo from "../slideInfo/SlideInfo"
import CommentImage from "../commentImage/CommentImage"
import DesktopButtonSearch from "./components/search/components/DesktopButtonSearch"
import { prisma } from "@/lib/prisma"
import { BlogType, ProductType } from "@/types"
import { currentUser } from "@clerk/nextjs"
import { User } from "@clerk/nextjs/server"

const Navbar = async () => {
   const user: User | null = await currentUser()

   const blogs: BlogType[] = await prisma.blog.findMany()

   const products: ProductType[] = await prisma.product.findMany({
      take: 6,
      include: {
         reviews: true,
         carts: true,
         productDescription: true,
      },
   })

   return (
      <>
         <Overflow />
         <CommentImage />
         <SlideInfo products={products} blogs={blogs} />
         <LoginMenu />
         {
            <header className="container-px container-rounded-b bg-accent fixed top-0 z-20 w-full overflow-hidden py-[8px] md:!px-[40px]">
               <nav className="flex-between flex w-full md:h-[72px]">
                  <div className="flex w-full justify-start gap-3">
                     <Info className="hidden lg:flex" />
                     <>
                        <Burger
                           className="lg:hidden"
                           products={products}
                           blogs={blogs}
                        />
                        <div className="lg:hidden">
                           <SearchMobile />
                        </div>
                     </>
                  </div>

                  <div className="flex-center flex w-full">
                     <Logo />
                  </div>

                  <div className="flex w-full items-center justify-end gap-3">
                     <DesktopButtonSearch />
                     <Login userImage={user?.imageUrl} userId={user?.id} />
                     <Cart products={products} userId={user?.id} />
                  </div>
               </nav>
            </header>
         }
      </>
   )
}

export default Navbar
