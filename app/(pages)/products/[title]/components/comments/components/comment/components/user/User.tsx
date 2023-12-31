import Customer from "./components/Customer"
import Recommended from "./components/Recommended"

const User = () => {
   return (
      <div className="h-full w-full">
         <Customer />
         <div className="mb-[32px] mt-3 h-full w-full">
            <Recommended />
         </div>
      </div>
   )
}

export default User
