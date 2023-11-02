import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
   href: string;
   extra?: boolean;
}

const Card = ({ href, extra }: CardProps) => {
   return (
      <Link href={href} className="bg-white rounded-[8px] m-2">
         <div className="m-[10px] rounded-[5px]">
            <div className="relative pt-[100%] rounded-[10px] overflow-hidden">
               <Image
                  src="https://pillowtalkderm.com/cdn/shop/articles/My_Melasma_Journey_and_What_Worked_For_Me.png?v=1680565167&width=1500"
                  alt="pillow"
                  className="w-full h-full object-cover top-0 absolute"
                  sizes="100vw"
                  width={0}
                  height={0}
                  loading="lazy"
               />
            </div>
            <div className="px-[16px] pt-[8px] text-center">
               <p
                  className="
                  text-black 
                  text-p 
                  font-semibold 
                  capitalize 
                  leading-[16px]	
                  "
               >
                  Major Fade Active Seal Moisturizer
               </p>
            </div>
            <div>
               <div className="px-[16px] text-center">
                  {extra && (
                     <p className="text-[12px] underline hover:no-underline">
                        Read More
                     </p>
                  )}
                  {!extra && <div className="pb-[16px]" />}
               </div>
            </div>
         </div>
      </Link>
   );
};

export default Card;
