import Image from "next/image"

const SkinIsComplexSection = () => {
   return (
      <div className="container-px h-full w-full py-[15px]">
         <div className="container-rounded bg-accent flex h-full w-full flex-col overflow-hidden md:flex-row">
            <div className="bg-accent h-full w-full grow flex-col p-[15px] md:p-[24px]">
               <h1 className="text-section pb-5 leading-[40px] md:leading-[56px]">
                  Founded in science. Made in bed.
               </h1>

               <p className="pb-2 text-[16px] font-medium md:text-[18px]">
                  Dr. Idriss is a collection of fact-based, science-backed
                  skincare solutions by Dr. Shereene Idriss. She is a leading
                  board certified dermatologist on a mission to demystify the
                  world of skincare and cosmetic procedures. Over years of
                  posting myth busting videos to social media from her bed, she
                  is become known as the #PillowtalkDerm, amassing a global
                  community of 3M+ Nerds.
               </p>
            </div>

            <div className="relative h-auto w-full grow">
               <div className="h-full min-h-[300px]">
                  <Image
                     src="/imagesOurStory/skinIsComplex.webp"
                     alt="skin-is-complex"
                     height={0}
                     width={0}
                     sizes="100vw"
                     className="container-rounded absolute right-0 top-0 h-full w-full object-cover md:static"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default SkinIsComplexSection
