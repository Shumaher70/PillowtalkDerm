import Button from "@/app/components/button/Button"

interface ButtonGroupProps {
   shop: boolean
   blog: boolean
   about: boolean
   shopHandler: () => void
   blogHandler: () => void
   aboutHandler: () => void
}

const ButtonGroup = ({
   about,
   shop,
   blog,
   shopHandler,
   blogHandler,
   aboutHandler,
}: ButtonGroupProps) => {
   return (
      <>
         <Button
            text="shop"
            size="sm"
            className={`
            capitalize
            ${
               shop
                  ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white"
                  : "bg-white !text-black"
            }`}
            classText="text-p"
            onClick={shopHandler}
            load={false}
         />
         <Button
            text="skin nerd academy"
            size="sm"
            className={`
            capitalize
            ${
               blog
                  ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white"
                  : "bg-white !text-black"
            }`}
            classText="text-p"
            onClick={blogHandler}
            load={false}
         />
         <Button
            href="/our-story"
            text="about"
            size="sm"
            className={`
            capitalize
            ${
               about
                  ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white"
                  : "bg-white !text-black"
            }`}
            classText="text-p"
            onClick={aboutHandler}
            load={false}
         />
      </>
   )
}

export default ButtonGroup
