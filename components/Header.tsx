import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Send } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK, TELEGRAM_LINK } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-vks-primary font-bold' : 'text-vks-dark hover:text-vks-primary';
  };

  return (
    <header className="sticky top-0 z-50 bg-vks-milky/95 backdrop-blur-sm border-b border-vks-beige/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="font-roboto font-bold text-lg sm:text-xl md:text-2xl tracking-wider text-vks-primary uppercase leading-tight">
              ВНЕШТОРГ<br className="hidden sm:block md:hidden" /> КОНСЬЕРЖ СЕРВИС
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${isActive(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
             <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-vks-primary hover:bg-vks-beige/20 transition-colors"
              title="Telegram"
            >
              <Send size={20} />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-vks-primary text-sm font-medium rounded-md text-vks-primary bg-white hover:bg-vks-primary hover:text-white transition-all duration-300 shadow-sm"
            >
              <Phone size={16} className="mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vks-dark hover:text-vks-primary hover:bg-vks-beige/20 focus:outline-none"
            >
              <span className="sr-only">Открыть меню</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-vks-milky border-t border-vks-beige/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-vks-beige/20 text-vks-primary'
                    : 'text-vks-dark hover:text-vks-primary hover:bg-vks-beige/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-6 border-t border-vks-beige/30 px-4 flex flex-col space-y-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 border border-vks-primary rounded-md shadow-sm text-base font-medium text-vks-primary bg-white hover:bg-vks-beige/10"
            >
              <Phone size={18} className="mr-2" />
              Написать в WhatsApp
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#2AABEE] hover:bg-[#229ED9]"
            >
              <Send size={18} className="mr-2" />
              Перейти в Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};