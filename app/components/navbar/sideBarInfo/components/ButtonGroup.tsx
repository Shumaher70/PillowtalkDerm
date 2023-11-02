import Button from '@/app/components/Button';

interface ButtonGroupProps {
   shop: boolean;
   blog: boolean;
   shopHandler: () => void;
   blogHandler: () => void;
}

const ButtonGroup = ({
   shop,
   blog,
   shopHandler,
   blogHandler,
}: ButtonGroupProps) => {
   return (
      <>
         <Button
            text="shop"
            size="sm"
            className={`${
               shop ? 'text-white bg-gradient' : '!text-black bg-white'
            }`}
            onClick={shopHandler}
         />
         <Button
            text="skin nerd academy"
            size="sm"
            className={`${
               blog ? 'text-white bg-gradient' : '!text-black bg-white'
            }`}
            onClick={blogHandler}
         />
         <Button text="about" size="sm" className="bg-white !text-black" />
      </>
   );
};

export default ButtonGroup;
