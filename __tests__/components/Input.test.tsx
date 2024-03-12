import { fireEvent, render, screen } from "@testing-library/react"

import Input from "@/app/components/navbar/components/search/components/Input"

describe("Input component", () => {
   it("should render", () => {
      render(<Input cleanInput={() => {}} />)
   })

   it("should render outline if focus", () => {
      render(<Input cleanInput={() => {}} />)

      const input = screen.getByTestId("input")

      fireEvent.focus(input)

      const outline = screen.getByTestId("outline")

      expect(outline).toBeInTheDocument()
   })

   it("should render cleanup", () => {
      render(<Input cleanInput={() => {}} />)

      const input = screen.getByTestId("input")

      fireEvent.change(input, { target: { value: "123" } })

      const cleanup = screen.getByTestId("cleanup")

      expect(cleanup).toBeInTheDocument()
   })

   it("input value", () => {
      render(<Input cleanInput={() => {}} postInput="123" />)

      const input = screen.getByTestId("input") as HTMLInputElement

      expect(input.value).toBe("123")
   })

   it("cleanup function", () => {
      const mockCleanup = jest.fn()

      render(<Input cleanInput={mockCleanup} postInput="123" />)

      const input = screen.getByTestId("input") as HTMLInputElement

      expect(input.value).toBe("123")

      const cleanup = screen.getByTestId("cleanup")

      fireEvent.click(cleanup)

      expect(mockCleanup).toHaveBeenCalled()
   })
})
