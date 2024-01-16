interface CommentProps {
   title: string
   comment: string
}

const Comment = ({ comment, title }: CommentProps) => {
   return (
      <div className="flex max-h-[300px] w-full flex-col gap-2 overflow-y-auto">
         <h3 className="text-[20px] font-bold">{title}</h3>
         <p className="text-p">{comment}</p>
      </div>
   )
}

export default Comment
