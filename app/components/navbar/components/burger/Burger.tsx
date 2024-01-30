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
   products: ProductType[]
   blogs: BlogType[]
}

const Burger = ({ className, products, blogs }: BurgerProps) => {
   const dispatch = useAppDispatch()
   const sidebarSlice = useAppSelector((state) => state.sidebarReducer)

   const [shop, setShop] = useState(true)
   const [blog, setBlog] = useState(false)
   const [load, setLoad] = useState(false)

   const productsMemo = useMemo(() => {
      return products
   }, [products])

   const blogsMemo = useMemo(() => {
      return blogs
   }, [blogs])

   useEffect(() => {
      const loadHandler = () => {
         if (window.innerWidth < 1024) {
            setLoad(true)
         } else {
            setLoad(false)
         }
      }
      loadHandler()
      window.addEventListener("resize", loadHandler)
      return () => window.removeEventListener("resize", loadHandler)
   }, [])

   const shopHandler = () => {
      setShop(true)
      setBlog(false)
   }
   const blogHandler = () => {
      setBlog(true)
      setShop(false)
   }
   if (blogsMemo && productsMemo)
      return (
         <>
            {load && (
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
                              shopHandler={shopHandler}
                              blogHandler={blogHandler}
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
                              {productsMemo.slice(0, 5).map((product) => (
                                 <Card
                                    product={product}
                                    key={product.id}
                                    className="bg-white !p-[16px]"
                                 />
                              ))}
                              <div className="flex-center flex h-full w-full">
                                 <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-pink-400 to-pink-600 uppercase"
                                    text="shop all"
                                    load={false}
                                 />
                              </div>
                           </>
                        )}

                        {blog && (
                           <>
                              {blogsMemo
                                 .slice(3)
                                 .map(({ id, images, title, tags }) => {
                                    return (
                                       <BlogCard
                                          extra={"Read me"}
                                          key={id}
                                          id={id}
                                          images={images}
                                          title={title}
                                       />
                                    )
                                 })}

                              <div className="flex-center flex h-full w-full">
                                 <div>
                                    <Button
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
            )}
            <div onClick={() => dispatch(sidebarBurger(true))}>
               <RxHamburgerMenu
                  className={`cursor-pointer text-[30px] ${className}`}
               />
            </div>
         </>
      )
}

export default Burger
