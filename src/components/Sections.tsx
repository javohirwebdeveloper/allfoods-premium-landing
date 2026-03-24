import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { motion } from 'motion/react';
import { Verified, Inventory2, Payments, LocalShipping } from './Icons';

export const Hero: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <section className="min-h-[300px] md:min-h-[500px] flex flex-col items-center justify-center px-6 text-center bg-[#F5F5F7]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-8"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-[#1a1c1d] whitespace-pre-line">
          {tx({uz: "Premium mahsulotlar.\nBarqaror sifat.\nBozor narxida.", ru: "Премиум продукты.\nСтабильное качество.\nПо рыночной цене."})}
        </h1>
      </motion.div>
    </section>
  );
};

export const Concept: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 bg-[#f9f9fb] scroll-mt-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          {tx({uz: "Biz haqimizda", ru: "О нас"})}
        </span>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[#444842]"
        >
          {tx({
            uz: "AllFoods — bu to‘g‘ridan-to‘g‘ri manbadan oziq-ovqat mahsulotlarini xarid qilish va aqlli logistika algoritmlari asosida qurilgan tizim. Biz yetkazib berish zanjirini qayta optimallashtirdik — ortiqcha xarajatlarsiz, eng saralangan mahsulotlarni xonadoningizgacha yetkazamiz.", ru: "AllFoods — платформа прямых закупок у поставщиков с оптимизированной логистикой. Мы пересмотрели цепочку поставок продуктов питания: без лишних затрат доставляем отборные продукты прямо к вам домой."
          })}
        </motion.p>
        <p className="text-lg md:text-xl leading-loose text-[#5f5e60] font-light">
          {tx({uz: "Sunʼiy intellekt va texnologiya uyg'unligi orqali biz har bir mahsulotning logistik yo'lini optimallashtirdik. Bu esa sizga yuqori sifatni hamyonbop narxlarda taqdim etish imkonini beradi.", ru: "Благодаря сочетанию искусственного интеллекта и технологий мы оптимизировали логистический путь каждого продукта. Это позволяет нам предлагать вам высокое качество по доступным ценам."})}
        </p>
      </div>
    </section>
  );
};

export const ValueProposition: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <section id="services" className="py-24 px-6 bg-[#f3f3f5] scroll-mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard 
            title={tx({uz: "Sifatli va yangi", ru: "Свежие продукты"})}
            desc={tx({uz: "Do'kondan o'zingiz tanlab olgandek, eng yangi va toza mahsulotlar.", ru: "Свежие и качественные продукты, как если бы вы выбирали их сами."})}
          />
          <ValueCard 
            title={tx({uz: "Keng tanlov", ru: "Широкий ассортимент"})}
            desc={tx({uz: "Ro'zg'oringiz uchun kerakli bo'lgan turli xildagi mahsulotlarning keng assortimenti.", ru: "Широкий ассортимент качественных продуктов для вашего дома и семьи."})}
          />
          <ValueCard 
            title={tx({uz: "Bozor narxlari", ru: "Рыночные цены"})}
            desc={tx({uz: "Hech qanday ustama va yashirin to'lovlarsiz, odatiy bozordagidek adolatli narxlar.", ru: "Обычные рыночные цены без лишних наценок и скрытых комиссий."})}
          />
          <ValueCard 
            title={tx({uz: "Qulay vaqtda yetkazish", ru: "Удобная доставка"})}
            desc={tx({uz: "Buyurtma bering va o'zingizga qulay bo'lgan vaqtni tanlang. Biz aynan shu vaqtda yetkazib beramiz.", ru: "Сделайте заказ и выберите удобное для вас время. Мы доставим всё точно в срок."})}
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard: React.FC<{ title: React.ReactNode, desc: React.ReactNode }> = ({ title, desc }) => (
  <div className="bg-white p-10 rounded-xl space-y-4">
    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    <p className="text-[#5f5e60] text-sm leading-relaxed">{desc}</p>
  </div>
);

