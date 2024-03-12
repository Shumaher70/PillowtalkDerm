import Image from "next/image"

const ImageCard = ({
   image,
   title,
   imageAnimated,
   size = 100,
}: {
   image: string
   title: string
   imageAnimated?: boolean
   size?: number
}) => {
   return (
      <div
         style={{ paddingTop: `${size}%` }}
         className={`relative overflow-hidden`}
      >
         {image && (
            <Image
               src={image}
               alt={title}
               className={`absolute top-0 h-full w-full object-cover transition-all ${
                  imageAnimated && "hover:-translate-y-[20px]"
               }`}
               sizes="100vw"
               width={0}
               height={0}
               loading="lazy"
               draggable="false"
            />
         )}
      </div>
   )
}

export default ImageCard
