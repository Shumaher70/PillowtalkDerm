import ImageCard from '../card/components/ImageCard';
import TitleCard from '../card/components/TitleCard';
import ReadMe from '../card/components/ReadMe';

interface BlogCardProps {
   id: string;
   images: string[];
   title: string;
   extra?: string;
   tags?: String[];
   classText?: string;
}

const BlogCard = ({
   id,
   images,
   title,
   extra,
   tags,
   classText,
}: BlogCardProps) => {
   if (images)
      return (
         <div className="flex flex-col gap-2 bg-white p-[8px] md:p-[16px] rounded-[8px]">
            <div className="rounded-[8px] overflow-hidden">
               <ImageCard image={images[0]} title={title} />
            </div>

            <div className="flex flex-col flex-grow items-center text-center">
               {tags && (
                  <div className="flex flex-center gap-2 my-[10px]">
                     {tags?.map((t) => {
                        let bg;
                        const tags = {
                           all: 'bg-purple-700',
                           ingredients: 'bg-pink-700',
                           lifestyle: 'bg-pink-500',
                           products: 'bg-green-700',
                           routines: 'bg-yellow-700',
                        };
                        const tag = t.trim().toLocaleLowerCase();

                        if (tag === 'ingredients') {
                           bg = 'bg-pink-500';
                        } else if (tag === 'products') {
                           bg = 'bg-green-700';
                        } else if (tag === 'lifestyle') {
                           bg = 'bg-pink-400';
                        } else if (tag === 'skin concerns') {
                           bg = 'bg-purple-700';
                        } else if (tag === 'routines') {
                           bg = 'bg-yellow-500';
                        }

                        return (
                           <div
                              key={id}
                              className={`flex rounded-full text-[11px] text-white flex-wrap items-center px-[10px] py-[5px] uppercase ${bg}`}
                           >
                              <span>{tag}</span>
                           </div>
                        );
                     })}
                  </div>
               )}
               <TitleCard title={title} className={classText} />
            </div>

            <div className="text-center">
               <ReadMe text={extra} src="" />
            </div>
         </div>
      );
};

export default BlogCard;
