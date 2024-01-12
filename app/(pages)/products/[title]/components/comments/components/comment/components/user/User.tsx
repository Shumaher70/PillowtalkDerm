import Customer from "./components/Customer"
import Recommended from "./components/Recommended"

interface UserProps {
   name: string
   recommend: boolean
   email: string
}

const User = ({ name, recommend, email }: UserProps) => {
   return (
      <div className="h-full w-full">
         <Customer name={name} email={email} />
         {recommend && (
            <div className="mb-[32px] mt-3 h-full w-full">
               <Recommended />
            </div>
         )}
      </div>
   )
}

export default User
