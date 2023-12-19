import AccordionTip from "./components/AccordionTip"
import ImageTip from "./components/ImageTip"

const Tips = ({ tips }: { tips: string[] }) => {
   return (
      <div className="container-px">
         <div className="bg-accent container-rounded flex flex-col lg:flex-row">
            <div className="flex-1">
               <ImageTip />
            </div>
            <div className="flex-1">
               <AccordionTip tips={tips} />
            </div>
         </div>
      </div>
   )
}

export default Tips
