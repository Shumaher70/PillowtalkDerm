import Button from "@/app/components/button/Button"

interface ButtonGroupProps {
   shop: boolean
   blog: boolean
   shopHandler: () => void
   blogHandler: () => void
}

const ButtonGroup = ({
   shop,
   blog,
   shopHandler,
   blogHandler,
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
            text="about"
            size="sm"
            className="
            bg-white
            capitalize !text-black"
            classText="text-p"
            load={false}
         />
      </>
   )
}

export default ButtonGroup
