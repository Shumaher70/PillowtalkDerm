import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ className }: { className?: string }) => {
   return (
      <>
         <AiOutlineSearch
            className={`text-[30px] cursor-pointer ${className}`}
         />
      </>
   );
};

export default Search;
