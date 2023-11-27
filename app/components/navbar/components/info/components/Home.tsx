import Link from 'next/link';

interface HomeProps {
   href: string;
   className?: string;
}

const Home = ({ href, className }: HomeProps) => {
   return (
      <Link
         href={href}
         className={`
            capitalize 
            text-p 
            cursor-pointer 
            whitespace-nowrap 
            px-[10px] 
            py-[5px]
            rounded-[20px]
            hover:bg-white
            ${className}
            `}
      >
         Home
      </Link>
   );
};

export default Home;
