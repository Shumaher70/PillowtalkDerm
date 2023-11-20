import Button from '@/app/components/button/Button';

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
            className={`
            capitalize
            ${
               shop
                  ? 'text-white bg-gradient-to-r from-pink-400 to-pink-600'
                  : '!text-black bg-white'
            }`}
            onClick={shopHandler}
            load={false}
         />
         <Button
            text="skin nerd academy"
            size="sm"
            className={`
            capitalize
            ${
               blog
                  ? 'text-white bg-gradient-to-r from-pink-400 to-pink-600'
                  : '!text-black bg-white'
            }`}
            onClick={blogHandler}
            load={false}
         />
         <Button
            text="about"
            size="sm"
            className="
            capitalize
            bg-white !text-black"
            load={false}
         />
      </>
   );
};

export default ButtonGroup;
