import Link from 'next/link';

const legalControl = [
   {
      title: 'Privacy Policy',
      link: '',
   },
   {
      title: 'Terms & Conditions',
      link: '',
   },
   {
      title: 'Accessibility',
      link: '',
   },
   {
      title: 'Do Not Sell',
      link: '',
   },
];

const LegalSection = () => {
   return (
      <div className="flex gap-5">
         {legalControl.map(({ title, link }) => (
            <Link
               key={title}
               href={link}
               className="text-[14px] cursor-pointer"
            >
               {title}
            </Link>
         ))}
      </div>
   );
};

export default LegalSection;
