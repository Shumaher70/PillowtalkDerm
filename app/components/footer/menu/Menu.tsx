import Link from 'next/link';

const helpControl = [
   {
      title: 'Shipping & Returns',
      link: '',
   },
   {
      title: 'FAQ',
      link: '',
   },
   {
      title: 'Contact Us',
      link: '',
   },
];

const learnControl = [
   {
      title: 'Skin Nerd Academy',
      link: '',
   },
   {
      title: 'Ingredients Glossary',
      link: '',
   },
];

const DrIdrissControl = [
   {
      title: 'About',
      link: '',
   },
   {
      title: 'ShopMy',
      link: '',
   },
   {
      title: 'Idriss Derm',
      link: '',
   },
];
const Menu = () => {
   return (
      <div className="grid grid-cols-2 gap-5">
         <div className="flex flex-col gap-2">
            <p className="text-p font-bold">Help</p>
            {helpControl.map(({ title, link }) => (
               <Link key={title} href={link} className="text-p cursor-pointer">
                  {title}
               </Link>
            ))}
         </div>

         <div className="flex flex-col gap-2">
            <p className="text-p font-bold">Help</p>
            {learnControl.map(({ title, link }) => (
               <Link key={title} href={link} className="text-p cursor-pointer">
                  {title}
               </Link>
            ))}
         </div>

         <div className="flex flex-col gap-2">
            <p className="text-p font-bold">Help</p>
            {DrIdrissControl.map(({ title, link }) => (
               <Link key={title} href={link} className="text-p cursor-pointer">
                  {title}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Menu;
