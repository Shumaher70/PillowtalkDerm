import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"

import { configureStore } from "@reduxjs/toolkit"
import cartReducer, { addCart } from "@/redux/features/cartSlice"

import Card from "@/app/components/card/Card"

import mockRouter from "next-router-mock"

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"))

describe("Card component", () => {
   it("should render", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <Card
               product={{
                  id: "",
                  images: [],
                  title: "",
                  price: 0,
                  reviews: [],
                  soldOut: undefined,
                  sold: 0,
                  pair: [],
               }}
               btn
               win
               extra="red me"
               stars
               rating
            />
         </Provider>
      )

      const rootDiv = screen.getByTestId("root")
      const win = screen.getByTestId("win")
      const extra = screen.getByTestId("extra")
      const stars = screen.getByTestId("stars")
      const rating = screen.getByTestId("rating")

      expect(rootDiv).toBeInTheDocument()
      expect(win).toBeInTheDocument()
      expect(extra).toBeInTheDocument()
      expect(stars).toBeInTheDocument()
      expect(rating).toBeInTheDocument()
   })

   it("if the product exists when clicked, the card should go to the product page", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <Card
               product={{
                  id: "1",
                  images: ["/img"],
                  title: "title",
                  price: 10,
                  reviews: [],
                  soldOut: undefined,
                  sold: 1,
                  pair: [],
               }}
            />
         </Provider>
      )

      const rootDiv = screen.getByTestId("root")

      fireEvent.click(rootDiv)

      expect(mockRouter).toMatchObject({
         pathname: "/products/title",
      })
   })
})
