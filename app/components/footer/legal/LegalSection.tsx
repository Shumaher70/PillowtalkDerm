import Link from "next/link"

const legalControl = [
   {
      title: "Privacy Policy",
      link: "",
   },
   {
      title: "Terms & Conditions",
      link: "",
   },
   {
      title: "Accessibility",
      link: "",
   },
   {
      title: "Do Not Sell",
      link: "",
   },
]

const LegalSection = () => {
   return (
      <div className="flex flex-wrap justify-center gap-2 md:justify-start">
         {legalControl.map(({ title, link }) => (
            <Link
               key={title}
               href={link}
               className="cursor-pointer text-[14px]"
            >
               {title}
            </Link>
         ))}
      </div>
   )
}

export default LegalSection
