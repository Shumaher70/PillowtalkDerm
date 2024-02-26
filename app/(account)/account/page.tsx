import Success from "./Success"

const Page = async (query: { searchParams: { userid: string } }) => {
   const { searchParams } = query
   const { userid } = searchParams

   return (
      <div className="flex-center flex h-full w-full text-[100px]">
         <Success userId={userid} />
      </div>
   )
}

export default Page
