import Image from "next/image"
const ImageTip = () => {
   return (
      <Image
         height={0}
         width={0}
         sizes="100vw"
         src="/imagesTips/tips-1.webp"
         alt="one-week"
         className=" container-rounded h-full min-h-[250px] w-full object-cover "
      />
   )
}

export default ImageTip
