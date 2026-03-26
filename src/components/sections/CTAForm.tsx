import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/Animations';

export const CTAForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', problem: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API/CRM
    console.log("Form submitted:", formData);
    alert("Заявка успешно отправлена!");
    setFormData({ name: '', phone: '', problem: '' });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-graphite text-white">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-yellow/20 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 font-serif">
            Здоровье начнет заниматься вами, <span className="italic relative inline-block">если вы не займетесь им.<div className="absolute bottom-2 left-0 w-full h-2 bg-accent-yellow/40 -z-10 rounded-sm"></div></span>
          </h2>
          <p className="text-xl text-white/80 font-light mb-8 max-w-lg leading-relaxed">
            Не оправдывайте бездействие болью. Оставьте заявку, я свяжусь с вами, чтобы обсудить вашу ситуацию и подобрать формат первой сессии.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="glass-dark p-8 md:p-10 border-white/10 relative">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow/40 rounded-full blur-2xl" />
             
             <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
               <div>
                  <label htmlFor="name" className="block text-sm text-white/60 uppercase tracking-widest mb-2 font-serif">Имя</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-yellow transition-colors"
                    placeholder="Ваше имя"
                  />
               </div>
               
               <div>
                  <label htmlFor="phone" className="block text-sm text-white/60 uppercase tracking-widest mb-2 font-serif">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-yellow transition-colors"
                    placeholder="+7 (999) 000-00-00"
                  />
               </div>

               <div>
                  <label htmlFor="problem" className="block text-sm text-white/60 uppercase tracking-widest mb-2 font-serif">Кратко опишите проблему (по желанию)</label>
                  <textarea 
                    id="problem"
                    rows={3}
                    value={formData.problem}
                    onChange={(e) => setFormData({...formData, problem: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-yellow transition-colors resize-none"
                    placeholder="Что вас беспокоит..."
                  />
               </div>

               <Button type="submit" size="lg" className="w-full text-lg shadow-[0_0_20px_rgba(232,226,48,0.2)]">
                  Оставить заявку на разбор
               </Button>
               
               <p className="text-center text-xs text-white/40 mt-4">
                 Нажимая на кнопку, вы даете согласие на обработку персональных данных.
               </p>
             </form>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
