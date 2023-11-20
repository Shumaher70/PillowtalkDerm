import Button from '@/app/components/button/Button';

interface CheckOutProps {
   totalPrice: number;
}

const CheckOut = ({ totalPrice }: CheckOutProps) => {
   return (
      <div className="p-[16px] flex justify-between rounded-t-[8px] bg-white shadow-[0_-1px_10px_rgba(0,0,0,0.26)]">
         <div>
            <p className="text-p font-sans text-bold">Estimated Total</p>
            <p>Taxes and shipping calculated at checkout</p>
            <Button
               text="checkout"
               uppercase
               size="sm"
               className="bg-purple-800 uppercase mt-4"
            />
         </div>

         <p className="text-p font-sans text-bold">${totalPrice}</p>
      </div>
   );
};

export default CheckOut;
