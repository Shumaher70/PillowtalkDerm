interface IngredientCardProps {
   title: string
   details?: string
   studies?: string[]
}

const IngredientCard = ({ title, details, studies }: IngredientCardProps) => {
   return (
      <div className="container-rounded flex h-auto min-h-[450px] flex-grow flex-col overflow-hidden">
         <div className="">1</div>
         <div className="">2</div>
      </div>
   )
}

export default IngredientCard
