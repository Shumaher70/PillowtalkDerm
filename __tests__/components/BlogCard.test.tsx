import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"

import { configureStore } from "@reduxjs/toolkit"
import cartReducer, { addCart } from "@/redux/features/cartSlice"

import mockRouter from "next-router-mock"
import BlogCard from "@/app/components/blogCard/BlogCard"

import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider"

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"))

describe("BlogCard component", () => {
   it("should render", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <BlogCard id={"i"} images={["/image"]} title={"test"} />
         </Provider>
      )

      const rootDiv = screen.getByTestId("root")

      expect(rootDiv).toBeInTheDocument()
   })

   it("should render tags", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <BlogCard
               id={"i"}
               images={["/image"]}
               title={"test"}
               tags={["1", "2", "3"]}
            />
         </Provider>
      )

      const tags = screen.getByTestId("tags")

      expect(tags).toBeInTheDocument()
   })

   it("if the blog exists when clicked, the blog should go to the blog page", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <BlogCard
               id={"i"}
               images={["/image"]}
               title={"test"}
               tags={["1", "2", "3"]}
            />
         </Provider>,
         { wrapper: MemoryRouterProvider }
      )

      const link = screen.getByTestId("link")

      fireEvent.click(link)

      expect(mockRouter.asPath).toEqual("/blogs/news/test")
   })

   it("validation of link 'input:TeSt qUery Link'-'output:test-query-link", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <BlogCard
               id={"i"}
               images={["/image"]}
               title={"TeSt qUery Link"}
               tags={["1", "2", "3"]}
            />
         </Provider>,
         { wrapper: MemoryRouterProvider }
      )

      const link = screen.getByTestId("link")

      fireEvent.click(link)

      expect(mockRouter.asPath).toEqual("/blogs/news/test-query-link")
   })
})
