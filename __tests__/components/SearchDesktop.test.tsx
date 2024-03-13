import SearchDesktop from "@/app/components/navbar/components/search/SearchDesktop"
import ReactQueryProvider from "@/reactQueryProvider/ReactQueryProvider"
import sidebarSlice from "@/redux/features/sidebarSlice"
import { configureStore } from "@reduxjs/toolkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
   cleanup,
   fireEvent,
   render,
   screen,
   waitFor,
} from "@testing-library/react"
import axios from "axios"
import { Provider } from "react-redux"

const queryClient = new QueryClient()

jest.mock("axios")

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"))

describe("SearchDesktop", () => {
   beforeEach(() => {
      jest
         .spyOn(axios, "get")
         .mockResolvedValueOnce({ data: { products: [], blogs: [] } })
   })

   it("render SearchDesktop", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { sidebarSlice },
            })}
         >
            <ReactQueryProvider>
               <SearchDesktop />
            </ReactQueryProvider>
         </Provider>
      )
   })

   it("handles input change", () => {
      render(
         <Provider
            store={configureStore({
               reducer: { sidebarSlice },
            })}
         >
            <ReactQueryProvider>
               <SearchDesktop />
            </ReactQueryProvider>
         </Provider>
      )

      const input = screen.getByPlaceholderText("Search") as HTMLInputElement

      fireEvent.change(input, {
         target: {
            value: "test input",
         },
      })

      expect(input.value).toBe("test input")
   })

   it("displays search results 'TEXT' when data is fetched successfully from < 1 products", async () => {
      const testData = {
         products: [
            {
               id: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
               images: [
                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-1.webp",
                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-2.webp",

                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-3.webp",

                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-4.webp",

                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-5.webp",
               ],
               title: "Major Fade Discoloration Duo",
               subTitle:
                  "Daily Powerhouse Duo That Work Together for All Types of Discoloration.",
               price: 126,
               discount: null,
               pair: ["Major Fade Solution System", "The Depuffer"],
               options: null,
               soldOut: false,
               createdAt: "2023-12-13T11:18:48.716Z",
               updatedAt: "2023-12-18T15:38:14.910Z",
               video: null,
               refills: null,
               sold: 5,
               different:
                  "      <p>Let’s get even. A synergistic mask, serum, and moisturizer trio that work together to help fade discoloration. Includes the Major Fade Flash Mask to exfoliate and buff skin; the Major Fade Hyper Serum to instantly illuminate; and the Major Fade Active Seal to brighten and hydrate.  Suitable for all skin types and tones. Clinically tested, dermatologist tested, fragrance-free, and non-irritating.</p>          <br />          <p>Suitable for all skin types and tones. Clinically tested, dermatologist tested, fragrance-free, and non-irritating.  </p>",
               howToUse:
                  "<li>             Apply Depuffer anytime to clean dry skin on its own or before other             skincare products.          </li>          <li>             Apply Major Fade Active Seal twice daily, morning and night, after             serum. Press down to dispense (1 - 2 pumps per application). Always             apply sunscreen (SPF 30+) as the last step in your morning skincare             routine.          </li>",
               awards: null,
               steps: null,
               tips: [
                  "Major Fade Active Seal is not your average moisturizer! If you use it, you do not need a separate antioxidant or vitamin C serum.",
                  "Major Fade Hyper Serum comes with two cartridges to ensure freshness of active ingredients.",
               ],
               reviews: [
                  {
                     id: "b5ba1d83-913b-485d-be2c-7f79f3803b4c",
                     rating: 5,
                     title: "PILLOWTALK DERM ADDICTION",
                     comment:
                        "I have been using another product for the past 10 years but decided to switch things up after watching her videos & WOW!! I absolutely love everything I have tried and I now have an entirely new skin care routine!",
                     images: [
                        "https://utfs.io/f/91ffd911-c3fb-4662-b977-affb121dbf1b-fwapl0.jpg",
                     ],
                     imagesKey: [
                        "91ffd911-c3fb-4662-b977-affb121dbf1b-fwapl0.jpg",
                     ],
                     name: "Jennifer",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T14:23:58.247Z",
                     updatedAt: "2024-03-06T14:24:17.509Z",
                     like: 1,
                     dislike: 0,
                     email: "Jennifer@mail.com",
                     verified: false,
                  },
                  {
                     id: "8669eb20-9a34-48d3-9c0f-76767bc4d05c",
                     rating: 2,
                     title: "REALLY WANTED TO LOVE…",
                     comment:
                        "Really wanted to love this as I wanted to reduce redness and fade dark spots, but it actually made my skin extremely red every time I used it. I was first using the duo morning and night as recommended, but because my skin turned red and burned slightly every time I used it, I lowered my usage to once a day for a few weeks, and then lowered to alternating days to see if that would help my skin adjust, but I had the same reaction every time I used it. I even stuck with it for the recommended 6-8",
                     images: [],
                     imagesKey: [],
                     name: "Michelle",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T14:14:11.063Z",
                     updatedAt: "2024-03-06T14:24:38.589Z",
                     like: 0,
                     dislike: 1,
                     email: "Michelle@gmail.com",
                     verified: false,
                  },
                  {
                     id: "fb718be2-4434-4120-a44c-5486ea6eaa44",
                     rating: 3,
                     title: "LOVE THE PRODUCT JUST NOT THE CARTRIDGE SYSTEM.",
                     comment:
                        "Ip love the products, but I really don’t like the cartridge system for the Hyper Serum. It’s my second time purchasing and I don’t think I will again because I keep missing my mark when dispensing the serum. I have squirted too much on my shirt or the counter or the floor…:( I love the Active Seal Moisturizer and its  press bottle so I  may continue using this one. It’s a lovely (easy to use) way to include vitamin C. Thank you so much for sharing your wisdom and the products are wonderful. If I",
                     images: [],
                     imagesKey: [],
                     name: "Heather",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T14:13:11.869Z",
                     updatedAt: "2024-03-06T14:24:39.969Z",
                     like: 0,
                     dislike: 1,
                     email: "Heather@gmail.com",
                     verified: false,
                  },
                  {
                     id: "b550b2e5-6f8a-48c2-97db-e2d1aef5a5be",
                     rating: 5,
                     title: "Love these products!",
                     comment:
                        "GREAT PRODUCTS AND FORMULAS, LIGHTWEIGHT AND PACK A PUNCH",
                     images: [],
                     imagesKey: [],
                     name: "Doreen",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T13:44:43.937Z",
                     updatedAt: "2024-03-06T13:46:34.877Z",
                     like: 1,
                     dislike: 0,
                     email: "doreen@google.com",
                     verified: false,
                  },
                  {
                     id: "93a5bee3-1d3e-4ea7-862a-f5c6d2eb459d",
                     rating: 4,
                     title: "Feels nice on the skin but I haven’t seen a ton of improvement after using it for almost a year now.",
                     comment: "FEELS GREAT!",
                     images: [],
                     imagesKey: [],
                     name: "Nadia",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T13:50:43.402Z",
                     updatedAt: "2024-03-06T14:12:11.226Z",
                     like: 1,
                     dislike: 0,
                     email: "Nadia@gmail.com",
                     verified: false,
                  },
               ],
               carts: [],
               productDescription: [
                  {
                     id: "425ba2b8-7396-4a39-8a3b-a9120d665731",
                     image: "/imagesDescription/major-fade-discoloration-duo/major-fade-discoloration-duo-1.webp",
                     title: [
                        "Arnica",
                        "Centella Asiatica",
                        "Niacinamide",
                        "Ash Bark Extract",
                     ],
                     discription: [
                        "Helps reduce the look of swelling",
                        "Relieves visible facial redness",
                        "Soothes and restores skin’s moisture barrier",
                        "Depuffs",
                     ],
                     createdAt: "2023-12-19T15:18:47.767Z",
                     updatedAt: "2023-12-19T14:59:31.218Z",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                  },
               ],
            },
         ],
         blogs: [{ id: "1" }],
      }

      render(
         <Provider
            store={configureStore({
               reducer: { sidebarSlice },
            })}
         >
            <QueryClientProvider client={queryClient}>
               <SearchDesktop />
            </QueryClientProvider>
         </Provider>
      )

      jest.spyOn(axios, "get").mockResolvedValueOnce({ data: testData })

      // (axios as jest.Mocked<typeof axios>).get.mockImplementation(() =>
      //    Promise.resolve({
      //       data: testData,
      //    })
      // )

      const input = screen.getByPlaceholderText("Search") as HTMLInputElement

      fireEvent.change(input, {
         target: {
            value: "major fade discoloration duo",
         },
      })

      await waitFor(() => {
         const text = screen.getByText(
            '2 results "major fade discoloration duo"'
         )

         expect(text).toBeInTheDocument()
      })
   })

   it("displays search results 'TEXT' when data is fetched successfully === 1 product", async () => {
      const testData = {
         products: [
            {
               id: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
               images: [
                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-1.webp",
                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-2.webp",

                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-3.webp",

                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-4.webp",

                  "/imagesProducts/major-fade-discoloration-duo/major-fade-discoloration-duo-5.webp",
               ],
               title: "Major Fade Discoloration Duo",
               subTitle:
                  "Daily Powerhouse Duo That Work Together for All Types of Discoloration.",
               price: 126,
               discount: null,
               pair: ["Major Fade Solution System", "The Depuffer"],
               options: null,
               soldOut: false,
               createdAt: "2023-12-13T11:18:48.716Z",
               updatedAt: "2023-12-18T15:38:14.910Z",
               video: null,
               refills: null,
               sold: 5,
               different:
                  "      <p>Let’s get even. A synergistic mask, serum, and moisturizer trio that work together to help fade discoloration. Includes the Major Fade Flash Mask to exfoliate and buff skin; the Major Fade Hyper Serum to instantly illuminate; and the Major Fade Active Seal to brighten and hydrate.  Suitable for all skin types and tones. Clinically tested, dermatologist tested, fragrance-free, and non-irritating.</p>          <br />          <p>Suitable for all skin types and tones. Clinically tested, dermatologist tested, fragrance-free, and non-irritating.  </p>",
               howToUse:
                  "<li>             Apply Depuffer anytime to clean dry skin on its own or before other             skincare products.          </li>          <li>             Apply Major Fade Active Seal twice daily, morning and night, after             serum. Press down to dispense (1 - 2 pumps per application). Always             apply sunscreen (SPF 30+) as the last step in your morning skincare             routine.          </li>",
               awards: null,
               steps: null,
               tips: [
                  "Major Fade Active Seal is not your average moisturizer! If you use it, you do not need a separate antioxidant or vitamin C serum.",
                  "Major Fade Hyper Serum comes with two cartridges to ensure freshness of active ingredients.",
               ],
               reviews: [
                  {
                     id: "b5ba1d83-913b-485d-be2c-7f79f3803b4c",
                     rating: 5,
                     title: "PILLOWTALK DERM ADDICTION",
                     comment:
                        "I have been using another product for the past 10 years but decided to switch things up after watching her videos & WOW!! I absolutely love everything I have tried and I now have an entirely new skin care routine!",
                     images: [
                        "https://utfs.io/f/91ffd911-c3fb-4662-b977-affb121dbf1b-fwapl0.jpg",
                     ],
                     imagesKey: [
                        "91ffd911-c3fb-4662-b977-affb121dbf1b-fwapl0.jpg",
                     ],
                     name: "Jennifer",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T14:23:58.247Z",
                     updatedAt: "2024-03-06T14:24:17.509Z",
                     like: 1,
                     dislike: 0,
                     email: "Jennifer@mail.com",
                     verified: false,
                  },
                  {
                     id: "8669eb20-9a34-48d3-9c0f-76767bc4d05c",
                     rating: 2,
                     title: "REALLY WANTED TO LOVE…",
                     comment:
                        "Really wanted to love this as I wanted to reduce redness and fade dark spots, but it actually made my skin extremely red every time I used it. I was first using the duo morning and night as recommended, but because my skin turned red and burned slightly every time I used it, I lowered my usage to once a day for a few weeks, and then lowered to alternating days to see if that would help my skin adjust, but I had the same reaction every time I used it. I even stuck with it for the recommended 6-8",
                     images: [],
                     imagesKey: [],
                     name: "Michelle",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T14:14:11.063Z",
                     updatedAt: "2024-03-06T14:24:38.589Z",
                     like: 0,
                     dislike: 1,
                     email: "Michelle@gmail.com",
                     verified: false,
                  },
                  {
                     id: "fb718be2-4434-4120-a44c-5486ea6eaa44",
                     rating: 3,
                     title: "LOVE THE PRODUCT JUST NOT THE CARTRIDGE SYSTEM.",
                     comment:
                        "Ip love the products, but I really don’t like the cartridge system for the Hyper Serum. It’s my second time purchasing and I don’t think I will again because I keep missing my mark when dispensing the serum. I have squirted too much on my shirt or the counter or the floor…:( I love the Active Seal Moisturizer and its  press bottle so I  may continue using this one. It’s a lovely (easy to use) way to include vitamin C. Thank you so much for sharing your wisdom and the products are wonderful. If I",
                     images: [],
                     imagesKey: [],
                     name: "Heather",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T14:13:11.869Z",
                     updatedAt: "2024-03-06T14:24:39.969Z",
                     like: 0,
                     dislike: 1,
                     email: "Heather@gmail.com",
                     verified: false,
                  },
                  {
                     id: "b550b2e5-6f8a-48c2-97db-e2d1aef5a5be",
                     rating: 5,
                     title: "Love these products!",
                     comment:
                        "GREAT PRODUCTS AND FORMULAS, LIGHTWEIGHT AND PACK A PUNCH",
                     images: [],
                     imagesKey: [],
                     name: "Doreen",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T13:44:43.937Z",
                     updatedAt: "2024-03-06T13:46:34.877Z",
                     like: 1,
                     dislike: 0,
                     email: "doreen@google.com",
                     verified: false,
                  },
                  {
                     id: "93a5bee3-1d3e-4ea7-862a-f5c6d2eb459d",
                     rating: 4,
                     title: "Feels nice on the skin but I haven’t seen a ton of improvement after using it for almost a year now.",
                     comment: "FEELS GREAT!",
                     images: [],
                     imagesKey: [],
                     name: "Nadia",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                     recommend: true,
                     createdAt: "2024-03-06T13:50:43.402Z",
                     updatedAt: "2024-03-06T14:12:11.226Z",
                     like: 1,
                     dislike: 0,
                     email: "Nadia@gmail.com",
                     verified: false,
                  },
               ],
               carts: [],
               productDescription: [
                  {
                     id: "425ba2b8-7396-4a39-8a3b-a9120d665731",
                     image: "/imagesDescription/major-fade-discoloration-duo/major-fade-discoloration-duo-1.webp",
                     title: [
                        "Arnica",
                        "Centella Asiatica",
                        "Niacinamide",
                        "Ash Bark Extract",
                     ],
                     discription: [
                        "Helps reduce the look of swelling",
                        "Relieves visible facial redness",
                        "Soothes and restores skin’s moisture barrier",
                        "Depuffs",
                     ],
                     createdAt: "2023-12-19T15:18:47.767Z",
                     updatedAt: "2023-12-19T14:59:31.218Z",
                     productId: "862a0b95-2983-4bb7-b78b-bef69b3145ff",
                  },
               ],
            },
         ],
         blogs: [],
      }

      render(
         <Provider
            store={configureStore({
               reducer: { sidebarSlice },
            })}
         >
            <QueryClientProvider client={queryClient}>
               <SearchDesktop />
            </QueryClientProvider>
         </Provider>
      )

      jest.spyOn(axios, "get").mockResolvedValueOnce({ data: testData })

      // (axios as jest.Mocked<typeof axios>).get.mockImplementation(() =>
      //    Promise.resolve({
      //       data: testData,
      //    })
      // )

      const input = screen.getByPlaceholderText("Search") as HTMLInputElement

      fireEvent.change(input, {
         target: {
            value: "major fade discoloration duo",
         },
      })

      await waitFor(() => {
         const text = screen.getByText(
            '1 result "major fade discoloration duo"'
         )

         expect(text).toBeInTheDocument()
      })
   })

   it("displays search results 'TEXT' when data is fetched empty array[]", async () => {
      render(
         <Provider
            store={configureStore({
               reducer: { sidebarSlice },
            })}
         >
            <QueryClientProvider client={queryClient}>
               <SearchDesktop />
            </QueryClientProvider>
         </Provider>
      )

      jest
         .spyOn(axios, "get")
         .mockResolvedValueOnce({ data: { products: [], blogs: [] } })

      const input = screen.getByPlaceholderText("Search") as HTMLInputElement

      fireEvent.change(input, {
         target: {
            value: "major fade discoloration duo",
         },
      })

      await waitFor(() => {
         const text = screen.getByTestId("text-not-found")

         expect(text).toBeInTheDocument()
      })
   })
})
