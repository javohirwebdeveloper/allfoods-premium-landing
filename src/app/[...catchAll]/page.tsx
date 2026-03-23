import type { Metadata } from 'next';
import LandingPage from '../page';

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const path = params?.catchAll?.[0] || '';

  if (path === 'ru') {
    return {
      title: 'AllFoods - Премиум продукты. Стабильное качество. По рыночной цене.',
      description: "AllFoods — платформа прямых закупок у поставщиков с оптимизированной логистикой. Мы пересмотрели цепочку поставок продуктов питания: без лишних затрат доставляем отборные продукты прямо к вам домой.",
      keywords: [
        'AllFoods',
        'allfoods',
        'доставка продуктов ташкент',
        'корзинка',
        'макро',
        'доставка еды ташкент',
        'заказать продукты',
        'доставка свежих продуктов'
      ],
      openGraph: {
        title: 'AllFoods - Премиум продукты.',
        description: "AllFoods — платформа прямых закупок у поставщиков с оптимизированной логистикой.",
        url: 'https://allfoods.uz/ru',
        siteName: 'AllFoods',
        images: [
          {
            url: '/logo-big.png',
            width: 800,
            height: 600,
            alt: 'AllFoods Premium Quality',
          },
        ],
        locale: 'ru_RU',
        type: 'website',
      }
    };
  }

  return {}; // Boshqa holatlarda layout.tsx dagi o'zbekcha fallback defaultni ishlatadi
}

export default function CatchAllPage() {
  return <LandingPage />;
}
