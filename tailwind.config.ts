import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      screens: {
         sm: '320px',
         // => @media (min-width: 640px) { ... }

         md: '768px',
         // => @media (min-width: 768px) { ... }

         lg: '1024px',
         // => @media (min-width: 1024px) { ... }
      },
   },
   plugins: [],
};
export default config;
