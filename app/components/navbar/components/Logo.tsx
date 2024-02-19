import Image from "next/image"
import logo from "@/public/logo.svg"
import Link from "next/link"

const Logo = () => {
   return (
      <Link href="/">
         <Image
            width={0}
            height={0}
            sizes="100vw"
            src={logo}
            alt="logo"
            className="w-[135px] cursor-pointer lg:w-[200px]"
         />
      </Link>
   )
}

export default Logo
