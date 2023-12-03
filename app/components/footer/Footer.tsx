import ImageFooter from './image/imageFooter';
import LegalSection from './legal/LegalSection';
import Menu from './menu/Menu';
import Subscribe from './subscribe/Subscribe';

const Footer = () => {
   return (
      <footer className="z-[10] w-full container-rounded-t container-p bg-secondary flex flex-col">
         <div className="flex flex-col items-center justify-between lg:flex-row gap-10 bg-white container-rounded w-full p-[20px] pb-[40px] lg:p-[40px]">
            <div className="max-w-[250px]">
               <ImageFooter />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
               <div className="pt-10 lg:pt-0 w-full lg:order-1">
                  <Subscribe />
               </div>

               <div className="pt-10 lg:pt-0 w-full lg:max-w-[300px]">
                  <Menu />
               </div>
            </div>
         </div>

         <div className="w-full flex flex-col items-center p-[20px] pb-[40px] gap-8 lg:flex-row lg:justify-between">
            <p className="text-[12px]">
               © Copyright 2023 Dr. Shereene Idriss / PillowtalkDerm
            </p>

            <div>
               <LegalSection />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
