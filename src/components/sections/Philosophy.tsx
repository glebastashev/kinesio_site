import React from 'react';
import { FadeIn } from '../ui/Animations';

export const Philosophy = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-graphite text-white">
      {/* Subtle organic texture or glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-yellow/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center relative z-10">
          <FadeIn>
            <span className="text-accent-yellow tracking-widest uppercase text-sm font-bold mb-6 block">
              Философия Нейроинтегративной психокинезиологии
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-12 font-serif text-glow">
              Любая непрожитая эмоция — это остановленное движение в теле.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="space-y-8 text-xl text-white/80 font-light leading-relaxed text-left md:text-center mx-auto max-w-4xl">
            <p>
              НИПК — это новый и более прогрессивный подход к пониманию человеческого организма, его здоровью и функциональных связей.
            </p>
            
            <div className="p-8 my-10 rounded-3xl bg-accent-yellow/10 border border-accent-yellow/20 text-accent-yellow font-medium text-2xl md:text-3xl leading-snug shadow-[0_0_40px_rgba(232,226,48,0.1)]">
              Не обезболить или снять симптом, тем самым адаптировав к психоэмоциональному или физическому состоянию, а запустить механизмы выздоровления и улучшения качества жизни человека и его самоидентификации.
            </div>

            <p>
              Любой остановленный двигательный акт — это боль, стресс и хроническое напряжение в теле и в психике. В организме мышцы, связки, кости, органы и эмоции — это звенья одной большой цепи. Когда происходит физическая или психологическая травма, тело формирует зажим, чтобы вас спасти.
            </p>
            
            <p>
              Ваше сознание может давно забыть или логически «легализовать» эту ситуацию, но мышечный рефлекс остается. Именно поэтому понимание проблемы «через голову» не работает, пока мы не приведем тело к новому механизму движения и рефлексу. Если заниматься только снятием боли, эмоции, симптома и не запустить иной процесс движения, то всё обратно вернется.
            </p>
            
            <p className="font-medium text-white text-2xl mt-8">
              В рамках метода НИПК мы ищем первопричину, убираем привычки, то есть рефлекторные процессы, в которых живет человек, через комплексную работу для его здоровья, физической активности и благополучия.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
