'use client';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

import Sidebar from '../../Sidebar';
import Input from './components/Input';
import TopSearches from './components/TopSearches';
import Card from '@/app/components/card/Card';

interface SearchProps {
   className: string;
   data?: string[];
}

const Search = ({ className, data }: SearchProps) => {
   const [triggerSidebar, setTriggerSidebar] = useState(false);
   const [input, setInput] = useState('');
   const [postInput, setPostInput] = useState('');

   const getInput = (event: string) => {
      setInput(event);
   };

   const getTopSearch = (event: string) => {
      setPostInput(event);
   };

   return (
      <div>
         <Sidebar triggerSidebar={triggerSidebar}>
            <div className="flex flex-col flex-center p-[16px] gap-3">
               <div className="flex flex-center gap-3 w-full">
                  <Input getInput={getInput} postInput={postInput} />
                  <AiOutlineClose
                     onClick={() => setTriggerSidebar(false)}
                     className="w-[15px] h-[15px] cursor-pointer"
                  />
               </div>

               <div className="w-full">
                  <TopSearches className="mt-3" getTopSearch={getTopSearch} />
               </div>
            </div>

            <div className="grid grid-cols-2 px-[16px] overflow-auto">
               {Array.from({ length: 5 }).map((card) => (
                  <>
                     <Card
                        href=""
                        image="https://pillowtalkderm.com/cdn/shop/files/FlashMask.png?v=1689700581&width=352"
                        title="Major Fade Flash Mask"
                        stars={[]}
                        rating={100}
                        btn
                        price={100}
                        win
                     />
                  </>
               ))}
            </div>
         </Sidebar>

         <CiSearch
            onClick={setTriggerSidebar}
            className={`text-[30px] cursor-pointer ${className}`}
         />
      </div>
   );
};

export default Search;
