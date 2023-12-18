import React from "react"

const Subtitle = ({ subTitle }: { subTitle: string | null }) => {
   return <p className="text-[12px] md:text-[16px]">{subTitle}</p>
}

export default Subtitle
