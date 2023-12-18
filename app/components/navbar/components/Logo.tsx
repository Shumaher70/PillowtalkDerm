import Image from "next/image"
import logo from "@/public/logo.svg"

const Logo = () => {
   return (
      <Image
         width={0}
         height={0}
         src={logo}
         alt="logo"
         className="w-[135px] cursor-pointer lg:w-[200px]"
      />
   )
}

export default Logo
