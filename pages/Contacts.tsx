import React from 'react';
import { MapPin, Phone, Send, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { ADDRESS, PHONE_DISPLAY, WHATSAPP_LINK, TELEGRAM_LINK } from '../constants';

export const Contacts: React.FC = () => {
  return (
    <div className="bg-vks-milky min-h-screen">
      <div className="bg-vks-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">Контакты</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-vks-dark mb-6">Наши координаты</h2>
              <p className="text-vks-dark/80 mb-8">
                Мы всегда рады видеть вас в нашем офисе и готовы ответить на любые вопросы по телефону или в мессенджерах.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-vks-beige/20">
                   <MapPin className="text-vks-primary mt-1 flex-shrink-0 mr-4" size={24} />
                   <div>
                      <h3 className="font-bold text-vks-dark">Адрес офиса</h3>
                      <p className="text-vks-dark/70">{ADDRESS}</p>
                   </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-vks-beige/20">
                   <Phone className="text-vks-primary mt-1 flex-shrink-0 mr-4" size={24} />
                   <div>
                      <h3 className="font-bold text-vks-dark">Телефон</h3>
                      <a href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, '')}`} className="text-vks-dark/70 hover:text-vks-primary transition-colors text-lg block">
                        {PHONE_DISPLAY}
                      </a>
                   </div>
                </div>

                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-vks-beige/20">
                   <Clock className="text-vks-primary mt-1 flex-shrink-0 mr-4" size={24} />
                   <div>
                      <h3 className="font-bold text-vks-dark">Режим работы</h3>
                      <p className="text-vks-dark/70">Пн-Пт: 09:00 — 18:00</p>
                      <p className="text-vks-dark/70">Сб-Вс: Выходной</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-6 py-3 border border-vks-primary bg-white text-vks-primary font-medium rounded-md hover:bg-vks-primary hover:text-white transition-all"
                >
                  <Phone size={18} className="mr-2" /> WhatsApp
               </a>
               <a 
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent bg-[#2AABEE] text-white font-medium rounded-md hover:bg-[#229ED9] transition-all"
                >
                  <Send size={18} className="mr-2" /> Telegram
               </a>
            </div>
          </div>

          {/* Form Column */}
          <div>
             <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};