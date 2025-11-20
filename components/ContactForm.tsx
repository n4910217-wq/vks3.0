import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', phone: '', comment: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-vks-beige/30">
      <h3 className="text-2xl font-bold text-vks-dark mb-6">Обратная связь</h3>
      
      {status === 'success' ? (
        <div className="text-center py-10">
           <div className="text-green-600 text-xl font-bold mb-2">Спасибо за заявку!</div>
           <p className="text-vks-dark/70">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-vks-dark mb-1">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-vks-beige rounded-md focus:ring-2 focus:ring-vks-primary focus:border-transparent outline-none transition-all bg-vks-milky/30"
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-vks-dark mb-1">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-vks-beige rounded-md focus:ring-2 focus:ring-vks-primary focus:border-transparent outline-none transition-all bg-vks-milky/30"
              placeholder="+7 (999) 000-00-00"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-vks-dark mb-1">Комментарий</label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-vks-beige rounded-md focus:ring-2 focus:ring-vks-primary focus:border-transparent outline-none transition-all bg-vks-milky/30"
              placeholder="Опишите ваш вопрос..."
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3 bg-vks-primary text-white font-medium rounded-md hover:bg-vks-dark transition-colors disabled:opacity-70"
          >
            {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      )}
    </div>
  );
};