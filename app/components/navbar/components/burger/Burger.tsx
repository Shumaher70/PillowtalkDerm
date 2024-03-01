"use client"
import { useEffect, useMemo, useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

import Sidebar from "../../Sidebar"
import ButtonGroup from "./components/ButtonGroup"
import Card from "../../../card/Card"
import Button from "../../../button/Button"
import BlogCard from "@/app/components/blogCard/BlogCard"
import { BlogType, ProductType } from "@/types"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { sidebarBurger } from "@/redux/features/sidebarSlice"

interface BurgerProps {
   className?: string
   products: ProductType[] | undefined
   blogs: BlogType[] | undefined
}

const Burger = ({ className, products, blogs }: BurgerProps) => {
   const dispatch = useAppDispatch()
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)

   const [shop, setShop] = useState(true)
   const [blog, setBlog] = useState(false)
   const [about, setAbout] = useState(false)

   const productsMemo = useMemo(() => {
      return products
   }, [products])

   const blogsMemo = useMemo(() => {
      return blogs
   }, [blogs])

   const shopHandler = () => {
      setShop(true)
      setBlog(false)
      setAbout(false)
   }
   const blogHandler = () => {
      setBlog(true)
      setShop(false)
      setAbout(false)
   }
   const aboutHandler = () => {
      setBlog(false)
      setShop(false)
      setAbout(true)
   }

   return (
      <>
         <div>
            <Sidebar triggerSidebar={sidebarSlice.sidebarBurger}>
               <div
                  className="
               flex 
               w-full 
               items-center 
               justify-between 
               p-[16px]
               "
               >
                  <div className="z-10 flex flex-wrap gap-3">
                     <ButtonGroup
                        shop={shop}
                        blog={blog}
                        about={about}
                        shopHandler={shopHandler}
                        blogHandler={blogHandler}
                        aboutHandler={aboutHandler}
                     />
                  </div>

                  <div className="flex h-full">
                     <AiOutlineClose
                        onClick={() => dispatch(sidebarBurger(false))}
                        className="h-[15px] w-[15px] cursor-pointer"
                     />
                  </div>
               </div>
               <div
                  className="
               grid 
               w-full 
               grid-cols-2 
               gap-4 
               overflow-auto 
               px-[16px] 
               pb-[16px] 
               pt-0
               md:grid-cols-3
               "
               >
                  {shop && (
                     <>
                        {productsMemo?.slice(0, 5).map((product) => (
                           <div
                              key={product.id}
                              onClick={() => {
                                 dispatch(sidebarBurger(false))
                              }}
                           >
                              <Card
                                 product={product}
                                 className="bg-white !p-[16px]"
                              />
                           </div>
                        ))}
                        <div className="flex-center flex h-full w-full">
                           <Button
                              size="lg"
                              className="bg-gradient-to-r from-pink-400 to-pink-600 uppercase"
                              text="shop all"
                              load={false}
                              href="/shop"
                           />
                        </div>
                     </>
                  )}

                  {blog && (
                     <>
                        {blogsMemo?.slice(3).map(({ id, images, title }) => {
                           return (
                              <div
                                 key={id}
                                 onClick={() => {
                                    dispatch(sidebarBurger(false))
                                 }}
                              >
                                 <BlogCard
                                    extra={"Read me"}
                                    id={id}
                                    images={images}
                                    title={title}
                                 />
                              </div>
                           )
                        })}

                        <div className="flex-center flex h-full w-full">
                           <div>
                              <Button
                                 href="/blogs/news"
                                 size="sm"
                                 text="view all"
                                 className="bg-gradient-to-r from-pink-400 to-pink-600 uppercase"
                                 load={false}
                              />
                           </div>
                        </div>
                     </>
                  )}
               </div>
            </Sidebar>
         </div>

         <div onClick={() => dispatch(sidebarBurger(true))}>
            <RxHamburgerMenu
               className={`cursor-pointer text-[30px] ${className}`}
            />
         </div>
      </>
   )
}

export default Burger
