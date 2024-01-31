"use client"

import { motion } from "framer-motion"

import { useDispatch } from "react-redux"

import Burger from "./components/burger/Burger"
import SearchMobile from "./components/search/SearchMobile"
import Cart from "./components/cart/Cart"
import Info from "./components/info/Info"
import Login from "./components/login/Login"
import Logo from "./components/Logo"

import {
   sidebarBurger,
   sidebarSearch,
   slideSearch,
   slideShop,
   slideSkinNerdAcademy,
} from "@/redux/features/sidebarSlice"

import { CiSearch } from "react-icons/ci"
import { useEffect, useState } from "react"
import { BlogType, ProductType } from "@/types"
import LoginMenu from "../LoginMenu"
import Overflow from "../Overflow"
import SlideInfo from "../slideInfo/SlideInfo"
import CommentImage from "../commentImage/CommentImage"

const Navbar = () => {
   const dispatch = useDispatch()
   const [products, setProducts] = useState<ProductType[]>([])
   const [blogs, setBlogs] = useState<BlogType[]>([])

   useEffect(() => {
      let subscribe = true
      const fetchData = async () => {
         try {
            const [productsRes, blogsRes] = await Promise.all([
               fetch("/api/products"),
               fetch("/api/blog"),
            ])

            if (productsRes.ok) {
               const productsData = await productsRes.json()
               setProducts(productsData)
            }

            if (blogsRes.ok) {
               const blogsData = await blogsRes.json()
               setBlogs(blogsData)
            }
         } catch (error) {
            console.error("Error fetching data:", error)
         }
      }

      if (subscribe) {
         fetchData()
      }
      return () => {
         subscribe = false
      }
   }, [])

   useEffect(() => {
      const widthHandler = () => {
         if (window.innerWidth >= 1024) {
            dispatch(sidebarBurger(false))
            dispatch(sidebarSearch(false))
         }
      }
      widthHandler()
      window.addEventListener("resize", widthHandler)

      return () => window.removeEventListener("resize", widthHandler)
   }, [])

   return (
      <>
         <Overflow />
         <CommentImage />
         <SlideInfo products={products} blogs={blogs} />
         <LoginMenu />
         {
            <motion.header
               onMouseLeave={() => {
                  dispatch(slideShop(false))
                  dispatch(slideSkinNerdAcademy(false))
               }}
               className={`
               container-px
               container-rounded-b
               bg-accent
               fixed
               top-0 
               z-10
               w-full
               overflow-hidden 
               py-[8px]
               md:!px-[40px]
               `}
            >
               <nav className="flex-between flex w-full md:h-[72px]">
                  <div className="flex w-full justify-start gap-3">
                     <Info className="hidden lg:flex" />
                     <Burger
                        className="lg:hidden"
                        products={products}
                        blogs={blogs}
                     />
                     <SearchMobile className="block lg:hidden" />
                  </div>

                  <div className="flex-center flex w-full">
                     <Logo />
                  </div>

                  <div className="flex w-full items-center justify-end gap-3">
                     <div className="hidden lg:block">
                        <CiSearch
                           className={`cursor-pointer text-[30px] `}
                           onClick={() => {
                              dispatch(slideSearch(true))
                              dispatch(slideShop(false))
                              dispatch(slideSkinNerdAcademy(false))
                           }}
                        />
                     </div>
                     <Login />
                     <Cart products={products} />
                  </div>
               </nav>
            </motion.header>
         }
      </>
   )
}

export default Navbar
