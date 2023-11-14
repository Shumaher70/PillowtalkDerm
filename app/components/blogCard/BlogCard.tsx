import Link from 'next/link';
import ImageCard from '../card/components/ImageCard';
import TitleCard from '../card/components/TitleCard';
import ReadMe from '../card/components/ReadMe';

interface BlogCardProps {
   blog: {
      id: string;
      images: string[];
      title: string;
   };
   extra?: string;
}

const BlogCard = ({ blog, extra }: BlogCardProps) => {
   return (
      <div className="bg-white rounded-[8px] m-2">
         <div className="m-[10px] rounded-[5px]">
            <ImageCard image={blog.images[0]} title={blog.title} />
            <div className="pt-[8px] text-center">
               <TitleCard title={blog.title} />
            </div>

            {extra && (
               <div className="text-center h-full">
                  <ReadMe text={extra} src="" />
               </div>
            )}
         </div>
      </div>
   );
};

export default BlogCard;
