import localFont from '@next/font/local';

export const neueHaasUnicaFont = localFont({
   src: [
      {
         path: '/NeueHaasUnica-Bold.woff2',
         weight: '700',
      },
      {
         path: '/NeueHaasUnica-BoldItalic.woff2',
         weight: '700',
      },
      {
         path: '/NeueHaasUnica-Medium.woff2',
         weight: '500',
      },
      {
         path: '/NeueHaasUnica-MediumItalic.woff2',
         weight: '500',
      },
      {
         path: '/NeueHaasUnica-Regular.woff2',
         weight: '400',
      },
      {
         path: '/NeueHaasUnica-Light.woff2',
         weight: '300',
      },
      {
         path: '/NeueHaasUnica-LightItalic.woff2',
         weight: '300',
      },
      {
         path: '/NeueHaasUnica-Thin.woff2',
         weight: '100',
      },
      {
         path: '/NeueHaasUnica-ThinItalic.woff2',
         weight: '100',
      },
   ],
   variable: '--font-neueHaasUnica',
});

export const schnyderMlightFont = localFont({
   src: '/SchnyderMLight.woff2',
   weight: '100',
   variable: '--font-schnyderMlightFont',
});
