import type { Metadata } from 'next';
import { LanguageProvider } from '../i18n/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://allfoods.uz'),
  title: {
    default: 'AllFoods - Premium oziq-ovqat mahsulotlari yetkazish',
    template: '%s | AllFoods'
  },
  description: "Uydan chiqmay turib eng yangi, hamyonbop va toza mahsulotlarni buyurtma qiling. AllFoods — sizning ishonchli va tezkor xarid yordamchingiz.",
  keywords: [
    'AllFoods',
    'allfoods',
    'all foods',
    'oll futs',
    'alfuts',
    'alfoods',
    'allfood',
    'oziq-ovqat yetkazib berish',
    'toshkent',
    'доставка продуктов ташкент',
    'yetkazib berish',
    'oziq ovqat'
  ],
  authors: [{ name: 'AllFoods' }],
  creator: 'AllFoods',
  publisher: 'AllFoods',
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  openGraph: {
    title: 'AllFoods - Премиум продукты.',
    description: "AllFoods — платформа прямых закупок у поставщиков с оптимизированной логистикой.",
    url: 'https://allfoods.uz',
    siteName: 'AllFoods',
    images: [
      {
        url: '/logo-big.png',
        width: 800,
        height: 600,
        alt: 'AllFoods Premium Quality',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
