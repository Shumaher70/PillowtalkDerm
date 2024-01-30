"use client"
import { useEffect, useMemo, useState } from "react"

const useIsInViewport = (ref: any) => {
   const [isIntersecting, setIsIntersecting] = useState(false)

   const observer = useMemo(() => {
      if (typeof IntersectionObserver !== "undefined") {
         return new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting)
         )
      }
      return {
         observe: () => {},
         disconnect: () => {},
      }
   }, [])

   useEffect(() => {
      observer.observe(ref.current)

      return () => {
         observer.disconnect()
      }
   }, [ref, observer])

   return isIntersecting
}

export default useIsInViewport
