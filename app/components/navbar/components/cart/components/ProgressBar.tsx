import progressTitle from '@/utils/progressTitle';
import calcProgressBar from '../../../../../../utils/calcProgressBar';

interface ProgressBarProps {
   totalPrice: number;
   freeShipping: number;
}

const ProgressBar = ({ totalPrice, freeShipping }: ProgressBarProps) => {
   const progress = calcProgressBar(totalPrice, freeShipping);

   return (
      <div className="w-full">
         <p className="text-p w-full text-center">
            {progressTitle(totalPrice, freeShipping)}
         </p>

         <div className="w-full h-[6px] rounded-full bg-accent mt-3 overflow-hidden">
            <div
               style={{
                  width: `${progress}`,
               }}
               className="bg-gradient-to-r from-pink-400 to-pink-600  h-full transition-all !duration-1000"
            />
         </div>
      </div>
   );
};

export default ProgressBar;
