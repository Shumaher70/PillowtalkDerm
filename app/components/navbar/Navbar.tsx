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
import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const handleProductsGet = async () => {
   const products: ProductType[] = await axios
      .get("http://localhost:3000/api/products")
      .then((response) => response.data)

   return products
}

const handleBlogsGet = async () => {
   const blogs: BlogType[] = await axios
      .get("/api/blog")
      .then((response) => response.data)
   return blogs
}

const Navbar = () => {
   const dispatch = useDispatch()
   const [navbarTrigger, setNavbarTrigger] = useState<boolean>(false)

   const { data: blogs } = useQuery({
      queryKey: ["getBlogs"],
      queryFn: handleBlogsGet,
   })

   const { data: products } = useQuery({
      queryKey: ["getProducts"],
      queryFn: handleProductsGet,
   })

   useEffect(() => {
      const widthHandler = () => {
         if (window.innerWidth >= 1024) {
            dispatch(sidebarBurger(false))
            dispatch(sidebarSearch(false))
            setNavbarTrigger(true)
         } else {
            setNavbarTrigger(false)
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
         {navbarTrigger && <SlideInfo products={products} blogs={blogs} />}
         <LoginMenu />
         {
            <motion.header
               onMouseLeave={() => {
                  dispatch(slideShop(false))
                  dispatch(slideSkinNerdAcademy(false))
               }}
               className="container-px container-rounded-b bg-accent fixed top-0 z-20 w-full overflow-hidden py-[8px] md:!px-[40px]"
            >
               <nav className="flex-between flex w-full md:h-[72px]">
                  <div className="flex w-full justify-start gap-3">
                     <Info className="hidden lg:flex" />
                     {!navbarTrigger && (
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
                     )}
                  </div>

                  <div className="flex-center flex w-full">
                     <Logo />
                  </div>

                  <div className="flex w-full items-center justify-end gap-3">
                     <CiSearch
                        className="hidden cursor-pointer text-[30px] lg:block"
                        onClick={() => {
                           dispatch(slideSearch(true))
                           dispatch(slideShop(false))
                           dispatch(slideSkinNerdAcademy(false))
                        }}
                     />

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
