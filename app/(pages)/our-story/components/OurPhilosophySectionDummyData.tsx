import { FaRegLightbulb } from "react-icons/fa6"
import { GoBook } from "react-icons/go"
import { SlShare } from "react-icons/sl"
import { SlGraduation } from "react-icons/sl"

type OurPhilosophySectionDummyDataType = {
   image: JSX.Element
   title: string
   subtitle: string
}[]

export const OurPhilosophySectionDummyData: OurPhilosophySectionDummyDataType =
   [
      {
         image: <FaRegLightbulb className="h-[20px] w-[20px] text-white" />,
         title: "FORMULATION FIRST",
         subtitle:
            "We use all performance ingredients at the most effective levels for your skin.",
      },

      {
         image: <GoBook className="h-[20px] w-[20px] text-white" />,

         title: "SCIENCE-BACKED SOLUTIONS",
         subtitle:
            "Our products are clinically tested, dermatologist tested, allergy tested, non-irritating, and fragrance-free.",
      },

      {
         image: <SlShare className="h-[20px] w-[20px] text-white" />,
         title: "NO B.S.",
         subtitle: "We don't believe in fear-mongering or meaningless claims.",
      },

      {
         image: <SlGraduation className="h-[20px] w-[20px] text-white" />,
         title: "EDUCATE TO EMPOWER",
         subtitle: "We share our dermatology expertise to empower you.",
      },
   ]
