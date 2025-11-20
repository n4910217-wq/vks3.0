import React from 'react';
import { Check } from 'lucide-react';
import { SERVICES_DATA, WHATSAPP_LINK } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="bg-vks-milky min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-vks-dark mb-4">Наши услуги</h1>
           <p className="text-lg text-vks-dark/70 max-w-2xl mx-auto">
             Комплексные решения для импорта и сопровождения вашего бизнеса. 
             Гарантируем качество, скорость и законность.
           </p>
        </div>

        <div className="space-y-8">
          {SERVICES_DATA.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-vks-beige/20 flex flex-col md:flex-row">
               <div className="md:w-1/3 bg-vks-primary/5 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-vks-beige/20">
                  <h2 className="text-2xl font-bold text-vks-primary text-center md:text-left">{service.title}</h2>
               </div>
               <div className="md:w-2/3 p-8">
                  <p className="text-lg text-vks-dark mb-6">{service.description}</p>
                  
                  {service.benefits && (
                    <div className="mb-8">
                      <h3 className="text-sm font-bold uppercase text-vks-beige tracking-wider mb-4">Что включено:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center text-vks-dark/80">
                            <Check size={18} className="text-vks-primary mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-vks-primary text-white text-sm font-medium rounded hover:bg-vks-dark transition-colors"
                  >
                    Заказать услугу
                  </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};