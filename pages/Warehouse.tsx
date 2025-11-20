import React from 'react';
import { Box, ShieldCheck, Clock, Layers } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Warehouse: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-vks-dark text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Собственный Таможенный Склад</h1>
          <p className="text-xl text-vks-beige max-w-3xl mx-auto">
             Скорость оформления, безопасность груза и полный контроль на всех этапах.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1">
                  <div className="bg-vks-milky p-8 rounded-2xl border border-vks-beige/30">
                     <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start">
                           <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-vks-primary">
                              <ShieldCheck size={24} />
                           </div>
                           <div>
                              <h3 className="font-bold text-vks-dark mb-1">Официальный статус</h3>
                              <p className="text-sm text-vks-dark/70">Склад включен в реестр таможенных представителей.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-vks-primary">
                              <Box size={24} />
                           </div>
                           <div>
                              <h3 className="font-bold text-vks-dark mb-1">Контроль груза</h3>
                              <p className="text-sm text-vks-dark/70">Современные системы учета и видеонаблюдения.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-vks-primary">
                              <Clock size={24} />
                           </div>
                           <div>
                              <h3 className="font-bold text-vks-dark mb-1">Быстрое оформление</h3>
                              <p className="text-sm text-vks-dark/70">Свои декларанты на месте ускоряют выпуск товаров.</p>
                           </div>
                        </div>
                        <div className="flex items-start">
                           <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-vks-primary">
                              <Layers size={24} />
                           </div>
                           <div>
                              <h3 className="font-bold text-vks-dark mb-1">Снижение рисков</h3>
                              <p className="text-sm text-vks-dark/70">Минимизация простоев и дополнительных расходов.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold text-vks-dark mb-6">Преимущества СВХ ВКС</h2>
                  <div className="w-20 h-1 bg-vks-primary mb-8"></div>
                  <p className="text-lg text-vks-dark/80 mb-6 leading-relaxed">
                     Наличие собственного склада временного хранения (СВХ) — это ключевое преимущество, которое мы предлагаем нашим клиентам. 
                     Это позволяет нам не зависеть от сторонних терминалов, гибко управлять потоками грузов и предлагать лучшие цены на рынке.
                  </p>
                  <p className="text-lg text-vks-dark/80 mb-8 leading-relaxed">
                     Мы обеспечиваем надлежащие условия хранения для различных категорий товаров, включая требующие особого температурного режима или специальных условий безопасности.
                  </p>
                  <a 
                     href={WHATSAPP_LINK}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center px-6 py-3 border border-vks-primary text-base font-medium rounded-md text-white bg-vks-primary hover:bg-vks-dark transition-all"
                  >
                     Рассчитать стоимость хранения
                  </a>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};