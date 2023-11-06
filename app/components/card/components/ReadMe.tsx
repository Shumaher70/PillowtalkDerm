const ReadMe = ({ extra }: { extra?: boolean }) => {
   return (
      <>
         {extra && (
            <p className="text-[12px] underline hover:no-underline">
               Read More
            </p>
         )}
      </>
   );
};

export default ReadMe;
