import React from 'react';
import { FadeIn } from '../ui/Animations';

const steps = [
  {
    title: "Шаг 1. Запрос",
    description: "Вы приходите с запросом. Вам не нужно заново проживать травмы или озвучивать удручающие события — тело само укажет на блок через мягкий кинезиологический тест."
  },
  {
    title: "Шаг 2. Диагностика",
    description: "Я определяю, какой компонент дал сбой: структурный, химический, вегетативный или эмоциональный. Мы находим «притаившийся» орган или старую дисфункцию."
  },
  {
    title: "Шаг 3. Коррекция",
    description: "Мягкими техниками в одежде я перенаправляю вашу нервную систему к ресурсу. Запускается формирование новых нейронных связей."
  }
];

  export const Methodology = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/60">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Диагностика + коррекция за одну сессию.
            </h2>
            <p className="text-xl text-graphite/60 font-light">
              Как проходит наша работа
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-0.5 bg-graphite/10 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={0.1 * i} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                
                {/* Desktop Left */}
                <div className={`hidden md:block w-[45%] text-right ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  {i % 2 === 0 && (
                    <div className="glass-panel p-6 bg-white/80 group-hover:border-accent-yellow/40 transition-colors">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-graphite/70 leading-relaxed font-light">{step.description}</p>
                    </div>
                  )}
                </div>

                {/* Node */}
                <div className={`relative z-10 w-14 h-14 rounded-full bg-alabaster border-4 border-white shadow-[0_0_15px_rgba(44,43,41,0.1)] flex items-center justify-center flex-shrink-0 mb-4 md:mb-0 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="w-4 h-4 rounded-full bg-accent-yellow transition-transform duration-500 group-hover:scale-150" />
                  {/* Pulse glow */}
                  <div className="absolute inset-0 rounded-full bg-accent-yellow/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Desktop Right / Mobile Content */}
                <div className={`w-full pl-20 -ml-14 md:pl-0 md:ml-0 md:w-[45%] ${i % 2 !== 0 ? 'md:order-3 text-left' : 'md:text-left'}`}>
                  {(i % 2 !== 0 || true) && (
                    <div className={`glass-panel p-6 bg-white/80 group-hover:border-accent-yellow/40 transition-colors ${i % 2 === 0 ? 'md:hidden' : ''}`}>
                       <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                       <p className="text-graphite/70 leading-relaxed font-light">{step.description}</p>
                    </div>
                  )}
                </div>

              </FadeIn>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
