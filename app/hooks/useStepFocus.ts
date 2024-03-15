"use client"
import { RefObject, useEffect } from "react"

const useStepFocus = (
   stepSlice: number,
   step: number,
   refInput: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>,
   delay: number
) => {
   useEffect(() => {
      const timeout = setTimeout(() => {
         if (stepSlice === step) {
            refInput.current!.focus()
         }
      }, delay)
      return () => clearTimeout(timeout)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [stepSlice])
}

export default useStepFocus
