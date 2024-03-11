import { render, fireEvent, screen } from "@testing-library/react"
import { Provider } from "react-redux"

import CheckOut from "@/app/components/navbar/components/cart/components/checkOut/CheckOut"
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "@/redux/features/cartSlice"

import mockRouter from "next-router-mock"

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"))

jest.mock("axios")
jest.mock("@stripe/stripe-js", () => ({
   loadStripe: jest.fn(),
}))

describe("CheckOut component", () => {
   it("should navigate to sign-in page if userId is undefined", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { cartReducer },
            })}
         >
            <CheckOut totalPrice={100} userId={undefined} />
         </Provider>
      )

      const checkoutButton = screen.getByRole("button")
      fireEvent.click(checkoutButton)

      expect(mockRouter).toMatchObject({
         pathname: "/sign-in",
      })
   })
})
