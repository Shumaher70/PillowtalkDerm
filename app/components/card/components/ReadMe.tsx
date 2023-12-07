import Link from 'next/link';

const ReadMe = ({
   text = 'Read me',
   src = '',
}: {
   text?: string;
   src: string;
}) => {
   return (
      <Link
         href={src}
         className="text-[12px] md:text-[16px] underline hover:no-underline"
      >
         {text}
      </Link>
   );
};

export default ReadMe;
