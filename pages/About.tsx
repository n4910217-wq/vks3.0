import React from 'react';
import { Shield, Clock, Award, Briefcase } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-vks-dark py-20">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">О компании ВКС</h1>
            <p className="text-xl text-vks-beige max-w-3xl mx-auto">
              Ваш надежный проводник в мире ВЭД. Более 25 лет безупречной репутации.
            </p>
         </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
               <h2 className="text-3xl font-bold text-vks-dark mb-6">Опыт и надежность</h2>
               <div className="w-20 h-1 bg-vks-primary mb-8"></div>
               <div className="prose text-vks-dark/80 space-y-4 leading-relaxed">
                 <p>
                   ООО «Внешторг Консьерж Сервис» работает на рынке внешнеэкономической деятельности уже более 25 лет. 
                   За это время мы прошли путь от небольшого брокера до крупного логистического оператора с собственной инфраструктурой.
                 </p>
                 <p>
                   Наша миссия — сделать импорт простым, прозрачным и безопасным для российского бизнеса. 
                   Мы берем на себя все сложности таможенного оформления, логистики и сертификации, позволяя вам сосредоточиться на развитии продаж.
                 </p>
                 <p className="font-medium text-vks-primary">
                   Мы ведем полностью официальную деятельность, что гарантирует отсутствие юридических рисков и штрафов для наших клиентов.
                 </p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-vks-milky p-6 rounded-lg text-center border border-vks-beige/30">
                  <Clock size={40} className="mx-auto text-vks-primary mb-4" />
                  <h3 className="font-bold text-vks-dark">25+ лет</h3>
                  <p className="text-sm text-vks-dark/70">на рынке</p>
               </div>
               <div className="bg-vks-milky p-6 rounded-lg text-center border border-vks-beige/30">
                  <Shield size={40} className="mx-auto text-vks-primary mb-4" />
                  <h3 className="font-bold text-vks-dark">100%</h3>
                  <p className="text-sm text-vks-dark/70">гарантия</p>
               </div>
               <div className="bg-vks-milky p-6 rounded-lg text-center border border-vks-beige/30">
                  <Briefcase size={40} className="mx-auto text-vks-primary mb-4" />
                  <h3 className="font-bold text-vks-dark">Официально</h3>
                  <p className="text-sm text-vks-dark/70">белый импорт</p>
               </div>
               <div className="bg-vks-milky p-6 rounded-lg text-center border border-vks-beige/30">
                  <Award size={40} className="mx-auto text-vks-primary mb-4" />
                  <h3 className="font-bold text-vks-dark">Качество</h3>
                  <p className="text-sm text-vks-dark/70">услуг</p>
               </div>
            </div>
         </div>

         <div className="bg-vks-milky rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-vks-dark text-center mb-10">Полный цикл услуг</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="text-center">
                  <div className="w-12 h-12 bg-vks-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-bold text-lg mb-2">Для импортёров</h3>
                  <p className="text-sm text-vks-dark/70">Помощь в поиске поставщиков и организации поставок крупных партий.</p>
               </div>
               <div className="text-center">
                  <div className="w-12 h-12 bg-vks-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-bold text-lg mb-2">Для предпринимателей</h3>
                  <p className="text-sm text-vks-dark/70">Аутсорсинг ВЭД, чтобы вы могли не держать штат логистов.</p>
               </div>
               <div className="text-center">
                  <div className="w-12 h-12 bg-vks-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-bold text-lg mb-2">Для «Садовода»</h3>
                  <p className="text-sm text-vks-dark/70">Легализация товаров, маркировка и документы для торговли.</p>
               </div>
            </div>
         </div>
         
         <div className="mt-16 text-center">
            <a href={WHATSAPP_LINK} className="inline-flex items-center px-8 py-4 bg-vks-primary text-white font-medium rounded-full hover:bg-vks-dark transition-colors shadow-lg">
               Связаться с руководством
            </a>
         </div>
      </div>
    </div>
  );
};