export const HowItWorks: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#f9f9fb] scroll-mt-2">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#111312]">
            {tx({uz: "Qanday ishlaydi?", ru: "Как это работает?"})}
          </h2>
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute left-6 border-t border-[#c4c8c0]/30 w-[80%] top-4 z-0"></div>
          <div className="lg:hidden absolute left-[15px] top-4 bottom-4 w-[1px] bg-[#c4c8c0]/30 z-0"></div>
          
          <Step 
            number={1} 
            title={tx({uz: "AI orqali tezkor xarid", ru: "Умные покупки с ИИ"})} 
            desc={tx({uz: "Ro'yxatingizni AI yordamchimizga yuborasiz va u 1 soniyaga bormay tayyor savat yig'ib beradi. Ortiqcha qidiruvlarsiz — faqat o'zingizga kerakli miqdor va navni tasdiqlaysiz xolos.", ru: "Вы отправляете список помощнику с ИИ, и он за долю секунды собирает готовую корзину. Никаких долгих поисков — просто подтвердите нужный сорт и количество."})} 
          />
          <Step 
            number={2} 
            title={tx({uz: "Yig'ish", ru: "Сборка"})} 
            desc={tx({uz: "Yigitlarimiz buyurtmangizni xuddi o'zlariga olgandek e'tibor bilan terib, qadoqlarga joylashadi.", ru: "Наши сборщики аккуратно собирают ваш заказ как для себя и упаковывают его."})} 
          />
          <Step 
            number={3} 
            title={tx({uz: "Yetkazish", ru: "Доставка"})} 
            desc={tx({uz: "Kuryerlarimiz siz ilovada belgilagan vaqtda, mahsulotlarni tagida ezib qo'ymasdan uyingizgacha olib kelishadi.", ru: "Наши курьеры доставляют продукты до вашей двери в назначенное вами время, сохраняя их идеальный вид."})} 
          />
        </div>
      </div>
    </section>
  );
};

const Step: React.FC<{ number: number, title: React.ReactNode, desc: React.ReactNode }> = ({ number, title, desc }) => (
  <div className="relative pl-12 lg:pl-0">
    <div className="absolute left-0 lg:static lg:mb-6 top-1 w-8 h-8 rounded-full bg-[#e2e2e4] border border-[#c4c8c0] flex items-center justify-center text-xs font-bold z-10 mx-0">
      {number}
    </div>
    <h3 className="text-lg lg:text-xl font-bold mb-2">{title}</h3>
    <p className="text-[#5f5e60] leading-relaxed max-w-sm">{desc}</p>
  </div>
);

export const TrustSection: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl bg-zinc-900 aspect-[4/5] lg:aspect-[21/9] relative group">
        <img 
          alt="AllFoods Premium Quality" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-90" 
          src="/brand.avif" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8 md:p-16 lg:p-16">
          
          <p className="text-white/80 max-w-xl text-lg">
            {tx({uz: "Biz har bir mahsulotni mijozlarimizga xuddi o'z oilamizga tayyorlagandek e'tibor va mehr bilan yetkazib berishga harakat qilamiz.", ru: "Мы доставляем каждый продукт нашим клиентам с такой же заботой и вниманием, как для своей собственной семьи."})}
          </p>
        </div>
      </div>
    </section>
  );
};

export const EarlyAccess: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <section className="py-32 px-6 bg-[#e8e8ea]">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {tx({uz: "Birinchilardan bo'ling.", ru: "Будьте первыми."})}
        </h2>
        <p className="text-[#5f5e60] font-light md:text-xl">
          {tx({uz: "Biz tez orada ishga tushamiz. Yangiliklar va maxsus takliflardan xabardor bo'lish uchun Instagram sahifamizga obuna bo'ling.", ru: "Мы скоро запустимся. Подписывайтесь на нашу страницу в Instagram, чтобы быть в курсе новостей."})}
        </p>
        <div className="flex justify-center pt-8">
          <a 
            href="https://instagram.com/allfoods.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#1a1c1d] text-white py-4 px-10 rounded-xl font-medium tracking-wide transition-all active:scale-95 hover:bg-black cursor-pointer inline-flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            {tx({uz: "Instagram'ga o'tish", ru: "Перейти в Instagram"})}
          </a>
        </div>
      </div>
    </section>
  );
};
