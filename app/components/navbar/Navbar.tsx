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

const Navbar = () => {
   const dispatch = useDispatch()
   const [products, setProducts] = useState<ProductType[]>([])
   const [blogs, setBlogs] = useState<BlogType[]>([])

   const getProduct = async () => {
      const products = await fetch("http://localhost:3000/api/products")
      if (products.ok) {
         const data = await products.json()
         return setProducts(data)
      }
      throw new Error("blogs data did not respond")
   }

   const getBlog = async () => {
      const blogs = await fetch("http://localhost:3000/api/blog")
      if (blogs.ok) {
         const data = await blogs.json()
         return setBlogs(data)
      }
      throw new Error("blogs data did not respond")
   }

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
   }, [dispatch])

   useEffect(() => {
      getProduct()
      getBlog()
   }, [])
   return (
      <>
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
                     <SearchMobile
                        className="block lg:hidden"
                        products={products}
                        blogs={blogs}
                     />
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
                     <Cart />
                  </div>
               </nav>
            </motion.header>
         }
      </>
   )
}

export default Navbar
