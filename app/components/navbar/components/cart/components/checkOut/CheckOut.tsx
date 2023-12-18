import Button from "@/app/components/button/Button"

interface CheckOutProps {
   totalPrice: number
}

const CheckOut = ({ totalPrice }: CheckOutProps) => {
   return (
      <div className="flex justify-between rounded-t-[8px] bg-white p-[16px] shadow-[0_-1px_10px_rgba(0,0,0,0.26)]">
         <div>
            <p className="text-p text-bold font-sans">Estimated Total</p>
            <p>Taxes and shipping calculated at checkout</p>
            <Button
               text="checkout"
               size="sm"
               className="mt-4 bg-purple-800 uppercase"
               load={false}
            />
         </div>

         <p className="text-p text-bold font-sans">${totalPrice}</p>
      </div>
   )
}

export default CheckOut
