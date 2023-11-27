import ImageCard from '../card/components/ImageCard';
import TitleCard from '../card/components/TitleCard';
import ReadMe from '../card/components/ReadMe';

interface BlogCardProps {
   id: string;
   images: string[];
   title: string;
   extra?: string;
}

const BlogCard = ({ id, images, title, extra }: BlogCardProps) => {
   if (images)
      return (
         <div className="bg-white rounded-[8px] m-2 flex flex-col justify-between">
            <div className="m-[10px] rounded-[5px] ">
               <ImageCard image={images[0]} title={title} />
               <div className="pt-[8px] text-center">
                  <TitleCard title={title} />
               </div>
            </div>
            {extra && (
               <div className="text-center pb-5">
                  <ReadMe text={extra} src="" />
               </div>
            )}
         </div>
      );
};

export default BlogCard;
