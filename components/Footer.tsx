import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Send, MapPin, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK, TELEGRAM_LINK, PHONE_DISPLAY, ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vks-dark text-vks-milky">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
              ВНЕШТОРГ<br/>КОНСЬЕРЖ СЕРВИС
            </h3>
            <p className="text-vks-beige text-sm mb-6 leading-relaxed">
              Более 25 лет опыта на рынке.<br/>
              Официальная деятельность.<br/>
              Собственный Таможенный Склад.
            </p>
            <div className="flex space-x-4">
               <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-vks-beige hover:text-white transition-colors">
                 <Phone size={20} />
               </a>
               <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="text-vks-beige hover:text-white transition-colors">
                 <Send size={20} />
               </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Разделы</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-vks-beige hover:text-white transition-colors text-sm">Главная</Link></li>
              <li><Link to="/services" className="text-vks-beige hover:text-white transition-colors text-sm">Услуги</Link></li>
              <li><Link to="/about" className="text-vks-beige hover:text-white transition-colors text-sm">О компании</Link></li>
              <li><Link to="/warehouse" className="text-vks-beige hover:text-white transition-colors text-sm">Таможенный Склад</Link></li>
              <li><Link to="/contacts" className="text-vks-beige hover:text-white transition-colors text-sm">Контакты</Link></li>
            </ul>
          </div>

          {/* Services Brief */}
          <div>
             <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Услуги</h4>
             <ul className="space-y-2 text-sm text-vks-beige">
               <li>Импорт под ключ</li>
               <li>Сертификация</li>
               <li>Честный Знак</li>
               <li>Логистика</li>
             </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">Контакты</h4>
            <div className="space-y-4 text-sm text-vks-beige">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href={`tel:${PHONE_DISPLAY.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs border border-vks-beige px-3 py-2 rounded hover:bg-vks-beige hover:text-vks-dark transition-colors"
                >
                  Написать в WhatsApp <ExternalLink size={12} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-vks-beige/20 mt-12 pt-8 text-center">
          <p className="text-xs text-vks-beige/60">
            &copy; {new Date().getFullYear()} ООО «Внешторг Консьерж Сервис». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};