import React from "react"
import { MotionDiv } from "./MotionDiv"

const ViewportMotionDiv = ({ children }: { children: React.ReactNode }) => {
   const container = {
      hidden: { opacity: 0, y: 100 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
         },
      },
   }

   return (
      <MotionDiv
         variants={container}
         initial={"hidden"}
         whileInView={"visible"}
         viewport={{ once: true }}
      >
         {children}
      </MotionDiv>
   )
}

export default ViewportMotionDiv
