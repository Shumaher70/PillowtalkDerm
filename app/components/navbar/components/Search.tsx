import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ className }: { className?: string }) => {
   return (
      <div>
         <AiOutlineSearch
            className={`text-[30px] cursor-pointer ${className}`}
         />
      </div>
   );
};

export default Search;
