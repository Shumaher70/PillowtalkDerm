import Image from "next/image"

const SocialImpactSection = () => {
   return (
      <div className="container-px h-full w-full py-[15px] pt-[16px] md:pt-[80px]">
         <div className="container-rounded bg-accent flex h-full w-full flex-col overflow-hidden md:flex-row">
            <div className="h-full w-full grow flex-col p-[15px] md:p-[24px]">
               <h1 className="text-title pb-5">Social Impact</h1>

               <p className="text-[16px] font-medium md:text-[18px]">
                  Dr. Idriss is more than just skincare. We want to empower
                  women through accessible education. Dr. Shereene Idriss comes
                  from a family that escaped war in Lebanon, and she’s seen
                  firsthand how peer pressure, a lack of role models, and
                  cultural biases can discourage girls from furthering their
                  education in science, technology, engineering and math (STEM).
                  But she and her sisters, who also became doctors, are proof of
                  the importance of STEM education. To help make a change, Dr.
                  Idriss invests $10,000 annually to sponsor young women from
                  displaced populations who are interested in pursuing STEM
                  education. We partner with STEM FOR HER, a Washington
                  D.C.-based non-profit on a mission to help young women launch
                  successful STEM careers.
               </p>
            </div>

            <div className="relative h-auto w-full grow">
               <div className="h-full min-h-[300px]">
                  <Image
                     src="/imagesOurStory/socialImpact.webp"
                     alt="our-philosophy"
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

export default SocialImpactSection
