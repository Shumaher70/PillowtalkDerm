import Image from "next/image"

const ImageDescription = ({ image }: { image: string }) => {
   return (
      <Image
         width={0}
         height={0}
         sizes="100vh"
         src={image}
         alt={image}
         className="container-rounded absolute right-0 top-0 h-full w-full object-cover"
      />
   )
}

export default ImageDescription
