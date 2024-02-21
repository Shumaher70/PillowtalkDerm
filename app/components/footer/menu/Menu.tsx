import Link from "next/link"

const helpControl = [
   {
      title: "Shipping & Returns",
      link: "/pages/shipping-returns",
   },
   {
      title: "FAQ",
      link: "/pages/faq",
   },
   {
      title: "Contact Us",
      link: "/pages/contact-us",
   },
]

const learnControl = [
   {
      title: "Skin Nerd Academy",
      link: "/blogs/news",
   },
   {
      title: "Ingredients Glossary",
      link: "/blogs/news/ingredients-glossary",
   },
]

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
      </div>
   )
}

export default Menu
