import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Truck, FileText, Users } from 'lucide-react';
import { WHATSAPP_LINK, TELEGRAM_LINK, SERVICES_DATA, ADVANTAGES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-vks-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-vks-beige/20 rounded-full blur-3xl"></div>
        <div className="absolute left-10 bottom-10 w-64 h-64 bg-vks-dark/30 rounded-full blur-2xl"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Легальный импорт<br /> и сопровождение бизнеса
          </h1>
          <p className="text-xl md:text-2xl text-vks-milky mb-10 max-w-3xl mx-auto font-light">
            ВКС — один партнёр для честного и безопасного бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-vks-primary font-medium rounded-full shadow-lg hover:bg-vks-milky hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Получить консультацию
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-vks-milky text-vks-milky font-medium rounded-full hover:bg-vks-milky hover:text-vks-primary transition-all duration-300"
            >
              Перейти в Telegram-канал
            </a>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
             <h2 className="text-3xl font-bold text-vks-dark mb-4">О компании ВКС</h2>
             <div className="w-24 h-1 bg-vks-primary mx-auto mb-8"></div>
             <p className="text-lg text-vks-dark/80 leading-relaxed">
               Мы работаем официально и обеспечиваем полную прозрачность всех процессов.
               Наш опыт — более 25 лет на рынке ВЭД.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-vks-milky rounded-xl border border-vks-beige/30">
              <div className="text-4xl font-bold text-vks-primary mb-2">25+</div>
              <p className="text-vks-dark font-medium">Лет успешной работы</p>
            </div>
            <div className="p-6 bg-vks-milky rounded-xl border border-vks-beige/30">
              <div className="text-4xl font-bold text-vks-primary mb-2">100%</div>
              <p className="text-vks-dark font-medium">Официальное оформление</p>
            </div>
            <div className="p-6 bg-vks-milky rounded-xl border border-vks-beige/30">
              <div className="text-4xl font-bold text-vks-primary mb-2">СВХ</div>
              <p className="text-vks-dark font-medium">Собственный Таможенный Склад</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-vks-dark/70 italic">
              Сопровождаем предпринимателей «Садовода» и импортёров по всей России.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 bg-vks-milky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl font-bold text-vks-dark mb-2">Наши услуги</h2>
                <div className="w-16 h-1 bg-vks-primary"></div>
             </div>
             <Link to="/services" className="hidden md:flex items-center text-vks-primary font-medium hover:text-vks-dark transition-colors">
               Все услуги <ArrowRight size={20} className="ml-2" />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-vks-beige/50 group">
                <h3 className="text-xl font-bold text-vks-dark mb-3 group-hover:text-vks-primary transition-colors">{service.title}</h3>
                <p className="text-vks-dark/70 mb-4">{service.description}</p>
                <Link to="/services" className="inline-block text-sm text-vks-primary underline decoration-transparent hover:decoration-vks-primary transition-all">
                  Подробнее
                </Link>
              </div>
            ))}
          </div>
          
           <div className="mt-8 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center text-vks-primary font-medium hover:text-vks-dark transition-colors">
               Все услуги <ArrowRight size={20} className="ml-2" />
             </Link>
           </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-vks-dark text-vks-milky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Почему выбирают ВКС</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {ADVANTAGES.map((adv, idx) => (
               <div key={idx} className="flex flex-col items-center text-center">
                 <div className="w-16 h-16 rounded-full bg-vks-primary/20 flex items-center justify-center text-vks-primary mb-4 border border-vks-primary/50">
                   <CheckCircle size={32} />
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                 <p className="text-vks-beige text-sm">{adv.text}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Warehouse Teaser */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-vks-beige/10 rounded-3xl p-8 md:p-16 border border-vks-beige/30 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-vks-dark mb-6">
                Собственный Таможенный Склад
              </h2>
              <p className="text-lg text-vks-dark/80 mb-8 leading-relaxed">
                Гарантируем полный контроль груза, официальный статус, быстрое оформление и снижение рисков. 
                Ваш товар находится под надежной защитой профессионалов.
              </p>
              <Link
                to="/warehouse"
                className="inline-flex items-center px-8 py-3 bg-vks-primary text-white rounded-lg shadow hover:bg-vks-dark transition-colors"
              >
                Подробнее о складе <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              {/* Decorative abstract representation of warehouse/logistics */}
              <div className="relative w-full max-w-md aspect-video bg-vks-primary/5 rounded-xl overflow-hidden border border-vks-primary/10 flex items-center justify-center">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
                     {[...Array(36)].map((_, i) => (
                        <div key={i} className="bg-vks-primary/40"></div>
                     ))}
                  </div>
                  <Truck size={64} className="text-vks-primary/60 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-vks-milky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-vks-dark text-center mb-16">Как мы работаем</h2>
          
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-vks-beige/40 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
               {[
                 { step: '1', title: 'Заявка', icon: FileText },
                 { step: '2', title: 'Анализ', icon: ShieldCheck },
                 { step: '3', title: 'Оформление', icon: FileText },
                 { step: '4', title: 'Доставка', icon: Truck },
                 { step: '5', title: 'Документы', icon: Users }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white border-2 border-vks-primary rounded-full flex items-center justify-center text-vks-primary font-bold text-xl mb-4 shadow-sm z-10 relative">
                      <item.icon size={24} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-vks-dark rounded-full flex items-center justify-center text-white text-xs border border-white">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="font-bold text-vks-dark text-lg">{item.title}</h3>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-vks-dark mb-12">Для кого наши услуги</h2>
            <div className="flex flex-wrap justify-center gap-6">
               {['Импортёры', 'Предприниматели', 'Продавцы на «Садоводе»'].map((role, idx) => (
                 <div key={idx} className="px-8 py-4 bg-vks-milky rounded-full text-vks-primary font-bold text-lg border border-vks-beige/30 shadow-sm">
                    {role}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contacts Brief */}
      <section className="py-20 bg-vks-dark text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-white mb-6">Остались вопросы?</h2>
           <p className="text-vks-beige text-lg mb-10 max-w-2xl mx-auto">
             Свяжитесь с нами для получения бесплатной консультации. 
             Мы подберем оптимальное решение для вашего бизнеса.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-vks-dark font-medium rounded-md hover:bg-vks-beige transition-colors"
              >
                Написать в WhatsApp
              </a>
              <Link
                to="/contacts"
                className="px-8 py-3 border border-vks-beige text-vks-beige font-medium rounded-md hover:bg-vks-beige hover:text-vks-dark transition-colors"
              >
                Контакты
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};