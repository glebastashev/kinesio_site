import React from 'react';
import { Card } from '../ui/Card';
import { FadeIn } from '../ui/Animations';
import { X, Check } from 'lucide-react';

export const Comparison = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
        <div>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Снять боль — не значит решить проблему.
            </h2>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
        
        {/* Old Approach */}
        <FadeIn delay={0.1}>
          <Card className="h-full bg-white/40 border-graphite/10">
            <h3 className="text-2xl font-bold mb-8 text-graphite/60 border-b border-graphite/10 pb-4">
              Обычный подход<br/><span className="text-lg font-light">(Снятие симптома)</span>
            </h3>
            <ul className="space-y-6 text-left">
              {[
                "Фокус на больном месте.",
                "Обезболивание сохраняет в теле условия для болезни.",
                "Нервная система просто адаптируется к боли.",
                "Вы действуете из мотива «уйти от боли»."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-graphite/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={14} className="text-graphite/60" />
                  </span>
                  <span className="text-graphite/80 text-lg font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>

        {/* NIPK Approach */}
        <FadeIn delay={0.2}>
          <div className="h-full p-6 md:p-8 rounded-3xl bg-graphite text-white shadow-2xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-[60px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-8 text-accent-yellow border-b border-white/10 pb-4 relative z-10">
              Наш подход<br/><span className="text-lg font-light text-white/80">(Метод НИПК)</span>
            </h3>
            <ul className="space-y-6 text-left relative z-10">
              {[
                "Поиск источника. Больное колено — это часто лишь сорванная компенсация, а причина может быть совершенно в другом месте.",
                "Мы не просто сбрасываем напряжение, мы меняем сам паттерн и привычку нервной системы.",
                "Высвобождаем энергию для движения вперед — к здоровью и вашим целям."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-6 h-6 rounded-full bg-accent-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-graphite" strokeWidth={3} />
                  </span>
                  <span className="text-white/90 text-lg font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        </div>
      </div>
    </section>
  );
};
