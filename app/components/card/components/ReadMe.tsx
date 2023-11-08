const ReadMe = ({ text = 'Read me' }: { text?: string }) => {
   return <p className="text-[12px] underline hover:no-underline">{text}</p>;
};

export default ReadMe;
