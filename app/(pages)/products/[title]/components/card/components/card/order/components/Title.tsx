import { schnyderMlightFont } from "@/app/layout"

const Title = ({ title }: { title: string }) => {
   return (
      <h1 className={`text-title ${schnyderMlightFont.className}`}>{title}</h1>
   )
}

export default Title
