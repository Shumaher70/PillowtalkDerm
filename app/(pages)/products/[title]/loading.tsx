import React from "react"

const loading = () => {
   return (
      <div className="container-px flex  flex-col gap-3 pb-[16px] pt-[80px] md:pt-[110px] lg:flex-row">
         <div className="lg:w-2/4">
            <div className="sticky top-[110px]">
               <div className="relative !overflow-hidden">
                  <div className="mr-[10%] select-none !overflow-visible pb-[20px] lg:mr-0 lg:pb-[70px]">
                     <div className="bg-accent container-rounded overflow-hidden">
                        <div className={`relative overflow-hidden pt-[100%]`}>
                           <div
                              className={`absolute top-0 h-full w-full object-cover transition-all`}
                              draggable="false"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="lg:w-2/4">
            <div className="box-p bg-secondary container-rounded flex h-[100px] w-full lg:h-[200px]" />
            <div className="bg-secondary container-rounded mt-[12px] flex h-[100px] w-full lg:h-[200px]" />
            <div className="bg-secondary container-rounded mt-[12px] flex h-[100px] w-full lg:h-[200px]" />
         </div>
      </div>
   )
}

export default loading
